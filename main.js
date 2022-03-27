var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fbric.image.fromURL('Birdthdayimage.jpg',function (Img){
block_image_object=Img;
block_image_object.scaleTowidth(700);
block_image_object.sclaetoheight(510);
block_image_object.set({
    top:0,
    left:0
});
canvas.add(block_image_object);
})	
	
}

function playSound(){
	x.play('bdayaudio.mp3');
}
