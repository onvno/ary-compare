var fs = require('fs');
var vsAry = require('./vsAry.js');
var path = require('path');
var execSync = require('child_process').execSync;

var dirPath = path.join(__dirname,'temp');

var ofiles = fs.readdirSync(dirPath);
var tfiles = [
    'autocomplete',
    'clockpicker',
    'combobox',
    'date',
    'grid',
    'gridCustom',
    'jsmessage',
    'jsmodal',
    'jspagination',
    'jsprogress',
    'jsrating',
    'jsswitch',
    'jstabs',
    'jstooltip',
    'loading',
    'menu',
    'month',
    'time',
    'tree',
    'year',
    'yearmonth'
];

var moreFiles = vsAry(ofiles, tfiles);

// 删除文件 or 文件夹
moreFiles.map(function(file){
	var filePath = path.join(dirPath,file);
  var isDir = fs.statSync(filePath).isDirectory();
  if(isDir){
    execSync(`rm -rf ${filePath}`);
    console.log(`${filePath} -文件夹 已删除`)
  } else {
    fs.unlinkSync(filePath);
    console.log(`${filePath} -文件 已删除`)
  }
})
