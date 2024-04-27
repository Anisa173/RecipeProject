import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';
import { RecipeModel } from '../../shared/models/recipe.model';
import { LoggingService } from '../../shared/services/logging.service';
import { ReceptServiceService } from 'src/app/shared/services/recept-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  name: string = '';
  desc: string = '';
  imgUrl: string = '';

  constructor(
    private logging: LoggingService,
    private recipeServ: ReceptServiceService
  ) {
    // console.log('RecipesComponent constructor');
    // console.log(this.logging.getStatus())
    // this.logging.setStatus('RecipesComponent')
    // console.log(this.logging.getStatus())
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }

  recipe!: RecipeModel;

  recipes!: RecipeModel[];

  inputChange(recipe1: RecipeModel) {
    this.recipe = recipe1;
    console.log(`Recipe is updated: ${this.recipe}`);
  }
  onAdded(recipe: RecipeModel) {
    this.recipes.push(recipe);
  }
}
