import React, {Component} from 'react'
import './create.css'

class Create extends Component{
	constructor(props){
		super(props)
		this.state = {
			newNoteContent: '',
		}
		this.userInput = this.userInput.bind(this)
		this.writeNote = this.writeNote.bind(this)
	}

	userInput(event){
		this.setState({
			newNoteContent: event.target.value
		})
	}

	writeNote(){
		this.props.addNote(this.state.newNoteContent)
		this.setState({
			newNoteContent: '',
		})
	}

	render(){
		return(
			<div className="formWrapper">
				<textarea className="noteCreate" 
				placeholder="Write a new note..."
				value = {this.state.newNoteContent}
				onChange = {this.userInput}
				wrap = "soft"/>
				
				<div>
					<button className="noteButton" onClick = {this.writeNote}>Add Note</button>
				</div>

			</div>
		)
	}
}

export default Create