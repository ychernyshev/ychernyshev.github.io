export const ContentMain = {
    mount(config = {}) {
        const container = document.getElementById("content-main")

        if (!container) {
            console.warn("[ContentMain] Container #content-main not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="row justify-content-center">
                <div class="col-xl-3" id="example-main"></div>
                <div class="col-xl-7" id="interactive-resume"></div>
            </div>
        `
    }
}