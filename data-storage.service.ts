import {Injectable} from '@angular/core';
import {HttpModule} from '@angular/common/http';


@Injectable({providedIn :'root'})
export class DataStorageService{
constructor(private http : HttpClient private recipeService : RecipeService){

}

storageRecipe();
const recipes = this.recipeService.getRecipes();
this.http.put('',recipes)
.subscribe(response =>{
	console.log('response');
});
	
}

fetchRecipes(){
	this.http.get('').subscirbe(recipes =>{
	console.log('recipes');
	})
}