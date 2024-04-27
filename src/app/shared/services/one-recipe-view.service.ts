import { Injectable } from '@angular/core';
import { ReceptServiceService} from './recept-service.service';
import { RecipeModel } from '../models/recipe.model';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OneRecipeViewService {

private recipe:RecipeModel|undefined

  constructor(private recipeService: ReceptServiceService) {}

 //to view every recipe that is clicked
 getRecipe(id:string):Observable<RecipeModel>{return this.recipeService.getRecipes().pipe(switchMap(recipes=>(if(!this.recipe){this.recipe=recipes[id];}return of(this.recipe);)));}













}
