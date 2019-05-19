define(['addInactiveClass', 'setPageElement'], function(addInactiveClass, setPageElement){
  function aboutMe(route){
    $('#jtron').fadeOut();
    //Get blog key from array [key=001] example
    //This file hides all pages execpt for the page being navigated to
    addInactiveClass('aboutMe');
    //pass in name of div, name of script id in html file and key
    const aboutMePageOpen = setPageElement('aboutMe', 'aboutMePage');
  }

  return aboutMe;
});
