(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\">\r\n    <div class=\"card-image-container\">\r\n        <img src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":30}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":3,"column":37},"end":{"line":3,"column":52}}}) : helper)))
    + "\">\r\n    </div>\r\n    <div class=\"card-info-container\">\r\n        <span class=\"card-name\">Name: "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":53}}}) : helper)))
    + "</span>\r\n        <span class=\"card-sexuality\">Gender: "
    + alias4(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gender","hash":{},"data":data,"loc":{"start":{"line":7,"column":45},"end":{"line":7,"column":55}}}) : helper)))
    + "</span>\r\n        <span class=\"card-email\">Email: <br>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":8,"column":44},"end":{"line":8,"column":53}}}) : helper)))
    + "</span>\r\n        <span class=\"card-phone-number\">TEL: <br>"
    + alias4(((helper = (helper = helpers.tel || (depth0 != null ? depth0.tel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tel","hash":{},"data":data,"loc":{"start":{"line":9,"column":49},"end":{"line":9,"column":56}}}) : helper)))
    + "</span>\r\n        <a href=\"#\" class=\"card-blog\">Hao's blog</a>\r\n    </div>\r\n</div>";
},"useData":true});
})();