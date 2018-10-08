## Introduction ##
Found this site from project-based learning github project. 

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