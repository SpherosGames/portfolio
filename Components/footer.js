
function renderFooter() {
    return `
        <footer class="flex flex-col bg-gradient-to-b from-[#007ea7] to-[#00a8e8] text-center p-5 space-y-3 mt-5">
            <div class="icons flex flex-col place-self-center sm:flex-row sm:space-x-10">
                <a href="https://github.com/Doggy881" target="_blank"
                    class="transition-all ease-in-out duration-100 hover:drop-shadow-2xl hover:scale-105 active:scale-95">
                    <img src="Img/Icons/Github-Icon.png" alt="Github Icon" class="w-12" />
                </a>
                <p class="opacity-0 sm:opacity-100 text-1xl sm:text-5xl">/</p>
                <a href="https://github.com/Doggy881" target="_blank"
                    class="transition-all ease-in-out duration-100 hover:drop-shadow-2xl hover:scale-105 active:scale-95">
                    <img src="Img/Icons/Github-Icon.png" alt="Github Icon" class="w-12" />
                </a>
                <p class="opacity-0 sm:opacity-100 text-1xl sm:text-5xl">/</p>
                <a href="https://github.com/Doggy881" target="_blank"
                    class="transition-all ease-in-out duration-100 hover:drop-shadow-2xl hover:scale-105 active:scale-95">
                    <img src="Img/Icons/Github-Icon.png" alt="Github Icon" class="w-12" />
                </a>
                <p class="opacity-0 sm:opacity-100 text-1xl sm:text-5xl">/</p>
                <a href="https://github.com/Doggy881" target="_blank"
                    class="transition-all ease-in-out duration-100 hover:drop-shadow-2xl hover:scale-105 active:scale-95">
                    <img src="Img/Icons/Github-Icon.png" alt="Github Icon" class="w-12" />
                </a>
            </div>
            <div class="info">
                <p>
                    Email:
                    <a class="select-all hover:text-white">janjaapbol93@gmail.com</a>
                </p>
                <p>Phone: <a class="select-all hover:text-white">0623840141</a></p>
            </div>
            <p class="select-all hover:text-white w-15 place-self-center">
                Spheros Games
            </p>
        </footer>
    `;
}

document.body.innerHTML += renderFooter();