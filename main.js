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
    return arr.map(img => {
        const name = img.replace(".jpg", "");
        return `<img class="slide" id="${name}" src="./assets/${img}" alt="${name}"/>`
    }).join('');
}

function handleClick(e) {
    const item = e;
    console.log(item);
}

function handleGallery() {
    const children = galleryConatiner.children;
    console.log(children);
    const firstChild = children[0];
    // const lastChild = children[children.length - 1];
    console.log(firstChild.offsetWidth);
    // console.log(lastChild);

    setInterval(() => {
        galleryConatiner.scrollLeft += 100;
        if (galleryConatiner.scrollLeft >= galleryConatiner.scrollLeftMax) {
            galleryConatiner.scrollLeft = 0;
        }
    }, 1000);
}

/*************************************
                    EVENT LISTENERS and ACTIONS
*************************************/

addEventListener("click", handleClick);

galleryConatiner.innerHTML = renderImages(images);

handleGallery();