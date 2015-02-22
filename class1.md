# Intro to Javascript

### Taylor C. MacDonald
##### tcmacdonald@gmail.com / [@tcmacdonald](http://twitter.com/tcmacdonald)

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
* What is your favorite dinosaur?

---

## Vocabulary

<dl>
  <dt>Webdesign</dt> <!-- .element: class="fragment" data-fragment-index="1" -->
  <dd>The process of planning, structuring and creating a website</dd> <!-- .element: class="fragment" data-fragment-index="1" -->

  <dt>Web Development</dt> <!-- .element: class="fragment" data-fragment-index="2" -->
  <dd>The process of programming dynamic web applications</dd> <!-- .element: class="fragment" data-fragment-index="2" -->

  <dt>Front end</dt> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dd>The outwardly visible elements of a website or application.</dd> <!-- .element: class="fragment" data-fragment-index="3" -->
  <dd>"Client side"</dd> <!-- .element: class="fragment" data-fragment-index="3" -->

  <dt>Back end</dt> <!-- .element: class="fragment" data-fragment-index="4" -->
  <dd>The inner workings and functionality of a website or application.</dd> <!-- .element: class="fragment" data-fragment-index="4" -->
</dl>

---

## Clients &amp; Servers

How your computer accesses website.

![](slides/images/client-server.png)

* JavaScript is "client side"
* Your browser understands it!
* JavaScript is also "server side" (node.js)

---

## Tools

<dl>
  <dt>Browser</dt>
  <dd>Chrome, Firefox</dd>
  <dt>Development Toolkit</dt>
  <dd>
    [TextWrangler - Mac](http://www.barebones.com/products/textwrangler)<br>
    [Notepad ++ - Windows](http://notepad-plus-plus.org)<br>
    [Sublime Text - Mac or Windows](http://www.sublimetext.com/)
  </dd>
</dl>

---

## Javascript is Not Java

<dl>
  <dt>Java</dt>
  <dd>Development platform designed by Sun Microsystems</dd>
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
* European Computer Manufacturers Association (ECMA), 1998

---

## History of JavaScript

<dl>
  <dt>AJAX, 2005</dt>
  <dd>Asynchronous requests from your browser</dd>
  <dt>jQuery, 2006</dt>
  <dd>Very popular Javascript library</dd>
  <dt>Google V8, 2008</dt>
  <dd>Javascript implementation for Google Chrome</dd>
  <dt>Node, 2010</dt>
  <dd>Server-side Javascript</dd>
</dl>

---

## What Does Javascript Do?

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

## Statements/Script

* Each line in JavaScript is an instruction
* When the browser reads it, it "executes the script"
* Try it out on [repl.it](http://repl.it)


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

### String

A group of characters in quotes.

    var fruit = "banana";



### Number

Integers or decimals, without quotes.

    var pi = 3.14;
    var year = 2013;
    var bananaTally = 200;



### Boolean

True or False

    var skyIsBlue = true;
    var grassIsPink = false;



### undefined

Has not been assigned a value.

    var favoriteDinosaur;



### null

A purposely empty value (not the same as 0)

    var favoriteDinosaur = null;

(I have no favorite dinosaur)



### Arrays &amp; Objects

Collections (or groups) of items.

We will cover these types later.

---

## Naming rules

* Begin with a letter, _, or $
* Can contain letters, numbers, _ and $


    var hello;
    var _hello;
    var $hello;
    var hello2;



Names are case sensitive

    var hello;
    var Hello;
    var heLLO;

---

## Expressions

    var bananas = 5;
    var oranges = 2;
    var fruit = bananas + oranges;

|Symbol|Meaning|
|---|---|
|+|Addition|
|-|Subtraction|
|*|Multiplication|
|/|Division|
|%|Modulus|
|++|Increment|
|--|Decrement|

