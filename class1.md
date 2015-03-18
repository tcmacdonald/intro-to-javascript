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
* Have fun. <!-- .element: class="fragment" -->

---

## Tell Us About Yourself

* Who are you? <!-- .element: class="fragment" -->
* What do you hope to get out of the class? <!-- .element: class="fragment" -->
* What is your favorite animal? <!-- .element: class="fragment" -->

Note:
Let's start by introducing ourselves.

---

## Tools

<dl>
  <dt>Browser</dt> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>Chrome &amp; Firefox, Safari? (not IE)</dd> <!-- .element: class="fragment" data-fragment-index="1" -->

  <dt>Development</dt> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>
    [Sublime Text - Mac or Windows](http://www.sublimetext.com/)<br>
    [TextWrangler - Mac](http://www.barebones.com/products/textwrangler)<br>
    [Notepad ++ - Windows](http://notepad-plus-plus.org)<br>
  </dd> <!-- .element: class="fragment" data-fragment-index="2" -->

  <dt>Questions?</dt> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dd>
    [Google](http://google.com)<br>
    [Stack Overflow](http://stackoverflow.com)
    [MDN](https://developer.mozilla.org)
  </dd> <!-- .element: class="fragment" data-fragment-index="3" -->
</dl>

Note:
I hope all of you budding developers have started to develop a healthy disdain for Internet Explorer.

---

## Vocabulary

<dl>
  <dt>Web Design</dt> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>The process of planning, structuring and creating a website.</dd> <!-- .element: class="fragment" data-fragment-index="1" -->

  <dt>Web Development</dt> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>The process of programming dynamic web applications.</dd> <!-- .element: class="fragment" data-fragment-index="2" -->
</dl>

Note:
Web design is the look and feel.

Web development is the code... a generic term for the process of creating dynamic, online applications.

---

## Vocabulary

<dl>
  <dt>Client</dt> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>The computer requesting the web page.</dd> <!-- .element: class="fragment" data-fragment-index="1" -->

  <dt>Server</dt> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>The computer responding to the request and returning HTML.</dd> <!-- .element: class="fragment" data-fragment-index="2" -->
</dl>

Note:
When you load a webpage in your browser, you are the client.

The computer that returns HTML is the server.

---

## Clients &amp; Servers

![](gdi/images/client-server.png) <!-- .element: class="no-border" -->

JavaScript runs "client side" <!-- .element: class="fragment" -->

JavaScript also runs "server side" (node.js)  <!-- .element: class="fragment" -->

Note:
Here is a picture of this transaction...

Traditionally, Javascript has always been associated with the client side.

---

## More Vocabulary

<dl>
  <dt>Front-End</dt> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dd>The outwardly visible elements of a website or application. (Client Side)</dd> <!-- .element: class="fragment" data-fragment-index="3" -->

  <dt>Back-End</dt> <!-- .element: class="fragment" data-fragment-index="4" -->
  <dd>The inner workings and functionality of a website or application. (Server Side)</dd> <!-- .element: class="fragment" data-fragment-index="4" -->
</dl>

Note:
When you 'view source', what you're seeing is the front-end code. HTML, CSS & Javascript.

Any questions?

---

## what is javascript?

The most popular language on Github.  <!-- .element: class="fragment" data-fragment-index="1" -->
![Girl Develop It](gdi/images/popularity-on-github.png) <!-- .element: class="no-border fragment" data-fragment-index="1" -->

Note:
Javascript is everywhere.

---

## what is javascript?

* The most widely deployed language in history. <!-- .element: class="fragment" -->
* Quirky and misunderstood. <!-- .element: class="fragment" -->
* Small but fierce. <!-- .element: class="fragment" -->

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
  <dt>Javascript</dt> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>Client &amp; server-side scripting language</dd> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dt>Java</dt> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>Development platform designed by Sun Microsystems</dd> <!-- .element: class="fragment" data-fragment-index="3" -->
</dl>

Note:
Java is to Javascript as Ham is to Hamster.

Don't confuse the two.

---

## History of JavaScript

* Developed by Brendan Eich at Netscape, 1995 <!-- .element: class="fragment" -->
* Originally called Livescript <!-- .element: class="fragment" -->
* Sun develops competing technology... HotJava <!-- .element: class="fragment" -->
* Livescript is renamed Javascript by Marc Andreesen <!-- .element: class="fragment" -->

Note:
Marc Andreesen of Andreeson Horowitz a $4 Billion venture capital firm.

Andreesen Horowitz has invested in companies like Facebook, Twitter, Airbnb, Github, etc.

---

## History of JavaScript

* Microsoft releases JScript, 1996 <!-- .element: class="fragment" data-fragment-index="1" -->
* Sun and Netscape join forces <!-- .element: class="fragment" data-fragment-index="2" -->
* Standardized by ECMA, 1998 <!-- .element: class="fragment" data-fragment-index="3" -->

Note:
Technically, Javascript is a subset of ECMAScript.

Things were pretty quiet after 1998 until...

---

## History of JavaScript

* AJAX, 2005 <!-- .element: class="fragment" data-fragment-index="1" -->
* jQuery, 2006 <!-- .element: class="fragment" data-fragment-index="2" -->
* Google V8, 2008 <!-- .element: class="fragment" data-fragment-index="3" -->
* Node, 2010 <!-- .element: class="fragment" data-fragment-index="4" -->
* ES6, 2015 <!-- .element: class="fragment" data-fragment-index="5" -->

Note:
Who can tell me what the ES in ES6 stands for?

---

## What Can Javascript Do?

<dl>
  <dt>Carousels</dt> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>http://kenwheeler.github.io/slick</dd> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dt>Accordions</dt> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>http://sandbox.scriptiny.com/javascript-accordion</dd> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dt>Modal Windows</dt> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dd>http://bootboxjs.com</dd> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dt>Games</dt> <!-- .element: class="fragment" data-fragment-index="4" -->
  <dd>http://mario5.florian-rappl.de/#game</dd> <!-- .element: class="fragment" data-fragment-index="4" -->
</dl>

---

## What Can Javascript Do?

<dl>
  <dt>Graphs</dt> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>https://github.com/mbostock/d3/wiki/Gallery</dd> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dt>Physics</dt> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>http://wellcaffeinated.net/PhysicsJS/</dd> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dt>Asyncronous Requests</dt> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dd>http://api.jquery.com/jquery.ajax/</dd> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dt>Web Servers</dt> <!-- .element: class="fragment" data-fragment-index="4" -->
  <dd>https://nodejs.org/</dd> <!-- .element: class="fragment" data-fragment-index="4" -->
</dl>

---

## What Can Javascript Do?

<dl>
  <dt>Event Handling</dt> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>http://api.jquery.com/category/events/</dd> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dt>Form Validation</dt> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>http://parsleyjs.org</dd> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dt>Embedded Maps</dt> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dd>https://developers.google.com/maps/web/</dd> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dt>Presentations</dt> <!-- .element: class="fragment" data-fragment-index="4" -->
  <dd>http://lab.hakim.se/reveal-js</dd> <!-- .element: class="fragment" data-fragment-index="4" -->
</dl>

...and countless other things. <!-- .element: class="fragment" data-fragment-index="5" -->

---

## Syntax

* Each line in JavaScript is an instruction. <!-- .element: class="fragment" data-fragment-index="1" -->
* Every instruction ends with a semicolon. <!-- .element: class="fragment" data-fragment-index="2" -->
* When the browser reads it, it "executes the script". <!-- .element: class="fragment" data-fragment-index="3" -->

<br>

    console.log('Hello');
<!-- .element: class="fragment" data-fragment-index="4" -->
<p>Try it out on [repl.it](http://repl.it)</p> <!-- .element: class="fragment" data-fragment-index="4" -->

---

## Variables

* Variables hold content <!-- .element: class="fragment" data-fragment-index="1" -->
* Words, numbers, dates, true/false values and more <!-- .element: class="fragment" data-fragment-index="2" -->

Declare a variable (Give it a name) <!-- .element: class="fragment" data-fragment-index="3" -->

    var bananas;
<!-- .element: class="fragment" data-fragment-index="3" -->

Initialize variable (Give it a value) <!-- .element: class="fragment" data-fragment-index="4" -->

    bananas = 5;
<!-- .element: class="fragment" data-fragment-index="4" -->

Note:
Remember your high school algebra class?

Variables are containers for values.

---

## Variables

Declare and initialize at the same time! <!-- .element: class="fragment" data-fragment-index="1" -->

    var bananas = 5;
<!-- .element: class="fragment" data-fragment-index="1" -->

Change value of variable. <!-- .element: class="fragment" data-fragment-index="2" -->

    bananas = 4; 
<!-- .element: class="fragment" data-fragment-index="2" -->

---

## Data types

* String <!-- .element: class="fragment" -->
* Number <!-- .element: class="fragment" -->
* Boolean <!-- .element: class="fragment" -->
* Array <!-- .element: class="fragment" -->
* Object <!-- .element: class="fragment" -->
* undefined <!-- .element: class="fragment" -->
* null <!-- .element: class="fragment" -->

Note:
A data-type describes what kinds of values can be stored in a variable.

---

## Data types

### String

http://mdn.io/string <!-- .element: class="fragment" -->

A group of characters in quotes. <!-- .element: class="fragment" -->

    var fruit = "banana";
<!-- .element: class="fragment" -->

Note:
You can use single quotes or double quotes.

---

## Data types

### Number

http://mdn.io/number <!-- .element: class="fragment" -->

Integers or decimals, without quotes. <!-- .element: class="fragment" -->

    var pi = 3.14;
    var year = 2013;
    var bananaTally = 200;
<!-- .element: class="fragment" -->

Note:
Javascript only has the one Number type.

It's common in other languages to have Integer and Floating Point (decimals) but in JS everything is just a Number.

---

## Data types


### Boolean

http://mdn.io/boolean <!-- .element: class="fragment" -->

True or False <!-- .element: class="fragment" -->

    var skyIsBlue = true;
    var grassIsPink = false;
<!-- .element: class="fragment" -->

---

## Data types

### Array

http://mdn.io/array <!-- .element: class="fragment" -->

Collections of values. <!-- .element: class="fragment" -->

    var numbers = [1,2,3,4,5];
    var socks = new Array('pink', 'striped', 'business');
<!-- .element: class="fragment" -->

---

## Data types

### Object

http://mdn.io/object <!-- .element: class="fragment" -->

Container for key, value pairs. <!-- .element: class="fragment" -->

    var animals = { cat: 'Fluffy', dog: 'Fido' };
<!-- .element: class="fragment" -->

---

## Data types

### undefined

http://mdn.io/undefined <!-- .element: class="fragment" -->

Has not been assigned a value. <!-- .element: class="fragment" -->

    var favoriteDinosaur;
<!-- .element: class="fragment" -->

---

## Data types

### null

http://mdn.io/null <!-- .element: class="fragment" -->

A purposely empty value (not the same as 0) <!-- .element: class="fragment" -->

    var favoriteAnimal = null;
<!-- .element: class="fragment" -->

---

## Naming rules

* Begin with a letter, _, or $ <!-- .element: class="fragment" -->
* Can contain letters, numbers, _ and $ <!-- .element: class="fragment" -->


    var hello;
    var _hello;
    var $hello;
    var hello2;
<!-- .element: class="fragment" -->

---

## Naming rules

Names are case sensitive <!-- .element: class="fragment" -->

    var hello;
    var Hello;
    var heLLO;
<!-- .element: class="fragment" -->

---

## Expressions

Math-y expressions! <!-- .element: class="fragment" -->

    var bananas = 5;
    var oranges = 2;
    var fruit = bananas + oranges;
<!-- .element: class="fragment" -->

Note:
An expression is any valid unit of code that resolves to a value.

---

## Operators

|Symbol|Meaning|
|---|---|
|+|Addition|
|-|Subtraction|
|*|Multiplication|
|/|Division|
|%|Modulus|
|++|Increment|
|--|Decrement|
<!-- .element: class="fragment" -->

Note:
Modulus divides the value of one expression by the value of another, and returns the remainder.

---

## Expressions

Word-y expressions! <!-- .element: class="fragment" -->

    var name = "Mitch";
    var animal = "Red Panda";
    var sentence = "My animal is a " + animal + ". Its name is " + name + ".";
<!-- .element: class="fragment" -->

---

## Let's Develop It

Create a new HTML file. <!-- .element: class="fragment" -->

    <html>
      <head>
        <title>My Site!</title>
      </head>
      <body>
        My site!
      </body>
    </html>
<!-- .element: class="fragment" -->

---

## Let's Develop It

Create a new javascript file (a file that ends in .js) <!-- .element: class="fragment" -->

Link it to your html file <!-- .element: class="fragment" -->

    <html>
      <head>
        <title>My Site!</title>
        <script src="javascript.js"></script>
      </head>
      <body>
        My site!
      </body>
    </html>
<!-- .element: class="fragment" -->

---

## Let's Develop It
<br>
**Lifetime supply calculator** <!-- .element: class="fragment" -->

Ever wonder how much a lifetime supply of your favorite snack or drink is? <!-- .element: class="fragment" -->

---

## Lifetime supply calculator

Ever wonder how much a lifetime supply of your favorite snack or drink is? <!-- .element: class="fragment" -->

* Store your age in a variable <!-- .element: class="fragment" -->
* Store your maximum age in a variable <!-- .element: class="fragment" -->
* Store an estimated amount per day in a variable <!-- .element: class="fragment" -->
* Calculate how many you would eat/drink for the rest of your life. <!-- .element: class="fragment" -->
* Output the result in an alert(see below) like so: "You will need NN to last you until your old age of NN" <!-- .element: class="fragment" -->


    alert(answer);
<!-- .element: class="fragment" -->

---

## The if statement

Javascript can run through code based on conditions <!-- .element: class="fragment" -->

    if (condition here){
      // statement to execute
    }
<!-- .element: class="fragment" -->

    var bananas = 1;
    if (bananas < 2){
      console.log("Buy more bananas!")
    }
<!-- .element: class="fragment" -->

Note: you can write comments that only you, not the browser reads <!-- .element: class="fragment" -->

    // comment on one line
    /*
      comment on
      multiple lines
    */
<!-- .element: class="fragment" -->

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
<!-- .element: class="fragment" -->

Don't confuse = (assign a value) with === (compare a value) <!-- .element: class="fragment" -->

Note:
The 3 equal signs mean "equality without type coercion". Using the triple equals, the values must be equal in type as well.

---

## Comparisons

|Symbol|Meaning|
|---|---|
|&&|AND|
|&#124;&#124;|OR|
|!|NOT|
<!-- .element: class="fragment" -->

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
<!-- .element: class="fragment" -->

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
