import logoSVG from './img/logo-solid.svg';
import userSVG from './img/user-solid.svg';
import simpleHtmlTag from './_simplefuntion';
const logoDiv = (function () {

  const makeLogoDiv = (logoClassName, logoLink) => {
    let myLogo = simpleHtmlTag.makeLogo(logoClassName, logoLink);
    return myLogo;
  }


  const makeTextDiv = (textClassName, textFormat, textDescription) => {
    let myText = simpleHtmlTag.makeText(textClassName, textFormat, textDescription);
    return myText;
  }
  return { makeLogoDiv, makeTextDiv };
})();

const userDiv = (function () {
  const makeUserDiv = (logoClassName, logoLink) => {
    let myUserLogo = simpleHtmlTag.makeLogo(logoClassName, logoLink);
    return myUserLogo;
  }

  return { makeUserDiv };
})();


function header() {
  let myHeader = simpleHtmlTag.makeTag('header', 'header');
  let myLogoAndNameDiv = simpleHtmlTag.makeDiv('logo-name');
  let myLogoDiv = logoDiv.makeLogoDiv('logo-name__logo', logoSVG);
  let myNameDiv = logoDiv.makeTextDiv('logo-name__name', 'p', 'TooDoo');
  let myUserDiv = simpleHtmlTag.makeDiv('user');
  let myUser = userDiv.makeUserDiv('user__icon', userSVG);

  myLogoAndNameDiv.appendChild(myLogoDiv);
  myLogoAndNameDiv.appendChild(myNameDiv);
  myUserDiv.appendChild(myUser);
  myHeader.appendChild(myLogoAndNameDiv);
  myHeader.appendChild(myUserDiv);


  return myHeader;
}

export default header;