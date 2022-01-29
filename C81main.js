Canvas=document.getElementById("my_canvas");
ctx=Canvas.getContext("2d");
lastpostionX=0;
lastpostionY=0;
mouseevent="empty";
current_position_of_mouse_X=0;
current_position_of_mouse_Y=0;
Canvas.addEventListener("click", my_mouseclick);
function my_mouseclick(e){
color=document.getElementById("color").value;
console.log(color);

mouse_X = e.clientX - Canvas.offsetLeft;
mouse_Y = e.clientY - Canvas.offsetTop;
circle(mouse_X,mouse_Y);

}
Canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
mouseevent="mousedown";

}
Canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_X = e.clientX - Canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - Canvas.offsetTop;
if(mouseevent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth=width;
ctx.moveTo(lastpostionX,lastpostionY);
ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
ctx.stroke();
}
lastpostionX=current_position_of_mouse_X;
lastpostionY=current_position_of_mouse_Y;


}





function circle(mouse_X,mouse_Y){
    ctx.beginPath();
     ctx.strokeStyle = color;
   ctx.arc(mouse_X,mouse_Y,40,0,2*Math.PI);
ctx.stroke();

}

function clear_(){
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);


}







Canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
document.getElementById("my_canvas").style.backgroundColor="red";
mouseevent="mouseup";

}

Canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
document.getElementById("my_canvas").style.backgroundColor="blue";
mouseevent="mouseleave";}