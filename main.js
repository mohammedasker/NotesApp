// SAVE THE NOTE
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
		// Span edit button for each note
		let spanTwo = document.createElement("span");
	    textTwo = document.createTextNode("✓");
	    spanTwo.className = "edit";
	    spanTwo.appendChild(textTwo);
	    li.appendChild(spanTwo);
		// Spawn close button for each note
		let span = document.createElement("span");
		text = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(text);
		li.appendChild(span);
		// Hide a saved note when clicked close button
		for (i = 0; i < close.length; i++){
			close[i].onclick = function() {
				let div = this.parentElement;
				div.style.display = "none";
			}
		}
	     for (i = 0; i < edit.length; i++){
		edit[i].onclick = function() {
		let div = this.parentElement;
		// Make notes editable when clicked edit button
		let noteEditable = document.querySelector("#myNotes").contentEditable;
		if (noteEditable == 'inherit' || noteEditable == 'false') {
			document.querySelector("#myNotes").contentEditable = true;
			textTwo.nodeValue = '✓';
		} else {
			document.querySelector("#myNotes").contentEditable = false;
			textTwo.nodeValue = ':';
		  }
	    }
	  }
	}

// DELETE THE NOTE
// Clear inputs on the text area
	function clearElement() {
		document.querySelector("#myInput").value = '';
	};

// Create close button and append it to each note
	let nodeList = document.getElementsByTagName("li");
	let i;
	for (i = 0; i < nodeList.length; i++){
		span = document.createElement("span");
		text = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(text);
		nodeList[i].appendChild(span);
	}

// Click the close button to hide saved notes
	let close = document.getElementsByClassName("close");
	    i;
	for (i = 0; i < close.length; i++){
		close[i].onclick = function() {
		let div = this.parentElement;
		div.style.display = "none";
	   }
	}

// EDIT THE NOTE
// Click the edit button to edit notes
	let edit = document.getElementsByClassName("edit");
	i;
	for (i = 0; i < edit.length; i++){
		edit[i].onclick = function() {
		let div = this.parentElement;
		let noteEditable = document.querySelector("#myNotes").contentEditable;
		if (noteEditable == 'inherit' || noteEditable == 'false') {
			document.querySelector("#myNotes").contentEditable = true;
			textTwo.nodeValue = '✓';
		} else {
			document.querySelector("#myNotes").contentEditable = false;
			textTwo.nodeValue = ':';
		}
	  }
	}

// Create edit button and append it to each note
	nodeList = document.getElementsByTagName("li");
	i;
	for (i = 0; i < nodeList.length; i++){
	  spanTwo = createElement("span");
	  textTwo = document.createTextNode("✓");
	  spanTwo.className = "edit";
	  spanTwo.appendChild(text);
	  nodeList[i].appendChild(span);
	}

// STORE SAVED NOTES IN LOCAL STORAGE
// Open and edit the saved note when clicked the edit button
	function saveNote() {
		// Get the editable element
		let editElement = document.querySelector("#saved-notes");
		editElement = document.querySelector("#myNotes");
		// Get the edited element content
		let userVersion = editElement.innerHTML;
		// Save the content to local storage
		localStorage.userEdits = userVersion;
		// Write a confirmation to the user
		document.querySelector("#update").innerHTML = "Changes saved";
		document.querySelector("#update").style.backgroundColor = "lightgreen";
		document.querySelector("#update").style.border = "1px solid";
	};

// Check if user has previously saved edits
	function checkEdits() {
		let textTwo = document.createTextNode("✓");
		if(localStorage.userEdits != null)
			document.querySelector("#saved-notes").innerHTML = localStorage.userEdits;
		// Hide a saved note when clicked close button
		for (i = 0; i < close.length; i++){
			close[i].onclick = function() {
				let div = this.parentElement;
				div.style.display = "none";
			}
		}
	    for (i = 0; i < edit.length; i++){
		edit[i].onclick = function() {
		let div = this.parentElement;
		// Make notes editable when clicked edit button
		let noteEditable = document.querySelector("#myNotes").contentEditable;
		if (noteEditable == 'inherit' || noteEditable == 'false') {
			document.querySelector("#myNotes").contentEditable = true;
			textTwo.nodeValue = '✓';
		} else {
			document.querySelector("#myNotes").contentEditable = false;
			textTwo.nodeValue = ':';
		  }
	    }
	  }
	}