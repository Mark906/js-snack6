var potenza = 0;
const base = 2;
var k = Math.pow(base,potenza);

for(potenza=1; k<1000; potenza++){

    console.log(base + '^' + (potenza-1) +' = ' + k);
    k = Math.pow(base,potenza);
}
