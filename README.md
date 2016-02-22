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
  * In the updatePositions function, determine the bodyScrollTop variable outside the loop.  Retrieving the .scrollTop property and then changing the style creates forced synchronous layout, which is repeated each loop.
  * (Based on Cameron Pittman's solution) In the changePizzaSizes function, resize the pizzas using fixed percentages rather than changing the width based on the calculating the existing width of the every pizza element