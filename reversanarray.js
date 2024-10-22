//    [4,5,6,7,2,9,24]
const numbers = [1,2,3,4,5,6,7];

console.log(numbers);

const reversed =  numbers.reverse();

console.log(reversed);

//
const rev_numbers = [];

for(const num of numbers){
    //console.log(num);
    //rev_numbers.push(num);
    rev_numbers.unshift(num);
}
console.log(rev_numbers);


for(let i = 0; i< numbers.length; i++){
    const num = numbers[i];
    rev_numbers.unshift(num);
}


// reverse 
cons rev_rev_numbers = [];
for(let i = numbers.length-1 ; i >=0; i--){
    const num = numbers[i];
    console.log(num);
}



//comment
Here’s a version of your code with comments to explain each section:

```javascript
// Original array
const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers); // Prints the original array: [1, 2, 3, 4, 5, 6, 7]

// Reverse the array using the built-in reverse() method
const reversed = numbers.reverse(); // This modifies the original array
console.log(reversed); // Prints the reversed array: [7, 6, 5, 4, 3, 2, 1]

// Manually reversing the array using unshift
const rev_numbers = [];
for (const num of numbers) {
    // Adding each element to the beginning of the new array
    rev_numbers.unshift(num); 
}
console.log(rev_numbers); // Prints the manually reversed array: [1, 2, 3, 4, 5, 6, 7]

// This second loop does the same operation but iterates through the original array using an index
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    // Adds elements again to the beginning of rev_numbers, but they are already reversed
    rev_numbers.unshift(num);
}

// Reverse loop to print numbers in reverse order (without modifying the array)
const rev_rev_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    console.log(num); // Prints each number in reverse order from the original array
}
```

### Key points:
1. `reverse()` is an in-place method that modifies the original array.
2. `unshift()` adds elements to the beginning of an array, which you used to manually reverse the array.
3. The second loop with `unshift()` seems redundant, as it adds already reversed elements to the start of the `rev_numbers` array, which will cause unexpected behavior.
4. The final `for` loop prints the numbers in reverse order without modifying the array.



এই কোডটিকে বাংলা ভাষায় মন্তব্যসহ নিচে দেওয়া হলো:

```javascript
// মূল অ্যারে
const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers); // মূল অ্যারে প্রিন্ট করবে: [1, 2, 3, 4, 5, 6, 7]

// reverse() মেথড ব্যবহার করে অ্যারেটিকে উল্টানো
const reversed = numbers.reverse(); // এটি মূল অ্যারেটিকেই পরিবর্তন করে
console.log(reversed); // উল্টানো অ্যারে প্রিন্ট করবে: [7, 6, 5, 4, 3, 2, 1]

// unshift ব্যবহার করে অ্যারে ম্যানুয়ালি উল্টানো
const rev_numbers = [];
for (const num of numbers) {
    // প্রতিটি উপাদান নতুন অ্যারের শুরুতে যোগ করা
    rev_numbers.unshift(num); 
}
console.log(rev_numbers); // ম্যানুয়ালি উল্টানো অ্যারে প্রিন্ট করবে: [1, 2, 3, 4, 5, 6, 7]

// এই দ্বিতীয় লুপটি একই কাজ করছে, তবে ইন্ডেক্স ব্যবহার করে মূল অ্যারেটি পুনরায় ক্রমানুসারে চলে
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    // rev_numbers অ্যারের শুরুতে আবার উপাদান যোগ করা হচ্ছে, যদিও এগুলো ইতিমধ্যে উল্টানো আছে
    rev_numbers.unshift(num);
}

// অ্যারেটিকে পরিবর্তন না করে উল্টানো ক্রমে সংখ্যা প্রিন্ট করা
const rev_rev_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    console.log(num); // মূল অ্যারে থেকে প্রতিটি উপাদান উল্টানো ক্রমে প্রিন্ট করবে
}
```

