/*global TinyTurtle*/
/*global forward*/
/*global right*/
/*global stamp*/
TinyTurtle.apply(window);
function house(){
forward(20);
right(67);
forward(28);
right(45);
forward(28);
right(67);
forward(20);
right(90);
forward(52);
right(90);
forward(20);
right(90);
forward(52);
stamp();
}
function square(){
    for(var i =0; i<4; i=i+1){
        forward(50);
        right(90);
        
}
}

function fractal(){
    for(var r =6; r<40; r=r+1){
        right(40);
        square();
        
}
}

function triangle(){
    
}
function rectangle(){
forward(38);
right(90);
forward(70);
right(90);
forward(38);
right(90);
forward(70);
}
function pentagon(){
forward(20);
right(56);
forward(28);
right(45);
forward();
right(67);
forward(20);
right(90);
forward(52);
right(90);
forward(20);
stamp();
}
function hexagon(){
   for(var t=0; t<6; t=t+1){
       forward(30);
       right(60);
   }
}
hexagon();
function fractal2(){
    for(var f=0; f<40;f=f+1){
        right(20);
        hexagon();
    }
}
fractal2();


