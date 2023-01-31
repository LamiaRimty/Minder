import React from "react";
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
//import Notes from "../Notes";
import InputArea from "./InputArea"
import { useState } from "react";

function App(){

    const [notes,setNotes]=useState([]);

    function addNote(newNote){  //noteNew passed over frm inputArea pros.on
        //console.log(note);
        setNotes(prevNotes=>{
            return  [...prevNotes,newNote];
        })
    }

    return(
        <div>
        <Header/>
        <InputArea onAdd={addNote}/>

        {notes.map( noteItem=> {
        return <Note title={noteItem.title} content={noteItem.content}/>
        })}
        
        <Footer/>
        </div>
    );
}
export default App;
