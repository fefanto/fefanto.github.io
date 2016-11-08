--- 
title: Getting some Jekyll speed (part 1)
author: fefanto
date: 2016-11-04
category: web+programming
tags: [web+fonts]
layout: post
---

I made my little blog using jekyll and github pages, and I thought "why not putting a link to [Google page speed Insights](https://developers.google.com/speed/pagespeed/insights), to prove how good a web developer I am becoming".
Unfortunately the first results were not what I expected.

![Google Page Speed Insight initial results](/images/blog/page_speed_start.png "Not a great web developer after all" )
TBD: image styling/floating

#NOTE: these are the same results for the standard jekyll themes offered by Github pages. I understand tough, they are just meant to be a starting point for development.

There are three types of issues here
- Eliminate render-blocking JavaScript and CSS in above-the-fold content. this should go away by:
  - *loading external fonts asynchronously*
  - *inlining css when building the site (can this be done in jekyll? We'll see)*
- Leverage browser caching. Not much to do here. Jekyll is after all a static site, and as of today I do not think github pages offers a setting for customizing headers.
- Minify JavaScript/Minify CSS 
 - *see above, we must compress everything when building the site, either with some preprocessing (gulp?) or make Jekyll do it.*

## Part 1: Moving from css to scss (and minifying the stylesheet)

First, create a directory for sass files and set the flags on _config.yml [1]

```yaml
sass:
  sass_dir: _sass
  style: compressed
```

Then, since I have included bootstrap in my site (for testing and learning purposes), fistt I need to get the sass version for those packages.

Bootstrap sass can be found at: https://github.com/twbs/bootstrap-sass

Download the latest version of bootstrap-sass. Extract it to a temporary folder. Then copy the assets/stylesheets/bootstrap.scss file and assets/stylesheets/bootstrap/ folder to your blog SASS import directory. (_sass) [2]

Remove the old bootstrap css files (we'll deal with JS Later) abd leave only my styles.css file, renamed to styles.scss


![Css folder (before)](/images/blog/css_folder_before.png)

Comment/remove my inclusion of old bootstrap css files (in my case it was in the Jekyll default Layout file: _Layouts/default.html)

TBD - escape html comments

```yaml
<!-- <link rel="stylesheet" href="{{ site.baseurl }}/css/bootstrap.min.css"> -->
```

Add front matter triple lines to the top of your main scss file (It's 'styles.css', renamed in 'styles.scss') [3]

```yaml
---
# this ensures Jekyll reads the file to be transformed into CSS later
# only Main files contain this front matter, not partials.
---
```

Add import declaration for bootstrap on my main scss file, so that html would refer to a single css output file

```yaml
...
/* SASS */
@import "bootstrap";

/** BASE (css --> sass TBD) **/

body {
  font-size: 16px;
  color: #414242;
...

```


Watch for scss build compilation errors, with a 'jekyll build --trace' command.
I had two problems: 
- a gem conflict on jekyll-sass-converter versions, which I solved by issuing a 'gem uninstall' and a reinstall of github-pages gem.
- an error in the css (leftover curly bracket) which did not cause any errors on the site, but killed the jekyll sass compiler - so watch out for your css.












 ### On to Part 2 Web Font Loading

-Strategy 1 : use the new font-display property (see this [article](https://css-tricks.com/font-display-masses/))
 - as of today this not yet widely supported, move along...

-Strategy 2 : load font and css asynchronously

STRATEGY IN 4 IS NOT PERFECT - investigate [5] - maybe doing the work on moving from css to scss  could be better, since it all starts with css collapse, compresss and inline.



References (TBD: footnote in markdown):
[1]https://kvurd.com/blog/my-jekyll-blog-setup-bootstrap-sass-pygments/
[2]http://garthdb.com/writings/i-am-a-jekyll-god/
[3]https://github.com/jekyll/jekyll-sass-converter/tree/master/example 
[] https://davidwalsh.name/font-loading
[] https://css-tricks.com/font-display-masses/
[] https://www.bramstein.com/writing/web-font-loading-patterns.html
[] http://meowni.ca/posts/web-fonts/








