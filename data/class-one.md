![Girl Develop It](/images/gdi_logo_badge.png) <!-- .element: class="no-border" -->

---

# Intro to Javascript <small class="gray">Class #1</small>

### Taylor C. MacDonald  <!-- .element: class="dark" -->
http://js.gdicincy.com

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
* What's your favorite Pixar movie?

![Girl Develop It](/images/pixar.png) <!-- .element: class="no-border" -->

---

### Programming Is Hard

_"It's harder than you think. Right now you're probably underestimating the amount of frustration and discomfort you're about to experience..."_

http://writing.bryanwoods4e.com/1-poor-poor-child

![Girl Develop It](/images/programming-is-hard.png) <!-- .element: class="no-border" -->

Note:
Some highlights include...

1. Programming is not always intuitive, it's inherently complex, and it's challenging.

2. It's ok to suck at math, you won't be using it too much anyway.

3. Programming is the best way to learn programming.

4. Details matter.

---

## Tools

* __Browser:__ [google.com/chrome](http://www.google.com/chrome/)
* __Editor:__ [sublimetext.com/3](http://www.sublimetext.com/3)
* __Interactive Console:__ [codepen.io](http://codepen.io/)

<br>

## __Need Help?__

Google is the greatest resource<br>in the history of mankind. _Google it._

* [stackoverflow.com](http://stackoverflow.com/questions/tagged/javascript)
* [mdn.io](http://mdn.io)

---

## Books

__JavaScript: The Definitive Guide__ – David Flanagan

__JavaScript: The Good Parts__ - Douglas Crockford

__JavaScript and JQuery__ - Jon Duckett


![Girl Develop It](/images/books.png) <!-- .element: class="no-border" -->

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
* ...evolving fast!

<figcaption>Source: http://toptal.io</figcaption>
![JS Technologies](/images/toptal-js-technologies.png)

Note:
If you have a smartphone or computer, you can run Javascript.

Javascript syntax is similar to that of C &amp; shares similarities to other languages but has some quirks too...

<ul>
  <li>Object Oriented, but based on a prototypal object system, instead of a class system.</li>
  <li>Poorly documented.</li>
  <li>No good implementations until Google's V8.</li>
</ul>

---

## what is javascript?

_Making web pages more interactive, since 1995._<br><br>

__Javascript allows us to...__

* Access content or elements
* Modify content or elements
* React to events
* Program rules to be executed (e.g. scripts)

Note:
Javascript makes the web more interactive.

---

## what javascript<br>is not...

_Javascript is not Java._

![](/images/java-vs-javascript.jpg)

Note:
Java is to Javascript as Ham is to Hamster.
<dl>
  <dt>Javascript</dt>
  <dd>Client &amp; server-side scripting language</dd>
  <dt>Java</dt>
  <dd>Development platform designed by Sun Microsystems</dd>
</dl>


Don't confuse the two.

---

## History of JavaScript

* _1995_ - __Brendan Eich__ at Netscape creates __Livescript__
* _1995_ - __Sun__ begins work on __HotJava__
* _1996_ - __Livescript__ renamed to __Javascript__

<figcaption>Source: <a href="http://www.evolutionoftheweb.com/">evolutionoftheweb.com</a></figcaption>
![](/images/evolution.png)

Note:
Marc Andreesen was the guy who renamed Livescript. Andreeson Horowitz is a $4 Billion venture capital firm.

Andreesen Horowitz has invested in companies like Facebook, Twitter, Airbnb, Github, etc.

---

## History of JavaScript

* _1996_ - __Microsoft__ releases JScript
* _1996ish_ - __Sun__ and __Netscape__ join forces
* _1998_ - Standardized by __ECMA__

<figcaption>Source: <a href="http://www.evolutionoftheweb.com/">evolutionoftheweb.com</a></figcaption>
![](/images/evolution2.png)

Note:
Technically, Javascript is a subset of ECMAScript.

Things were pretty quiet after 1998 until...

---

## History of JavaScript

* _2005_ - __AJAX__ (asynchronous requests)
* _2006_ - __jQuery__ (utility library)
* _2008_ - __Google V8__ (javascript implementation)
* _2010_ - __Node__ (web server)
* _2015_ - __ES6__ (officially published standard, June 17)

<figcaption>Source: <a href="http://fbcovergen.com">fbcovergen.com</a></figcaption>
![](/images/evolution3.png) <!-- .element: class="no-border" -->

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

## Vocabulary

<dl>
  <dt>Client</dt>
  <dd>The computer requesting the web page.</dd> <!-- .element: class="fragment" data-fragment-index="1" -->

  <dt>Server</dt>
  <dd>The computer responding to the request and returning HTML.</dd> <!-- .element: class="fragment" data-fragment-index="1" -->
</dl>

Note:
When you load a webpage in your browser, you are the client.

The computer that returns HTML is the server.

---

## Clients &amp; Servers

![](/images/client-server.png)

JavaScript runs "client side"

JavaScript also runs "server side" (node.js) <!-- .element: class="fragment" data-fragment-index="1" -->

Note:
Here is a picture of this transaction...

Traditionally, Javascript has always been associated with the client side.

---

## More Vocabulary

<p><strong>Front-End:</strong> HTML, CSS, Javascript</p>

<figure>
  ![](/images/frontend-v-backend.jpg)
  <figcaption>Source: <a href="http://skillcrush.com/2012/08/13/frontend-vs-backend-2/">skillcrush.com</a></figcaption>
</figure>

<p><strong>Back-End:</strong> Databases, Webservers, etc.</p>

Note:
When you 'view source', what you're seeing is the front-end code. HTML, CSS & Javascript.

---

## Front-End Stack

__HTML__: Content Layer  
<small>_This layer defines the content and structure of the page._</small>

__CSS__: Presentation Layer
<small>_This layer uses style rules to change the appearance of elements on the page._</small>

__Javascript__: Behavior Layer
<small>_This layer defines the behavior of most of the interactive components on the page._</small>

---

## Javascript Files

* Simple text files, like HTML or CSS
* Contain a series of JS statements
* Have a `.js` file extension

![](/images/js-file.png) <!-- .element: class="no-border" -->

---

## Including Scripts

* Use the `<script>` tag to include JS files in a page
* Browser executes the code when the page loads
  
  

![](/images/source-code.png) <!-- .element: class="no-border" -->

Note:
How do you get the scripts to run in the browser? You use the script tag.

If the tag includes a src attribute, the browser will load the contents of the specified file.

If there's no src attribute, the browser will execute any Javascript contained inside.

---

## Let's Develop It

1. Create a folder named __gdi__
1. In that folder, add a new file named __application.js__ with the following contents...

        document.write('Hello world!');
<!-- .element: style="margin-left: 0;" -->

1. Add an __index.html__ file and between the __&lt;body>__ tags, add a __&lt;script>__ tag referencing the file you created in the last step
1. Open __index.html__ in a browser

---

## What is Codepen?

* Playground for front-end code
* Experiment with HTML, CSS & JS
* Save and share your scripts

![codepen.io](/images/codepen-start.png) <!-- .element: class="no-border" -->

---

## Syntax

* Each line in JavaScript is an instruction
* Every instruction ends with a semicolon
* Try executing the following on [codepen.io](http://codepen.io)

![jsbin.com](/images/hello-world.png) <!-- .element: class="no-border" -->

---

## Variables

* Variables hold content 
* Words, numbers, true/false values and more...

Declare a variable (Give it a name) 

    var apples;


Initialize variable (Give it a value) 

    apples = 5;


Note:
Remember your high school algebra clas 

Variables are containers for values.

---

## Variables

Declare and initialize at the same time! 

    var apples = 5;


Change value of variable. 

    apples = 4; 

---

## Data types*

* Number
* String
* Boolean

<br>
<small>_* Not including four other data types that will be explained later.<br>(Array, Object, undefined and null)_</small>

Note:
A data-type describes what kinds of values can be stored in a variable.

---

## Data types

### Number <!-- .element: class="dark" -->

http://mdn.io/number 

Integers or decimals, without quotes.

    var total_apples = 200;
    var pi = 3.14;

Note:
Javascript only has the one Number type.

It's common in other languages to have Integer and Floating Point (decimals) but in JS everything is just a Number.

---

## Data types

### String <!-- .element: class="dark" -->

http://mdn.io/string 

A group of characters in quotes.

    var class_name = 'Intro to Javascript and jQuery';
    var fruit = "apple";

Note:
You can use single quotes or double quotes.

---

## Data types


### Boolean <!-- .element: class="dark" -->

http://mdn.io/boolean 

True or False 

    var sky_is_blue = true;
    var grass_is_pink = false;

---

## Naming rules

* Functions and variables start with a letter, _, or $ 
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

    var apples = 5;
    var oranges = 2;
    var fruit = apples + oranges;

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

    if (condition here) {
      // statement to execute
    }


An example...


    var apples = 1;
    if (apples < 2) {
      document.write("Buy more apples!");
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

    var apples = 5;
    var oranges = 2;

    if (apples > 3 && oranges > 3) {
      document.write('Eat fruit!');
    }

---

## Logical Operators

|Symbol|Meaning|
|---|---|
|`&&`|AND|
|&#124;&#124;|OR|
|`!`|NOT|


    if (apples < 2 || oranges < 2) {
      document.write('Buy fruit!');
    }

    if ( !(apples >= 0) ) {
      document.write('You have negative apples??');
    }

---

## If/Else Statement

Use `else` to perform an alternative action&hellip;

    var apples = 5;
    
    if (apples > 3){
      document.write('Eat an apple!');
    } else {
      document.write('Buy an apple!');
    }

---

## If/Else Statement

You can use `else if` to have multiple choices

    var age = 20;
    
    if (age >= 35) {
      document.write('You can vote AND hold any place in government!');
    } else if (age >= 25) {
      document.write('You can vote AND run for the Senate!');
    } else if (age >= 18) {
      document.write('You can vote!');
    } else {
      document.write('You have no voice in government (yet)!');
    }

---

## Let's Develop It

Add an `if/else` statement to our lifetime supply calculator so that if the lifetime supply is greater than 40,000, you say "Wow! That's a lot!"

---

## What Is A Function

* Re-usable collection of statements
* Performs a specific task
* Helps organize your code

![](/images/functions.png) <!-- .element: class="no-border" -->

---

## Functions

Declare a function

    function hello() {
      document.write('Hi!');
    }

Call the function&hellip;

    hello();

---

## Arguments

Functions can take named arguments


    function hello(name) {
      document.write('Hi' + name + '!');
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
      document.write(result);
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
    document.write(sum);

---

## Variable Scope

_The location where you declare a variable will affect where it can be used within your code._

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
    document.write(result);  // yields 'undefined'

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
    document.write(result); // yields '11'

---

## Let's Develop It

Wrap the calculator in a function named `calculate()`

Call the function from HTML...

    <a href = "#" onclick="calculate()">Click Me</a>

---

## Questions?
