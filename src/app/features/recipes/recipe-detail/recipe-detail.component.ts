import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { ReceptServiceService } from 'src/app/shared/services/recept-service.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnChanges, OnInit {
  @Input() recipeCh!: RecipeModel;
  @Output() change = new EventEmitter<RecipeModel>();
  @Input() id!: string;

  recipeCh$: Observable<RecipeModel> | undefined;

  constructor(
    private receptService: ReceptServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeCh$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.receptService.getRecipe(String(params.get('id')));
      })
    );
  }
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
