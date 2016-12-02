jQuery(document).ready(function(jQuery) {
    $('.portfolio-box').magnificPopup({
    type:'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
});

$('.magnific-youtube').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 300,
  preloader: false,
  fixedContentPos: false
});
