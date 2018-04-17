var clearButton = document.getElementById(reset);
clearButton.addEventListener('click', clearCanvas(canvas));

function clearCanvas(canvas){
	canvas.width = canvas.width;
};
