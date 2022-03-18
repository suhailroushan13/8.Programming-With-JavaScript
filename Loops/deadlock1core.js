// Dead Lock Which Goes in Infinite loop
// 1 core is in 100% in use out of 12 cores in ubuntu a
//  check in htop while running this program

var i = 0; 
while (i <= 10)
{
    // console.log(i);
    i++;
    i--;

    
}




