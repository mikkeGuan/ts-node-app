# ts-node-app
School exercise Node.js & Express backend: TypeScript, Express-validator, middleware

This project demonstrates a simple backend application using Express.js for handling routes related to categories and buildings.

# Overview
The project includes two main route files, src/routes/category.ts and src/routes/building.ts, which handle operations related to categories and buildings, respectively.

# Category Route
The Category route supports the following operations:

**GET /api/category:** Retrieves all categories.
**GET /api/category/:id:** Retrieves a specific category by its ID.
**POST /api/category:**  Creates a new category.
**PUT /api/category/:id:**  Updates an existing category by its ID.
Three fake Category routes are preconfigured with names like "Horror," "Comedy," and "Action."

Programming logic is implemented to check that the POSTed Category's name doesn't already exist and that the PUTted Category's ID exists.

Validators are incorporated to ensure the integrity of the data, including mandatory name validation and optional description validation.

# Building Route
The Building route supports similar operations to the Category route.

**GET /api/building:** Retrieves all buildings.
**GET /api/building/:id:** Retrieves a specific building by its ID.
**POST /api/building:** Creates a new building.
**PUT /api/building/:id:** Updates an existing building by its ID.
Three fake Building routes are preconfigured with names like "Päärakennus," "Musiikkitalo," and "Keskuskirjasto."

Similar programming logic and validators are applied as in the Category route.

# Getting Started
Follow the lesson recording or instructions provided to set up the backend for one route. Additional modules may be required, so make sure to install them using:

```
bash
Copy code
npm install
After the setup, you can run the backend using:

bash
Copy code
npm start
Visit http://localhost:3333/api to access the API.
```


# Testing
Test the implemented routes using Postman or other API testing tools. Ensured that the routes behave as expected, and explore different scenarios.

# Built With
- Typescript
- Node.js
- Express
- Body-parser
- Cors
- Dotenv

# License
This project is licensed under the MIT - see the LICENSE file for details.
