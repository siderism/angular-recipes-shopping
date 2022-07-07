import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Some details about ths recipe', 'https://shop.foodbox.co.nz/files/img/recipe/basiccurry.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
