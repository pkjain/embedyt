/*global jQuery */
/*jslint indent: 2 */
/*!
 * EmbedYt 1.0
 * Author : Parveen Kumar ( http://infoheap.com/ )
*/
(function ($) {
  "use strict";

  $.fn.embedyt = function (youid) {
    var htm = '<div id="player' + youid + '"' + ' style="background-image:url(' + 'http://img.youtube.com/vi/' + youid + '/0.jpg' + ');' + 'width:480px;height:360px;text-align:center;line-height:360px;' +  '">' + '<input type="button" value=" play " />' + '</div>';
    this.html(htm);
    this.find("div input[type=button]").bind('click', function () {
      var ifhtml = '<iframe width="420" height="315" src="http://www.youtube.com/embed/' + youid + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
      jQuery(this).css("cursor", "progress");
      jQuery(this).parent().parent().html(ifhtml);
    });
  };

}(jQuery));
