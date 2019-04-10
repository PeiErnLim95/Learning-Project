import React, { Component } from 'react';
import './App.css';
import Note from './SmartNotes/main.jsx'
import Create from './SmartNotes/create.jsx'
import { DB_CONFIG } from './Config/config'
import firebase from 'firebase/app'
import 'firebase/database'

class App extends Component {
  
  constructor(props){
    super(props)
    this.addNote = this.addNote.bind(this)
    this.removeNote = this.removeNote.bind(this)
    this.app = firebase.initializeApp(DB_CONFIG)
    this.database = this.app.database().ref().child('notes')

    this.state = {
      notes: [],
    }
  }

    componentWillMount(){
      const pNote = this.state.notes

      this.database.on('child_added', snap => {
        pNote.push({
          id:snap.key,
          noteContent: snap.val().noteContent,
        })

        this.setState({
          notes:pNote
        })
      })

      this.database.on('child_removed', snap => {
        for (let i=0; i<pNote.length; i++){
          if(pNote[i].id === snap.key){
            pNote.splice(i, 1)
          }
        }

        this.setState({
          notes:pNote
        })

      })
    }

  addNote(note){
    this.database.push().set({noteContent: note})
  }

  removeNote(noteId){
    this.database.child(noteId).remove()
  }

  render() {
    return (
      <div className="wrapNotes">
      
        <div className="notesHeader">
          <h1>Welcome to Smart Notes</h1>
        </div>

        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                    <Note noteContent = {note.noteContent} noteId = {note.id} key = {note.id} removeNote = {this.removeNote}/>
                ) 
            })
          }
        </div>

        <div className="notesInput">
          <Create addNote={this.addNote}/>
        </div>

      </div>
    )
  }

}

export default App;
