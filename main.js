// SAVE THE NOTE
// Create and save a new note when clicked the save button
	function newElement() {
		let hideEmptyTxt;
		let li = document.createElement("li");
		let inputvalue = document.querySelector("#myInput").value;
		let savedNote = document.createTextNode(inputvalue);
		li.appendChild(savedNote);
		if (inputvalue === ''){
			document.querySelector("#emptytext").innerHTML= "Please write something";
			document.querySelector("#emptytext").style.backgroundColor = "pink";
			document.querySelector("#emptytext").style.border = "1px solid";
			hideEmptyTxt = setTimeout(spanEmptytxt, 3000); // hide message in 3secs
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

		// STORE SAVED NOTES IN LOCAL STORAGE
		// Get the editable element
		let editElement = document.querySelector("#saved-notes");
		editElement = document.querySelector("#myNotes");
		// Get the edited element content
		let userVersion = editElement.innerHTML;
		// Save the content to local storage
		localStorage.userEdits = userVersion;

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
		let hideMessage;
		let noteEditable = document.querySelector("#myNotes").contentEditable;
		if (noteEditable == 'inherit' || noteEditable == 'false') {
			document.querySelector("#myNotes").contentEditable = true;
			textTwo.nodeValue = '✓';
		} else {
			document.querySelector("#myNotes").contentEditable = false;
			textTwo.nodeValue = ':';
			// Write a confirmation to the user
			document.querySelector("#update").innerHTML = "Changes saved";
			document.querySelector("#update").style.backgroundColor = "lightgreen";
			document.querySelector("#update").style.border = "1px solid";
			hideMessage = setTimeout(hideIt, 3000); // hide message in 3secs
		  }
	    }
	  }
	}
	// Make "Changes saved" disappear after 3 seconds
	function hideIt() {
		document.querySelector("#update").innerHTML = "";
		document.querySelector("#update").style.backgroundColor = "transparent";
		document.querySelector("#update").style.border = "none";
	}
	// Make "empty" disappear after 3 seconds
	function spanEmptytxt() {
		document.querySelector("#emptytext").innerHTML = "";
		document.querySelector("#emptytext").style.backgroundColor = "transparent";
		document.querySelector("#emptytext").style.border = "none";
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
	let hideMessage;
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
			// Write a confirmation to the user
			document.querySelector("#update").innerHTML = "Changes saved";
			document.querySelector("#update").style.backgroundColor = "lightgreen";
			document.querySelector("#update").style.border = "1px solid";
			hideMessage = setTimeout(hideIt, 3000); // hide message in 3secs
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
		let hideMessage;
		let noteEditable = document.querySelector("#myNotes, #saved-notes").contentEditable;
		if (noteEditable == 'inherit' || noteEditable == 'false') {
			document.querySelector("#myNotes").contentEditable = true;
			document.querySelector("#saved-notes").contentEditable = true;
			textTwo.nodeValue = '✓';
		} else {
			document.querySelector("#myNotes").contentEditable = false;
			document.querySelector("#saved-notes").contentEditable = false;
			textTwo.nodeValue = ':';
			// Write a confirmation to the user
			document.querySelector("#update").innerHTML = "Changes saved";
			document.querySelector("#update").style.backgroundColor = "lightgreen";
			document.querySelector("#update").style.border = "1px solid";
			hideMessage = setTimeout(hideIt, 3000); // hide message in 3secs
		  }
	    }
	  }
	}