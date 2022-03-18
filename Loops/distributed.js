// Dead Lock Which Goes in Infinite loop
// Here we are priting the console.log ...so here all alu component is busy w
// so all cores came and get distributed
//  check in htop while running this program
// 
var i = 0;
while (i <= 10) {
  console.log(i);
  i--;
}
