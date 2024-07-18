# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard


### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Single-page-design-portfolio/blob/main/screenshot/Single-page%20design%20portfolio-mobile.png).
![screenshot tablet](https://github.com/Lo-Deck/Single-page-design-portfolio/blob/main/screenshot/Single-page%20design%20portfolio-tablet.png).
![screenshot desktop](https://github.com/Lo-Deck/Single-page-design-portfolio/blob/main/screenshot/Single-page%20design%20portfolio-desktop.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Single-page-design-portfolio).
- Live Site URL: [Website](https://lo-deck.github.io/Single-page-design-portfolio/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to do a carousel/slide for images with an infinite roll.

I did it with changing the path of the `src` when you click on a button.


```js
Array.from(arraySlide).forEach( (item, index) => 
   {

        item.src = arrayPath[index];

   }

```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.