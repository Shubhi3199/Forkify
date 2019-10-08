import Search from "./models/Search";
import { elements } from "./views/base";
import * as searchView from './views/searchView';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 **/
const state={};

const controlSearch = async () =>{
  // 1. get query from view
  const query= searchView.getInput();
  alert(query);

  // 2. new search object and add it to state
    if(query){
        state.search = new Search(query);

        //3. wait for results and spinner in UI

        //4. search for recipes
        await state.search.getResults();

        //5. Render the result on the URL
        searchView.renderResults(state.search.result);

        console.log(state.search.result);
    }
};

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});
