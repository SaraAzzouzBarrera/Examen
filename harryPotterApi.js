const URL_API= 'https://wizard-world-api.herokuapp.com';

window.onload= async() => {
    const characters= await getCharacters();
    const cases= await casesHogwarts();
    for(const character of characters){
        const htmlElement= document.getElementById("characters");
        const newElement= document.createElement("div");
        newElement.innerHTML=`
            <h3>Character: ${character.lastName}</h3>`;
            htmlElement.appendChild(newElement);
            
            for (const elixir of character.elixirs) {
        const newElement2= document.createElement("div")
        newElement2.innerHTML=`<h5>Elixirs: ${elixir.name}</h5>
        <button onclick= "elixir('${elixir.id}')">Ingredients</button>
        `
        htmlElement.appendChild(newElement2);   
         }    
    }
    for(const house of cases){
    const htmlElement6= document.getElementById("house");
    const newElement6= document.createElement("div");
    newElement6.innerHTML=`
        <h3>House: ${house.name}</h3>`
        htmlElement6.appendChild(newElement6);
    }
    
};

async function getCharacters(){
    const response= await fetch(`${URL_API}/wizards`);
    const data= await response.json()
    return data;
}
async function getIngredients(id){
    const response= await fetch(`${URL_API}/elixirs/${id}`);
    const data= await response.json()
    return data;
}

async function elixir(id){
    const ingredients= await getIngredients(id);
        for(const ingred of ingredients.ingredients){
            const htmlElement= document.getElementById("characters");

            const newElement3= document.createElement("div");
            newElement3.innerHTML=`<h3>idIngredient: ${ingred.name}</h3>`
            htmlElement.appendChild(newElement3);   
        }
}

async function imageHouse(house){
    const houses= await getPictuteHogwarts(house);
        for(const casa of houses.name){
            const htmlElement= document.getElementById("houses");
            const newElement3= document.createElement("div");
            if(casa.name.equals(Gryffindor)){
            newElement3.innerHTML=`Imatge: <img  src="https://burrow.hogwartsishere.com/storage/img/book-blank.png">`
            htmlElement.appendChild(newElement3);   
            }
        }
}
async function getPictuteHogwarts(name){
    const response= await fetch(`${URL_API}/houses/${name}`);
    const data= await response.json()
    return data;
}


async function casesHogwarts(){
    const response= await fetch(`${URL_API}/houses`);
    const data= await response.json()
    return data;
}
