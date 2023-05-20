/*
 * Title: Math Library
 * Description: Utility library for math-related functions
 * Author: Sudipta Jana
 * Date: 19/may/2023
 *
 */

 // Math object : scaffolding 

const math = {} ; 

//   getRndomNumber function to return a random no. between two number 

math.getRndomNumber = function getRndomNumber(min,max){
  let minimum = min ;
  let maximum = max ;
  minimum = typeof minimum === 'number' ? minimum : 0 ;
  maximum = typeof maximum === 'number' ? maximum : 0 ; 
  return Math.floor(Math.random() * ( maximum - minimum + 1 ) + min )
  
}


module.exports = math ;


