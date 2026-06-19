async function loadNotes(){

    let response = await fetch("/notes");

    let notes = await response.json();

    let container = document.getElementById("notesContainer");

    container.innerHTML="";

    notes.forEach(note=>{

        let div=document.createElement("div");

        div.className="note";

        div.innerHTML=note.content;

        container.appendChild(div);

    });

}

async function saveNote(){

    let content=document.getElementById("noteInput").value;

    await fetch("/notes",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            content:content
        })

    });

    document.getElementById("noteInput").value="";

    loadNotes();

}

loadNotes();