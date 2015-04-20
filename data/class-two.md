![Girl Develop It](/images/gdi-ample.png) <!-- .element: class="no-border" -->

---

# Intro to Javascript <small class="gray">Class #2</small>

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

* Review / Homework
* Loops
* Arrays
* Objects
* Document Object Model

---

## Let's Review

* What is a variable?
* What data-types are available in Javascript?
* Why would you use a function?
* What element links a JS file to an HTML file?
* What's the difference between `=` and `===` ?
* How do you negate a statement?

Note:
String, Number, Boolean, Array, Object, undefined and null

You'd use a function to reduce duplication of code. Write it once, call it many times.

---

## Loops

_A "loop" is a set of instructions executed over and over again until a certain condition is met._

<br>
You would use a loop to...

* Display each item in an array
* Create X number of divs
* Manipulate each image on a page

---

## The while loop

You use while loops, if you don't know how many times you'll loop.

    while(condition) {
      // statements to repeat
    }

---

## The while loop

An example...

    var x = 0;
    while(x < 5) {
      console.log(x);
      x++;
    }

Review: '++' means to increment by 1.

Note:
What happens if we forget x++;? The loop will never end!

---

## The for loop

Use a <code>for</code> loop, if you know how many times you need to loop.

    for(initialize; condition; update) {
      // statements to repeat
    }

Note:
3 statements are passed to the for loop... initialize, condition and update.

* Initialize and declare a number
* Check if that number has reached the limit
* Update will increment


---

## The for loop

An example...

    for(var i = 0; i < 5; i++) {
      console.log(i);
    }

Note:

Less danger of an infinite loop. All conditions are at the top!

---

## Array

_An array is a data-type that holds a list of values._


An example...

    var array_name = [element0, element1, ...];

---

## Array

    var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
    var numbers = [16, 27, 88];
    var things = ['Rainbows', 7, 'Horseshoes'];

The length property reports the size of the array:

    console.log(colors.length);

---

## Acessing Arrays

You can access items with "bracket notation".

The number inside the brackets is called an "index"

    var array_item = array_name[index_number];

---

## Accessing Arrays

Arrays in JavaScript are "zero-indexed", which means we start counting from zero.

    var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
    var first_color = colors[0];
    var last_color = colors[6];

---

## Updating Arrays

Use bracket notation to change the item in an array:

    var animals = ['Corgis', 'Otters', 'Octopi'];
        animals[0] = 'Bunnies';

Or to add to an array:

    animals[3] = 'Corgis';

---

## Array Methods

Add one or more items onto an array...

    arr.push(element1, ..., elementN)

Removes and return the last item in an array...

    arr.pop()

---

## Array Methods

Remove and return the first item in an array...

    arr.shift()

Add one or more items to the beginning of an array...

    arr.unshift(element1, ..., elementN)

---

## Array Methods

Reverse the order of elements in an array...

    arr.reverse()

Join all elements of an array into a string...

    arr.join(delimiter)

---

## Loops and Arrays

Use a for loop to easily look at each item in an array:

    var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

    for (var i = 0; i < colors.length; i++) {
      console.log(colors[i]);
    }

---

## Let's Develop It

