# URL

https://val-alex.github.io/recipe-app/

### Tech Stack

- React.js
- Next.js
- Redux
- Formik
- Styled Components

## App description

I decided to update this up for modern times :)

Still to come:

- Migrating from Formik to React Hook Forms
- Add TypeScript
- Add Material UI v5
- Add Jest and React Testing Library

Using React + Redux, create a simple single page application with 2 views, displaying a list of items retrieved from a public api ( https://spoonacular.com/food-api/docs )

![Wireframe](public/img/wireframe.jpg)
(Wireframe for application)

Pass the ingredients from the Ingredient Query text field to the findByIngredients api. On success, it should display the results on the next screen. Selecting a result should expand the result.
This is a small application so gives an opportunity to demonstrate your technical abilities, development approach and initiative to interpret rough draft requirements.

##### Spoonacular API reference

Sign-up to spoonacular for a free public api and find your API key at https://spoonacular.com/food-api/console#Profile
Documentation on authentication with your API key https://spoonacular.com/food-api/docs#Authentication
Documentation for the findByIngredients endpoint https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients

### Use

This app helps you to find recipes for ingredients you have available

![app-use](public/img/use.png)
(Add ingredients you have separated by comma and click search)

![app-result](public/img/result.png)
(App displays list of recipes that you can make for given ingredients )

## Available Scripts

Install Volta - https://volta.sh/
Install pnpm - https://pnpm.io/

#### `pnpm dev`

#### `pnpm build`

#### `pnpm start`

## Things to Add

- "No recipes found" response if returned empty array
- Error handling
- Selectors for caching
