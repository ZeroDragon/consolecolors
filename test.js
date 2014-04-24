//Requiring the library
require('./consolecolors');

//Test all the styles and colors
[
	//Styles
	'underline',
	'inverse',

	//Foreground Colors
	'white',
	'grey',
	'black',
	'blue',
	'cyan',
	'green',
	'magenta',
	'red',
	'yellow',

	//Background Colors
	'whiteBG',
	'blackBG',
	'blueBG',
	'cyanBG',
	'greenBG',
	'magentaBG',
	'redBG',
	'yellowBG'
].forEach(function(style,k){
	console.log( ((k+1)+': ').green+style[style] );
});