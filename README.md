# A Day With Jesus

Your daily devotional app: a daily reading (Spurgeon’s Morning and Evening), a 3-year Bible reading plan, My Memory Verses (Lamp 2, Witnessing with the Bridge illustration, and the Topical Memory System), a prayer list, a Bible study log, sermon preparation, saved verses, and a private journal with photos, documents and music. It works offline once installed.

## Put it online (free, about 5 minutes) with GitHub Pages

1. On GitHub, create a new **public** repository, for example `a-day-with-jesus`.
2. Click **Add file → Upload files**, and drag in everything from this folder (`index.html`, `sw.js`, `manifest.webmanifest`, `kjv.json`, `memory.json`, `bsb.json`, `asv.json`, `devotionals.json`, `config.js`, `firestore.rules`, `favicon.svg`, `favicon.ico`, and the `icons` and `vendor` folders). Click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute your app is live at `https://<your-username>.github.io/a-day-with-jesus/`.

## Install it on your phone

- **iPhone / iPad:** open the link in **Safari**, tap the **Share** button, then **Add to Home Screen**.
- **Android:** open the link in **Chrome**, tap **Install** when it appears (or menu ⋮ → **Install app**).

Open it once while online. After that the devotional, Bible, plan and memory verses all work with no internet. The "NIV" buttons open BibleGateway, so those need internet.

## Sign in with Google (sync across devices)

To let people sign in with Gmail, sync their data on every device, and join shared **Prayer Meetings** and **Bible Studies**, follow **SETUP-GOOGLE-SIGN-IN.md** once (about 20 minutes, free, no card). You'll paste your settings into **config.js** and the security rules from **firestore.rules** into Firebase. Until then, everything except the shared groups works without sign-in.

## Your data

When someone signs in with Google, their notes, sermons, prayers, Bible studies, files and progress sync through a private app folder in their own Google Drive. Without signing in, data stays only on that device; use **Settings → Backup** to keep a copy. Tap **Protect my data from cleanup** after installing.

## Updating the app later

Upload the new files over the old ones (Add file → Upload files). GitHub replaces files with the same name. Change the `CACHE` name at the top of `sw.js` (e.g. from `adwj-v6` to `adwj-v7`) so phones pick up the new version.
