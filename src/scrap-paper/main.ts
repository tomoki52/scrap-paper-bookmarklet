import { project_url } from "./environment";
const proj: string = project_url;
const url: string = location.href;

const addLink = (text: string) => {
  return "[" + text + "]";
};

const title_collection = document.getElementsByClassName(
  "citation__title"
) as HTMLCollectionOf<HTMLElement>;

const title = title_collection[0].innerText;

const author_collection = document.getElementsByClassName(
  "author-name"
) as HTMLCollectionOf<HTMLElement>;

const authors = Array.from(author_collection).map((e) => {
  return addLink(e.title);
});

const item_detail_collection = document.getElementsByClassName(
  "issue-item__detail"
) as HTMLCollectionOf<HTMLElement>;

const conference_with_year = ((): string => {
  const e = item_detail_collection[0].children[0] as HTMLElement;
  return e.title.split(":")[0];
})();

const conference: string = conference_with_year.split(" '")[0];

const lines: string =
  url +
  "\n" +
  addLink(conference) +
  " " +
  addLink(conference_with_year) +
  "\n" +
  authors.join(", ") +
  "\n" +
  "#survey";

var body = encodeURIComponent(lines);
window.open(
  "https://scrapbox.io/" +
    proj +
    "/" +
    encodeURIComponent(title.trim()) +
    "?body=" +
    body
);
