canvas=document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

Greencar_width = 75;
Greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

Greencar_x = 5;
Greencar_y = 225;

function add() {
 background_imgtag=new Image();
 background_imgtag.onload=uploadBackground;
 background_imgtag.src=background_image;

 Greencar_imgtag=new Image();
 Greencar_imgtag.onload=uploadgreencar;
 Greencar_imgtag.src=greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgtag ,0,0, canvas.width,canvas.height)

}

function uploadgreencar() {
ctx.drawImage(Greencar_imgtag, Greencar_x, Greencar_y, Greencar_width, Greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{		//Define function to move the car upward
	if(Greencar_y>=0){
		Greencar_y=Greencar_y-10;
		uploadBackground();
		uploadgreencar();
	}
	
}

function down()
{
	//Define function to move the car downward
	if(Greencar_y<=350){
		Greencar_y=Greencar_y+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(Greencar_x>=0){
		Greencar_x=Greencar_x-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(Greencar_x<750){
		Greencar_x=Greencar_x+10;
		uploadBackground();
		uploadgreencar();
	}
}
