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

  (function() {
    var ga, s;
    ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
    s = document.getElementsByTagName("script")[0];
    return s.parentNode.insertBefore(ga, s);
  })();

}).call(this);
