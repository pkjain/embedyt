embedyt
=======


# Jquery plugin description
jquery plugin for embedding youtube video with lazy loading approach


# How it works
- It only loads one video image from youtube and renders a play button on it.
- Once user clicks on the play button, video is loaded.
- For fancier button, you can change the javascript code accordingly


# Sample usage
```html
<script src="/path/to/jquery.min.js"></script>
<script src="/path/to/jquery.embedyt.js"></script>
<div id="youtubeembed" youid="youtubevideoid"></div>
jQuery(function () {
  jQuery("div.youtubeembed").each(function (index) {
    jQuery(this).embedyt(jQuery(this).attr('youid'));
  });
});
```


# Author
[infoheap](http://infoheap.com/)

# License
* [GPL](http://www.gnu.org/licenses/gpl-2.0.html)
