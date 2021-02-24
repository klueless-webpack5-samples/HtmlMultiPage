export default (text = "Component one is loaded") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  return element;
};