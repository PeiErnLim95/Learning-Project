let minR = 1
let maxR = 100
let defaultR = 5
let rSpan = document.getElementById('rvalue')
let decR = document.getElementById('rdec')
let inR = document.getElementById('rin')
let interval = 1

let setRadius = function(nValue){
	if(nValue < minR){
		nValue = minR
	}
	else if (nValue > maxR){
		nValue = maxR
	}
	radius = nValue
	context.lineWidth = radius*2

	rSpan.innerHTML = radius
}

decR.addEventListener('click', function(){
	setRadius (radius-interval)
})

inR.addEventListener('click', function(){
	setRadius (radius+interval)
})

setRadius(defaultR)