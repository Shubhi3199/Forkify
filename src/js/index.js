import Search from "./models/Search";
/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 **/
const state={};

const controlSearch = async () =>{
  // 1. get query from view
  const query='pizza';

  // 2. new search object and add it to state
    if(query){
        state.search = new Search(query);

        //3. wait for results and spinner in UI

        //4. search for recipes
        await state.search.getResults();

        //5. Render the result on the URL
        console.log(state.search.result);
    }
};

document.querySelector('.search').addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});
