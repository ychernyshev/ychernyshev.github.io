export const IntroSection = {
    mount(config = {}) {
        const container = document.getElementById("example-main")

        if (!container) {
            console.warn("[IntroSection] Container #example-main not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="row justify-content-center">
            
            </div>
        `
    }
}