**Goal** - Rapidly develop simple HTML pages with best practices that can be used as optimized live sites.

## Features
- Gulp Watch + Browsersync for live development
- [Destyle.css](https://nicolas-cusan.github.io/destyle.css/)
- [HTML Head](https://htmlhead.dev/) with `head.html` partial
- SASS Compiling
- Minifying HTML and CSS and inlining CSS on `gulp`. Removes comments and whitespace in HTML.
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

----

## Todo

- Add more javascript options (right now just write inline JS in the footer)
- Responsive images, automatically create `<picture>` elements from a simple line
- Make sure unused CSS gets removed
- Default SASS variable names for common uses
- Pardot
    - implement an automated way to add pardot editable fields
    - pardot build command to not use .webp images
    - placeholder form include that gets excluded on production build