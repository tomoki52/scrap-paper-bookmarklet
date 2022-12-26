const title: string = document.title;
const lines: string = "テスト";
const proj: string = "tomoki52";
var body = encodeURIComponent(lines);
window.open(
  "https://scrapbox.io/" +
    proj +
    "/" +
    encodeURIComponent(title.trim()) +
    "?body=" +
    body
);
