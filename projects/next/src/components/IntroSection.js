export const IntroSection = {
    mount(config = {}) {
        const container = document.getElementById("intro-section")

        if (!container) {
            console.warn("[IntroSection] Container #intro-section not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="container-fluid">
                <div class="row justify-content-center" style="position: relative;">
                    <div class="col-xl-3 col-lg-8 col-sm-11 d-flex justify-content-center">
                        <img src="assets/images/persona.jpg" width="80%">
                    </div>
                    <div class="col-xl-7 col-lg-8 col-sm-11 mt-4 text-justify">
                        <h1 class="text-light fw-500">Welcome</h1>
                        <h3 id="my-name" class="text-justify text-light fw-400">My name is <span class="text-warning fw-500">Eugene</span> or <span class="text-success fw-500">Yevhenii</span>, as you like</h3>
                        <p class="lead regular-text mt-3" style="font-size: 1.3rem;">
                            I like Django and Vue.js. Firstly I have used only Django for my projects, but I saw that I need in much comfortable and reactive frontend. So, I am using both of these technologies to realize my ideas. You can see the list of technologies that I am exploring:
                        </p>
                        <div class="row mt-5 mb-4 list-spacing list-font-size mx-auto">
                            <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark-custom p-3" style="text-align: center;">PYTHON/DJANGO</div>
                            <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark-custom p-3" style="text-align: center;">DJANGO REST FRAMEWORK</div>
                            <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark-custom p-3" style="text-align: center;">JAVASCRIPT</div>
                            <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark-custom p-3" style="text-align: center;">VUE.JS</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}