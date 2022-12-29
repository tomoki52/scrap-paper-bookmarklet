# scrap-paper-bookmarklet

Bookmarklet to register acm Digital Library articles in Scrapbox with one click nice and easy.

## Usage
```
cd src/scrap-paper
cp envrionment-sample.ts environment.ts
```
and add your scrapbox project name to `export const project_url = "";`

```
yarn install
yarn dev
```
Copy the contents of `scrap-paper.min.js` and paste it into your browser's bookmark URL.

Click the bookmark on the article page of the acm Digital Library, and the page will be created on the scrapbox.
