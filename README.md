# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/Screenshot-solution.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Js

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

 I was able to practice coding html and css with my knowledge for this project. I also learned few things in Js and CSS. In Js I learned event delegation, where events bubble up from the child to parent element but not vice versa. I learned how to handle events using event delegation and made my code a bit cleaner compared to assigning event listener to individual buttons. I also tried writing my Js using MVC pattern and probably there is a better way to write the entire challenge but at least I was able to make it somehow work and I had fun doing this. In CSS I learned how to use linear gradient colors for my background color. I think my biggest mistake building the project was the fact that I style it first before making it functional and this cause me to have hard time styling the second page.


```css
#card-el {
  padding: 1.3rem;
  height: 325px;
  width: 320px;
  background: rgb(37, 45, 55);
  background: radial-gradient(
    circle at top,
    rgba(37, 45, 55, 1) 15%,
    rgba(18, 20, 23, 1) 100%
  );
}
```
```js
rateSelectorEl.addEventListener("click", function (event) {
        const target = event.target;

        if (target.tagName != "BUTTON") {
          return;
        }
        model.setRating(target.value);
        view.higlightBtn(target);
      }); 
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I want to become better in making websites responsive and program better with Js. As of now I am learning with The Odin Project course.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [resource 1](https://cssgradient.io/) - This helped me understand and visualize gradient colors in css.
- [resource 2](https://www.freecodecamp.org/news/event-delegation-javascript/) - This is an amazing article which helped me finally understand event delegation in Js.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

