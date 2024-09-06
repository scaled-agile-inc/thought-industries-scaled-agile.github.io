document.addEventListener('DOMContentLoaded', (event) => {
    // Select the node that will be observed for mutations
    var targetNode = document.body; // body is chosen here as an example

    // Options for the observer (which mutations to observe)
    var config = { childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    var callback = function(mutationsList, observer) {
        for(let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                  var directional_nav_list = document.querySelectorAll('.directional__nav');
                  if(directional_nav_list.length === 2){
                   directional_nav_list[0].style.display='none';
                  }
                }
        }
      }
      var observer = new MutationObserver(callback);
    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
});