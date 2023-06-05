import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'),
    new Recipe('Another Recipe', 'This is simply a test','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
