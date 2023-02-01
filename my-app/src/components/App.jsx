import React from "react";
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
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

    function deleteNote(id){
        console.log("Delete was triggerd");
         setNotes(prevNotes=>{
           return prevNotes.filter((noteItem,index)=>
                {
                     return index!== id;
                 }
             )
         });
    }

    return(
        <div>
        <Header/>
        <InputArea onAdd={addNote}/>

        {notes.map( (noteItem,index )=> {
        return <Note title={noteItem.title} content={noteItem.content} key={index} id={index} onDelete={deleteNote}/>
        })}
        
        <Footer/>
        </div>
    );
}
export default App;
