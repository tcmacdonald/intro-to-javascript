![Girl Develop It](/images/gdi_logo_badge.png) <!-- .element: class="no-border" -->

---

# Intro to Javascript <small class="gray">Class #3</small>

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
* Intro to jQuery
* jQuery Methods
* Event Handlers

---

## What is a library?

* Software libraries hold functions
* Include a library and use it's functions
* Take advantage of other people's experience
* And... save time!

---

## What is jQuery?

jQuery is a library of JavaScript functions.

* HTML element selection & manipulation
* CSS manipulation
* HTML events
* JavaScript effects and animations

---

## Why use jQuery?

* The most popular JavaScript library
* Used by nearly 20 million websites
* jQuery lets you "write less, do more."
* Great documentation and tutorials
* Lots of Plugins

---

## jQuery: A Brief History

* jQuery was created by John Resig, Mozilla, 2006
* jQueryUI released September 2007
* Microsoft and Nokia support jQuery, 2008
* jQuery wins .Net Magazine's Award for Best O/S Application, December 2009

---

## Get jQuery

There are two ways to include jQuery...

* Download the library and store it locally.<br>http://jquery.com/download/
* Include via CDN.<br>http://code.jquery.com/jquery-1.11.2.min.js<br>or http://code.jquery.com/jquery-2.1.1.min.js

---

## jQuery Selectors

Remember `document.getElementById()` and `document.getElementsByTagName()`?
<br>
<br>

jQuery selectors let you "select" HTML elements using CSS style syntax.

---

## jQuery Selectors

Select elements by name...

    var divs = $("div");

By ID...

    var img = $("#mainpicture");

By class...

    var images = $(".picture");

---

## jQuery Actions

jQuery has hundreds of actions that can be performed on any element.

* All the actions are methods.
* As methods they are called with dot notation.


    $(selector).action();

---

## jQuery: Attributes

Imagine the following HTML element:

    <img id="mainpicture" src="logo.png">

Get and set attributes...

    var img = $('#mainpicture');
        img.attr('src'); // returns logo.png
        img.attr('src', 'some-new-image.gif');

---

## jQuery: CSS

Get and set CSS properties.

    var el = $('body');
        el.css('background', '#000');

Set multiple properties at once...

    el.css({ background: 'red', color: 'white' });

---

## jQuery: HTML

Imagine the following HTML...

    <div id="results">Boo!</div>

Get and set an element's contents...

    var div = $('#results');
        div.html(); // returns 'Boo!'
        div.html('New html!');

---

## jQuery: Append HTML

Append HTML content...

    var div = $('#results');
        div.append('Additional html');

---

## jQuery: Prepend HTML

Prepend HTML content...

    var div = $('#results');
        div.prepend('Additional html (on top)');

---

## jQuery: Elements

Creating new element...

    var el = $('<div></div>');

---

## Let's Develop It!

Try to convert last week's DOM interaction into jQuery.

Don't forget to include jQuery in your html head!

---

## Document Ready

__Webpages take time to load.__

You almost never want Javascript to be called until the page has loaded.

<code>$(document).ready</code> is a method called when the page is loaded.

    $(document).ready(function(){
      // code goes here...
    });

Note:
The function() inside is an "anonymous function". It has no name, but still performs like a function.

---

## HTML Events

Events occur on a webpage when a user does something.

Some common events:

* *mouseenter* &mdash; mouse goes inside an element
* *mouseleave* &mdash; mouse leaves an element
* *click* &mdash; mouse clicks an element
* *submit* &mdash; form has been submitted

---

## Handling Events

jQuery to the rescue...

    $(selector).mouseenter(function(){
      // code to execute when the mouse enters...
    });

---

## Handling Events

For example...

    $('.box').mouseenter(function(){
      $(this).css('background-color', 'purple')
    });

The <code>$(this)</code> selector in jQuery refers to the element on whom the action was called.

---

## Handling Events

    $('.box').mouseenter(function(){
      $(this).css('background-color', 'purple')
    });

    $('.box').mouseleave(function(){
      $(this).css('background-color', 'orange')
    });

    $('.box').click(function(){
      $(this).css('background-color', 'green')
    });

---

## Combining Events

If you want multiple events to happen on the same element, you should use the `bind` method...

    $('.box').bind({
      click: function() {
        $(this).css('background-color', 'green')
      },
      mouseenter: function() {
        $(this).css('background-color', 'purple')
      },
      mouseleave: function(){
        $(this).css('background-color', 'orange')
      }
    });

---

## Let's Develop It

* Add a div to your html that is 100px by 100px
* Bind some events to the div with Javascript
* Don't forget to put your code in a document ready statement
* Try to change size, color, or the html inside the div

---

## HTML Forms

HTML Forms allow users to enter information

    <form id="about-me">
      <label>What is your name?</label>
      <input type="text" id="name" />

      <label>Do you like popcorn</label>
      <input type="radio" name="popcorn" val="yes" /> Yes
      <input type="radio" name="popcorn" val="no" /> No

      <label>Favorite Animal</label>
      <select id="dinosaur">
        <option value="t-rex">Tyrannosaurus Rex</option>
        <option value="tri">Triceratops</option>
        <option value="stego">Stegosaurus</option>
        <option value="other">Other</option>
      </select>

      <input type="submit" value="Go!" />
    </form>

---

## HTML Forms

You can use jQuery to get values from a form...

    $('#name').val();
    $('select#dinosaur').val();
    $('input:radio[name=popcorn]:checked').val();

Or set values of a form...

    $('#name').val('Mitch');
    $('select#dinosaur').val('stego');
    $('input:radio[name=popcorn]:checked').val('no');

---

## HTML Forms

jQuery has an event for form submission

    $('#about-me').submit(function(event){
      // code to execute after submission

      return false;
    });

"return false" to prevent the form trying to submit to a server.

---

## Let's Develop It

* Choose one (or all!) of your functions made so far (lifetime supply, favorite things, or my friends)
* Create a form to send dynamic data to the function when you click the button

Note:
This is a little harder than all the other exercises. Be creative!

---

## Questions?
