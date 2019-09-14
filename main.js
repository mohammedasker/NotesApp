// CREATE A NEW NOTE
// New textarea shows up when clicked new button
	document.addEventListener("click", function() {
	document.querySelector('.new-note').style.display = 'block';
});

// SAVE THE NOTE
// Save a note when clicked the save button
function newElement() {
	let li = document.createElement("li");
	let inputvalue = document.querySelector("#myInput").value;
	let text = document.createTextNode(inputvalue);
	li.appendChild(text);
	if (inputvalue === ''){
		alert("Please write something")
	} else {
		document.querySelector("#myNotes").appendChild(li);
	}
	document.querySelector("#myInput").value = '';
}

// DELETE THE NOTE
// Clear inputs on the text area
function clearElement() {
	document.querySelector("#myInput").value = '';
}

// Delete the saved note
let nodeList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < nodeList.length; i++){
	let span = document.createElement("SPAN");
	let txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild("txt");
	nodeList[i].appendChild(span);
}

// EDIT THE NOTE