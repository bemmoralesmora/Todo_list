export function footerComponent() {
  let footer = document.createElement("footer");
  footer.className = "footerComponent";

  let githubLink = document.createElement("a");
  githubLink.href = "https://github.com/bemmoralesmora/Todo_list";
  githubLink.textContent = "@bemoralesmora";
  githubLink.className = "github-link";
  footer.appendChild(githubLink);
  return footer;
}
