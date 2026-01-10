export const ContentMain = {
    mount(config = {}) {
        const container = document.getElementById("content-main")

        if (!container) {
            console.warn("[ContentMain] Container #content-main not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="row justify-content-center">
                
            </div>
        `
    }
}