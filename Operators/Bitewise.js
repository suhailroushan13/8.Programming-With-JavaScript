/*
Bitwise AND	a & b	Returns a one in each bit position for which the corresponding bits of both operands are ones.
Bitwise OR	a | b	Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
Bitwise XOR	a ^ b	Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]
Bitwise NOT	~ a	Inverts the bits of its operand.
Left shift	a << b	Shifts a in binary representation b bits to the left, shifting in zeros from the right.
Sign-propagating right shift	a >> b	Shifts a in binary representation b bits to the right, discarding bits shifted off.
Zero-fill right shift	a >>> b	Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.



*/
var a = 10;
var b = 5;
console.log(a & b);// (0 and 0 is 0) ....(1 and 1 is 1) ....(0 and 1 is 0) .....(1 and 0 is 0)
console.log(a | b); // (0 and 0 is 0) ....(1 and 1 is 1) ....(0 and 1 is 1) .....(1 and 0 is 1)
console.log(a ^ b); // Bitwise XOR Operator Gives Same binary 0 and different binary gives 1
console.log(~a); // Bitwise Not is also knowns as 1's complement operator (it does add 1 and then adds negative symbol)........

// BITWISE NOT

// binary of a of 10 is 1010
// a = 0000 1010....here the first digit is MSB
//~a = 1111 0101... here the first digit is MSB

// MSB is first digit and LSB is last digit

// if MSB is 0 then its a positive number
// if MSB is 1 then its a negative number

// add sign to it either its positive or negative


// So now we have ~a which is a negative number = 1111 1010
// If MSB is 1 after inverting bit then do 2's complement
//  2's complement = 1's complement + 1
//  2's complement = Inverting bits + 1

// Now do 2's complement of ~a =  - 1111 0101

//              ~a = - 1111 0101

//  1's complement =   0000 1010  /// You Basically Add 10 + 1 which is 11
//                 = -        +1
// ----------------------------------------------------------------
//                     0000 1011 

//  You Added First 5 + 1 which is 6 
//  and you took negative sign from MSB after inverting to it
// and you took sign of negative from inverting



// 10 u have now did invert ...now u have  -10
//  u took (-) from -10 and added 10+1 which is 11 and u added that - sign to it 
//  which became -11

// 