function RenderSquareCard(imageSrc, imgSize, linkHref, title, description) {
    return `
        <div class="card bg-[#00a8e8] rounded flex flex-col justify-center hover:shadow-2xl">
            <div class="relative image flex flex-col">
                <img src="${imageSrc}" class="rounded w-[${imgSize}em] mx-auto">
                <a href="${linkHref}" class="text-center self-center opacity-80 absolute bg-[#007ea7] bottom-[10%] place-self-center w-[5em] h-[1.5em] text-xs lg:text-xl font-medium text-gray-200 rounded
                transition-all ease-in-out duration-100 hover:scale-105 hover:text-gray-300 hover:bg-[#003459] active:scale-95 active:text-white">More Info</a>
            </div>
            <p class="text-center font-medium">${title}</p> <br>
            <p class="text-center">${description}</p>
        </div>
    `;
}

// Function to render the card based on data attributes from an HTML element
function renderCardFromElement(element) {
    const imageSrc = element.dataset.imageSrc;
    const imageSize = element.dataset.imageSize;
    const linkHref = element.dataset.linkHref;
    const title = element.dataset.title;
    const description = element.dataset.description;

    element.innerHTML = RenderSquareCard(imageSrc, imageSize, linkHref, title, description);
}

// Automatically render all elements with the class "square-card"
document.querySelectorAll('.square-card').forEach(element => {
    renderCardFromElement(element);
});
