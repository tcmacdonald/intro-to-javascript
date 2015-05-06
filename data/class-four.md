![Girl Develop It](/images/gdi-ample.png) <!-- .element: class="no-border" -->

---

# Intro to Javascript <small class="gray" style="font-size: 50%;">jQuery Insanity:<br>Selector Boogaloo</small>

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

* Selectors
* Traversing the DOM
* Elements
* CSS
* Effects
* Events

---

## DOM Ready

**Reminder:** When interacting with elements on a webpage, wait until the DOM is ready!

    $(document).ready(function(){
      // put your code here...
    });

---

## Selectors

Select an element and save it to a variable.

    var el = $('some selector');

---

## Selectors

Let's test some selectors here... [getbootstrap.com/examples/theme/](http://getbootstrap.com/examples/theme/)

![Bootstrap Example](/images/bootstrap-example.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select an element by tag name.

![Jquery Selectors](/images/jquery-select-element.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select elements by class name. 

![Jquery Selectors](/images/jquery-select-class.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select an element by id. 

![Jquery Selectors](/images/jquery-select-id.png) <!-- .element: class="no-border" -->

---

## Selectors

You can specify multiple selectors by delimiting them with commas.

![Jquery Selectors](/images/jquery-select-compound.png) <!-- .element: class="no-border" -->

---

## Selectors

Like CSS, jQuery selectors can be specific.

![Jquery Selectors](/images/jquery-select-specific.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select immediate children only.

![Jquery Selectors](/images/jquery-select-child.png) <!-- .element: class="no-border" -->

---

## Selectors

You can use wildcards to select everything.

![Jquery Selectors](/images/jquery-select-wildcard.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select elements that have a specific attribute.

![Jquery Selectors](/images/jquery-select-has-attribute.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select by attributes that equal a specific value.

![Jquery Selectors](/images/jquery-select-attribute.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select elements who's attributes contain a specific value.

![Jquery Selectors](/images/jquery-select-contains.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select elements who's attributes begin with a specific value.

![Jquery Selectors](/images/jquery-select-starts-with.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select elements who's attributes end with a specific value.

![Jquery Selectors](/images/jquery-select-ends-with.png) <!-- .element: class="no-border" -->

---

## Selectors

jQuery also supports psuedo selectors.

![Jquery Selectors](/images/jquery-select-psuedo.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select an element if it contains a certain value.

![Jquery Selectors](/images/jquery-select-contains.png) <!-- .element: class="no-border" -->

---

## Selectors

You can select only even elements (or only odd).

![Jquery Selectors](/images/jquery-select-even-odd.png) <!-- .element: class="no-border" -->

---

## Selectors

You can also define elements you don't want to select.

![Jquery Selectors](/images/jquery-select-not.png) <!-- .element: class="no-border" -->

---

## Let's Develop It

Using the Bootstrap example, open the console and answer the following questions...

1. How many `<p>` tags are on this page?
1. How many immediate children does `<body>` have?
1. How many elements have an attribute of `role`?
1. How many have a `role` of `button`?

---

## Traversing the DOM

Once you've selected the element you want, you can access it's `.parents()`, `.children()` and `.siblings()`

![Traversing the DOM](/images/jquery-traverse-children.png) <!-- .element: class="no-border" -->

---

## Traversing the DOM

Or you can get just the element's `.parent()`

![Traversing the DOM](/images/jquery-traverse-parent.png) <!-- .element: class="no-border" -->

---

## Traversing the DOM

You can get the descendants of an element, by passing a selector to `.find()`

![Traversing the DOM](/images/jquery-traverse-find.png) <!-- .element: class="no-border" -->

---

## Traversing the DOM

You can grab the `.first()` or `.last()` element in a collection returned by jQuery.

![Traversing the DOM](/images/jquery-traverse-first-last.png) <!-- .element: class="no-border" -->

---

## Traversing the DOM

You can target individual items in an array with the `.eq()` method.

![Traversing the DOM](/images/jquery-traverse-eq.png) <!-- .element: class="no-border" -->

---

## Traversing the DOM

You can use `.next()` to get the next, immediate sibling of an element.

![Traversing the DOM](/images/jquery-traverse-next.png) <!-- .element: class="no-border" -->

---

## Traversing the DOM

You can use `.prev()` to get the previous, immediate sibling of an element.

![Traversing the DOM](/images/jquery-traverse-prev.png) <!-- .element: class="no-border" -->

---

## Traversing the DOM

You can use `.filter()` to reduce an array by a specific selector.

![Traversing the DOM](/images/jquery-traverse-filter.png) <!-- .element: class="no-border" -->

---

## Loops

jQuery also provides a method for looping through elements it returns.

![Each Loop](/images/jquery-each.png) <!-- .element: class="no-border" -->

---

## Elements

You can use jQuery to get and set information on an element.

![Elements](/images/jquery-objects-width.png) <!-- .element: class="no-border" -->

---

## Elements

You can get or set an element's text...

![Elements](/images/jquery-objects-text.png) <!-- .element: class="no-border" -->

---

## Elements

You can get or set an element's HTML...

![Elements](/images/jquery-objects-html.png) <!-- .element: class="no-border" -->

---

## Elements

You can get or set an attribute...

![Elements](/images/jquery-objects-attr.png) <!-- .element: class="no-border" -->

---

## Elements

Speaking of attributes, jQuery gives you a handy method for accessing HTML5 `data` attributes...

![Elements](/images/jquery-objects-data.png) <!-- .element: class="no-border" -->

---

## Elements

You can also get the value of an input field, like so.  

![Elements](/images/jquery-objects-val.png) <!-- .element: class="no-border" -->

---

## Let's Develop It

Using the Bootstrap example, open the console and do the following questions...

1. Under "Badges", update the numbers for each `span.badge` element to 10000.
1. Under "Progress Bar", find out what percentage has been applied to the 5th progress bar.
1. Under "List Groups", change the text in the 3rd element of the 2nd group.

---

## CSS

You can get and set CSS properties too.

![CSS](/images/jquery-objects-css.png) <!-- .element: class="no-border" -->

---

## CSS

Set multiple properties at once by passing an object to `.css()`

![CSS](/images/jquery-objects-multiple-css.png) <!-- .element: class="no-border" -->

---

## CSS

You can add or remove a class...

![CSS](/images/jquery-objects-classes.png) <!-- .element: class="no-border" -->

---

## CSS

You can check whether an element has a class.

![CSS](/images/jquery-objects-has-class.png) <!-- .element: class="no-border" -->

---

## Effects

Use jQuery to easily show and hide an element.

![FX](/images/jquery-fx-show-hide.png) <!-- .element: class="no-border" -->

---

## Effects

You can animate certain CSS properties of an element...

![FX](/images/jquery-fx-animate.png) <!-- .element: class="no-border" -->

---

## Effects

Animate multiple properties at once by passing an object...

![FX](/images/jquery-fx-animate-multiple.png) <!-- .element: class="no-border" -->

---

## Effects

There are methods for fading in and fading out elements...

![FX](/images/jquery-fx-fade.png) <!-- .element: class="no-border" -->

---

## Effects

You can even slide elements up and down...

![FX](/images/jquery-fx-slide.png) <!-- .element: class="no-border" -->

---

## Events

An *"event"* is a signal from the browser that something has happened.

**Click, Tap, Mouseover, Submit, etc.**

<br>
An *"event handler"* is a function that is executed when the event occurs.

---

## Events

You can attach your function to an event, with this general syntax...

    $(selector).on(event, callback);

For example...

    $('.btn').on('click', function(e) {
      alert(this);
    });

---

## Events

jQuery has shortcuts for events.

    $('.btn').click(function(e) {
      alert(this);
    });

---

## Events

Some commonly used events...

* click & hover
* submit
* focus & blur
* mouseenter & mouseleave
* keydown
* scroll

See the full list here...

https://developer.mozilla.org/en-US/docs/Web/Events

---

## Events

Given the following HTML...

    <a href="#" class="btn">Click Me</a>

You could raise an alert box when the link is clicked.

    $('.btn').click(function(){
      alert('Clicked!');
    });

---

## Events

Given the following form...

    <form id="new-message">
      <input type="text" name="message">
      <button type="submit">Submit</button>
    </form>

You could do something when the form is submitted.

    $('#new-message').submit(function(e) {
      var form = $(this);
      var input_field = form.find('[name=message]');
      var message_text = input_field.val();
      alert(message_text);
      return false;
    });

---

## Let's Develop It Together

For your final in-class exercise, let's build a simple tabbed interface using jQuery.

1. Should consist of three links and three corresponding pieces of content.
1. When clicking a link, it should show the relevant content.
1. Time permitting, add some styles to make it look real nice.

---

## Questions?

