### Assisted Scroll
Utilize your mousewheel to scroll through slides.


#### Requirements
* [jQuery](http://code.jquery.com/jquery.min.js) (v1.11.0 provided) 
* [jQuery Mousewheel](https://github.com/brandonaaron/jquery-mousewheel) (3.1.9 provided)


#### Options

	startingZ     {integer}     default: undefined     Additional Z-Index for each slide (see demo)
	delay         {integer}     default: 500 (ms)      The duration of your CSS transitions (prevents transitioning until finished)


#### Implementation
```javascript
$(function() {
    $("#slides").assistedScroll({
    	delay: 500,   // Lines up with our CSS transitions
        startingZ: 10 // Slides should start being indexed at 10
    });
});
```

#### API
A simple API is provided so you can add your own swipe/touch bindings
```javascript
$(function() {
    var assistedScroll = $("#slides").assistedScroll().data("assistedScroll");

    // Next Slide
    assistedScroll.next();

    // Previous Slide
    assistedScroll.prev();
});
```

#### Contributing
This project utilizes [Grunt JS](http://gruntjs.com/) to compile/minify javascripts. If you haven't already, read the [getting started guide](http://gruntjs.com/getting-started). After Grunt has been installed, open your terminal, and cd into the project directory. Then:

```shell
$ sudo npm install
$ grunt
```

Running ``grunt`` will minify javascripts, and place them in the correct directories, **once**. If you would like to "watch" for changes as you work, run ``grunt watch``.
