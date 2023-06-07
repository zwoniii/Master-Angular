import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Rose punch',
      'Graceful punch with pink sparkling and berries. Not "drunk" at all, but refreshing and invigorating. Instant heat shot.',
      'https://www.gastronom.ru/binfiles/images/20170727/b780efa5.jpg',
      [
        new Ingredient('Sparkling rose wine', 300),
        new Ingredient('Watermelon syrup', 50),
        new Ingredient('Lemon juice', 50),
        new Ingredient('Sake classic', 50),
        new Ingredient('Soda', 50)
      ]
      ),
    new Recipe(
      'Mint gingerbread',
      'Cocktail Mint gingerbread, also known as gingerbread, as it is prepared with ginger ale and gin-based ginger syrup, will warm you up on a cool spring or summer evening.',
      'https://www.gastronom.ru/binfiles/images/20190529/b8e0cdfc.jpg',
      [
        new Ingredient('Gin', 50),
        new Ingredient('Syrup "Gingerbread"', 20),
        new Ingredient('Lemon juice', 20),
        new Ingredient('Ginger ale', 60),
        new Ingredient('Mint leaves', 10)
      ]
      )
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
