
function RenderNavBar() {
    return `
        <div class="z-50 navbar fixed top-0 place-self-center w-full opacity-50">
        <header class="bg-gradient-to-b from-[#007ea7] to-[#00a8e8] flex justify-around text-center h-[2em]">
            <a class="transition-all duration-100 ease-in-out hover:text-gray-300 active:text-white text-ms hover:scale-110 active:scale-95 lg:text-lg" href="#">Jan-Jaap Bol</a>
            <a class="transition-all duration-100 ease-in-out hover:text-gray-300 active:text-white text-ms hover:scale-110 active:scale-95 lg:text-lg" href="index.html">Home</a>
            <a class="transition-all duration-100 ease-in-out hover:text-gray-300 active:text-white text-ms hover:scale-110 active:scale-95 lg:text-lg" onclick="ToggleDropDown()">Projects</a>
            <a class="transition-all duration-100 ease-in-out hover:text-gray-300 active:text-white text-ms hover:scale-110 active:scale-95 lg:text-lg" href="Contact.html">Contact</a>
            <a class="transition-all duration-100 ease-in-out hover:text-gray-300 active:text-white text-ms hover:scale-110 active:scale-95 lg:text-lg" href="About.html">About</a>
        </header>
    
        <div class="flex justify-center">
            <div id="DropDown" class="-translate-y-60 transition-transform ease-in-out duration-150 absolute bg-gradient-to-b from-[#007ea7] to-[#00a8e8] flex flex-col w-[30em] rounded-b justify-around">
                <a class="transition-all duration-100 ease-in-out hover:text-gray-300 active:text-white text-ms hover:scale-110 active:scale-95 lg:text-lg text-center" href="AllProjects.html">All Projects</a>
                <a class="transition-all duration-100 ease-in-out hover:text-gray-300 active:text-white text-ms hover:scale-110 active:scale-95 lg:text-lg text-center" href="Pong.html">Pong</a>
                <a class="transition-all duration-100 ease-in-out hover:text-gray-300 active:text-white text-ms hover:scale-110 active:scale-95 lg:text-lg text-center" href="TankShot.html">Tank Shot</a>
                <a class="transition-all duration-100 ease-in-out hover:text-gray-300 active:text-white text-ms hover:scale-110 active:scale-95 lg:text-lg text-center" href="RacingGame.html">Racing Game</a>
                <a class="transition-all duration-100 ease-in-out hover:text-gray-300 active:text-white text-ms hover:scale-110 active:scale-95 lg:text-lg text-center" href="TowerDefenceGame.html">Tower Defence Game</a>
            </div>
        </div>
    </div>
    `;
}

document.body.innerHTML += RenderNavBar();