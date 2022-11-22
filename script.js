const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const git = document.getElementById("git");
const typescript = document.getElementById("typescript");
const react = document.getElementById("react");

const htmlTxt = document.getElementById("html-txt");
const cssTxt = document.getElementById("css-txt");
const jsTxt = document.getElementById("js-txt");
const gitTxt = document.getElementById("git-txt");
const typescriptTxt = document.getElementById("typescript-txt");
const reactTxt = document.getElementById("react-txt");

//Mouseover Tab
html.addEventListener("mouseover", () => {
  htmlTxt.classList.add("active");
});

html.addEventListener("mouseout", () => {
  htmlTxt.classList.remove("active");
});

css.addEventListener("mouseover", () => {
  cssTxt.classList.add("active");
});

css.addEventListener("mouseout", () => {
  cssTxt.classList.remove("active");
});

js.addEventListener("mouseover", () => {
  jsTxt.classList.add("active");
});

js.addEventListener("mouseout", () => {
  jsTxt.classList.remove("active");
});

git.addEventListener("mouseover", () => {
  gitTxt.classList.add("active");
});

git.addEventListener("mouseout", () => {
  gitTxt.classList.remove("active");
});

typescript.addEventListener("mouseover", () => {
  typescriptTxt.classList.add("active");
});

typescript.addEventListener("mouseout", () => {
  typescriptTxt.classList.remove("active");
});

react.addEventListener("mouseover", () => {
  reactTxt.classList.add("active");
});

react.addEventListener("mouseout", () => {
  reactTxt.classList.remove("active");
});
