export const IntroSection = {
    mount(config = {}) {
        const container = document.getElementById("intro-section")

        if (!container) {
            console.warn("[IntroSection] Container #intro-section not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="row justify-content-center">
            
            </div>
        `
    }
}