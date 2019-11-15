import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('A test Recipe 1', 'This is a test recipe', 'https://commons.wikimedia.org/wiki/File:Recipe_logo.jpeg'),
    new Recipe('A test Recipe 2', 'This is a test recipe', 'https://commons.wikimedia.org/wiki/File:Recipe_logo.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
