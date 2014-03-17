# Perfetta

Free theme for [Ghost](http://github.com/tryghost/ghost/) prepared by [GavickPro](http://www.gavick.com/).

## Important informations

This theme contains few features which can need some additional knowledge or settings.

### Featured images/videos

The image or video placed on the beginning of the post will be used as a featured image/video on the post list. Additionally if you want to display the post over the title on the post page, you have to set the alternative text of the image to **featured-image**.

In theory you can use different images as a featured image on the posts list and on the post page (in this case you can add the **featured-image** alternative text to the different image).

The videos will be responsive thanks to the fitvids jQuery plugin.

### Disqus comments

You can specify your Disqus username in the **partials/config.hbs** file at the following line:

```js
var disqus_shortname = '';
```

### Google Analytics support

You can specify your Google Analytics tracking code ID in the **partials/config.hbs** file at the following line:

```js
var ga_ua = 'UA-XXXXX-X';
```

### Background image

The image displayed in the background is a blog cover image which can be defined in the Ghost settings. 

If you want to use a responsive version of this image, you should leave blank the cover image under the Ghost settings and replace images in the **assets/images/** directory to your own ones.

## Copyright & License

Copyright (C) 2014 GavickPro - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
