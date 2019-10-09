 import {elements} from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () =>{
  elements.searchInput.value = '';
};

export const clearList = () => {
    elements.searchResList.innerHTML='';
};

const limitRecipeTitle = (title, limit= 17) => {
    const newTitle = [];
    if(title.length > limit ){
        title.split(' ').reduce(( acc , cur ) =>{
            if(acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')}...`;
    }
    return title;
};

const renderRecipe = (recipe) => {

    const markup=`
         <li>
                    <a class="results__link" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};
const createButton = (page, type) =>`
                <button class="btn-inline results__btn--${type}">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                    </svg>
                    <span>Page ${type === 'prev' ? page-1 : page + 1}</span>
                </button>
      
`;
let button;
const renderButtons =(page, numRes, resPerPage) =>{
    const pages = Math.ceil(numRes/resPerPage);
    if(page===1 && pages>1){
        //only one forward button
        button=createButton(page, "next");
    }else if(page < pages){
        //both buttons
        button=createButton(page, "next");
    }else if(page===pages && pages>1){
        //only one prev button
        button=`${createButton(page, "prev")}
                ${createButton(page, "next")}
        `;
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

 export const renderResults = (recipes, page = 1, resPerPage = 10) =>{
     let start = (page-1)*resPerPage;
     let end = page * resPerPage;
     recipes.slice(start, end).forEach(el => renderRecipe(el));

     renderButtons(page, recipes.length, resPerPage);
 };
