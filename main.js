var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("data:image/jpeg;base64,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", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

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
	if(keyPressed == '87')
	{
		new_image('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		new_image('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		new_image('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		new_image('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		new_image('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		new_image('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		new_image('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		new_image('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		new_image('cloud.jpg'); 
		console.log("c");
	}
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}