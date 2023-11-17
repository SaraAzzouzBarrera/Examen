const URL_API= 'https://wizard-world-api.herokuapp.com';

window.onload= async() => {
    const characters= await getCharacters();

    for(const character of characters){
        let i=0;
        const htmlElement= document.getElementById("characters");
        const newElement= document.createElement("div");
        newElement.innerHTML=`
            <h3>Peronatge ${i}: ${character.firstName} ${character.lastName}</h3>
        `
        i++;

        htmlElement.appendChild(newElement);
    }

};

async function getCharacters(){
    const response= await fetch(`${URL_API}/houses`);
    const data= response.json()
    return data.heads;
}