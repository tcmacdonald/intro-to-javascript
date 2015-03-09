![Girl Develop It](gdi/images/white-logo.png) <!-- .element: class="no-border" -->

---

# Intro to Javascript <small>Class #1</small>
<br>

### Taylor C. MacDonald  <!-- .element: class="white" -->

tcmacdonald@gmail.com / [@tcmacdonald](http://twitter.com/tcmacdonald)

---

## Welcome!

_Girl Develop It is here to provide affordable and accessible programs to learn software through mentorship and hands-on instruction._

---

## Some Rules

* We are here for you&mdash; ask questions! <!-- .element: class="fragment" -->
* Every question is important. <!-- .element: class="fragment" -->
* Help each other. <!-- .element: class="fragment" -->
* Have fun. Be awesome. <!-- .element: class="fragment" -->

---

## Tell Us About Yourself

* Who are you?
* What do you hope to get out of the class?
* What is your favorite animal?

---

## Vocabulary

<dl>
  <dt>Web Design</dt> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>The process of planning, structuring and creating a website.</dd> <!-- .element: class="fragment" data-fragment-index="1" -->

  <dt>Web Development</dt> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>The process of programming dynamic web applications.</dd> <!-- .element: class="fragment" data-fragment-index="2" -->

  <dt>Front-End</dt> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dd>The outwardly visible elements of a website or application.</dd> <!-- .element: class="fragment" data-fragment-index="3" -->

  <dt>Back-End</dt> <!-- .element: class="fragment" data-fragment-index="4" -->
  <dd>The inner workings and functionality of a website or application.</dd> <!-- .element: class="fragment" data-fragment-index="4" -->
</dl>

Note:
This will only display in the notes window.

---

## Clients &amp; Servers

![](gdi/images/client-server.png) <!-- .element: class="no-border" -->

* JavaScript runs "client side" <!-- .element: class="fragment" -->
* JavaScript also runs "server side" (node.js)  <!-- .element: class="fragment" -->

---

## Tools

<dl>
  <dt>Browser</dt> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>Chrome, Firefox</dd> <!-- .element: class="fragment" data-fragment-index="1" -->

  <dt>Development Toolkit</dt> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>
    [TextWrangler - Mac](http://www.barebones.com/products/textwrangler)<br>
    [Notepad ++ - Windows](http://notepad-plus-plus.org)<br>
    [Sublime Text - Mac or Windows](http://www.sublimetext.com/)
  </dd> <!-- .element: class="fragment" data-fragment-index="2" -->
</dl>

---

## what is javascript?

The most popular language on Github.  <!-- .element: class="fragment" data-fragment-index="1" -->
![Girl Develop It](gdi/images/popularity-on-github.png) <!-- .element: class="no-border fragment" data-fragment-index="1" -->

---

## javascript is not java

<dl>
  <dt>Java</dt>
  <dd>Development platform designed by sun microsystems</dd>
  <dt>Javascript</dt>
  <dd>Client &amp; server-side scripting language</dd>
</dl>

---

## History of JavaScript

* Developed by Brendan Eich at Netscape, 1995
* Originally called Livescript
* Renamed Javascript by Marc Andreesen

---

## History of JavaScript

* Microsoft releases JScript, 1996
* Sun and Netscape join forces
* Standardized by ECMA, 1998

---

## History of JavaScript

* AJAX, 2005
* jQuery, 2006
* Google V8, 2008
* Node, 2010
* ES6, 2015

---

## What Can Javascript Do?

<dl>
  <dt>Carousels</dt>
  <dd>http://kenwheeler.github.io/slick</dd>
  <dt>Accordions</dt>
  <dd>http://sandbox.scriptiny.com/javascript-accordion</dd>
  <dt>Modal Windows</dt>
  <dd>http://bootboxjs.com</dd>
  <dt>Games<dt>
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
  <dt>Web Servers<dt>
  <dd>https://nodejs.org/</dd>
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

...and countless other things. <!-- .element: class="fragment" -->

---

## Syntax

* Each line in JavaScript is an instruction.
* Every instruction ends with a semicolon.
* When the browser reads it, it "executes the script".

<br>Try it out on [repl.it](http://repl.it)

    console.log('Hello');

---

## Variables

* Variables hold content
* Words, numbers, dates, true/false values and more

Declare a variable (Give it a name)

    var bananas;

Initialize variable (Give it a value)

    bananas = 5;

---

## Variables

Declare and initialize at the same time!

    var bananas = 5;

Change value of variable.

    bananas = 4;

(I ate a banana)

---

## Data types

* String
* Number
* Boolean
* Array
* Object
* undefined
* null

---

## Data types

### String

http://mdn.io/string

A group of characters in quotes.

    var fruit = "banana";


---

## Data types

### Number

http://mdn.io/number

Integers or decimals, without quotes.

    var pi = 3.14;
    var year = 2013;
    var bananaTally = 200;


---

## Data types


### Boolean

http://mdn.io/boolean

True or False

    var skyIsBlue = true;
    var grassIsPink = false;


---

## Data types

### Array

http://mdn.io/array

---

## Data types

### Object

http://mdn.io/object

---

## Data types


### undefined

http://mdn.io/undefined

Has not been assigned a value.

    var favoriteDinosaur;


---

## Data types


### null

http://mdn.io/null

A purposely empty value (not the same as 0)

    var favoriteAnimal = null;


---

## Naming rules

* Begin with a letter, _, or $
* Can contain letters, numbers, _ and $


    var hello;
    var _hello;
    var $hello;
    var hello2;

---

## Naming rules

Names are case sensitive

    var hello;
    var Hello;
    var heLLO;

---

## Expressions

Math-y expressions!

    var bananas = 5;
    var oranges = 2;
    var fruit = bananas + oranges;

---

## Expressions


|Symbol|Meaning|
|---|---|
|+|Addition|
|-|Subtraction|
|*|Multiplication|
|/|Division|
|%|Modulus|
|++|Increment|
|--|Decrement|


---

## Expressions

Word-y expressions!

    var name = "Mitch";
    var animal = "Red Panda";
    var sentence = "My animal is a " + animal + ". Its name is " + name + ".";

---

## Let's Develop It

Create a new HTML file.

    <html>
      <head>
        <title>My Site!</title>
      </head>
      <body>
        My site!
      </body>
    </html>

---

## Let's Develop It

Create a new javascript file (a file that ends in .js)

Link it to your html file

    <html>
      <head>
        <title>My Site!</title>
        <script src="javascript.js"></script>
      </head>
      <body>
        My site!
      </body>
    </html>

---

## Let's Develop It
<br>
**Lifetime supply calculator**

Ever wonder how much a lifetime supply of your favorite snack or drink is?



**Lifetime supply calculator**

* Store your age in a variable
* Store your maximum age in a variable
* Store an estimated amount per day in a variable
* Calculate how many you would eat/drink for the rest of your life.
* Output the result in an alert(see below) like so: "You will need NN to last you until your old age of NN"


    alert(answer);

---

## The if statement

Javascript can run through code based on conditions

    if (condition here){
      // statement to execute
    }
&nbsp;

    var bananas = 1;
    if (bananas < 2){
      console.log("Buy more bananas!")
    }

Note: you can write comments that only you, not the browser reads

// comment on one line
/*
  comment on
  multiple lines
*/

---

## Comparisons

|Symbol|Meaning|
|---|---|
|===|Equality|
|!==|Inequality|
|>|Greater than|
|>=|Greater than or equal to|
|<|Less than|
|<=|Less than or equal to|

Don't confuse = (assign a value) 
with === (compare a value)

---

## Comparisons

|Symbol|Meaning|
|---|---|
|&&|AND|
|&#124;&#124;|OR|
|!|NOT|



&nbsp;


    var bananas = 5;
    var oranges = 2;
    if (bananas > 3 && oranges > 3){
      console.log('Eat fruit!');
    }
    if (bananas < 2 || oranges < 2){
      console.log('Buy fruit!');
    }
    if (!(bananas >= 0)){
      console.log('You have negative bananas??');
    }

---

## If/Else Statement

You can use else to perform an alternative action if the "if" fails

    var bananas = 5;
    if (bananas > 3){
      console.log('Eat a banana!');
    } else {
      console.log('Buy a banana!');
    }

---

## If/Else Statement

You can use else if to have multiple choices

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

Add an if/else statement to our lifetime supply calculator so that if the lifetime supply is greater than 40,000, you say "Wow! That's a lot!" otherwise, say "You seem pretty reasonable!"

---

## Functions

Functions are re-usable collections of statements

Declare a function

    function sayHi(){
      console.log('Hi!');
    }

Call the function

    sayHi();

---

## Arguments

Functions can take named arguments


    function sayHi(name){
      console.log('Hi' + name + '!');
    }
    sayHi('Mitch, the Red Panda');
    sayHi('Harold, the hippo');

    var name = 'Pip, the mouse';
    sayHi(name);

---

## Arguments

Functions can take MULTIPLE named arguments

    function addNumbers(num1, num2){
      var result = num1 + num2;
      console.log(result);
    }

    addNumbers(5, 6);

    var number1 = 12;
    var number2 = 15;
    addNumbers(number1, number2);

---

## Return Values

Functions can return a value


    function addNumbers(num1, num2){
      var result = num1 + num2;
      return result; //Anything after this line won't be read
    }
    var sum  = addNumbers(5, 6);

---

## Variable Scope

JavaScript variables have "function scope." They are visible in the function where they are defined

A variable with "local" scope:

    function addNumbers(num1, num2){
      var result = num1 + num2;
      return result; //Anything after this line won't be read
    }
    var sum  = addNumbers(5, 6);
    console.log(result); //will return undefined because result only exists inside the addNumbers function

---

## Variable Scope

JavaScript variables have "function scope." They are visible in the function where they are defined

A variable with "global" scope:


    var result;
    function addNumbers(num1, num2){
      result = num1 + num2;
      return result; //Anything after this line won't be read
    }
    var sum  = addNumbers(5, 6);
    console.log(result); //will return 11 because the variable was defined outside the function

---

## Let's Develop It

Wrap the lifetime supply calculator in a function called calculate()

Add a link to the html that calls the function when it is clicked

    <a href = "#" onclick="calculate()">
    Calculate life time supply
    </a>

---

## Questions?
