
function renderCode(text, title, warning) {
    return `
        <div class="w-[80%] mx-auto bg-[#007ea7] rounded m-5 p-5">
            <div class="flex flex-row justify-around w-[50%] m-auto">
                <p class="text-3xl">${title}</p><br/>
                <button class="rounded bg-[#00a8e8] p-5">Show</button>
            </div>
            <pre>
                <code data-language="csharp">${text}</code>
            </pre>
            <br>
            <p>${warning}</p>
        </div>
    `;
}

// Function to render the card based on data attributes from an HTML element
function renderCardFromElement(element) {
    const text = element.dataset.text;
    const title = element.dataset.title;
    const warning = element.dataset.warning;
    
    element.innerHTML = renderCode(text, title, warning);
}

// Automatically render all elements with the class "square-card"
document.querySelectorAll('.code-showcase').forEach(element => {
    renderCardFromElement(element);
});