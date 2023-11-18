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
    const htmlElement2= document.getElementById("houses");
    const newElement4= document.createElement("thead");
    const newElement5= document.createElement("tbody");
    if(house.name=="Gryffindor"){
        newElement4.innerHTML=`<th><h3>${house.name}</h3></th>`
        newElement5.innerHTML=`<td><img id="gryffindor" src="pictures/gryffindor.jpg"></td>`
        }else if(house.name=="Slytherin"){
            newElement4.innerHTML=`<th><h3>${house.name}</h3></th>`
            newElement5.innerHTML=`<td><img id="slytherin" src="pictures/slytherin.jpg"></td>`
        }else if(house.name=="Hufflepuff"){
            newElement4.innerHTML=`<th><h3>${house.name}</h3></th>`
            newElement5.innerHTML=`<td><img id="hufflepuff" src="pictures/hufflepuff.jpg"></td>`
        }else if(house.name=="Ravenclaw"){
            newElement4.innerHTML=`<th><h3>${house.name}</h3></th>`
            newElement5.innerHTML=`<td><img id="ravenclaw" src="pictures/ravenclaw.jpg"></td>`
        }
        htmlElement2.querySelector("table").appendChild(newElement4);
        htmlElement2.querySelector("table").appendChild(newElement5);
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