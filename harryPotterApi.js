const URL_API= 'https://wizard-world-api.herokuapp.com';

window.onload= async() => {
    const characters= await getCharacters();
    const elixirs= await getElixirs();

    for(const character of characters){
        const htmlElement= document.getElementById("characters");
        const newElement= document.createElement("div");
        newElement.innerHTML=`
            <h3>Character: ${character.lastName}</h3>`
            htmlElement.appendChild(newElement);
    }
    
        const htmlElement2= document.getElementById("elixirs");
        const newElement2= document.getElementById("div")
            newElement2.innerHTML=`<p>Elixirs: ${elixirs.name}`
            htmlElement2.appendChild(newElement2);
    
    
};


async function getCharacters(){
    const response= await fetch(`${URL_API}/wizards`);
    const data= await response.json()
    return data;
}

async function getElixirs(){
    const response= await fetch(`${URL_API}/wizards`);
    const data= await response.json()
    return data.elixirs;
}