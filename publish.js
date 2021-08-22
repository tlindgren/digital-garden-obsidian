// === Custom JS for Obsidian Publish - Tim Lindgren ===

// Adding top navigation elements - a little hacky since it reloads the site, but will do for now
var sitenav = document.createElement("nav");
document.querySelector(".site-header").appendChild(sitenav);

sitenav.innerHTML = '<a href="https://timlindgren.com/About">About</a><a href="https://timlindgren.com/Now">Now</a><a href="https://timlindgren.com/Portfolio">Portfolio</a><a href="https://timlindgren.com/Notes+Overview">Notes</a><a href="https://timlindgren.com/Changelog">Changelog</a>';
 
