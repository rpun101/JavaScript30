## Introduction ##
Found this site from project-based learning github project. 


## Table of Contents ##
1. [Drum Kit](#day-1)
1. [Javscript and CSS clock ](#day-2)
1. [Update CSS Variable with Javascript ](#day-3)
1. [Array Cardio 1 ](#day-4)
1. [Flex Panel Image Gallery ](#day-5)
1. [Ajax Type Ahead(auto-complete)](#day-6)
1. [Array Cardio 2 ](#day-7)

## Recall notes ##

### Day 1 ###
#### Drum Kit ####
+ `window.addEventListener` - to add event listener `keydown`, `click`. _I knew it just haven't used it because I keep using jQuery and other method of selection_
+ `document.querySelector` - to query and select a, first, element.
+ `document.querySelectorAll` - to select more than one matching elements.
+ `<element>.classList.add|remove("className")` - Pure JS way of adding and removing className.
+ `keydown` even have `event.keyCode` which is matching ASCII value.
+ `transitionend` event on the elemnts
+ `transform` property name.
+ css properties: 
    - `tranform = scale(1.1);`
    - `transition: all 0.07s ease;`
+ `audio` HTML5 element.
    - `audio.currentTime = 0`
    - `audio.play()`
+ `<kbd>`: HTML5 tag for keyboard input element. It will render to distinguish as keyboard keys.

### Day 2 ###
#### Javscript and CSS clock ####
+ `transform: rotate(30deg)`- rotates at the element center.
+ `transform-origin:100%`- makes it rotate from x-axis.
+ `const now = new Date()` - way to create a Date variable.
+ `<element>.style.transform = "rotate(90deg)"` - to change the element style

_Just played with `border-radius` to make look hour hand bigger and pointy._


### Day 3 ###
#### Update CSS Variable with Javascript ####
+ css variable can be declared inside `<style>` tag.
    - `:root { --spacing: 10px } `
    - use as ` img { padding: var(--spacing)} `
+ `<element>.dataset` - gets all the attribute with `data-*`.
+ `document.querySelectorAll()` returns NodeList, not Array
    - Array has more options like `map()` function.

+ `document.documentElement.style.setProperty('prop', value)`  
+ notice the name and the css variable name are matched for the convenience.
+ `change` event fires when value is changed or mouse is dropped
+ `mousemove` event fires when mouse move, which enable to see the live value applied to css.


### Day 4 ###

#### Array Cardio 1 ####
+ `console.table()` - that was surprise.
+ `.filter()` - if `true` keep it
+ `.map()` - returns new array of same length as source.
+ `.sort()` - function must return `1` to swap, `-1` to not swap
+ `{string}.include('searchTerm')`- good way to search the text
+ `[first, last] = fullName.split(' ')` - destructuring 
+ `Array.reduce(sum, currentItem)` - this is very useful function

### Day 5 ###

#### Flex Panel Image Gallery ####
+ `background-size: cover; background-position: center;`- to scale background images
+ `flex` element can be  `flex-container`
+ `transform: translateY(-100%)`: to move content vertically
+ `e.propertyName` to see event property Names. Good when working with transform
+ so Safari only return `flex` instead of `flex-grow`

_added extra feature to close panel if another panel is clicked_


### Day 6 ###

#### Ajax Type Ahead(auto-complete) ####

+ Now browser have `fetch()` api which calls endpoints. it returns `promise`
+ `const x =[]` cannot be reassgined. `x.push([1,2,3])` will push a whole array as one added variable
+ we can use _spread operator_ to push array values to const array variable
+ `x.push(...array)`
+ `new RegExp(wordtoMatch, 'gi')` g|global, i|insensitive
+ `{variable}.[match(regex)\|replace(regex, 'value')` to use regex

_added feature: if search term is empty, show original html_

### Day 7 ###
#### Array Cardio 2 ####
+ `Array.some()` at least one 
+ `.every()` all must satisfy condition
+ `.find()` like filter but returns just the one we are looking for.   DataType will be of one's object in an array
+ `.findIndex()` returns the index of first matching element
+ `Array.splice(firstIndexToDelete, howManyCount)`


### Day 8 ###
#### HTML5 Canvas ####
+ canvas is like MS Paint in the web
+ can have `2d` or `3d` context
    - we use context to draw on canvas
+ exit quick in function with `if`
+ destructruing `[lastX, lastY] = [e.offsetX, e.offsetY];`
+ like `RGB` there is `hsl(hue, saturation, lighting)` mothereffinghsl.com

_this was fun exercise. Did not complete the last section because they were just extra_