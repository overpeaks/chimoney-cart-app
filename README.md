## Running the app

First, install the node modules:

```bash
yarn install
```

Add the API key in the .env file

```bash
API_KEY=api_key_here
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Additional Features implemented

- Retrieving the products from the Chimoney API
- Products list page with pagination
- Summary section on cart page
- Cart State only stores IDs and Quantity
- Made sure the website is mobile friendly

## Design Process

I approached the project by keeping a global Cart state which was passed down to other pages when used. I only retrieved the products on the pages where they were needed (which happens to be all of them in this project), but this could be changed to either be retrieved and used globally, or just for the needed pages to keep API calls and retrieved data to a minimum. The products were only used for displaying products or calculating costs, otherwise the cart was used for updating and keeping track of added items and the quantities (because the cart was requested to only contain IDs and quantity, I set the gift card items to use the minimum gift card amount as the price).

I used NextJS with React which helped keep pages separate and for easier routing. I used TailwindCSS for the CSS library which just made styling a little easier by having relevant classes that I can add with the needed CSS code instead of having to delve into the styles file. 

I tried to keep the website looking as clean, minimal, and clear as I could. One of my goals was to make sure all the elements were clear in their use and function and how they connected to each product. I made sure to create separate components where it made sense, and tried to keep the code functions clear and descriptive in what they do and why. In some cases I had to do what felt like ugly solutions, but because of the way the library (eg. NextJS) functioned there was limited options (eg. adding a state for if the cart has been loaded before allowing the cart to be saved to local storage to prevent it from being overwritten).

## Improving the app

- Show a loading screen/popup when going to another page or when retrieving data. While the server is retrieving the API data there is a bit of a delay causing a 1-2 second pause before it goes to the next page.
- Cache pages and/or products from the API. Depending on how often the products get updated, it could significantly increase page loading if the products where cached for some time.
- Only retrieve the needed products (eg. by requesting a certain amount of products for each paginated page, or just retrieving a specific set of products if no others are needed (eg. on a product page))
- Lazy loading products/images. Not as useful on desktop with the current design of the app, but could be useful for mobile or if the products instead loaded as you scroll instead of the pagination.
- Add more animations for different actions to make it more apparent to the user what just happened and is less jarring. Eg, When removing a product on the cart page, have it collapse instead of instantly restructuring. 

