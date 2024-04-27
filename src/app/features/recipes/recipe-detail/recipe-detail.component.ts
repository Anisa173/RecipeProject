import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { ReceptServiceService } from 'src/app/shared/services/recept-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnChanges {
  @Input() recipeCh!: RecipeModel;
  @Output() change = new EventEmitter<RecipeModel>();
  @Input() id!: string;

  recipeCh$: Observable<RecipeModel> | undefined;

  constructor(private receptService: ReceptServiceService) {}

  ngOnChanges(): void {
    this.recipeCh$ = this.receptService.getRecipe(this.id);
  }

  editRecipedata(recipeCh: RecipeModel) {
    this.receptService.updateRecipe(recipeCh).subscribe((_recipeCh) => {
      alert('Datas of ${recipeCh.name} was changed!');
      this.change.emit(this.recipeCh);
    });
  }
}
