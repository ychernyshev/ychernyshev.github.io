export const IntroSection = {
    mount(config = {}) {
        const container = document.getElementById("interactive-resume")

        if (!container) {
            console.warn("[IntroSection] Container #interactive-resume not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="col-xl-7">
            
            </div>
        `
    }
}