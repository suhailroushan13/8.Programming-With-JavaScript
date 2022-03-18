/* Removes the property from the object. */
// A unary operation is an operation with only one operand.

// delete
// The delete operator deletes an object's property. The syntax is:

delete object.property;
delete object[propertyKey];
delete objectName[index];
// where object is the name of an object, property is an existing property, and propertyKey is a string or symbol referring to an existing property.

// If the delete operator succeeds, it removes the property from the object. Trying to access it afterwards will yield undefined. The delete operator returns true if the operation is possible; it returns false if the operation is not possible.

delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = {h: 4};
delete myobj.h; // returns true (can delete user-defined properties)

// typeof
// The typeof operator is used in either of the following ways:

typeof operand
typeof (operand)
// The typeof operator returns a string indicating the type of the unevaluated operand. operand is the string, variable, keyword, or object for which the type is to be returned. The parentheses are optional.

// Suppose you define the following variables:

var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();
// The typeof operator returns the following results for these variables:

typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"
// For the keywords true and null, the typeof operator returns the following results:

typeof true; // returns "boolean"
typeof null; // returns "object"
// For a number or string, the typeof operator returns the following results:

typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"
// For property values, the typeof operator returns the type of value the property contains:

typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"