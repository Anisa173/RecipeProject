import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';

interface ReceptModelDto {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReceptServiceService {
  private url = 'http://localhost:3000/assets/servers/db.json/recipes';
  constructor(private httpCl: HttpClient) {}

  deleteRecept(id: string): Observable<void> {
    return this.httpCl.delete<void>('$(this.url)/${id}');
  }

  /*deleteHero(id: number): Observable<{}> {
  const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('deleteHero'))
    );
} */
  getRecipes(): Observable<RecipeModel[]> {
    return this.httpCl.get<ReceptModelDto[]>(this.url).pipe(
      map((recipes) =>
        recipes.map((recipe) => {
          return this.convertToEntity(recipe);
        })
      )
    );
  }

  getRecipe(id: string): Observable<RecipeModel> {
    return this.httpCl
      .get<ReceptModelDto>('${this.url}/${id}')
      .pipe(map((recipe) => this.convertToEntity(recipe)));
  }

  private convertToEntity(recipes: ReceptModelDto): RecipeModel {
    return {
      id: recipes.id,
      name: recipes.name,
      description: recipes.description,
      imgUrl: recipes.imgUrl,
    };
  }
  addRecipe(
    name: string,
    description: string,
    imgUrl: string
  ): Observable<RecipeModel> {
    return this.httpCl
      .post<ReceptModelDto>(this.url, {
        name: name,
        description: description,
        imgUrl: imgUrl,
      })
      .pipe(map((recipe) => this.convertToEntity(recipe)));
  }
  updateRecipe(recipe: RecipeModel): Observable<RecipeModel> {
    return this.httpCl
      .put<ReceptModelDto>('${this.url}/${id}', recipe)
      .pipe(map((recipe) => this.convertToEntity(recipe)));
  }
}
