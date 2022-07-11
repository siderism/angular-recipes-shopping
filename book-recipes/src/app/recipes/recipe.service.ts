import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Some details about ths recipe', 'https://shop.foodbox.co.nz/files/img/recipe/basiccurry.jpg')
  ];
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
