const URL_API= 'https://wizard-world-api.herokuapp.com';
const idTable= [];
window.onload= async() => {
    const characters= await getCharacters();

    for(const character of characters){
        const htmlElement= document.getElementById("characters");
        const newElement= document.createElement("div");
        newElement.innerHTML=`
            <h3>Character: ${character.lastName}</h3>`;
            htmlElement.appendChild(newElement);
            
            for (const elixir of character.elixirs) {
        const newElement2= document.createElement("div")
        newElement2.innerHTML=`<h5>Elixirs: ${elixir.name}</h5>`
        idTable.push(`${elixir.id}`);
        console.log(idTable);
        htmlElement.appendChild(newElement2);   
            }      
    }     
};

ingredientsButton.addEventListener('click', () => {
	
});

async function getCharacters(){
    const response= await fetch(`${URL_API}/wizards`);
    const data= await response.json()
    return data;
}

function getElixirsId(id){
    if(idTable.find(id)){
        alert("Id trobat");     
    }
}
