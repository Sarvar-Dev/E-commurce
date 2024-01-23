const modifiers={
    siteHeaderCartModal:"site-header__cart-modal--open",
    imgThumbnailActive:"img-showcase__thumbnail-active",
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
            elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
        });
        // Add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

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
const elsLightboxImgThumbnail = elLightbox.querySelectorAll(".img-showcase__thumbnail");

elsLightboxThumbnailButton.forEach(function(elButton){
    elButton.addEventListener('click',function(){
        // REMOVE ACTIVE STATE FROM ALL BUTTONS
        elsLightboxImgThumbnail.forEach(function(elImgThumbnail){
            elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
        });
        // Add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

        // UPDATE ACTIVE IMAGE SRC ACCORDINGLY
        elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    });
});
// Lightbox control

const elLightboxControlPrev = elLightbox.querySelector(".js-lightbox-control-prev");
const elLightboxControlNext = elLightbox.querySelector(".js-lightbox-control-next");

if (elLightboxControlNext){
    elLightboxControlNext.addEventListener('click',function(){
        // Find active li element
        const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail-active');
        // Remove active li element's style 
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

        if(elActiveItem.nextElementSibling === null){
            elNextActiveItem=elsLightboxImgThumbnail[0];
        } else{
            elNextActiveItem=elActiveItem.nextElementSibling;
        }
        elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

         // UPDATE ACTIVE IMAGE SRC ACCORDINGLY
        elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
    })
}

if (elLightboxControlPrev){
    elLightboxControlPrev.addEventListener('click',function(){
        // Find active li element
        const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail-active');
        // Remove active li element's style 
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);


    let elNextActiveItem;

        if(elActiveItem.previousElementSibling === null){
            elNextActiveItem=elsLightboxImgThumbnail[elsLightboxImgThumbnail.length-1];
        } else{
            elNextActiveItem=elActiveItem.previousElementSibling;
        }
        elNextActiveItem.classList.add(modifiers.imgThumbnailActive);
        // UPDATE ACTIVE IMAGE SRC ACCORDINGLY
        elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
    })

}

// COUNT PRODUCT
const elProductQtyDecrementButton = document.querySelector(".js-product-quantity-decrement-button");
const elProductQtyIncrementButton = document.querySelector(".js-product-quantity-increment-button");
const elProductQty = document.querySelector(".product-info__quantity");

if(elProductQtyIncrementButton){
    elProductQtyIncrementButton.addEventListener('click',function(){
        elProductQty.textContent = parseInt(elProductQty.textContent,10)+1;
    })
}

if(elProductQtyDecrementButton){
    elProductQtyDecrementButton.addEventListener('click',function(){

        const qty = parseInt(elProductQty.textContent,10)-1;
        if (qty>0){
            elProductQty.textContent = qty-1
        }
    })
}