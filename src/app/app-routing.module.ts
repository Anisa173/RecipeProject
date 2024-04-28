import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './features/recipes/recipe-list/recipe-item/recipe-item.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent, canActivate: [authGuard] },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'recipes/:id', component: RecipeItemComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
