
function renderCode(text) {
    return `
        <div class="w-[80%] mx-auto bg-[#007ea7] rounded m-5 p-5">
            <div class="flex flex-row justify-around w-[50%] m-auto">
                <p class="text-3xl">AIData code</p><br/>
                <button class="rounded bg-[#00a8e8] p-5">Show</button>
            </div>
            <pre>
                <code data-language="csharp">${text}</code>
            </pre>

            <p>
                Note: Couldn't remove &lt;/gamemanager&gt; code bececuase of the library I am using.
            </p>
        </div>
    `;
}

// Function to render the card based on data attributes from an HTML element
function renderCardFromElement(element) {
    const text = element.dataset.text;

    element.innerHTML = renderCode(text);
}

// Automatically render all elements with the class "square-card"
document.querySelectorAll('.code-showcase').forEach(element => {
    renderCardFromElement(element);
});