class Notecard {
    constructor(imageURL, title, body, elementID){
        console.log("new notecard", imageURL, title, body, elementID);
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;
        this.element = document.querySelector(elementID);

        this.updateElement();
        const btnDelete = this.element.querySelector('.icon-delete');
        btnDelete.onclick = this.deleteNote.bind(this);

    }

    updateElement(){
        console.log("updating html");
        const noteImageElement = this.element.querySelector
        const element = document.querySelector('#notecard-one');
        const noteTitleElement = element.querySelector('.note-title');
        noteTitleElement.innerText = this.noteTitle;
        }

}

const notecardOne = new Notecard(
    'assets/warhol-frog.png',
    'This is the First Note',
    'Here is some body text for the first note.',
    '#notecard-one'
)

const notecardTwo = new Notecard(
    'assets/warhol-orangutan.png',
    'This is the Second Note',
    'Here is some body text for the second note! What could be next?',
    '#notecard-two'
)

const notecardThree = new Notecard(
    'assets/warhol-eagle.png',
    'This is the Third Note',
    'Here is some body text for the third note.',
    '#notecard-three'
)