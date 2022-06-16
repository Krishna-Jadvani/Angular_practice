import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() RecipewasSelected= new EventEmitter<Recipe>();

  recipes: Recipe[] =[
    new Recipe('A test','test desc','data:image/jpeg;base64,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'),
    new Recipe('A test1','test desc1','data:image/jpeg;base64,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'),
    new Recipe('A test2','test desc2','https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe)
  {
    this.RecipewasSelected.emit(recipe);

  }

}
