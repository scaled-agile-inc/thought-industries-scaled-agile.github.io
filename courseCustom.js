document.addEventListener('DOMContentLoaded', (event) => {
    // Select the node that will be observed for mutations
    var targetNode = document.body; // body is chosen here as an example

    // Options for the observer (which mutations to observe)
    var config = { childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    var callback = function(mutationsList, observer) {
        for(let mutation of mutationsList) {
          if (mutation.type === 'childList') {
            const directional_nav_list = document.querySelectorAll('.directional__nav');
            if(!directional_nav_list) break;
            
            if(directional_nav_list.length === 2){
              console.log("remove directional nav")
             directional_nav_list[0].style.display='none';
            }
            const buttonContainer = directional_nav_list[1].querySelector(".directional__nav__button__container--next");
            const buttonForward = buttonContainer.querySelector('.directional__nav__button--right');
            const icon = buttonForward.querySelector('i');
            const nav_label = document.querySelector('.directional__nav__label');
            //if nav_label exsist the course has been completed 
            if(nav_label) {
              buttonForward.style.background = "#0A819E";
              buttonForward.style.cursor = 'pointer';
              icon.className = "icon-navigateright"
              icon.style.color = "#D9D9D9";
            }else{
              console.log('notcompleted')
              buttonForward.style.background = "#DBDBDB";
              buttonForward.style.cursor = 'no-drop';
              buttonForward.title = 'Complete lesson to continue';
              icon.className = "icon-lock"
              icon.style.color = "#696969";
              buttonForward.disabled=true;
            }
        }
      }
    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
});