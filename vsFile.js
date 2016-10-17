var fs = require('fs');
var vsAry = require('./vsAry.js');
var path = require('path');

var dirPath = path.join(__dirname,'docs');

var ofiles = fs.readdirSync(dirPath);
var tfiles = [
"layout.md",
"typography.md",
"color.md",
"utilities.md",
"icon.md",
"badge.md",
"input.md",
"button.md",
"checkbox.md",
"radio.md",
"label.md",
"table.md",
"image.md",

"clockpicker.md",	
"date.md",
"month.md",
"time.md",
"year.md",
"yearmonth.md",
"grid.md",	
"gridCustom.md",
"loading.md",
"combobox.md",
"jsmessage.md",
"jsmodal.md",
"autocomplete.md",
"jspagination.md",
"jsmessage.md",
"jstabs.md",
"jstooltip.md",
"menu.md",
"jsprogress.md",
"tree.md",
"jsswitch.md",
"jsrating.md",

"message.md",
"pagination.md",
"message.md",
"tooltip.md",
"breadcrumb.md",
"panel.md",
"dropdown.md",
"buttongroup.md",
"inputgroup.md",
"navbar.md",
"thumbnail.md",
"media.md",
"listgroup.md",
"gallery.md",
"statisticWidget.md"
];

var moreFiles = vsAry(ofiles, tfiles);

// moreFiles.map(function(file){
// 	var filePath = path.join(dirPath,file);
// 	fs.unlinkSync(filePath);
// })
