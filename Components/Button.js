function RenderButton(linkHref, text) {
    return `
        <a href="${linkHref}" class="text-center self-center opacity-80 absolute bg-[#007ea7] bottom-[10%] place-self-center w-[5em] h-[1.5em] text-xs lg:text-xl font-medium text-gray-200 rounded
                transition-all ease-in-out duration-100 hover:scale-105 hover:text-gray-300 hover:bg-[#003459] active:scale-95 active:text-white">${text}</a> 
    `;
}

function renderCardFromElement(element) {
    const linkHref = element.dataset.linkHref;
    const text = element.dataset.text;

    element.innerHTML = RenderButton(linkHref, text);
}

document.querySelectorAll('.button').forEach(element => {
    renderCardFromElement(element);
});
