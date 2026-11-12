# A Day With Jesus

Your daily devotional app: a daily reading (Spurgeon’s Morning and Evening), a 3-year Bible reading plan, My Memory Verses (Lamp 2, Witnessing with the Bridge illustration, and the Topical Memory System), a prayer list, a Bible study log, sermon preparation, saved verses, and a private journal with photos, documents and music. It works offline once installed.

## Put it online (free, about 5 minutes) with GitHub Pages

1. On GitHub, create a new **public** repository, for example `a-day-with-jesus`.
2. Click **Add file → Upload files**, and drag in everything from this folder (`index.html`, `sw.js`, `manifest.webmanifest`, `kjv.json`, `memory.json`, `devotionals.json`, `favicon.svg`, `favicon.ico`, and the `icons` folder). Click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute your app is live at `https://<your-username>.github.io/a-day-with-jesus/`.

## Install it on your phone

- **iPhone / iPad:** open the link in **Safari**, tap the **Share** button, then **Add to Home Screen**.
- **Android:** open the link in **Chrome**, tap **Install** when it appears (or menu ⋮ → **Install app**).

Open it once while online. After that the devotional, Bible, plan and memory verses all work with no internet. The "NIV" buttons open BibleGateway, so those need internet.

## Your data

Notes, sermons, prayers, Bible studies, files, saved verses and progress are stored only on the phone you use. In **Settings → Backup**, download a backup now and then; restore it on a new phone to move everything over. Tap **Protect my data from cleanup** after installing.

## Updating the app later

Upload the new files over the old ones (Add file → Upload files). GitHub replaces files with the same name. Change the `CACHE` name at the top of `sw.js` (e.g. from `adwj-v4` to `adwj-v5`) so phones pick up the new version.
