var words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present','apple'];
//              0       1         2            3             4          5       6 
console.log(words.slice(4, 6)); // show only this number // (number [index], to number [index-1])
// elit and present
console.log(words.splice(5, 6));  // keep this number delete rest
// present and apple

