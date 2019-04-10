import React, {Component} from 'react'
import './main.css'
import PropTypes from 'prop-types'

class Notes extends Component{
    constructor(props){
        super(props)
        this.noteContent = props.noteContent
        this.noteId = props.noteId
        this.RemoveNote = this.RemoveNote.bind(this)
    }

    RemoveNote(id){
        this.props.removeNote(id)
    }

    render(props){
        return(
            <div className="note fade-in">
                <p className="noteContent">{this.noteContent}</p>
                <button className="closeButton" onClick={() => this.RemoveNote(this.noteId)}>Delete</button>
            </div>
        )
    }
}

Notes.propTypes = {
    noteContent: PropTypes.string
}

export default Notes
