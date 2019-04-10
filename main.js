let canvas = document.getElementById('canvas')

let context = canvas.getContext('2d')

context.canvas.width = window.innerWidth
context.canvas.height = window.innerHeight

let radius = 5
let drag = false

context.lineWidth = radius*2

let putPoint = function(event){

	if(drag)
	{
		context.lineTo(event.offsetX, event.offsetY)
		context.stroke()
		context.beginPath()
		//content.arc(x, y, radius, startAngle, endAngle, [antiClockwise])
		context.arc(event.offsetX, event.offsetY, radius, 0, Math.PI*2)
		context.fill()
		context.beginPath()
		context.moveTo(event.offsetX, event.offsetY)
	}
}

let engage = function(event){
	drag = true
	putPoint(event)
}

let disengage = function(){
	drag = false
	context.beginPath()
}

canvas.addEventListener('mousedown', engage)
canvas.addEventListener('mousemove', putPoint)
canvas.addEventListener('mouseup', disengage)