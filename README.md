frontend-nanodegree-mobile-portfolio
====================================

### How to view the projects

1. For the Critical Rendering Path optimisations of index.html, please go to: http://kbora.github.io/frontend-nanodegree-mobile-portfolio/dist/ 
2. For the pizza page optimisations, please go to: http://kbora.github.io/frontend-nanodegree-mobile-portfolio/dist/views/pizza.html

### Optimisations
1. For index.html, the following optimisations were carried out:
  * Generate thumbnail of pizza image 
  * Optimize images
  * Use webfontloader so that the browser loads page without waiting for google font 
  * Minify js using uglify
  * Optimize css by inlining all of styles.css

3. For the pizza page, the following optimisations were carried out:
  * In the updatePositions function, determine the bodyScrollTop variable outside the loop.  Previously, inside the loop, the .scrollTop property was retrieved and then a style change applied, which creates a forced synchronous layout.
  * Reduce the number of background pizzas elements that are created, based on screen height. Previously a 200 were created but not all of these are necessary as they are never shown. 
  * (Based on Cameron Pittman's solution) In the changePizzaSizes function, resize the pizzas using fixed percentages rather than changing the width based on the calculating the existing width of the every pizza element

  Other optimsations or suggestions based on feedback from the first review:
  * Replace document.querySelector with document.getElementById 
  * Replace document.querySelectorAll with document.getElementsByClassName
  * Moved variables or counters outside of loops if they did not need to be inside the loop (line 451, 441, 496, 523, 524)
  * In styles.css in the mover class, add transform: translateZ(0) and backface-visibility: hidden (and vendor prefixes) to enable hardware accelerated CSS