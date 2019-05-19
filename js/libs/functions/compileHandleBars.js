define(['handlebars', 'blogInfo'], function(Handlebars, blogInfo){

  function compileHandleBars(el, keys = false){
    //console.log(`el is = ${el}`);
    //console.log(`key(s) = ${keys}`);
    const blogArray = blogInfo.blog;

    const blogKey = keys ? keys.substr(4): keys;
    const compiledElement = Handlebars.compile(el);
    const compiledTemplate = keys ? compiledElement(blogArray.find(value => value.key === blogKey )): compiledElement(blogInfo);
    debugger;
    return compiledTemplate;
  }

  return compileHandleBars;
});
