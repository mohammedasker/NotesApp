// CREATE A NEW NOTE
// New textarea shows up when clicked new button
	document.addEventListener("click", function() {
	document.querySelector('.new-note').style.display = 'block';
});

// SAVE THE NOTE

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
	let text = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(text);
	nodeList[i].appendChild(span);
}

// Click the close button to hide saved notes
let close = document.getElementsByClassName("close");
    i;
for (i = 0; i < close.length; i++){
	close[i].close = function() {
	let div = this.parentElement;
	div.style.display = "none";
	}
}

// Save a note when clicked the save button
function newElement() {
	let li = document.createElement("li");
	let inputvalue = document.querySelector("#myInput").value;
	let savedNote = document.createTextNode(inputvalue);
	li.appendChild(savedNote);
	if (inputvalue === ''){
		alert("Please write something")
	} else {
		document.querySelector("#myNotes").appendChild(li);
	}
	document.querySelector("#myInput").value = '';

	// Span close button every time new notes are saved
	let span = document.createElement("span");
	text = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(text);
	li.appendChild(span);
	for (i = 0; i < close.length; i++){
		close[i].close = function() {
			let div = this.parentElement;
			div.style.display = "none";
		}
	}
}

// EDIT THE NOTE