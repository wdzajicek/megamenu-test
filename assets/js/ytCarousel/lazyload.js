// Lazy load function
// ex. <img data-src="/path/to/image.jpg" alt="">
function lzFunction(){
  (function() {
    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function() {
        img.removeAttribute('data-src');
      };
    });
  })();
}
module.exports = lzFunction;