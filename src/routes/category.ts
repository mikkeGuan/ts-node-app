import express, { Response, Request } from 'express';
import { requestErrorHandler, successHandler } from '../responseHandler/index.js';
import { validate, validateDescription, validateIdObl, validateNameObl } from '../validationHandler/index.js';
import { Category } from '../types.js';

const category = express.Router();
const categorylist : Category[] = [
    {id:3001,name:"horror",description:""},
    {id:3002,name:"comedy",description:"asdjasf"},
    {id:3003,name:"action",description:"asdasdasdas"} 
];

//get all buildings
category.get(
  '/',
  (req: Request, res: Response) => {
        successHandler(
          req,
          res,
          categorylist,
          'Successfully read the buildings from DB',
        );
  }
);

category.get(
    '/:id',
    validateIdObl,
    [validate],
    (req: Request, res: Response) => {
      const id:number = Number(req.params.id);

      const matchingOnes = categorylist.filter(
          (value) => value.id === id
      );
      
      if(matchingOnes.length===1){    // search by primary key: should find just 1
        successHandler(
          req,
          res,
          matchingOnes[0],
          "Successfully read one building",
        );
      } else {
        requestErrorHandler(
          req,
          res,
          `No building found with id: ${id}`
        )
      }

    }
  );

  category.post(               // CREATE building to DB
    '/',
    validateNameObl,
    validateDescription,
    [validate],
    (req: Request, res: Response) => {
      // const id:number = Number(req.body.id);  //Correction, no id in POST

      const idFromDB:Number = 3004;
      // You can add more check logic, but here just example of success case
      successHandler(
        req,
        res,
        idFromDB,
        `Successfully created a new building ${idFromDB} `,
      );
    }
  );

  category.put(                  // UPDATE existing building in DB
    '/',
    validateIdObl,
    validateNameObl,
    [validate],
    (req: Request, res: Response) => {
      const id:number = Number(req.body.id);

      // You can add more check logic, but here just example of success case
      successHandler(
        req,
        res,
        1,        // Number of affected rows = updated rows
        `Successfully updated building with id: ${id}`,
      );
    }
  );




export default category;