//HTML BASE:

/**<!DOCTYPE HTML>
<html lang="en">
  <head>
   <meta charset="UTF-8">
   <title>HexGrid</title>
  </head>
  <body>
    <canvas id="canvas" width="800" height="500"/>
    <script src="main.js"></script>
  </body>
</html> */

// A Hexagon
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
​
function init() {}
init();

/*As far as we know, we are going to set up the angle and the size of the hexagon as constants. Notice the angles are needed to be expressed in radians (360º = 2π  rad) */

const a = 2 * Math.PI / 6;
const r = 50;

/*In order to draw a regular hexagon we define a function named drawHexagon(x,y) being x and y the center point. We are going to use a path that allows to set the coordinates before drawing them and when finished we use stroke() to draw only the border line. It is possible doing a for loop to draw a line between each vertex so the result is as follows: */

function drawHexagon(x, y) {
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
      ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
    }
    ctx.closePath();
    ctx.stroke();
  }

  /*Before testing it, notice that the point (0,0) in our canvas starts on the upper left corner, so to fit the drawing we need a minimum offset of r.*/

  //A Row

  //Perfect! The next step is to draw a row of hexagons, like that:

  /**Essentially it is important to know where the next centre is going to be located to fit perfectly with one another. First, notice how much horizontally is placed the purple arrow. It is a distance of the radius r plus a segment we already know as rcos60º. And same as vertically, a segment of rsin60º downwards. The procedure is always adding the same amount horizontally and alternating vertically.

The code that allows to draw the four hexagons showed before is: */

/**
// 1st
x = r;
y = r;
drawHexagon(x, y);
​
// 2nd
x = x + r + r * Math.cos(a);
y = y + r * Math.sin(a);
drawHexagon(x, y);
​
// 3rd
x = x + r + r * Math.cos(a);
y = y - r * Math.sin(a);
drawHexagon(x, y);
​
// 4th
x = x + r + r * Math.cos(a);
y = y + r * Math.sin(a);
drawHexagon(x, y);
 */


/**We need to find the pattern that will allow making this scalable. On the one hand, x could be written as a increment of: */

/**function drawGrid(width, height) {
  let y = r;
  for (let x = r, j = 0; x + r * (1 + Math.cos(a)) < width; x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
    drawHexagon(x, y);
  }
} */

/**Notice whether the subsequent hexagon, in every iteration, that we are going to draw fits inside the canvas. */

//The Grid

/**That is it! We are just one step away from success. All we need is to repeat the same procedure but in the row below repeatedly. But, how much lower is it from the original row? 
This would be the final scheme of our grid, showing the first four centres of each row to get a good view on what is going on. From the centre (0,0) we can see that the blue arrow takes a distance of twice the length of the hexagon height that sums up to 2rsin60º. The rest is going to be the same taking into account this offset. We modify our function to draw many lines as the last hexagon fits in the canvas height
*/

function drawGrid(width, height) {
    for (let y = r; y + r * Math.sin(a) < height; y += r * Math.sin(a)) {
      for (let x = r, j = 0; x + r * (1 + Math.cos(a)) < width; x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
        drawHexagon(x, y);
      }
    }
  }