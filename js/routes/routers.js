define(function(){
    function routers(route){
        //if indexOf is -1 the set doesCharExist = true else false
        const doesCharExist = route.indexOf('?') === -1 ? false : true;

        if(!doesCharExist){
          switch (route) {
            case '#home':
                require(['home'], function(home){
                    home(route);
                });
             break;
            case '#blog':
                require(['blog'], function(blog){
                    blog(route);
                });
              break;
            case '#aboutMe':
                require(['aboutMe'], function(aboutMe){
                    aboutMe(route);
                });
              break;
            case '#contact':
                require(['contact'], function(contact){
                    contact(route);
                });
              break;
          }
        }
        else if(doesCharExist){
          require(['blogPost'], function(blogPost){
              //chech the string for '?' to split into an array;
              //example #blogPost?key=001
              const currentRoute = route.split('?');
              blogPost(currentRoute);
          });
        }
      }
  return routers;
});
