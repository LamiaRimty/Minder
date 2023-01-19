import React from "react";
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import Notes from "../Notes";

function App(){
    return(
        <div>
        <Header/>
        {
        Notes.map(newNote=>
            <Note
            key={newNote.id}
            title={newNote.title}
            content={newNote.content}
            />
        )}
        <Footer/>
        </div>
    );
}
export default App;
