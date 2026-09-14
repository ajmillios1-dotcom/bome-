# AJ's Personal API 🧡

A tiny JSON API all about AJ — lacrosse, the outdoors, YMCA Camp Northern Lights, and more.

## Endpoints

| Route | Returns |
|---|---|
| `/` | Welcome message + list of endpoints |
| `/bio` | Name, age, location, personality |
| `/skills` | Sports & interests |
| `/fun-facts` | Random facts about AJ |
| `/socials` | Social media handles |
| `/all` | Everything combined |

## Run it locally

1. Install [Node.js](https://nodejs.org) (v18+) if you don't have it.
2. Open a terminal in this folder and run:
   ```
   npm install
   npm start
   ```
3. Visit `http://localhost:3000/all` in your browser.

## Deploy it for free (get a real URL)

**Easiest option: Render.com**

1. Create a free account at [render.com](https://render.com).
2. Push this folder to a new GitHub repo (or use Render's "Upload" option if available).
3. On Render, click **New → Web Service**, connect your repo.
4. Settings:
   - Build command: `npm install`
   - Start command: `npm start`
5. Click **Deploy**. In a minute or two you'll get a URL like:
   `https://aj-api.onrender.com/all`

**Alternative: Railway.app or Cyclic.sh** work the same way — connect repo, deploy, get a URL.

## A note on privacy

This API is public once deployed — anyone with the link can see it. Consider whether you want your exact age, city, or Instagram handle visible to strangers. You can easily edit or remove any field in `server.js` before deploying.
