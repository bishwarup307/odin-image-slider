const IMAGE_URLS = [
    "https://ik.imagekit.io/bishwarup307/image-slider/1.jpg?tr=w-768",
    "https://ik.imagekit.io/bishwarup307/image-slider/2.jpg?tr=w-768",
    "https://ik.imagekit.io/bishwarup307/image-slider/4.jpg?tr=w-768",
    "https://ik.imagekit.io/bishwarup307/image-slider/3.jpg?tr=w-768",
    "https://ik.imagekit.io/bishwarup307/image-slider/5.jpg?tr=w-768",
];

let center = 2;

export default function Slider() {
    const parentContainer = document.createElement("div");

    const container = document.createElement("div");
    container.className =
        "container py-5 text-white mx-auto flex justify-center items-center gap-8 overflow-hidden relative my-shadow";

    const leftDiv = document.createElement("div");
    leftDiv.className =
        "left-div absolute max-w-lg max-h-[300px] -translate-x-full translate-y-1/2 -top-28 overflow-hidden rounded-xl";
    const leftImg = document.createElement("img");
    leftImg.className = "rounded-xl";
    leftImg.src = IMAGE_URLS[1];
    leftImg.alt = "landscape";
    leftDiv.appendChild(leftImg);
    container.appendChild(leftDiv);

    const focusDiv = document.createElement("div");
    focusDiv.className =
        "max-w-lg border-l-8 border-r-8 border-transparent rounded-lg overflow-hidden";
    const img = document.createElement("img");
    img.className = "rounded-xl transition-transform duration-500";
    img.src = IMAGE_URLS[2];
    focusDiv.append(img);
    container.appendChild(focusDiv);

    const rightDiv = document.createElement("div");
    rightDiv.className =
        "absolute max-w-lg max-h-[300px] translate-x-full translate-y-1/2 -top-28 overflow-hidden rounded-xl";
    const rightImg = document.createElement("img");
    rightImg.className = "rounded-xl";
    rightImg.src = IMAGE_URLS[3];
    rightDiv.appendChild(rightImg);
    container.appendChild(rightDiv);

    parentContainer.appendChild(container);

    const btnAnimate = document.createElement("button");
    btnAnimate.className =
        "mt-6 ml-12 px-4 py-1 font-medium border-none rounded-md bg-slate-700 text-white text-lg";
    btnAnimate.textContent = "Slide";
    parentContainer.appendChild(btnAnimate);

    btnAnimate.addEventListener("click", () => {
        center += 1;
        let left = center - 1;
        let right = center + 1;
        center %= 5;
        left %= 5;
        right %= 5;

        // console.log(left, center, right);

        // leftImg.src = IMAGE_URLS[left];
        // img.src = IMAGE_URLS[center];
        // rightImg.src = IMAGE_URLS[right];

        img.style.transform = "translateX(100%)";
        setTimeout(() => {
            img.src = IMAGE_URLS[center];
            img.style.transform = "translateX(-100%)";
        }, 500);
    });

    return parentContainer;
}
