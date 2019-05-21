// JavaScript Document

var root = document.getElementsByTagName('body')[0];

$('#dark').click(function() {
	root.style.setProperty('--bgcolor', 'black');
	root.style.setProperty('--txtcolor', 'white');
});

$('#blue').click(function() {
	root.style.setProperty('--bgcolor', 'lightblue');
	root.style.setProperty('--txtcolor', 'white');
});

$('#light').click(function() {
	root.style.setProperty('--bgcolor', 'white');
	root.style.setProperty('--txtcolor', 'black');
});