function RenderSquareCard(imageSrc, imgSize, linkHref, title, description) {
    return `
        <div class="card bg-[#00a8e8] rounded flex flex-col justify-center hover:shadow-2xl">
            <div class="relative image flex flex-col">
                <img src="${imageSrc}" class="rounded w-[${imgSize}em] mx-auto">
                <div class="button"
                    data-link-href=${linkHref}
                    data-width=5
                    data-height=1.5
                    data-text="More Info">
                </div>
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
    
    //Calls function in Button.js. Make sure the file is loaded first in the html file.
    // "<script defer type="text/javascript" src="Components/Button.js"></script>"
    document.querySelectorAll('.button').forEach(element => {
        renderCardFromElementButton(element);
    });    
}

// Automatically render all elements with the class "square-card"
document.querySelectorAll('.square-card').forEach(element => {
    renderCardFromElement(element);
});
