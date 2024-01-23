const modifiers={
    siteHeaderCartModal:"site-header__cart-modal--open",
    imgShowcaseThumbnailActive:"img-showcase__thumbnail-active",
    lightboxOpen:'lightbox--open'
}

const elSiteHeaderCartLink = document.querySelector(".js-site-header-cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal");



// Header-cart-open and close
if(elSiteHeaderCartLink){
    elSiteHeaderCartLink.addEventListener("click",function(evt){
        evt.preventDefault();
        elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModal);
    })
}


// Image showcase
const elImgShowcaseActiveImg = document.querySelector(".img-showcase__active-img");
const elsShowcaseThumbnailButton = document.querySelectorAll(".js-showcase__thumbnail-button");
const elsImgThumbnail = document.querySelectorAll(".img-showcase__thumbnail");
elsShowcaseThumbnailButton.forEach(function(elButton){
    elButton.addEventListener('click',function(){
        // REMOVE ACTIVE STATE FROM ALL BUTTONS
        elsImgThumbnail.forEach(function(elImgThumbnail){
            elImgThumbnail.classList.remove(modifiers.imgShowcaseThumbnailActive);
        });
        // Add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgShowcaseThumbnailActive);

        // UPDATE ACTIVE IMAGE SRC ACCORDINGLY
        elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    });
});


// LIGHTBOX OPEN and close
const elImgShowcaseLightbox = document.querySelector(".js-img-showcase__lightbox-toggle");
const elLightbox = document.querySelector(".lightbox");
const elLightboxClose = document.querySelector('.js-lightbox__close')

if (elImgShowcaseLightbox){
    elImgShowcaseLightbox.addEventListener('click',function(){
        elLightbox.classList.add(modifiers.lightboxOpen)
    })
}
if (elLightboxClose){
    elLightboxClose.addEventListener('click',function(){
        elLightbox.classList.remove(modifiers.lightboxOpen)
    })
}

// LIGHTBOX SHOWCASE

const elImgLightboxActiveImg = elLightbox.querySelector(".img-showcase__active-img");
const elsLightboxThumbnailButton = elLightbox.querySelectorAll(".js-img-lightbox__thumbnail-button");
const elsLigtboxImgThumbnail = elLightbox.querySelectorAll(".img-showcase__thumbnail");
console.log(elImgLightboxActiveImg,elsLightboxThumbnailButton,elsLigtboxImgThumbnail)

elsLightboxThumbnailButton.forEach(function(elButton){
    elButton.addEventListener('click',function(){
        // REMOVE ACTIVE STATE FROM ALL BUTTONS
        elsLigtboxImgThumbnail.forEach(function(elImgThumbnail){
            elImgThumbnail.classList.remove(modifiers.imgShowcaseThumbnailActive);
        });
        // Add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgShowcaseThumbnailActive);

        // UPDATE ACTIVE IMAGE SRC ACCORDINGLY
        elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    });
});