//your JS code here. If required.
const colorSelect=document.getElementById('colorSelect');
const removeButton=document.getElementById('removeButton');
removeButton.addEventListener('click',function(){
	const selectedOption=colorSelect.options[colorSelect.selectedIndex];
	colorSelect.removeChild(selectedOption);
});


