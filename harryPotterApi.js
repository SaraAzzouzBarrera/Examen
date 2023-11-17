const URL_API= 'https://wizard-world-api.herokuapp.com';

window.onload= async() => {
    const caharcters= await getCharacters();

    for(const character of characters){
    }






}

async function getCharacters(){
    const response= await fetch(URL_API);
    const data= response.json()
    return data;
}