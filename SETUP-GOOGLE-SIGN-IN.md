# Turn on "Sign in with Google" and shared groups (one-time, about 20 minutes)

This lets anyone with a Gmail account:
- sign in and keep their notes, personal prayers, sermons, files and progress in **their own Google Drive**, so everything follows them to any phone, tablet or computer; and
- join **Prayer Meetings** and shared **Bible Studies** (one-on-one and group), where every member adds prayer items, sessions and files from their own account.

- It's free and needs no credit card.
- Each person's data goes into a hidden, private app folder in their own Drive. You, the app owner, can't see anyone else's data.
- Prayer meetings and Bible studies are stored in a free **Firebase** database in your project. The free Spark plan needs no card and never pauses.
- Files shared in a Bible study are stored in the uploader's own Google Drive, in a folder called "A Day With Jesus – shared files". Anyone with the link can open them, and the link is only shown to members of that study.
- The Google permissions used (`drive.appdata`, `drive.file`, plus name and email) are all classed by Google as **non-sensitive**, so you don't need Google's app review.

You'll create one free Google Cloud project, get a **Client ID** (steps 1–6), add Firebase to the same project (step 8), and paste everything into `config.js`.

---

## 1. Create a Google Cloud project

1. Go to **https://console.cloud.google.com** and sign in with your Gmail.
2. At the top, click the project picker, then **New project**.
3. Name it `A Day With Jesus`, then click **Create**. Make sure the new project is selected at the top.

## 2. Turn on the Google Drive API

1. In the search bar at the top, type **Google Drive API** and open it.
2. Click **Enable**.

## 3. Set up the sign-in screen

1. In the search bar, type **Google Auth Platform** (older screens call it **OAuth consent screen**) and open it.
2. Click **Get started** and fill in:
   - **App name:** `A Day With Jesus`
   - **User support email:** your Gmail
   - **Audience:** **External**
   - **Contact email:** your Gmail
3. Agree to the policy and click **Create**.
4. Open **Data access** in the left menu, click **Add or remove scopes**, and tick:
   - `.../auth/drive.appdata` (search "drive.appdata")
   - `.../auth/drive.file` (search "drive.file")
   - `openid`, `.../auth/userinfo.email`, `.../auth/userinfo.profile`

   Click **Update**, then **Save**.
5. Skip the logo. Adding one makes Google ask for brand verification.

## 4. Create the Client ID

1. Open **Clients** in the left menu (older screens: **Credentials → Create credentials → OAuth client ID**).
2. Click **Create client** and choose **Web application**. Name it `A Day With Jesus web`.
3. Under **Authorized JavaScript origins**, add exactly:
   `https://shilrickmonsuller.github.io`
4. Under **Authorized redirect URIs**, add exactly, including the slash at the end:
   `https://shilrickmonsuller.github.io/a-day-with-jesus/`
5. Click **Create** and copy the **Client ID**. It looks like `1234567890-abc123.apps.googleusercontent.com`.

## 5. Let everyone sign in

1. Open **Audience** in the left menu.
2. Under **Publishing status**, click **Publish app**, then **Confirm**. It should say **In production**.

While the app is in **Testing**, only people you add as test users can sign in.

## 6. Put the Client ID into the app

1. In your GitHub repository, open **config.js** and click the pencil ✏️ to edit.
2. Replace `PASTE-YOUR-CLIENT-ID-HERE` with your Client ID. Keep the quotes:
   ```js
   googleClientId: "1234567890-abc123.apps.googleusercontent.com"
   ```
3. Click **Commit changes**. Wait 1–2 minutes for GitHub Pages to update.

## 8. Add Firebase for Prayer Meetings and shared Bible Studies

1. Go to **https://console.firebase.google.com** and click **Create a project**. If it asks, choose **Add Firebase to a Google Cloud project**.
2. **Choose your existing project, `A Day With Jesus`.** It must be the same project as your Client ID, or sign-in to shared groups won't work. Continue, and turn **Google Analytics off**.
3. Keep the free **Spark** plan; you don't need to upgrade.
4. **Turn on Google sign-in:** go to **Build → Authentication → Get started → Sign-in method → Google**, switch it **on**, choose your support email, and click **Save**.
5. Still in Authentication, open **Settings → Authorized domains → Add domain**, and add `shilrickmonsuller.github.io`.
6. **Create the database:** go to **Build → Firestore Database → Create database**. Pick a location near you (for example `asia-southeast1` for Singapore), start in **production mode**, and click **Create**.
7. **Add the security rules:** in Firestore, open the **Rules** tab. Delete everything there, paste the full contents of the file **firestore.rules** from your repository, and click **Publish**. These rules let only members see a group.
8. **Get the web settings:** click the gear ⚙️ → **Project settings**, scroll to **Your apps**, click the web icon **`</>`**, name it `A Day With Jesus web`, and click **Register app**. Don't add Firebase Hosting. You'll see a `firebaseConfig` block.
9. Open **config.js** on GitHub again (pencil ✏️) and copy four values from `firebaseConfig` into the `firebase` section: **apiKey**, **authDomain**, **projectId**, **appId**. Keep the quotes, then click **Commit changes**.

The Firebase API key isn't a secret; it's designed to be in web apps. The security rules from step 7 protect the data.

## 9. Try it

Open the app, tap the **gear** icon, then **Sign in with Google**. Pick your account and allow access. A green dot on the cloud icon at the top means you're synced.

Then sign in with the same Gmail on your other phone or computer, and your data appears there too.

To test shared groups, go to **Prayer → Prayer meetings → New prayer meeting** and add a friend's Gmail. When they sign in with that Gmail, the meeting appears for them and they can add their own prayer items. **Bible Study → One-on-one or Group Bible Study** works the same way.

---

## If something goes wrong

| What you see | What to do |
|---|---|
| **Error 400: redirect_uri_mismatch** | The redirect URI in step 4 must match exactly: `https://shilrickmonsuller.github.io/a-day-with-jesus/`, with the trailing slash and no `index.html`. |
| **Access blocked / app has not completed verification** | The app is still in **Testing**. Do step 5, or add the person under **Audience → Test users**. |
| **"Google hasn't verified this app"** | Tap **Advanced → Go to A Day With Jesus**. This can appear for new apps and is safe; it goes away once Google has seen enough sign-ins, or after brand verification. |
| **No "Sign in with Google" button** | `config.js` still has the placeholder, or GitHub Pages hasn't updated yet. Wait a minute and reopen the app. |
| **Prayer meetings say "Not connected"** | Check step 8: Firebase must be added to the **same** Google Cloud project as your Client ID, Google sign-in must be turned on, and `shilrickmonsuller.github.io` must be an authorized domain. |
| **"Couldn't load your groups (permission-denied)"** | The Firestore rules weren't published. Redo step 8.7. |
| **Sign-in expired** | Google sign-ins last about an hour. The app reconnects by itself when you open it, or tap **Reconnect**. |

## Good to know

- **Offline still works.** Changes made offline sync the next time you're online.
- **Several people on one device:** sign out first. If someone signs in on a device holding another person's data, the app asks whether to clear it or add it to their account.
- **Storage:** files count toward each person's own Google Drive storage (15 GB free per Google account).
- **Members are added by Gmail.** The leader of a prayer meeting or study adds members; each member can add their own items and edit or delete only their own. The leader can tidy anything.
- **Free Firebase limits** (Spark plan): 1 GB of database storage and 50,000 reads a day. That's plenty for a church's prayer lists and study notes. Files don't count, because they live in Google Drive.
