
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the node that will be observed for mutations
    var targetNode = document.body; // body is chosen here as an example

    // Options for the observer (which mutations to observe)
    var config = { childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    var callback = function(mutationsList, observer) {
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                var modalDialog = document.getElementById('modalContent');
                if(modalDialog && !document.querySelector(".cart-banner")) {
                  console.log("cart rendered")
                  // Create a new div element
                  var newDiv = document.createElement("div");
                  newDiv.classList.add("cart-banner")
                  var cartBannerIcon = document.createElement("img");
                  newDiv.appendChild(cartBannerIcon)
                  cartBannerIcon.classList.add("cart-banner__icon")
                  
                  cartBannerIcon.src = 'data:image/svg+xml;base64,' + btoa(`<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="14" fill="white"/>
                  <g clip-path="url(#clip0_5337_2719)">
                  <rect width="17" height="17" transform="translate(5.5 5.5)" fill="white"/>
                  <path d="M9.0415 14L12.5832 17.5416L19.6665 10.4583" stroke="#28803A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_5337_2719">
                  <rect width="17" height="17" fill="white" transform="translate(5.5 5.5)"/>
                  </clipPath>
                  </defs>
                  </svg>`
                  );
                  
                  
                  var newSpan = document.createElement("p")
                  newSpan.textContent = "Item added to E-Learning Cart";
                  newSpan.classList.add("cart-banner__title")
                  newDiv.appendChild(newSpan);
                  // Append the new div to the modal
                  modalDialog.prepend(newDiv);
                  // Stop observing once we've found the element
                }
            }
        }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
});
