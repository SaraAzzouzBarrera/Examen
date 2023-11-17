const URL_API= 'https://wizard-world-api.herokuapp.com';

window.onload= async() => {
    const characters= await getCharacters();

    for(const character of characters){
        let i=0;
        const htmlElement= document.getElementById("characters");
        const newElement= document.createElement("div");
        newElement.innerHTML=`
            <h3>Character: ${character.lastName}</h3>`
        htmlElement.appendChild(newElement);
    }

};

async function getCharacters(){
    const response= await fetch(`${URL_API}/wizards`);
    const data= await response.json()
    return data;
}

