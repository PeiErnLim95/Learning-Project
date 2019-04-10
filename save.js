let saveButton = document.getElementById('save')

saveButton.addEventListener('click', saveImage)

function saveImage(){
	let data = canvas.toDataURL();
	window.open(data, '_blank', 'location=0, menubar=0')
}