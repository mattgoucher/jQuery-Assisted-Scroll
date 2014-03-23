### Assisted Scroll
Utilize your mousewheel to scroll through slides.


#### Options

	startingZ     {integer}     default: undefined     Additional Z-Index for each slide (see demo)
	delay         {integer}     default: 500 (ms)      The duration of your CSS transitions (prevents transitioning until finished)


#### Requirements
* [jQuery](http://code.jquery.com/jquery.min.js) (v1.11.0 provided) 
* [jQuery Mousewheel](https://github.com/brandonaaron/jquery-mousewheel) (3.1.9 provided)


#### Contributing
This project utilizes [Grunt JS](http://gruntjs.com/) to compile/minify javascripts. If you haven't already, read the [getting started guide](http://gruntjs.com/getting-started). After Grunt has been installed, open your terminal, and cd into the project directory. Then:

```shell
$ sudo npm install
$ grunt
```

Running ``grunt`` will minify javascripts, and place them in the correct directories, **once**. If you would like to "watch" for changes as you work, run ``grunt watch``.