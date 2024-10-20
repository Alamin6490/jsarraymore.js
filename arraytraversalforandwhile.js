/**
 * LOOPING Technique
 * 1. for loop
 * 2.while loop
 * 3.do while--->ignore
 * 4.for of  ---> array loop korar jonno
 * 5. for in ---> object loop korar jonno
 * 
 */

const friends = ['Elon','munim','jakir','yamin'];
for(const friend of friends){
    //console.log(friends);
}

for(let i = 0; i < friends.length ; i++){
    console.log(i);
    console.log(friends[i]);
}

//
const numbers = [5,64,7,8,44,66,77,778,88]

for(let i =0; i < numbers.length; i++){
    console.log(numbers[i]);
}

let i = 0;
while(i < friends.length){
    console.log(friends[i]);
    i++;
}

let n = 0;
while(n < numbers.length){
    console.log(numbers[n])
    n++;
}
 