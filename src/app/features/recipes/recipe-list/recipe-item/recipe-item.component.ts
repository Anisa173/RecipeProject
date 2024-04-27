import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RecipeModel } from '../../../../shared/models/recipe.model';
import { ReceptServiceService } from 'src/app/shared/services/recept-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit, OnChanges {
  @Input('recipe2') recipe!: RecipeModel;
  @Input() id!: string;
  @Output() recipeSelected = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<RecipeModel>();

  recipe$: Observable<RecipeModel> | undefined;

  constructor(private recepService: ReceptServiceService) {}
  ngOnChanges(): void {
    this.recipe$ = this.recepService.getRecipe(this.id);
  }

  onItemClick(id: string) {
    this.recepService.getRecipe(id).subscribe((_recipe) => {
      this.recipeSelected.emit();
    });
  }

  deleteItem(recipe: RecipeModel) {
    this.recepService.deleteRecept(this.id).subscribe(() => {
      this.deleted.emit();
    });
  }
  ngOnInit(): void {
    console.log('component ITEM initialized');
  }
}
