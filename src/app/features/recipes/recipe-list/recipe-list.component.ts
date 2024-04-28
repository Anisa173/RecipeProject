import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { ReceptServiceService } from 'src/app/shared/services/recept-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnChanges {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  @Output() added = new EventEmitter<RecipeModel>();
  @ViewChild('inputElement') input!: ElementRef;

  selectedRecipe!: RecipeModel | undefined;
  recipes!: RecipeModel[];
  constructor(private receptService: ReceptServiceService) {}

  ngOnChanges(changes: SimpleChanges): void {
    ('Method is implemented succesfully.');
  }

  ngOnInit() {
    console.log('component initialized');
    this.getRecipes();
  }

  getRecipes() {
    //posts?_page=1&_per_page=25

    this.receptService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
  createRecept(name: string, description: string, imgUrl: string) {
    this.receptService
      .addRecipe(name, description, imgUrl)
      .subscribe((recipeCh) => {
        this.added.emit(recipeCh);
      });
  }
  onSelected(recipe: RecipeModel) {
    this.receptService.getRecipes().subscribe((_recipes) => {
      this.recipeWasSelected.emit(recipe);
    });
  }
  onDelete(recipes: RecipeModel[]) {
    this.recipes = this.recipes.filter(
      (recipe) => recipe !== this.selectedRecipe
    );
    this.selectedRecipe = undefined;
  }

  add() {
    // console.log(input.value)
    console.log(this.input.nativeElement.value);
  }
}
