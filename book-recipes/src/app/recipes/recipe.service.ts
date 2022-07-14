import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Some details about ths recipe', 
      'https://shop.foodbox.co.nz/files/img/recipe/basiccurry.jpg', 
      [
        new Ingredient('Meat', 2),
        new Ingredient('French Fries', 15)
      ])
  ];

  constructor(private shoppinListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinListService.addIngredients(ingredients.slice());
  }
}
