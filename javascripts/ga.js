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

}).call(this);
