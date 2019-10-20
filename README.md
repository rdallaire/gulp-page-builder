Goal - Quickly develop a simple HTML page with SASS that gets compiled into a high performing page.

## Features
- [HTML Head](https://htmlhead.dev/) with head.html partial
- SASS Compiling
- Minifying HTML and CSS and inlining CSS on `gulp`. Removes comments and whitespace in HTML
- Create .webp images from image assets

## Get started

Install
`npm install`

Development
`gulp watch`

Build & Production
`gulp build`

## File structure

### Source

- `/src/` - All source files and .html files
- `/src/img`/ - Images
- `/src/scss/` - SASS files to get compiled

### Distribution

- `/site/ - html files moved
- `/site/css/` - compiled SASS


## Todo

- Add more javascript options (right now just write inline JS in the footer)