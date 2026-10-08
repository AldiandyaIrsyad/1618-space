'use strict';
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; mobileNav.hidden = !open; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 721px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
const photos = [
{src:'./images/DSC01127.webp',alt:'Two colourful iced 1618 drinks against a concrete wall',caption:'A refreshing pause'},
{src:'./images/DSC01157.webp',alt:'A sharing platter with fries, bite-size snacks and dipping sauces',caption:'Better when shared'},
{src:'./images/DSC01169.webp',alt:'A bowl of rice and savoury bites served on a blue table',caption:'Make it a meal'},
{src:'./images/venue.webp',alt:'The dark blue interior at 1618 Space, with framed photographs and a colourful mirror',caption:'A little look inside 1618 Space'},
{src:'./images/space-evening.webp',alt:'1618 Space outdoor seating and glass-fronted interior in an Instagram Iftar post',caption:'Outside, after dark · Photo from @1618spaceid'},
{src:'./images/space-counter.webp',alt:'The colourful counter and indoor seating at 1618 Space',caption:'At the counter · Maps / supianto sukri, via Dewatiket'},
{src:'./images/interior-daylight-upscaled.webp',alt:'The blue ceiling, red espresso machine and concrete counter inside 1618 Space in daylight',caption:'Inside, in daylight · Photo: 1618 Space'}
];
const dialog = document.querySelector('.lightbox');
let photoIndex = 0;
let previousFocus = null;
function showPhoto(index) { photoIndex = (index + photos.length) % photos.length; const photo = photos[photoIndex]; document.querySelector('#large-photo').src = photo.src; document.querySelector('#large-photo').alt = photo.alt; document.querySelector('#photo-caption').textContent = photo.caption; document.querySelector('#photo-counter').textContent = (photoIndex + 1) + ' / ' + photos.length; }
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => { previousFocus = button; showPhoto(Number(button.dataset.photo)); dialog.showModal(); document.body.style.overflow = 'hidden'; }));
document.querySelector('.close-photo').addEventListener('click', () => dialog.close());
document.querySelector('#previous-photo').addEventListener('click', () => showPhoto(photoIndex - 1));
document.querySelector('#next-photo').addEventListener('click', () => showPhoto(photoIndex + 1));
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') {event.preventDefault();showPhoto(photoIndex-1);} if (event.key === 'ArrowRight') {event.preventDefault();showPhoto(photoIndex+1);} });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; if (previousFocus) previousFocus.focus(); });

