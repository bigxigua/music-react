  var UIWIDTH = 750;//UIWIDTH 就是设计之初的宽度一般是750
  var calcRootSize = function() {
    var availWidth = window.screen.availWidth,
        $width = $WINDOW.width(),
        deviceWidth = Math.min(availWidth, $width),
        rootSize = 100 * deviceWidth / UIWIDTH,
        $ROOT = $('html');

    $ROOT.css({
      'font-size': rootSize + 'px'
    });

    if(window._resizeListener_) return;

    $(window).on('resize', function() {
        calcRootSize(true)
    });

    window._resizeListener_ = true;

    setTimeout(function() {
      $(window).trigger('resize')
    }, 500)
  }