![Girl Develop It](gdi/images/gdi-ample.png) <!-- .element: class="no-border" -->

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

## What is a library?

* Software libraries hold functions (not books!)
* When you include a library, you can use all the functions in that library
* That means: you get to take advantage of other people's experience!
* And... Save time!

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
* jQuery empowers you to "write less, do more."
* Great documentation and tutorials
* Used by nearly 20 million(!) websites

---

## jQuery: A Brief History

* jQuery was created by John Resig, a JavaScript tool developer at Mozilla.
* January 2006: John announced jQuery at BarCampNYC: BarCampNYC Wrap-up
* September 2007: A new user interface library is added to jQuery: jQuery UI: Interactions and Widgets
* September 2008: Microsoft and Nokia announce their support for jQuery
* December 2009: jQuery wins .Net Magazine's Award for Best Open Source Application

---

## Get jQuery

Option #1: Download the library, store it locally...

    <head>
      <script type="text/javascript" src="jquery.js"></script>
    </head>

Option #2: Include via CDN...

  <head>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js">
    </script>
  </head>

Note:
There are two ways to include jQuery in your projects...

"Live code can change! It's always best to download"... Not sure I agree with this.

---

## jQuery Selectors

Remember `document.getElementById()` and `documet.getElementsByTagName()`?

jQuery selectors let you get elements by:

Element name (div, p)

    var divs = $("div"); // All divs on page

---

## jQuery Selectors

ID name (#mainpicture, #results)

    var img = $("#mainpicture"); //img with id mainpicture

Class name (.result, .picture)

    var images = $(".picture"); //All images with class picture 

---

## jQuery Actions

jQuery has hundreds of actions that can be performed on any element

* All the actions are methods.
* As methods they are called with dot notation, like so...

    $(selector).action();

---

## jQuery: Attributes

Imagine the following HTML element:

    <img id="mainpicture" src="logo.png">

Get and set attributes...

    var img = $('#mainpicture');
        img.attr('src');
        img.attr('src', 'http://girldevelopit.com/assets/pink-logo.png');

---

## jQuery: CSS

Get and set CSS properties.

    var img = $('#mainpicture');
        img.css('width');
        img.css('width', '200px');

---

## jQuery: HTML

Imagine the following HTML...

    <div id = "results">Boo!</div>

Get and set an element's contents...

    var div = $('#results');
        div.html();
        div.html('New html!');

---

## jQuery: Append HTML

Imagine the following HTML...

    <div id="results">Boo!</div>

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

    var newDiv = $('<div></div>');

---

## Let's Develop It!

Try to convert last week's DOM interaction into jQuery.

Don't forget to include jQuery in your html head!

---

## Document Ready

__Webpages take time to load.__

You almost never want Javascript to be called until the page has loaded.

Document ready is a method called when the page is loaded

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

    $(selector).mouseenter(function(){
      // code to execute when the mouse enters...
    });

    $('.box').mouseenter(function(){
      $(this).css('background-color', 'purple')
    });

* The $(this) selector in jQuery refers to the element on whom the action was called.
* Here $(this) is the $('.box') that the mouse entered.

---

## Handling Events

    $('.box').mouseenter(function(){
      $(this).css('background-color', 'purple')
    })

    $('.box').mouseleave(function(){
      $(this).css('background-color', 'orange')
    })

    $('.box').click(function(){
      $(this).css('background-color', 'green')
    })

---

## Combining Events

If you want multiple events to happen on the same element, you should use the bind method...

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

* Add a div to your html that is 100px by 200px
* Bind events to the div in your javascript file
* Don't forget to surround your events with document ready
* Try to change size, color, or event the html inside the div
* *Bonus:* change all the onclick events to jQuery click events

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

You can use JavaScript to get values from a form...

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
* Don't forget to add parameters to your existing functions!

Note:
This is a little harder than all the other exercises. Be creative!

---

## Questions?
