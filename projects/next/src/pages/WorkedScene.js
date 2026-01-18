import {renderTemplate} from "../core/helpers/renderTemplate.js";

export const WorkedScene = {
    template: `
        <section id="top-nav"></section>
    `,
    mount(config = {}) {
        const container = document.getElementById("worked-block");

        if (!container) {
            console.warn("[WorkedScene] Container #worked-block not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);

        if (typeof this.onMount === "function") {
            this.onMount();
        }
    },
    onMount() {}
}