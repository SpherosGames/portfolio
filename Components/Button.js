function RenderButton(linkHref, text, width, height) {
    return `
       <a href="${linkHref}" class="mx-[40%] text-center opacity-80 absolute bg-[#007ea7] bottom-[10%] w-[${width}em] h-[${height}em] text-xs lg:text-xl font-medium text-gray-200 rounded
                transition-all ease-in-out duration-100 hover:scale-105 hover:text-gray-300 hover:bg-[#003459] active:scale-95 active:text-white">${text}</a> 
    `;
}

function renderCardFromElementButton(element) {
    const linkHref = element.dataset.linkHref;
    const text = element.dataset.text;
    const width = element.dataset.width;
    const height = element.dataset.height;

    console.log(height);
    console.log(width);

    element.innerHTML = RenderButton(linkHref, text, width, height);
}

document.querySelectorAll('.button').forEach(element => {
    renderCardFromElementButton(element);
});
