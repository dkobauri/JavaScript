// passing in RGB decimal values will result in a hexadecimal representation being returned.

function rgb(r, g, b){
   
    // valdidate numbers are within range 0 - 255
    if (r < 0) {r = 0;} else if (r > 255) {r = 255;} 
    if (g < 0) {g = 0;} else if (g > 255) {g = 255;} 
    if (b < 0) {b = 0;} else if (b > 255) {b = 255;} 
    
    // convert to hexadecimal
    r = r.toString(16)
    const newR = r.length == 1 ? "0" + r : r;
    g = g.toString(16)
    const newG = g.length == 1 ? "0" + g : g;
    b = b.toString(16)
    const newB = b.length == 1 ? "0" + b : b;

    return newR.toUpperCase() + newG.toUpperCase() + newB.toUpperCase();
}

console.log(rgb(120, 100, 50));