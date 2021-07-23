const simpleHtmlTag = (function () {

  const makeTag = (tagType, className) => {
    let myTag = document.createElement(tagType);
    myTag.classList.add(className);
    return myTag;
  }
  const makeDiv = (className) => {
    let div = makeTag('div', className);
    return div;
  }

  const makeLogo = (className, logoLink) => {
    let logo = makeTag('img', className);
    logo.src = logoLink;
    return logo;
  }


  const makeText = (className, textFormat, textDescription) => {
    let text = makeTag(textFormat, className);
    text.innerHTML = textDescription;
    return text;
  }



  return { makeTag, makeDiv, makeLogo, makeText };
})();

export default simpleHtmlTag;