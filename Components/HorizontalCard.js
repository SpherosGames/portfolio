function RenderHorizontalCard(imageSrc, imageDescription, title, description, placeSelf) {
    return `
        <div
            class="flex flex-col col-span-auto sm:flex-row justify-between mt-5 p-5 align-middle bg-gradient-to-l from-[#007ea7] to-[#00a8e8] w-full lg:w-[80%] rounded-none lg:rounded-l items-center place-self-${placeSelf}">
            <div class="w-[50%] place-self-center">
                <p class="text-center text-3xl">${title}</p><br/>
                <p class="text-center md:text-left">
                    ${description}
                </p>
            </div>
            <div class="w-[50%] place-self-center">
                <img class="rounded p-5 w-[70%] mx-auto" src=${imageSrc}>
                <p class="text-s text-gray-800 text-center">${imageDescription}</p>
            </div>
        </div>
    `;
}

// Function to render the card based on data attributes from an HTML element
function renderCardFromElement(element) {
    const imageSrc = element.dataset.imageSrc;
    const imageDescription = element.dataset.imageDescription;
    const title = element.dataset.title;
    const description = element.dataset.description;
    const placeSelf = element.dataset.placeSelf;

    element.innerHTML = RenderHorizontalCard(imageSrc, imageDescription, title, description, placeSelf);
}

// Automatically render all elements with the class "square-card"
document.querySelectorAll('.horizontal-card').forEach(element => {
    renderCardFromElement(element);
});
