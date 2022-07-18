import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ings: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    //this.ingredients.push(...ingredients);
    for(let ingredient of ings){
      if(this.ingredients.filter(i => i.name === ingredient.name).length > 0){
        //let index = this.ingredients.map((e) => {return e.name}).indexOf(ingredient.name);
        //this.ingredients[index].amount += ingredient.amount;
        this.ingredients.find(x => x.name === ingredient.name).amount += ingredient.amount;
        console.log(ingredient.amount);
      }
      else {
        this.ingredients.push({...ingredient}); //push(Fotis Grammenos) *** special thanks to Stergios for his support and his knowledge + contribution
      }
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
