# 1618 Space
A responsive, static landing page for 1618 Space. Main brand colour: `#13232a`.

## Deploy to GitHub Pages
1. Create a GitHub repository and upload the contents of this folder. Include the hidden `.github` directory.
2. Make sure your default branch is `main` (or update the branch in `.github/workflows/pages.yml`).
3. In **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`, or run **Deploy to GitHub Pages** from the Actions tab.
5. The workflow publishes the `dist` directory. Find the live URL in the completed workflow and Settings → Pages.

No Node installation, framework, build step, or server is needed in production. All assets use relative paths, so both project URLs and custom domains work.

Workflow follows [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Preview locally
Run from this folder:
```sh
python -m http.server 8080 --directory dist
```
Open http://localhost:8080. You can also open `dist/index.html` directly.

## Edit
- `dist/index.html`: content, navigation, address and opening hours
- `dist/styles.css`: colours, typography and responsive layout
- `dist/script.js`: mobile navigation and keyboard-accessible photo gallery
- `dist/images/`: optimized local photographs

The typographic 1618 wordmark and favicon are design treatments, not a supplied official logo. Marketing copy is original draft copy. Food labels describe photographs rather than inventing menu names or prices. Enquiries link directly to WhatsApp at https://wa.me/6285760676999. The Instagram section embeds the actual public @1618spaceid profile with recent posts and includes direct links to the profile. There is no booking form or booking backend.

## Photo and information sources
- Food/drink photographs: [user-supplied Google Drive folder](https://drive.google.com/drive/folders/17RU-c7IgD75e5r3DVJambxi0BIF1XvYb). Optimized as WebP.
- `venue.webp`: interior image from the supplied [Google Maps listing](https://maps.app.goo.gl/F17G48WoJHhpFG558).
- `space-counter.webp`: Google Maps photograph credited to **supianto sukri**, reproduced in the 1618 Space section of [Dewatiket’s café guide](https://dewatiket.id/blog/cafe-karawang/).
- `space-evening.webp`: the actual outdoor venue photograph in the Iftar post on [@1618spaceid](https://www.instagram.com/1618spaceid/). The original post artwork is preserved in the lightbox; the hero and gallery frame focus on its photographic portion. This is atmosphere photography, not a current event listing.
- Address, hours and phone: supplied Google Maps listing, checked 8 October 2026.
- Social contact and wording inspiration: [@1618spaceid](https://www.instagram.com/1618spaceid/). The brand line “More than just space” and community themes reflect the public profile, including cycling meetups, match screenings and shared meals.
- Guest reviews: three short, attributed Indonesian excerpts from the supplied Google Maps listing, featuring reading/cleanliness, shaded outdoor seating and drink variety. Stephani Thalia Susanty rated the venue 4 stars; Claudius Ramona and Dicky Ahmad rated it 5 stars. The displayed 4.7 rating and 168 review count are a snapshot checked on 8 October 2026; they do not update automatically.

Review business details before public launch; update them in index.html when they change. All venue and food photos are stored locally. The visit section includes a public Google Maps iframe pinned to the venue listing, with a direct Maps link. Both external embeds require an internet connection. The live Instagram snippet may be restricted by Instagram or browser privacy settings; the direct profile link always remains available. No access token, sign-in, or backend is required.


## Additional interior photo
The user-supplied daylight interior photo has been enhanced and added to the gallery. See [IMAGE-ENHANCEMENT.md](IMAGE-ENHANCEMENT.md) for original/output dimensions, exact prompt and processing notes.
