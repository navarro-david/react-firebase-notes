import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);

    }

    // When the user input changes, set the newNoteContent to value in input box
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value,
        });
    }

    writeNote(){
        // call a method to set note content for a note to the value of an input
        this.props.addNote(this.state.newNoteContent);

        // empty input box after note is made
        this.setState({
            newNoteContent: '',
        });
    }

    render(){
        return (
            <div className="formWrapper">
                <input className="noteInput" 
                placeholder="Write a new note..."
                value={this.state.newNoteContent}
                onChange={this.handleUserInput}></input>
                <button className="noteButton"
                onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;
