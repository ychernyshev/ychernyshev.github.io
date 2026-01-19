export const InteractiveResume = {
    mount(config = {}) {
        const container = document.getElementById("interactive-resume")

        if (!container) {
            console.warn("[InteractiveResume] Container #interactive-resume not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <component id="main-skills"></component>
            <component id="about-job-block"></component>
            <component id="work-experience"></component>
        `
    }
}