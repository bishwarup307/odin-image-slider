const IMAGE_URLS = [
    "https://ik.imagekit.io/bishwarup307/image-slider/1.jpg?tr=w-768",
    "https://ik.imagekit.io/bishwarup307/image-slider/2.jpg?tr=w-768",
    "https://ik.imagekit.io/bishwarup307/image-slider/4.jpg?tr=w-768",
    "https://ik.imagekit.io/bishwarup307/image-slider/3.jpg?tr=w-768",
    "https://ik.imagekit.io/bishwarup307/image-slider/5.jpg?tr=w-768",
];

let center = 2;
let inFocus;

let left = 1;
let inFocusLeft;

let right = 3;
let inFocusRight;

const getAdjacentImage = function getNext(index, direction) {
    const img = document.createElement("img");
    img.src = IMAGE_URLS[index];
    img.className =
        "absolute w-full h-full rounded-xl transition-transform ease-in-expo duration-1000";
    if (direction === "next") img.classList.add("translate-x-full");
    else if (direction === "previous") img.classList.add("-translate-x-full");
    return img;
};

const getCenterIndex = function getCenterSlideIndex(prevCenter, direction) {
    let centerIndex;
    if (direction === "next") {
        centerIndex = prevCenter + 1;
        centerIndex %= 5;
    } else if (direction === "previous") {
        centerIndex = prevCenter - 1;
        if (centerIndex < 0) centerIndex = IMAGE_URLS.length - 1;
    }
    return centerIndex;
};

export default function Slider() {
    const parentContainer = document.createElement("div");

    const container = document.createElement("div");
    container.className =
        "container relative py-5 text-white mx-auto flex justify-center items-center gap-8 overflow-hidden";

    const leftDiv = document.createElement("div");
    leftDiv.className =
        "fade-shadow absolute aspect-4/3 w-[50%] -translate-x-[120%] overflow-hidden rounded-2xl";
    const focusImgL = document.createElement("img");
    focusImgL.src = IMAGE_URLS[1];
    focusImgL.className =
        "absolute w-full h-full rounded-xl transition-transform ease-in-expo duration-1000";
    leftDiv.appendChild(focusImgL);
    container.appendChild(leftDiv);

    const focusDiv = document.createElement("div");
    focusDiv.className =
        "relative aspect-4/3 w-[65%] rounded-3xl overflow-hidden shadow-lg";
    const focusImgM = document.createElement("img");
    focusImgM.src = IMAGE_URLS[2];
    focusImgM.className =
        "absolute w-full h-full rounded-xl transition-transform ease-in-expo duration-1000";
    focusDiv.appendChild(focusImgM);

    const leftButton = document.createElement("button");
    leftButton.innerHTML = `<svg viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>left</title> <path d="M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z"></path> </g></svg>`;
    leftButton.className =
        "absolute z-50 top-1/2 left-4 px-2 py-2 bg-white bg-opacity-50 fill-slate-600 w-14 h-14 -translate-y-1/2 rounded-full hover:bg-slate-700 hover:fill-slate-50";
    focusDiv.appendChild(leftButton);

    const rightButton = document.createElement("button");
    rightButton.innerHTML = `<svg viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right</title> <path d="M7.75 16.063l-7.688-7.688 3.719-3.594 11.063 11.094-11.344 11.313-3.5-3.469z"></path> </g></svg>`;
    rightButton.className =
        "absolute z-50 top-1/2 right-4 px-2 py-2 bg-white bg-opacity-50 fill-slate-600 w-14 h-14 -translate-y-1/2 rounded-full hover:bg-slate-700 hover:fill-slate-50";
    focusDiv.appendChild(rightButton);

    container.appendChild(focusDiv);

    const rightDiv = document.createElement("div");
    rightDiv.className =
        "fade-shadow absolute aspect-4/3 w-[50%] translate-x-[120%] rounded-2xl overflow-hidden";
    const focusImgR = document.createElement("img");
    focusImgR.src = IMAGE_URLS[3];
    focusImgR.className =
        "absolute w-full h-full rounded-xl transition-transform ease-in-expo duration-1000";
    rightDiv.appendChild(focusImgR);
    container.appendChild(rightDiv);

    const removePastSlides = function removePastChildFromStack() {
        [...focusDiv.children].forEach((child) => {
            if (child.classList.contains("del")) focusDiv.removeChild(child);
        });

        [...leftDiv.children].forEach((child) => {
            if (child.classList.contains("del")) leftDiv.removeChild(child);
        });

        [...rightDiv.children].forEach((child) => {
            if (child.classList.contains("del")) rightDiv.removeChild(child);
        });
    };

    const getInitialTranslation = (direction) => {
        const initialTranslation = direction === "next" ? "-100%" : "100%";
        return `translateX(${initialTranslation})`;
    };

    const animateCenter = function animateCenterImage(direction) {
        center = getCenterIndex(center, direction);
        const nextImage = getAdjacentImage(center, direction);
        focusDiv.appendChild(nextImage);

        if (!inFocus) inFocus = focusImgM;
        inFocus.classList.add("del");

        inFocus.style.transform = getInitialTranslation(direction);
        setTimeout(() => {
            nextImage.style.transform = "translateX(0%)";
        }, 50);

        inFocus = nextImage;
    };

    const animateLeft = function animateLeftImage(direction) {
        left = getCenterIndex(left, direction);
        const nextImageL = getAdjacentImage(left, direction);
        leftDiv.appendChild(nextImageL);

        if (!inFocusLeft) inFocusLeft = focusImgL;
        inFocusLeft.classList.add("del");

        inFocusLeft.style.transform = getInitialTranslation(direction);
        setTimeout(() => {
            nextImageL.style.transform = "translateX(0%)";
        }, 50);

        inFocusLeft = nextImageL;
    };

    const animateRight = function animateRightImage(direction) {
        right = getCenterIndex(right, direction);
        const nextImageR = getAdjacentImage(right, direction);
        rightDiv.appendChild(nextImageR);

        if (!inFocusRight) inFocusRight = focusImgR;
        inFocusRight.classList.add("del");

        inFocusRight.style.transform = getInitialTranslation(direction);
        setTimeout(() => {
            nextImageR.style.transform = "translateX(0%)";
        }, 50);

        inFocusRight = nextImageR;
    };

    rightButton.addEventListener("click", () => {
        removePastSlides();
        animateCenter("next");
        animateLeft("next");
        animateRight("next");
    });

    leftButton.addEventListener("click", () => {
        removePastSlides();
        animateCenter("previous");
        animateLeft("previous");
        animateRight("previous");
    });

    parentContainer.appendChild(container);

    return parentContainer;
}
