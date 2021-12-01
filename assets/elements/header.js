var headerElement = ("<div id=\"header\"><table width=\"100%\"><td><a href=\"index.html\">\
<img id=\"headerlogo\"src=\"./assets/images/logos/logo.svg\" alt=\"The Virtuos Logo.\">\
</a></td><td><a href=\"index.html\"><button class=\"navButton\">About us</button></a></td>\
</a></td><td><a href=\"hardware.html\"><button class=\"navButton\">Hardware</button></a></td>\
</a></td><td><a href=\"major.html\"><button class=\"navButton\">Players</button></a></td>\
<td>\<a href=\"gallery.html\"><button class=\"navButton\">Gallery</button></a></td>\
<td><a href=\"shop.html\"><button class=\"navButton\">Shop</button></a></td>\
<td><a href=\"contact.html\"><button class=\"navButton\">Contact</button></a></td></table></div>"
);
var bodyElement = document.body;
bodyElement.innerHTML = headerElement + bodyElement.innerHTML;

