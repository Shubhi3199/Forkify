import axios from 'axios';
async function getResults(query) {
    const proxy='https://cors-anywhere.herokuapp.com/';
    const key='86c62ba554c83f7c37b99a90578e6a05';
    try{
        const result=await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes=result.data.recipes;
        console.log(result);
        console.log(recipes);
    }catch (error) {
        alert(error);
    }

}
getResults('pizza');

//
//https://www.food2fork.com/api/search
