var Canvas = function(){
    this.canvas = document.getElementById("minhaTela");
    this.ctx    = this.canvas.getContext("2d");
	
	this.clear = function()
	{
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.ctx.fillStyle = "white";
	}

	this.drawText = function(text,x,y,font,color)
	{
		this.ctx.fillStyle = color;
		this.ctx.font = font;
		this.ctx.fillText(text,x,y);	
	}
	
	this.drawCircle = function(x,y,r,start,stop,color)
	{
		this.ctx.fillStyle = color;
		this.ctx.beginPath();
		this.ctx.arc(x,y,r,start,stop);
		this.ctx.fill();
	}
	
	this.drawRect = function(x,y,w,h,color)
	{
		this.ctx.fillStyle = color;
		this.ctx.fillRect(x,y,w,h);	
	}
}
var canvas = new Canvas();