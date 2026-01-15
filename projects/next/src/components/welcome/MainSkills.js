export const MainSkills = {
    mount(config = {}) {
        const container = document.getElementById("main-skills")

        if (!container) {
            console.warn("[MainSkills] Container #main-skills not found - component not mounted.");
            return;
        }

        container.innerHTML = `
                <div class="row mt-5 mb-4 list-spacing list-font-size mx-auto text-white" style="background: #343A40">
                    <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark-custom p-3 font-weight-bold text-center">PYTHON/DJANGO
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark-custom p-3 font-weight-bold text-center">DJANGO REST
                        FRAMEWORK
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark-custom p-3 font-weight-bold text-center">JAVASCRIPT
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6 bg-dark-custom p-3 font-weight-bold text-center">VUE.JS</div>
                </div>
            `
    }
}