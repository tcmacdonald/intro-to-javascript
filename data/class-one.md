![Girl Develop It](/images/gdi-ample.png) <!-- .element: class="no-border" -->

---

# Intro to Javascript <small class="gray">Class #1</small>

### Taylor C. MacDonald  <!-- .element: class="dark" -->
http://gdi.tcmacdonald.com

---

## Welcome!

_Girl Develop It is here to provide affordable and accessible programs to learn software through mentorship and hands-on instruction._

---

## Some Rules

* We are here for you&mdash; ask questions!
* Every question is important.
* Help each other.
* Have fun.


---

## Class Overview

* Introductions
* Tools &amp; Vocabulary
* History of Javascript
* Variables
* Conditionals
* Functions

---

## Tell Us About Yourself

* Who are you?
* What do you hope to get out of the class?
* If you could have lunch with anybody (dead or alive) who would it be?

---

## Tools

* __Browser:__ Chrome, [http://google.com/chrome](http://www.google.com/chrome/)
* __Text Editor:__ Sublime Text 3, [http://sublimetext.com/3](http://www.sublimetext.com/3)
* __Console:__ JSBin, [http://jsbin.com/](http://jsbin.com/)
* __Need Help?__: Google (StackOverflow, MDN)

---

## Vocabulary

<dl>
  <dt>Client</dt>
  <dd>The computer requesting the web page.</dd>

  <dt>Server</dt>
  <dd>The computer responding to the request and returning HTML.</dd>
</dl>

Note:
When you load a webpage in your browser, you are the client.

The computer that returns HTML is the server.

---

## Clients &amp; Servers

![](/images/client-server.png)

JavaScript runs "client side"

JavaScript also runs "server side" (node.js)

Note:
Here is a picture of this transaction...

Traditionally, Javascript has always been associated with the client side.

---

## More Vocabulary

<dl>
  <dt>Front-End</dt>
  <dd>The outwardly visible elements of a website or application. (Client Side)</dd>

  <dt>Back-End</dt>
  <dd>The inner workings and functionality of a website or application. (Server Side)</dd>
</dl>

Note:
When you 'view source', what you're seeing is the front-end code. HTML, CSS & Javascript.

Any questions?

---

## what is javascript?

The most popular language on Github.
![Girl Develop It](/images/popularity-on-github.png) <!-- .element: class="no-border" -->

Note:
Javascript is everywhere.

---

## what is javascript?

* The most widely deployed language in history.
* Quirky and misunderstood.
* Small but super fast.

Note:
If you have a smartphone or computer, you can run Javascript.

Javascript syntax is similar to that of C &amp; shares similarities to other languages but has some quirks too...

<ul>
  <li>Object Oriented, but based on a prototypal object system, instead of a class system.</li>
  <li>Poorly documented.</li>
  <li>No good implementations until Google's V8.</li>
</ul>

---

## javascript is not java

<dl>
  <dt>Javascript</dt>
  <dd>Client &amp; server-side scripting language</dd>
  <dt>Java</dt>
  <dd>Development platform designed by Sun Microsystems</dd>
</dl>

Note:
Java is to Javascript as Ham is to Hamster.

Don't confuse the two.

---

## History of JavaScript

* Developed by Brendan Eich at Netscape, 1995
* Originally called Livescript
* Sun develops competing technology... HotJava
* Livescript is renamed Javascript by Marc Andreesen

Note:
Marc Andreesen of Andreeson Horowitz a $4 Billion venture capital firm.

Andreesen Horowitz has invested in companies like Facebook, Twitter, Airbnb, Github, etc.

---

## History of JavaScript

* Microsoft releases JScript, 1996
* Sun and Netscape join forces
* Standardized by ECMA, 1998

Note:
Technically, Javascript is a subset of ECMAScript.

Things were pretty quiet after 1998 until...

---

## History of JavaScript

* AJAX (asynchronous requests), 2005
* jQuery (utility library), 2006
* Google V8 (javascript implementation), 2008
* Node (web server), 2010
* ES6 (next incarnation), 2015

Note:
<b>AJAX</b>  
In programming, "synchronous" refers to executing statements in order. Each statement has to wait for the previous one to finish executing.

For example: if you want to load your latest tweets onto a web page, and you do this synchronously, then a visitor to your site won’t be able to do anything until those tweets are loaded.

<b>Node</b>  
Web server written on top of the Google V8 engine. Capable of handling alot more concurrent requests than contemporary web servers.

<b>ES6</b>  
Who can tell me what the ES in ES6 stands for?

---

## What Can Javascript Do?

<dl>
  <dt>Carousels</dt>
  <dd>http://kenwheeler.github.io/slick</dd>
  <dt>Accordions</dt>
  <dd>http://sandbox.scriptiny.com/javascript-accordion</dd>
  <dt>Modal Windows</dt>
  <dd>http://bootboxjs.com</dd>
  <dt>Games</dt>
  <dd>http://mario5.florian-rappl.de/#game</dd>
</dl>

---

## What Can Javascript Do?

<dl>
  <dt>Graphs</dt> 
  <dd>https://github.com/mbostock/d3/wiki/Gallery</dd> 
  <dt>Physics</dt> 
  <dd>http://wellcaffeinated.net/PhysicsJS/</dd> 
  <dt>Asyncronous Requests</dt> 
  <dd>http://api.jquery.com/jquery.ajax/</dd> 
  <dt>Cookies &amp; Local Storage</dt> 
  <dd>https://mdn.io/cookie/</dd> 
</dl>

---

## What Can Javascript Do?

<dl>
  <dt>Event Handling</dt> 
  <dd>http://api.jquery.com/category/events/</dd> 
  <dt>Form Validation</dt> 
  <dd>http://parsleyjs.org</dd> 
  <dt>Embedded Maps</dt> 
  <dd>https://developers.google.com/maps/web/</dd> 
  <dt>Presentations</dt> 
  <dd>http://lab.hakim.se/reveal-js</dd> 
</dl>

...and countless other things. 

---

## The Most Important<br>Slide of the Day

<br>
What do you need to be successful in this class?

1. Attention to detail.
1. Attention to detail.
1. Attention to detail.

Note:
Javascript is not forgiving. You will encounter problems if you don't pay attention to all the details.

---

## Syntax

* Each line in JavaScript is an instruction. 
* Every instruction ends with a semicolon. 
* When the browser reads it, it "executes the script". 

<br>

    console.log('Hello');

<p>Try it out on [jsbin.com](http://jsbin.com)</p> 

---

## Variables

* Variables hold content 
* Words, numbers, dates, true/false values and more 

Declare a variable (Give it a name) 

    var bananas;


Initialize variable (Give it a value) 

    bananas = 5;


Note:
Remember your high school algebra clas 

Variables are containers for values.

---

## Variables

Declare and initialize at the same time! 

    var bananas = 5;


Change value of variable. 

    bananas = 4; 

---

## Data types

* String
* Number
* Boolean
* Array
* Object
* undefined
* null

Note:
A data-type describes what kinds of values can be stored in a variable.

---

## Data types

### String <!-- .element: class="dark" -->

http://mdn.io/string 

A group of characters in quotes.

    var fruit = "banana";


Note:
You can use single quotes or double quotes.

---

## Data types

### Number <!-- .element: class="dark" -->

http://mdn.io/number 

Integers or decimals, without quotes.

    var pi = 3.14;
    var year = 2013;
    var total_bananas = 200;


Note:
Javascript only has the one Number type.

It's common in other languages to have Integer and Floating Point (decimals) but in JS everything is just a Number.

---

## Data types


### Boolean <!-- .element: class="dark" -->

http://mdn.io/boolean 

True or False 

    var sky_is_blue = true;
    var grass_is_pink = false;

---

## Data types

### Array <!-- .element: class="dark" -->

http://mdn.io/array 

Collections of values. 

    var numbers = [1,2,3,4,5];
    var socks = new Array('pink', 'striped', 'argyle');

---

## Data types

### Object <!-- .element: class="dark" -->

http://mdn.io/object 

Container for key/value pairs. 

    var animals = { cat: 'Fluffy', dog: 'Fido' };

---

## Data types

### undefined <!-- .element: class="dark" -->

http://mdn.io/undefined 

Has not been assigned a value. 

    var favorite_cookie;


---

## Data types

### null <!-- .element: class="dark" -->

http://mdn.io/null 

A purposely empty value (not the same as 0) 

    var favorite_cookie = null;

---

## Naming rules

* Functions and variables can start with a letter, _, or $ 
* Can contain letters, numbers, _ 


    var favorite_cookie;
    var _cookies;
    var $cookieJar1;

---

## Naming rules

Names are case-sensitive 

    var cookie;
    var Cookie;
    var COOKIE;

---

## Expressions

Math-y expressions! 

    var bananas = 5;
    var oranges = 2;
    var fruit = bananas + oranges;

Note:
An expression is any valid unit of code that resolves to a value.

---

## Operators

|Symbol|Meaning|
|---|---|
|`+`|Addition|
|`-`|Subtraction|
|`*`|Multiplication|
|`/`|Division|
|`%`|Modulus|
|`++`|Increment|
|`--`|Decrement|


Note:
Modulus divides the value of one expression by the value of another, and returns the remainder.

---

## Expressions

Word-y expressions! 

    var subject = "cold beverages";
    var sentence = "I like " + subject + ".";

Note:
When the plus operator is used in conjunction with strings, it will "concatenate" the two strings.

---

## Let's Develop It
<br>
**Lifetime supply calculator** 

Ever wondered how much a lifetime supply of your favorite snack or drink is? 

---

## Lifetime supply calculator

__Step #1:__
<br>Create and initialize the following variables...

1. Your Age
1. Your Expected Max Age
1. Estimated Amount Per Day

__Step #2:__
<br>Calculate how many you'd eat/drink in a lifetime.
<br>Log _"I'd eat X in my lifetime."_ to the console.

---

## The if statement

Javascript can execute under certain conditions 

    if (condition here){
      // statement to execute
    }


An example...


    var bananas = 1;
    if (bananas < 2){
      console.log("Buy more bananas!")
    }


---

## Comparisons

|Symbol|Meaning|
|---|---|
|`===`|Equality|
|`!==`|Inequality|
|`>`|Greater than|
|`>=`|Greater than or equal to|
|`<`|Less than|
|`<=`|Less than or equal to|


Don't confuse `=` (assignment) with `===` (comparison) 

Note:
The 3 equal signs mean "equality without type coercion". Using the triple equals, the values must be equal in type as well.

---

## Logical Operators

Evaluate two conditions at once with two ampersands (`&&`)

    var bananas = 5;
    var oranges = 2;

    if (bananas > 3 && oranges > 3) {
      console.log('Eat fruit!');
    }

---

## Logical Operators

|Symbol|Meaning|
|---|---|
|`&&`|AND|
|&#124;&#124;|OR|
|`!`|NOT|


    if (bananas < 2 || oranges < 2) {
      console.log('Buy fruit!');
    }

    if ( !(bananas >= 0) ) {
      console.log('You have negative bananas??');
    }

---

## If/Else Statement

Use `else` to perform an alternative action&hellip;

    var bananas = 5;
    if (bananas > 3){
      console.log('Eat a banana!');
    } else {
      console.log('Buy a banana!');
    }

---

## If/Else Statement

You can use `else if` to have multiple choices

    var age = 20;
    if (age >= 35) {
      console.log('You can vote AND hold any place in government!');
    } else if (age >= 25) {
      console.log('You can vote AND run for the Senate!');
    } else if (age >= 18) {
      console.log('You can vote!');
    } else {
      console.log('You have no voice in government (yet)!');
    }

---

## Let's Develop It

Add an `if/else` statement to our lifetime supply calculator so that if the lifetime supply is greater than 40,000, you say "Wow! That's a lot!" otherwise say, "Moderation is the best!"

---

## Functions

Functions are re-usable collections of statements

Declare a function

    function hello() {
      console.log('Hi!');
    }

Call the function&hellip;

    hello();

---

## Arguments

Functions can take named arguments


    function hello(name) {
      console.log('Hi' + name + '!');
    }

Call the function&hellip;

    hello('Mitch, the Red Panda');
    hello('Harold, the hippo');

    var somebody = 'Pip, the mouse';
    hello(somebody);

---

## Arguments

Functions can take MULTIPLE named arguments

    function add_numbers(num1, num2){
      var result = num1 + num2;
      console.log(result);
    }

Call the function&hellip;

    add_numbers(5, 6);

    var number1 = 12;
    var number2 = 15;
    add_numbers(number1, number2);

---

## Return Values

Functions can return a value


    function add_numbers(num1, num2){
      var result = num1 + num2;
      return result;
    }

For example&hellip;

    var sum  = add_numbers(5, 6);
    console.log(sum);

---

## Variable Scope

JavaScript variables have two scopes: local and global.

<dl>
  <dt>Local Scope</dt>
  <dd>A variable declared inside a function is a local variable and is only accessible within the function.</dd>
  <dt>Global Scope</dt>
  <dd>A variable declared outside a function is a global variable, and its value is accessible throughout your program.</dd>
</dl>

---

## Local Scope

A variable with "local" scope:

    function add_numbers(num1, num2) {
      var result = num1 + num2;
      return result;
    }

For example&hellip;

    var sum  = add_numbers(5, 6);
    console.log(result);  // yields 'undefined'

---

## Global Scope

A variable with "global" scope:

    var result;
    function add_numbers(num1, num2){
      result = num1 + num2;
      return result;
    }

For example&hellip;

    var sum  = add_numbers(5, 6);
    console.log(result); // yields '11'

---

## Let's Develop It

Wrap the calculator in a function named `calculate()`

Call the function from HTML...

    <a href = "#" onclick="calculate()">Click Me</a>

---

## Questions?
