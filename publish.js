// Link into logo
// element that will be wrapped - Obsidian Publish logo
var obsidianLogo = document.querySelector('.site-body-left-column-site-logo');
// create wrapper container - a with link
var wrapper = document.createElement('a');
wrapper.href = 'https://zt.frankcontrepois.com/'
// insert wrapper before el in the DOM tree
obsidianLogo.parentNode.insertBefore(wrapper, obsidianLogo);
// move el into wrapper
wrapper.appendChild(obsidianLogo);