# SIMPLE NOTE APP

A minimalist note-taking web app build by the minimalist, for the minimalist. This web app is created using only HTML, CSS, and Vanilla JavaScript. No libraries or frameworks were used.

## Live Demo

You can check the project by the clicking the link below:

[NoteApp](https://mohammedasker.github.io/NotesApp//)

## Getting Started

There are two ways you can get a copy of my repository and choose which one you prefer.

**Option 1: Clone the repo**

1. Open the Git Bash and type this:

```
git clone https://github.com/mohammedasker/NoteApp.git
```

2. Press Enter key. Your local clone will be created.

**Option 2: Download the Zip file**

1. Under the repository name, click Clone or download

2. Click the Download ZIP. A download will start and be saved on your Download folder.

## User story

Here's what the user can do with the app.

1. A user can create a new note by writing on a textarea. (When a user click "Save" button with an empty box, it will throw "Please Write Something" message)

2. When a user finish writing a content and clicked a "Save" button, it will spawn a saved note below.

3. A user can edit the saved content by clicking the edit ":" button on the right side of the note. When the sign is tick mark "✓", it indicates that the saved content is editable and when the sign is colon mark ":", it indicates that the saved content is not editable.

4. A user can delete the saved note by clicking the delete "x" button.

5. A saved note is stored in the local storage and you can tell when a message reading "Changes saved" appears on the screen. When a page is refreshed or closed the tab, the saved notes is still there.

## Issues that need to be fixed

As a beginner programmer, there are a lot of things that can be improved to make this project better and here I list the following points which needs to deal with:

- When a note is created, it should be not editable by default. You'll notice the button on the right is tick mark "✓" and yet it still editable. Consequently, when you delete the note when it is tick mark, the blank page is editable as well.

- If you look carefully both in my CSS code and the app itself, you'll see that the textarea and note lists are not perfectly aligned together and they're off by few meters on the right side of the screen. There's got to be better way to do it without manually tweaking the code until it looks better. (If you still don't get the problem yet, I'll attach a photo below shortly).

- When clicking the edit button, only one of them is toggling tick to colon marks and vice-versa. It should have worked on all the notes.

#### Any further comments and suggestions to make the project better are appreciated.

## Versions

<b>Current version: 1.0.1</b>

<ul>
	<li>1.0.0 (04/10/2019)</li>
	<li>1.0.1 (07/10/2019)</li>
</ul>

## Authors

- [@MohammedAsker](https://github.com/mohammedasker) - Idea & Initial work

## License

This project is licensed under the [MIT](https://github.com/mohammedasker/NotesApp/blob/master/LICENSE) license.
