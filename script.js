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
forward(38);
right(90);
forward(38);
right(90);
forward(38);
right(90);
forward(38);
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
forward(28);
right(67);
forward(20);
right(90);
forward(52);
right(90);
forward(20);
stamp();
}
house();
square();
rectangle();
pentagon();




