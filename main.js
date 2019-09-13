// CREATE A NEW NOTE
// New textarea shows up when clicked new button
	document.addEventListener("click", function() {
	document.querySelector('.new-note').style.display = 'block';
});

// SAVE THE NOTE
// Save a note when clicked the save button
function newElement() {
	const li = document.createElement("li");
	const inputvalue = document.querySelector("#myInput").value;
	const text = document.createTextNode(inputvalue);
	li.appendChild(text);
	if (inputvalue === ''){
		alert("Please write something")
	} else {
		document.querySelector("#myNotes").appendChild(li);
	}
	document.querySelector("#myInput").value = '';
}


// EDIT THE NOTE

// DELETE THE NOTE