### মূল পয়েন্টসমূহ:
1. `reverse()` হলো একটি in-place মেথড, যা মূল অ্যারেকেই পরিবর্তন করে।
2. `unshift()` মেথডটি নতুন উপাদানকে অ্যারের শুরুতে যোগ করে, যেটি আপনি অ্যারেটি ম্যানুয়ালি উল্টানোর জন্য ব্যবহার করেছেন।
3. দ্বিতীয় লুপটি ইতিমধ্যেই উল্টানো উপাদানগুলোকে পুনরায় rev_numbers অ্যারের শুরুতে যোগ করছে, যা কিছুটা অপ্রয়োজনীয়।
4. শেষের `for` লুপটি মূল অ্যারেটি পরিবর্তন না করে উল্টানো ক্রমে সংখ্যাগুলো প্রিন্ট করছে।






































JavaScript-এ কোনো অ্যারে (array) রিভার্স করার দুইটি পদ্ধতি আছে—একটি `reverse()` মেথড ব্যবহার করে এবং আরেকটি ম্যানুয়ালি (লুপ বা অন্যান্য উপায়ে) করে। আসুন সহজ ভাষায় দুটো পদ্ধতি ব্যাখ্যা করি।

### ১. `reverse()` মেথড ব্যবহার করে:
JavaScript-এ `reverse()` একটি বিল্ট-ইন মেথড, যা অ্যারেটিকে উল্টো করে ফেলে। এই পদ্ধতিতে খুব সহজেই কাজ করা যায়।

#### উদাহরণ:
```javascript
let array = [1, 2, 3, 4, 5];
array.reverse();  
console.log(array);  
```
**ফলাফল:**
```
[5, 4, 3, 2, 1]
```

এখানে `reverse()` মূল অ্যারেটিকে পরিবর্তন (মডিফাই) করে।

### ২. লুপ ব্যবহার করে ম্যানুয়ালি অ্যারে রিভার্স করা:
`reverse()` মেথড ছাড়াও আপনি নিজে থেকে লুপ ব্যবহার করে অ্যারেটি রিভার্স করতে পারেন। নিচে একটি উদাহরণ দেওয়া হলো।

#### উদাহরণ:
```javascript
let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log(reversedArray);
```
**ফলাফল:**
```
[5, 4, 3, 2, 1]
```

### ব্যাখ্যা:
- প্রথমে আমরা একটি খালি `reversedArray` তৈরি করি।
- তারপর মূল `array`-এর শেষ এলিমেন্ট থেকে প্রথম পর্যন্ত (মানে ইনডেক্স `length - 1` থেকে `0` পর্যন্ত) একটি লুপ চালাই।
- প্রতিটি এলিমেন্টকে `reversedArray`-তে `push()` মেথডের মাধ্যমে যোগ করি।

### ৩. Swap মেথড ব্যবহার করে (In-Place Reverse):
কোনো নতুন অ্যারে তৈরি না করে মূল অ্যারেটির এলিমেন্টগুলোর অবস্থান অদল-বদল (swap) করে একে রিভার্স করা যায়।

#### উদাহরণ:
```javascript
let array = [1, 2, 3, 4, 5];
let start = 0;
let end = array.length - 1;

while (start < end) {
  let temp = array[start];
  array[start] = array[end];
  array[end] = temp;
  start++;
  end--;
}

console.log(array);
```
**ফলাফল:**
```
[5, 4, 3, 2, 1]
```

### ব্যাখ্যা:
- আমরা প্রথম ও শেষ এলিমেন্টকে অদল-বদল (swap) করি।
- তারপর প্রথম ইনডেক্সকে ১ বাড়াই (`start++`) এবং শেষ ইনডেক্সকে ১ কমাই (`end--`)।
- এভাবে মধ্যবিন্দু পর্যন্ত চালিয়ে যাই।

এই পদ্ধতিতে কোনো অতিরিক্ত মেমোরি ব্যবহার হয় না এবং মূল অ্যারেটি পরিবর্তন হয়।

এই তিনটি পদ্ধতিই অ্যারে রিভার্স করার জনপ্রিয় ও কার্যকর উপায়।