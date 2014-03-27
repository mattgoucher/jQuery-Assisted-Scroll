(function() {

    function AssistedScroll(el, options) {

        var win, slides, totalSlides, currentSlide, currentSlideIndex, transitioning, outOfSlides;

        function init() {

            // Are we transitioning?
            transitioning = false;

            // Scrolling Business
            win         = $(window);
            outOfSlides = false;

            // Cache Slides
            slides            = el.children();
            totalSlides       = slides.length;
            currentSlide      = slides.first();
            currentSlideIndex = 0;

            // Set Their Z-Index
            for (var i = 0; i < totalSlides; i++) {
                slides[i].style.zIndex = (totalSlides - i) + (options.startingZ || 0);
            }

            // Bind Mousewheel Event
            el.on("mousewheel", function(e) {

                if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                    if (e.deltaY > 0) {
                        if (win.scrollTop() === 0) {
                            outOfSlides = false;
                            prevSlide();
                        }
                    }else{
                        nextSlide();
                    }
                }

                // Prevent Default Browser Functionality
                if (!outOfSlides){
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        }


        /**
         * Transition to the next slide
         * @return {undefined}
         */
        function nextSlide() {

            // Unable To slide
            if ((currentSlideIndex + 1) >= totalSlides || transitioning) {
                return;
            }

            transitioning = true;

            // Reset Current Slide
            currentSlide.addClass("old").removeClass("active");
            currentSlide      = currentSlide.next().addClass("active");
            currentSlideIndex = currentSlideIndex + 1;

            if ((currentSlideIndex + 1) === totalSlides) {
                outOfSlides = true;
            }else{
                outOfSlides = false;
            }

            resetTransitioning();
        }


        /**
         * Transition to previous slide
         * @return {undefined}
         */
        function prevSlide() {

            // Unable To slide
            if ((currentSlideIndex - 1) < 0 || transitioning) {
                return;
            }

            transitioning = true;

            // Reset Current Slide
            currentSlide.removeClass("active");
            currentSlide      = currentSlide.prev().addClass("active").removeClass("old");
            currentSlideIndex = currentSlideIndex - 1;

            resetTransitioning();
        }


        /**
         * Disable the transition lock
         * @return {undefined}
         */
        function resetTransitioning() {
            setTimeout(function() {
                transitioning = false;
            }, (options.delay || 500));
        }


        init();

        return {
            "next": nextSlide,
            "prev": prevSlide
        };
    }


    // jQuery Public
    $.fn.assistedScroll = function(options) {
        if (!this.data("assistedScroll")) {
            return this.data("assistedScroll", new AssistedScroll(this, options || {}));
        }else if (typeof options === "string") {
            // Slider already instanciated, attempt to run argument as command
            return this.data("assistedScroll")[options]();
        }
    };

}());
