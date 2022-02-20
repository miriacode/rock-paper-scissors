function replaceContentWithTemplate(templateName) {
  const appDiv = document.querySelector("#app");
  while (appDiv.firstChild) appDiv.removeChild(appDiv.firstChild);
  const template = document.querySelector(`#${templateName}`);
  const clone = document.importNode(template.content, true);
  appDiv.appendChild(clone);
}
