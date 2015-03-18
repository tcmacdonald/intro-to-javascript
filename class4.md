![Girl Develop It](gdi/images/white-logo.png) <!-- .element: class="no-border" -->

---

# Intro to Javascript <small>Class #4</small>
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

## What is an API?

> Application Programming Interface (API)

* Data structure and rules for accessing a web-based application
* Access information from sites that are not our own (Twitter, Meetup, Facebook, Foursquare)

---

## What is an API?

Primary role: a channel for applications to work together

* Your website and the Twitter API
* Twitter's mobile app and the Twitter API
* Hootsuite's mobile app and the Twitter API

---

## What is AJAX?

> Asynchronous JavaScript and XML (AJAX)

* Make requests asynchronously via Javascript
* Browser does not reload
* More fluid user experience

Note:
Method to communicate to a server or API
Asynchronous means:
I ask Twitter for all the tweets ever!
That will take a while
My whole website could be locked up while I wait!
Or, my call can be 'asynchronous' and my website will just listen for Twitter's response with one ear, but go about normal business until the response arrives.
Requests and results can be in JavaScript or XML

---

## What is REST?

> Representational State Transfer (REST)

REST is a way to ask an API for information by using a URL.

REST Urls are created with the following syntax:

    http://ApiSite.com/method?parameter=value&parameter=value

* Method &mdash; what you want from the API. Defined by API documentation
* Parameter &mdash; a type of filter or constraint. Defined by API documentation
* Value &mdash; value for parameter. Defined by you!

---

## API Documentation

All (good) APIs have documentation...

Facebook (https://developers.facebook.com/)
Twitter (https://dev.twitter.com/)
Meetup (http://www.meetup.com/meetup_api/)
FourSquare (https://developer.foursquare.com/)

---

## What is JSON?

> JavaScript Object Notation (JSON)

Format for data returned from APIs.

You've seen it before!

JavaScript objects

---

## API Keys

Api Key or Developer Key is a way for an API to identify you

* More secure for an API (Know who is using their API)
* More secure for you -- people can't pretend to be your website

---

##  API

We will be using the Meetup API

Documentation<br>
[meetup.com/meetup_api](http://www.meetup.com/meetup_api/)


Meetup API

We will be finding interesting Meetups near us

Open Events


Meetup API

Try it in the meetup console

Open Events Console


Meetup API

Try it in the meetup console


jQuery Ajax

jQuery method to perform an AJAX call


    $.ajax({
  		url: 'http://site.com',
  		data: {
  		  parameter: 'value',
  		  parameter: 'value'
  		},
  		crossDomain: true,
  		dataType: 'jsonp',
  		type: "GET",
  		success: function (data) {
  		    // code with data returned
  		},
  		error: function(data) {
  			 // code with error returned
  		}				
  	});
          	
jQuery Ajax


    $.ajax({
  		url: 'http://site.com',
  		...			
  	});
          	
$.ajax() -- jQuery method for sending AJAX requests
Takes one parameter -- a JavaScript object
Note the {}
url -- first property, the url where you will send the AJAX request
jQuery Ajax


	...
	data: {
	  parameter: 'value',
	  parameter: 'value'
	},
	...	
          	
data -- a JavaScript object with all the parameters for the AJAX request
Some parameters in the Meetup open events
key (refers to api key)
city
country
topic
jQuery Ajax


	...
  crossDomain: true,
	dataType: 'jsonp',
	type: "GET",
	...	
          	
crossDomain -- are you sending the request to a domain that is not your own?
dataType -- how will you evaluate the data returned
type -- what type of request is it?
GET -- retrieve data
POST -- post new data
jQuery Ajax


	...
  success: function (data) {
	    // code with data returned
	},
	error: function(data) {
		 // code with error returned
	}
	...	
          	
success -- code that will execute if results are sent back successfully
error -- code that will execute if results return an error
Let's Develop It!

Create a new div with the id "events"
Create a new function in your javascript that calls Meetup open events method
Add parameters such as city, state or lat, lon to find meetups near you
Add a parameter such as category or topic to find meetups that you would be interested in
For now, just look at the results in the console.log()
Call this new function in document ready
Let's Develop It!


Let's Develop It!

Create a new function that can parse results.
Remember that the results will be an array of objects
Loop through your results
For each result, create a new div
Get the name, description, group name, and url of each event
Append them to your new div
Append the new div to the div "events"
Let's Develop It!

Create a form for users to enter in their location and a topic of their choosing
On submit, call the same Meetup open events method, but with the user's values
Bonus

Still have time? Can't stop learning?

One of the best things about jQuery is the developer community

They love to build!

Check out some great plugins:

jQuery UI -- accordions, drag and drop, resize, sort
jQuery Lightbox -- Pop up gallery of images!
And so many more!
Questions?

?
Javascript ~ Girl Develop It ~  Creative Commons License
