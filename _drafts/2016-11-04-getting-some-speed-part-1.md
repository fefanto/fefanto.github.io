--- 
title: Getting some speed (part 1)
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

### On to Part 1 : moving from css to sass in Jekyll

First, create a directory for sass files and set the flags on _config.yml [1]

```yaml
sass:
  sass_dir: _sass
  style: compressed
```

Then, since I have included bootstrap and angular in my site (for testing and learning purposes) so firts of all I need to get the sass version for those packages.

Bootstrap sass can be found at:
Angular sass  can be found at:



 ### On to Part 2 Web Font Loading

-Strategy 1 : use the new font-display property (see this [article](https://css-tricks.com/font-display-masses/))
 - as of today this not yet widely supported, move along...

-Strategy 2 : load font and css asynchronously

STRATEGY IN 4 IS NOT PERFECT - investigate [5] - maybe doing the work on moving from css to scss  could be better, since it all starts with css collapse, compresss and inline.



References (TBD: footnote in markdown):
[1] http://garthdb.com/writings/i-am-a-jekyll-god/
[] https://davidwalsh.name/font-loading
[] https://css-tricks.com/font-display-masses/
[] https://www.bramstein.com/writing/web-font-loading-patterns.html
[] http://meowni.ca/posts/web-fonts/








