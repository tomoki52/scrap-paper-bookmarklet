const title_collection = document.getElementsByClassName(
  "citation__title"
) as HTMLCollectionOf<HTMLElement>;

const title = title_collection[0].innerText;

const author_collection = document.getElementsByClassName(
  "author-name"
) as HTMLCollectionOf<HTMLElement>;
const addLink = (text: string) => {
  return "[" + text + "]";
};
const authors = Array.from(author_collection).map((e) => {
  return addLink(e.title);
});

const lines: string = authors.join(", ");
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
