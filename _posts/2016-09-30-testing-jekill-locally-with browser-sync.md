---
layout: post
title: "Testing Jekyll locally with browser-sync"
date: 2016-09-30
---

ok, so this is just a tiny tiny add-on to the pages I mentioned in my [previous](/blog/2016-09-30-my first-and-only-github-site.html) post.

My next steps: 

1. run jekyll locally and avoid seing updates only on commits. This is easy :
	* Install jekyll using the instructions [here](https://jekyllrb.com/docs/installation/)
	* open a terminal into your github page folder
	* type 'jekyll build --watch'. Jekyll will fill up the _site folder (created following [this](http://jmcglone.com/guides/github-pages/) post) 

2. avoid clicking the browser refresh button a million times when developing the site.
	* install [browser sync](https://www.browsersync.io/)
	* open a terminal into your _site folder
	* type 'browser-sync start --server --directory --files "**/*"'. This will launch a Chrome (or whaterver your default browser is) tab which automatically updates on every code edit. 


This way, when you edit a file in your github page folder (1) jekyll will watch the edit and automatically regenerate the _site folder, and (2) browser-sync, which is watching that folder, will update the browser. This gets things going a little smoother, especially if you have a dual monitor setup.