__Step #1:__
<br>Download  the [Starter Kit](https://github.com/tcmacdonald/intro-to-javascript/archive/0.0.1.zip)

__Step #2:__
<br>Create a function called `favorites()` which...

1. Creates an array and loops through the items.
1. Outputs a string to the console which reads...


    My favorite things are XX, YY, ZZ.

---

## Objects

Objects are a data type that let us store a collection of properties and methods.

    var objectName = {
      propertyName: propertyValue,
      propertyName: propertyValue,
      ...
    };

---

## Objects

    var charlie = {
      age: 8,
      name: "Charlie Brown",
      likes: ["baseball", "The little red-haired girl"],
      pet: "Snoopy"
    };

---

## Accessing Objects

Access values of "properties" using "dot notation":


    var charlie = {
      age: 8,
      name: "Charlie Brown",
      likes: ["baseball", "The little red-haired girl"],
      pet: "Snoopy"
    };

    var pet = charlie.pet;

---

## Accessing Objects

Or using "bracket notation" (like arrays):

    var name = charlie['name'];

Non-existent properties will return undefined:

    var gender = charlie.gender

---

## Updating Objects

Use dot or bracket notation with the assignment operator to change objects.

Change existing properties:

    charlie.name = "Chuck";

Or add new properties:

    charlie.gender = "male";

You can also delete properties:

    delete charlie.gender;

---

## Arrays of Objects

Arrays can hold objects too!

    var peanuts = [
      {
        name: "Charlie Brown", 
        pet: "Snoopy"
      },
      {
        name: "Linus van Pelt",
        pet: "Blue Blanket"
      }
    ];

---

## Arrays of Objects

That means we can use a for loop!

    for (var i = 0; i < peanuts.length; i++) {
      var peanut = peanuts[i];
      console.log(peanut.name + ' has a pet named ' + peanut.pet + '.');
    }

---

## Objects in functions

You can pass an object into a function as an argument...

    var peanut = {
      name: "Charlie Brown",
      pet: "Snoopy"
    };

    function describe(character) {
      console.log(character.name + ' has a pet named ' + character.pet + '.');
    }

    describe(peanut);

---

## Let's Develop It

__Step #1:__
<br>Create a function called `my_friends()` which...

1. Creates an array of friend objects, which defines name and hair color for each of your friends.
1. Loop through the array and describe each friend in the console.

__Step #2:__
<br>Make a separate `describe_friend()` function and update `my_friends()` to use that.

---

## Document Object

* Every web-page loaded in a browser has its own `document` object.
* Contains information about the page.
* You can inspect URL, doctype, images, links, etc.

---

## Document Object Model

_The DOM is a fully object-oriented representation of the web page, and it can be modified with JavaScript._

<br>

See the DOM in Chrome...  
Hover, Right Click -> Inspect Element

---

## DOM Interaction

Every DOM "node" has properties. They are connected like a family tree.

Parent (`parentNode`), children (`childNodes, firstChild`), siblings (`prevSibling, nextSibling`)

    var body_node = document.body; // <body>
    var html_node = document.body.parentNode; // <html>
    for (var i = 0; i < document.body.childNodes.length; i++) {
      var child_node = document.body.childNodes[i];
      //could be <p>, <h1>, etc.
      //any html element
    }

---

## DOM Interaction: Easier

Finding every element on the page by siblings and children is time consuming!

The document object also provides methods for finding DOM nodes without going one by one

Find element by id...

    <img id="mainpicture" src="some-image.png">

    var img = document.getElementById('mainpicture');

---

## DOM Interaction

Find element by tag name (`p`, `li`, `div`, etc.)

    <li class="peanut">Charlie Brown</li>
    <li class="peanut">Linus van Pelt</li>


    var items = document.getElementsByTagName('li');
    for (var i =0; i < items.length; i++) {
      var item = items[i];
    }

---

## Methods

* Methods are functions that are associated with an object
* They affect or return a value for a specific object
* Used with dot notation

Previously seen example:

    var img = document.getElementById('mainpicture');

---

## DOM: Attributes

We can use node methods to set and retrieve attributes...

    var img = document.getElementById('mainpicture');
        img.getAttribute('src');
        img.setAttribute('src', 'http://girldevelopit.com/assets/pink-logo.png');

Another example...

    var img = document.getElementById('mainpicture');
        img.getAttribute('class');
        img.setAttribute('class', 'picture-class');

---

## DOM: innerHTML

Each DOM node has an innerHTML property:

    document.body.innerHTML;

You can set innerHTML yourself to change the contents of the node:

    document.body.innerHTML = '<p>I changed the whole page!</p>';

You can also just add to the innerHTML instead of replace everything:

    document.body.innerHTML += "...just adding this bit at the end of the page.";

---

## Modify the DOM

The document object can create new nodes...

    document.createElement(tag_name);
    document.createTextNode(text);
    document.createComment(text);

---

## Modify the DOM

Some examples...

    var el = document.createElement('img');
        el.src = 'http://gdi.tcmacdonald.com/images/ample-logo.png';
    document.body.appendChild(el);

&nbsp;

    var el = document.createElement('p');
    var contents = document.createTextNode('New Paragraph!');

    el.appendChild(contents);
    document.body.appendChild(el);

---

## Let's Develop It

* Modify your existing three functions to add new elements to the screen instead of the console.
* Keep in mind how to find an element, how to append an element, and how to change the inner html of an element.
* There are lots of possible solutions! Be creative!

---

## Questions?

