Console Colors
==============

Console Colors it's a very small script (30 lines) that adds colors to the node console.log extending the string prototype.  
This module is a reduced version of Marak's colors module. If you want more styles, themes and functions for your browser; go check that [here](https://github.com/Marak/colors.js).

###Instalation
    npm install consolecolors

###Usage

    require('consolecolors');
    console.log('foo'.red) // Prints foo in red foreground
    console.log('foo'.red.underline) // Prints foo in red underlined

###Styles supported:  
- underline
- inverse
- white

###Foreground colors:
- white
- grey
- black
- blue
- cyan
- green
- magenta
- red
- yellow

###Background colors:
- whiteBG
- blackBG
- blueBG
- cyanBG
- greenBG
- magentaBG
- redBG
- yellowBG
    