frontend-nanodegree-mobile-portfolio
====================================

### How to view the projects

1. For the Critical Rendering Path optimisations of index.html, please go to: http://kbora.github.io/frontend-nanodegree-mobile-portfolio/dist/ 
2. For the pizza page optimisations, please go to: http://kbora.github.io/frontend-nanodegree-mobile-portfolio/dist/views/pizza.html

### Optimisations
1. For index.html, the following optimisations were carried out:
	a. Generate thumbnail of pizza image 
	b. Optimize images
	c. Use webfontloader so that the browser loads page without waiting for google font 
	d. Minify js using uglify
	e. Optimize css by inlining all of styles.css

3. For the pizza page, the following optimisations were carried out:
	a. In the updatePositions function, move the line that declares and calculates the phase variable outside of the loop.
	b. (Based on Cameron Pittman's solution) In the changePizzaSizes function, resize the pizzas using fixed percentages rather than changing the width based on the calculating the existing width of the every pizza element