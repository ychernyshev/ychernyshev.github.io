export const InteractiveResume = {
    mount(config = {}) {
        const container = document.getElementById("interactive-resume")

        if (!container) {
            console.warn("[InteractiveResume] Container #interactive-resume not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div className="row" style="margin-top: -2rem;" id="download-cv"></div>
        `
    }
}