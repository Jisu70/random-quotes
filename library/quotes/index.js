/*
 * Title: Quotes Library
 * Description: Utility library for getting a list of Quotes
 * Author: Sudipta Jana (Learn with Sudipta)
 * Date: 19/may/23
 *
 */

// Dependencies 

const fs = require('fs') ;

// Quots object 

const quots = {} ; 

quots.allQuotes = function allQuotes(){
// Read the file containing  text quotes 
  
  const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`,'utf-8') ; 

//  Turn the string into Arrays 
  
  const arrayQuotes = fileContents.split(/\r?\n/) ;

// Return the Array 
  return arrayQuotes ;
  
}

module.exports = quots;
