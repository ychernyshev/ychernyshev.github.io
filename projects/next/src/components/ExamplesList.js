export const ExamplesList = {
    mount(config = {}) {
        const container = document.getElementById("example-main")

        if (!container) {
            console.warn("[ExamplesList] Container #example-main not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            
        `
    }
}