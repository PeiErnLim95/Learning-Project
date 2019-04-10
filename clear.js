let clearButton = document.getElementById('clear')

clearButton.addEventListener('click', clearCanvas)

function clearCanvas(){
	let canvas = document.getElementById('canvas')
	let context = canvas.getContext('2d')
	context.clearRect(0, 0, canvas.width, canvas.height);
}