![Girl Develop It](/images/gdi_logo_badge.png) <!-- .element: class="no-border" -->

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

* What is a variable? <!-- .element: class="fragment" data-fragment-index="0" -->
* What data-types have we discussed? <!-- .element: class="fragment" data-fragment-index="1" -->
* Why would you use a function? <!-- .element: class="fragment" data-fragment-index="2" -->
* What element links a JS file to an HTML file? <!-- .element: class="fragment" data-fragment-index="3" -->
* What's the difference between = and ===? <!-- .element: class="fragment" data-fragment-index="4" -->
* How do you negate a statement? <!-- .element: class="fragment" data-fragment-index="5" -->

Note:
String, Number, Boolean, Array, Object, undefined and null

You'd use a function to reduce duplication of code. Write it once, call it many times.

---

## Data types

### undefined <!-- .element: class="dark" -->

http://mdn.io/undefined 

Doesn't exist or has not been assigned a value.

    var favorite_cookie;

    console.log(favorite_cookie); // 'undefined'

Note:
A  declared variable that has not been initialized will return `undefined`.

---

## Data types

### null <!-- .element: class="dark" -->

http://mdn.io/null

A purposely empty value.

    var favorite_cookie = null;

---

## Data types

### Array <!-- .element: class="dark" -->

http://mdn.io/array 

Collections of values. 

    var numbers = [1,2,3,4,5];

    var socks = [
      'pink',
      'striped',
      'argyle'
    ];

---

## Acessing Arrays

You can access items with "bracket notation".

The number inside the brackets is called an "index"

    var array_item = array_name[index_number];

---

## Accessing Arrays

Arrays in JavaScript are "zero-indexed", which means we start counting from zero.

    var colors = [
      'Red',
      'Orange',
      'Blue',
      'Yellow'
    ];

    var first_color = colors[0]; // Red

    var last_color = colors[3]; // Yellow

---

## Updating Arrays

Use bracket notation to change the item in an array:

    var animals = [
      'Corgis',
      'Otters',
      'Octopi'
    ];

    animals[0] = 'Bunnies';

Or to add to an array:

    animals[3] = 'Corgis';

---

## Array Methods

Get the total number of items within an array...

    arr.length

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

    var is_running = true;

    while(is_running) {

      // Something happens here...

      if(stop_running) {
        is_running = false;
      }
    }

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

## Loops and Arrays

Use a for loop to easily look at each item in an array:

    var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

    for (var i = 0; i < colors.length; i++) {
      console.log(colors[i]);
    }

---

## Let's Develop It

1. Create an array called `favorite_foods` and add some items to it.
1. Loop over the array and build a string that ultimately evaluates to...

    "My favorite foods are AA, BB, CC, etc."

1. Log that string to the console.

---

## Data types

### Object <!-- .element: class="dark" -->

http://mdn.io/object 

Collection of properties and methods.

    var object_name = {
      property: value,
      property: value,
      // More stuff here...
    };

---

## Objects

For example...

    var kid = {
      name: 'Atticus',
      age: 2.3,
      hair_color: 'Platinum',
      likes: ['backpacks', 'trains', 'cookies']
      // More stuff here...
    };

---

## Accessing Objects

Access values of properties using "dot notation".


    var kid = {
      name: 'Atticus',
      age: 2.3,
      hair_color: 'Platinum',
      likes: ['backpacks', 'trains', 'cookies']
    };

    var hair_color = kid.hair_color;

    var favorite = kid.likes[0];

---

## Accessing Objects

You can also use "bracket notation" (like arrays):

    var name = kid['name'];

Non-existent properties will return undefined:

    var gender = kid.gender;
    console.log(gender); // undefined

---

## Updating Objects

Use dot or bracket notation with the assignment operator to change objects.

Change existing properties:

    kid.name = "Gus";

Or add new properties:

    kid.gender = "male";

You can also delete properties:

    delete kid.gender;

---

## Arrays of Objects

Arrays can hold objects too!

    var kids = [
      {
        name: "Atticus",
        age: 2.3
      },
      {
        name: "Avery",
        age: 3.1
      }
    ];

---

## Arrays of Objects

That means we can use a for loop!

    for (var i = 0; i < kids.length; i++) {
      var kid = kids[i];
      var str = kid.name + ' is ' + kid.age + ' yrs. old.';
      console.log(str);
    }

---

## Objects in functions

You can pass an object into a function as an argument...

    function describe(kid) {
      var str = kid.name + ' is ' + kid.age + ' yrs. old.';
      console.log(str);
    }

    var kid = {
      name: "Seamus",
      age: 5.25
    };

    describe(kid);

---

## Let's Develop It

__Step #1:__

1. Create an array of recipe objects. Each object should define the name, list of ingredients and number of calories.
1. Loop through the array and describe each recipe in the console.

__Step #2:__

Move the logic from your loop into a function called `describe_recipe()`. Update the loop to call that new function on each iteration.

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

The document object also provides methods for finding DOM nodes without going one by one.

Find element by id...

    <img id="mainpicture" src="some-image.png">

    var img = document.getElementById('mainpicture');

---

## DOM Interaction

Find element by tag name (`p`, `li`, `div`, etc.)

    <li class="kid">Atticus</li>
    <li class="kid">Avery</li>

    var items = document.getElementsByTagName('li');

Or by class name...

    document.getElementsByClassName('kid');

---

## Methods

* Methods are functions associated with an object
* Used with dot notation

Previously seen examples:

    document.write('Hello world!');
    console.log(arr.length);
    var img = document.getElementById('mainpicture');

---

## DOM: Attributes

We can use methods on DOM nodes to set and retrieve attributes...

    var img = document.getElementById('mainpicture');
        img.getAttribute('src');
        img.setAttribute('src', 'http://gdi.tcmacdonald.com/images/ample-logo.png');

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

* Modify your existing functions to add new elements to the screen instead of the console.
* Keep in mind how to find an element, how to append an element, and how to change the inner html of an element.
* There are lots of possible solutions! Be creative!

---

## Questions?

