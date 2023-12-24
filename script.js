//your JS code here. If required.
const colorSelect=document.getElementById('colorSelect');
const removeButton=document.getElementById('removeButton');
removeButton.addEventListener('click',function(){
	const selectedOption=colorSelect.value;
	const optionToRemove=colorSelect.querySelector('option[value="${selectedOption}"]');
	if(optionToRemove){
		colorSelect.removeChild(optionToRemove);
	}
});


