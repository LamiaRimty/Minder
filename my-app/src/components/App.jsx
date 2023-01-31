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
        <InputArea
          onAdd={addNote}
        />

       
        {/* Notes.map(newNote=>  */}
            <Note
            key={1}
            title="Note.title"
            content="Note content"
            />
        
        <Footer/>
        </div>
    );
}
export default App;
