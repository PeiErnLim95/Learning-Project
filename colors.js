let colors = ['black', 'white', 'gray', 'red', 'orange', 'yellow', 'green',
 'blue', 'indigo', 'purple', 'cyan']

for (let i = 0, n=colors.length; i<n; i++){
	let swatch = document.createElement('div')
	swatch.className = 'swatch'
	swatch.style.backgroundColor = colors[i]
	swatch.addEventListener('click', setSwatch)
	document.getElementById('colors').appendChild(swatch)
}

function setColor(color){
	context.fillStyle = color
	context.strokeStyle = color
	let active = document.getElementsByClassName('active')[0]
	if(active){
		active.className = 'swatch'
	}
}

function setSwatch(event){
	let swatch = event.target
	setColor(swatch.style.backgroundColor)
	swatch.className += ' active'
}

setSwatch({target: document.getElementsByClassName('swatch')[0]})