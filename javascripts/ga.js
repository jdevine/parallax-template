(function() {
  var _gaq;

  _gaq = _gaq || [];

  _gaq.push(["_setAccount", "UA-31136981-3"]);

  ABalytics.init({
    experiment1_name: [
      {
        name: "variant1_name",
        experiment1_class1_name: "<strong>Html content for variant 1 class 1</strong>"
      }, {
        name: "variant2_name",
        experiment1_class1_name: "<strong>Html content for variant 2 class 1</strong>"
      }
    ]
  }, _gaq);

  _gaq.push(["_trackPageview"]);

  (function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    i[r] = i[r] || function() {
      return (i[r].q = i[r].q || []).push(arguments);
    };
    i[r].l = 1 * new Date();
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    return m.parentNode.insertBefore(a, m);
  })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");

  ga("create", "UA-31136981-3", "hassaku.github.io");

  ga("send", "pageview");

}).call(this);
