/*************************************
                    VARIABLES
*************************************/

import images from "./galleryImages.js";
const galleryConatiner = get("#gallery-container");
/*************************************
                    FUNCTIONS
*************************************/

function get(string) {
    return document.querySelector(string);
}

function renderImages(arr) {
    return arr.map(img => `<img class="slide" src="./assets/${img}" alt="${img}"/>`).join('');
}

/*************************************
                    EVENT LISTENERS and ACTIONS
*************************************/

galleryConatiner.innerHTML = renderImages(images);