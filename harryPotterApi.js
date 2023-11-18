const URL_API= 'https://wizard-world-api.herokuapp.com';

window.onload= async() => {
    const characters= await getCharacters();
    const cases= await casesHogwarts();
    for(const character of characters){
        const htmlElement= document.getElementById("characters");
        const newElement= document.createElement("div");
        newElement.innerHTML=`
            <h3 class="characters">${character.lastName}</h3>`;
            htmlElement.appendChild(newElement);
            
            for (const elixir of character.elixirs) {
        const newElement2= document.createElement("div");
        const ingredientes= `ingredients${elixir.id}`;
        newElement2.innerHTML=`<h5>Elixirs: ${elixir.name}</h5>
        <button class="button" onclick= "elixir('${elixir.id}')">Ingredients</button>
        <div id="${ingredientes}"></div>`
        htmlElement.appendChild(newElement2); 
        }
    }

    for(const house of cases){
    const htmlElement6= document.getElementById("houses");
    const newElement6= document.createElement("div");
    newElement6.innerHTML=`
        <h3>${house.name}</h3>
        <img src="pictures/${house.name}.jpg">`
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
    const htmlElement3= document.getElementById(`ingredients${id}`);
    const ingredients= await getIngredients(id);  
    if(htmlElement3.innerHTML==''){
    for(const ingred of ingredients.ingredients){
        const newElement3= document.createElement("div");
        newElement3.innerHTML=`<p>Ingredients: ${ingred.name}</p>`
        htmlElement3.appendChild(newElement3);    
        }

    }
    else{
        htmlElement3.innerHTML= '';
    }


}
    
async function getPictureHogwarts(name){
    const response= await fetch(`${URL_API}/houses/${name}`);
    const data= await response.json()
    return data;
}

async function casesHogwarts(){
    const response= await fetch(`${URL_API}/houses`);
    const data= await response.json()
    return data;
}

