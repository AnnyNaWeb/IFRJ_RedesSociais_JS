var mouse_x, mouse_y, mouse_pressed;

var _mouseMove = function(e)
{
	mouse_x = e.x;
	mouse_y = e.y;
}

var _mouseUp = function(e)
{
	mouse_pressed = false;
}	

var _mouseDown = function(e)
{
	mouse_pressed = true;
	//console.log(e.x);
}

document.addEventListener("mousemove", _mouseMove, false);
document.addEventListener("mouseup",   _mouseUp,   false);
document.addEventListener("mousedown", _mouseDown, false);

