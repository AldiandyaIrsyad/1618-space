const {chromium}=require('C:/Users/aldiandya/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs');
(async()=>{
const browser=await chromium.launch({headless:true,channel:"msedge"});
const page=await browser.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
fs.mkdirSync('qa',{recursive:true});
for(const size of [{width:1440,height:1000},{width:390,height:844},{width:320,height:740}]){
 await page.setViewportSize(size);await page.goto('http://127.0.0.1:8080',{waitUntil:'domcontentloaded'});
 await page.locator('footer').scrollIntoViewIfNeeded();await page.waitForTimeout(700);
 await page.evaluate(async()=>{for(const i of document.images)i.loading='eager';await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))});
 const data=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)}));
 if(data.overflow||data.images.length)throw new Error(JSON.stringify({size,...data}));
 await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:'qa/'+size.width+'.png',fullPage:true});
 if(size.width===390){
 await page.locator('.menu-toggle').click();if(await page.locator('#mobile-nav').getAttribute('hidden')!==null)throw Error('Mobile nav did not open');
 await page.locator('#mobile-nav a').first().click();if(await page.locator('.menu-toggle').getAttribute('aria-expanded')!=='false')throw Error('Mobile nav did not close');
 }
 await page.locator('[data-photo="0"]').click();if(!(await page.locator('.lightbox').evaluate(d=>d.open)))throw Error('Gallery did not open');
 await page.keyboard.press('ArrowRight');if(await page.locator('#photo-counter').textContent()!=='2 / 7')throw Error('Gallery next failed');
 await page.keyboard.press('Escape');if(await page.locator('.lightbox').evaluate(d=>d.open))throw Error('Gallery did not close');
}
if(errors.length)throw Error(errors.join('\n'));
console.log('PASS: desktop, 390px and 320px layouts; all images; mobile navigation; gallery keyboard navigation; no runtime errors.');
await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

