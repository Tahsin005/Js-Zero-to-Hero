// import usersData, { myName as aarNaam, visca, getFirstUser } from "./usersData.js";

import productsData from "./productsData.js";
/*
  for default import we don't need to use {}.
  for default import name can be anything, as there is only one export from a particular file... but the best practice is to use the same name as the default export.
*/

import * as something from './usersData.js'


// console.log(getFirstUser())
// console.log(usersData[0])
// console.log(aarNaam)
// console.log(visca)

// console.log(productsData[0])


console.log(something.default)
console.log(something['myName'])