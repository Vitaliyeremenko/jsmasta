/**
 * Created by Vitaly on 1/27/2017.
 */
window.onload = init;

var ballcounter = 0;

function  init() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var raf;

    function ballobj () {
        this.x= 0;
        this.y= 0;
        this.vx= 5;
        this.vy= 2;
        this.radius=25;
        this.color='blue';
        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };


    var ball = [11];
    for (var i=0;i<11;i++)
    {
        ball[i] = new ballobj();
    }
    function draw() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        for (var i = 0; i<conter ; i++){
            ball[i].draw();
            ball[i].x += ball[i].vx;
            ball[i].y += ball[i].vy;

            if (ball[i].y + ball[i].vy > canvas.height-ball[i].radius  ||
                ball[i].y + ball[i].vy < ball[i].radius ) {
                ball[i].vy = -ball[i].vy;
            }
            if (ball[i].x + ball[i].vx > canvas.width-ball[i].radius  ||
                ball[i].x + ball[i].vx < ball[i].radius ) {
                ball[i].vx = -ball[i].vx;
            }
            
            for(var j = conter; j>i; j--){
                var d = Math.sqrt(Math.pow(ball[i].y - ball[j].y,2) + Math.pow(ball[i].x- ball[j].x,2));
                if(d < (ball[i].radius+ball[j].radius))
                {
                    ball[i].vx = -ball[i].vx;
                    ball[i].vy = -ball[i].vy;
                    ball[j].vx = -ball[j].vx;
                    ball[j].vy = -ball[j].vy;
                }

            }
        }
        raf = window.requestAnimationFrame(draw);


    }
    var conter = 0;
        canvas.addEventListener('click', function(e) {
           if(conter !=10){
            ball[conter].x= e.clientX;
            ball[conter].y= e.clientY;
            ball[conter].draw();
            conter++;
            console.log(conter);
           }
        });
    raf = window.requestAnimationFrame(draw);



}
