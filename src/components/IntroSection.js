export const IntroSection = {
    mount(config = {}) {
        const container = document.getElementById("intro-section")

        if (!container) {
            console.warn("[IntroSection] Container #intro-section not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="col-xxl-10">
                <div class="row">
                    <div class="col-xxl-5 mt-4">
                        <img src="https://drive.google.com/file/d/1-PlSRA0rGdF_xngOAQ6jJ3UrdjL3V4jl" width="80%">
                    </div>
                    <div class="col-xxl-7 mt-4">
                        <h1 class="text-light fw-500" >Welcome</h1>
                        <h3 id="my-name" class="text-justify text-light fw-400">My name is <span class="text-warning fw-500">Eugene</span> or <span class="text-success fw-500">Yevhenii</span>, as you like</h3>
                        <p class="lead regular-text mt-3" style="font-size: 1.3rem;">I like Django and Vue.js. Firstly I have used only Django for my projects, but I saw that I need in much comfortable and reactive frontend. So, I am using both of these technologies to realize my ideas. You can see the list of technologies that I am exploring:</p>
                        <div class="row mt-5 mb-4 list-spacing list-font-size mx-auto"><div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark p-3" style="text-align: center;">PYTHON/DJANGO</div><div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark p-3" style="text-align: center;">DJANGO REST FRAMEWORK</div><div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark p-3" style="text-align: center;">JAVASCRIPT</div><div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark p-3" style="text-align: center;">VUE.JS</div></div>
                    </div>
                </div>
            </div>
        `
    }
}