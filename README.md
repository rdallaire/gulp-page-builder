**Goal** - Rapidly develop simple HTML pages that can be used as highly optimized live sites.

## Features
- [HTML Head](https://htmlhead.dev/) with `head.html` partial
- [Destyle.css](https://nicolas-cusan.github.io/destyle.css/)
- SASS Compiling
- Minifying HTML and CSS and inlining CSS on `gulp`. Removes comments and whitespace in HTML
- Create .webp images from image assets

## Get started

Install
`npm install`

Development
- `gulp watch`
- Edit `index.html` edit `.scss` files

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
- Responsive images, automatically create `<picture>` elements from a simple line
- Pardot
    - implement an automated way to add pardot editable fields
    - pardot build command to not use .webp images