define(['compileHandleBars', 'addInactiveClass'], function(compileHandleBars, addInactiveClass){

    function setPageElement(route, pageToInsert, key){
      console.log(route, pageToInsert);
      //then put the text inside of page templates div
      fetch(`includes/pages/${route}.html`)
        //Return the .html file
        .then(pageTemplate => pageTemplate.text())
        //insert the .html file inner text into the referenced div
        .then(template =>{
          document.getElementById(route).innerHTML = template;
        });
        //Create a promise that will wait for the fetch to load the html file inner text
        const promiseToGetPageDom = new Promise(promiseHandler);

        //promise handler function
        function promiseHandler(resolve){
         const waiter = setInterval(function(){
              //Check to see if the page has been inserted, if yes, stop interval and resolve promise
              if(document.getElementById(pageToInsert)){
                clearInterval(waiter);
                resolve(document.getElementById(pageToInsert).innerHTML);
              }
          }, 200);
        }

        promiseToGetPageDom.then(function(pageTemplageToInsert){
          //compiled template must be script from html file
          //Must be inserted into the containing div element, not the script itself
          document.getElementById(route).innerHTML = compileHandleBars(pageTemplageToInsert, key);
        });
    }
    return setPageElement;
});
