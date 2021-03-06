import axios from 'axios';

export default class Search{
    constructor(query){
        this.query=query;
    }

    async getResults() {
        const proxy='https://cors-anywhere.herokuapp.com/';
        const key='86c62ba554c83f7c37b99a90578e6a05';
        try{
            const res=await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result=res.data.recipes;
            // console.log(res);
            // console.log(this.result);
        }catch (error) {
            alert(error);
        }
    }
}

