export const CV = {
    mount() {
        const container = document.getElementById("collapseCV");

        if (!container) {
            console.warn("[CV] Container #collapseCV not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="card card-body">
                <a class="mx-auto triangle-button" 
                    data-bs-toggle="collapse" 
                    href="#collapseCV" 
                    role="button" 
                    aria-expanded="false" 
                    aria-controls="collapseCV"
                    style="margin-top: -2.25rem">
                        <span class="triangle-text">CV</span>
                </a>
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
        `;
    }
}