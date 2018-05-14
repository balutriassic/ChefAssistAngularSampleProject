import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [new Recipe('The Real Deal With Hunan Cuisine',
'Chairman Mao Zedong, who hailed from spice-loving Hunan province, once said, "You can\'t be a revolutionary if you don\'t eat chilies."' +
' The Hunanese food writer Liu Guochu says Mao loved spice so much he sprinkled ground chilies on slices of watermelon.',
'https://www.seriouseats.com/images/2015/01/20150130-hunan-manor-beef-max-falkowitz.jpg'),
new Recipe('The Real Deal With Hunan Cuisine',
'Chairman Mao Zedong, who hailed from spice-loving Hunan province, once said, "You can\'t be a revolutionary if you don\'t eat chilies."' +
' The Hunanese food writer Liu Guochu says Mao loved spice so much he sprinkled ground chilies on slices of watermelon.',
'https://www.seriouseats.com/images/2015/01/20150130-hunan-manor-beef-max-falkowitz.jpg')

];
  constructor() { }

  ngOnInit() {
  }

}
