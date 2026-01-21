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
                        <img src="https://raw.githubusercontent.com/ychernyshev/ychernyshev.github.io/main/assets/images/persona.jpg" width="78%" height="100%" alt="author">
                    </div>
                    <div class="col-xl-7 col-lg-8 col-sm-11 mt-4 text-justify">
                        <h1 class="text-light">Welcome</h1>
                        <h3 id="my-name" class="text-justify text-light fw-400">My name is <span class="text-warning">Eugene</span> or <span class="text-success">Yevhenii</span>, as you like</h3>
                        <p class="lead regular-text mt-3 fw-lighter" style="font-size: 1.3rem;">
                            I like Django and Vue.js. Firstly I have used only Django for my projects, but I saw that I need in much comfortable and reactive frontend. So, I am using both of these technologies to realize my ideas. You can see the list of technologies that I am exploring:
                        </p>
                        <div class="row justify-content-center" id="download-cv"></div>
                    </div>
                </div>
            </div>
        `
    }
}