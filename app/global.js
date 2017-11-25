
(function() {
  String.prototype.format = function() {
    var str = this;
    for (var i = 0; i < arguments.length; i++) {
      var reg = new RegExp("\\{" + i + "\\}", "gm");
      str = str.replace(reg, arguments[i]);
    }
    return str;
  }
  window.TBZ = {
    DEFAULT_AVATAR: require('./images/avatar_user.jpg'),
    isIOSDevice: function() {
      var u = navigator.userAgent,
        app = navigator.appVersion;
      return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    },
    supportPushState: window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
  }
})();
