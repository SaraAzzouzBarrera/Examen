const URL_API= 'https://wizard-world-api.herokuapp.com';

window.onload= async() => {
    const characters= await getCharacters();
    const cases= await casesHogwarts();
    for(const character of characters){
        const htmlElement= document.getElementById("characters");
        const newElement= document.createElement("div");
        newElement.innerHTML=`
            <h2 class="characters">- ${character.lastName}</h2>
            <button id="destacarButton" onClick="getFavourits('${character.lastName}')">
            Highlight ${character.lastName}
            </button>`
            htmlElement.appendChild(newElement);

            for (const elixir of character.elixirs) {
        const newElement2= document.createElement("div");
        const ingredientes= `ingredients${elixir.id}`;
        newElement2.innerHTML=`<h4> 🧉 Elixirs: ${elixir.name}</h5>
        <button class="button" onclick= "elixir('${elixir.id}')">Ingredients</button>
        <div id="${ingredientes}"></div>`
        htmlElement.appendChild(newElement2); 
        }
    }

    for(const house of cases){
    const htmlElement2= document.getElementById("table");
    const newElement4= document.createElement("thead");
    const newElement5= document.createElement("tbody");
    if(house.name=="Gryffindor"){
        newElement4.innerHTML=`<th><h3>${house.name}</h3></th>
        <button class="houseButton" onclick= "getFavouriteHouse('${house.name}')">Highlight</button>`        
        newElement5.innerHTML=`<td id="imagenes"><img id="gryffindor" src="pictures/gryffindor.jpg"></td>`
        }else if(house.name=="Slytherin"){
            newElement4.innerHTML=`<th><h3>${house.name}</h3></th>
            <button class="houseButton" onclick= "getFavouriteHouse('${house.name}')">Highlight</button>`
            newElement5.innerHTML=`<td id="imagenes"><img id="slytherin" src="pictures/slytherin.jpg"></td>`
        }else if(house.name=="Hufflepuff"){
            newElement4.innerHTML=`<th><h3>${house.name}</h3></th>
            <button class="houseButton" onclick= "getFavouriteHouse('${house.name}')">Highlight</button>`
            newElement5.innerHTML=`<td id="imagenes"><img id="hufflepuff" src="pictures/hufflepuff.jpg"></td>`
        }else if(house.name=="Ravenclaw"){
            newElement4.innerHTML=`<th><h3>${house.name}</h3></th>
            <button class="houseButton" onclick= "getFavouriteHouse('${house.name}')">Highlight</button>`
            newElement5.innerHTML=`<td id="imagenes"><img id="ravenclaw" src="pictures/ravenclaw.jpg"></td>`
        }
        htmlElement2.appendChild(newElement4);
        htmlElement2.appendChild(newElement5);
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
        newElement3.innerHTML=`<p id="ingredients">Ingredients: ${ingred.name}</p>`
        htmlElement3.appendChild(newElement3);    
        }

    }
    else{
        htmlElement3.innerHTML= '';
    }

}
   
async function getFavourits(name){
    const htmlElement4= document.getElementById("favCharacters");
    if(htmlElement4.innerHTML==''){
        const newElement4= document.createElement("div");
        newElement4.innerHTML=`<p>- ${name}</p>`
        htmlElement4.appendChild(newElement4);    
        }
    
    else{
        htmlElement4.innerHTML= '';
        const newElement4= document.createElement("div");
        newElement4.innerHTML=`<p>- ${name}</p>`
        htmlElement4.appendChild(newElement4);  
        }
}

async function getFavouriteHouse(house){
    const htmlElement4= document.getElementById("favHouse");
    if(htmlElement4.innerHTML==''){
        const newElement4= document.createElement("div");
        newElement4.innerHTML=`<p>- ${house}</p>`
        htmlElement4.appendChild(newElement4);    
        }
    
    else{
        htmlElement4.innerHTML= '';
        const newElement4= document.createElement("div");
        newElement4.innerHTML=`<p>- ${house}</p>`
        htmlElement4.appendChild(newElement4);  
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
function getHousesTest(button){
    const htmlElement5= document.getElementById("image");
    htmlElement5.innerHTML = '';
    const newElement5= document.createElement("div");
    newElement5.innerHTML=`
    <h3 id="yourHouse">🏘 Your house is:</h3>
    <img id="img" src="pictures/${button}.jpg">`
    htmlElement5.appendChild(newElement5);
}