export const ExamplesList = {
    mount(config = {}) {
        const container = document.getElementById("example-main")

        if (!container) {
            console.warn("[ExamplesList] Container #example-main not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="d-flex flex-row justify-content-center">
                <p style="transform: rotate(-90deg); margin-bottom: -4.6rem; font-size: 3.5rem; letter-spacing: 0.7rem;">EXAMPLES</p>
                <p class="roboto-condensed-bold font-weight-bolder" style="margin-top: -12rem; margin-bottom: -15rem; margin-left: -15rem; font-size: 30rem; color: rgb(0, 87, 181);">4</p>
            </div>
        `
    }
}