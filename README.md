# The Web-Store App

This project is a demo of a basic online web store and showcases many React modules, including routing and Redux, to name a few. It provides a fundamental structure for developing a full web store.

## Web-Store Features

- The user can register multiple accounts and login using them.
- Add products to the basket form the products page and edit whilst on the basket page.
- Select shipping options
- Viewing total costs including shipping
- Reusable modal for displaying 


## Getting Started

In the project directory, you can run:

### 1. ` npm install`

Loads the dependencies for the project to run correctly. You can view the package.json file for dependency specifics.

### 2. `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Help

If you need help please contact the administrator on jack.johnson@web-store.com

## Project Structure
- src
  - components
    - BasketTable.js
    - Icon.js
    - Menu.js
    - ReusableModal.js
    - Shipment.js
  
  - pages
    - About.js
    - Basket.js
    - Home.js
    - Login.js
    - Products.js
    - Registration.js
  - store
    - basketState.js
    - loginState.js
    - productState.js
    - registrationState.js
    - reusableModalState.js
    - store.js
  - App.js
  - index.js
