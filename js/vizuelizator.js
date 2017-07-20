/**
 * Created by Mladen on 20-Jul-17.
 */
$(document).ready(function () {
    var canvas = document.querySelector("canvas");
    var cx = canvas.getContext("2d");
    var niz = new Array(50);
    var brojac = 0;
    var id = setInterval(function(){ cx.beginPath();drawSquare(canvas,cx,niz,brojac, id);brojac++; cx.closePath();  }, 1000);

});

function drawCircle(canvas, context) {
    // Here we created a random raidus for circle
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);
    context.fillStyle = "#fac922";
    context.fill();
}
function drawSquare(canvas, context, niz, brojac, id) {
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    niz[brojac] = new Array(2);
    niz[brojac][0] = x;
    niz[brojac][1] = y;
    if(brojac == 50){
        clearInterval(id);
    }
    if(brojac > 0){
      //  alert(niz[brojac])
       // context.beginPath();
       context.moveTo(niz[brojac-1][0],niz[brojac-1][1]);
       context.lineTo(niz[brojac][0],niz[brojac][1]);
       // context.closePath();
    }

    context.fillStyle = "#5bd4ef";
    context.strokeStyle = "#5bd4ef";
    context.lineWidth  = 1;
    context.arc(x, y, 0.9, 0, 360 * Math.PI / 180, true);
    context.fill();
}