import {renderTemplate} from "../core/helpers/renderTemplate.js";

export const EducationScene = {
    template: `
        <section id="top-nav"></section>
    `,
    mount(config = {}) {
        const container = document.getElementById("education-block");

        if (!container) {
            console.warn("[EducationScene] Container #education-block not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);

        if (typeof this.onMount === "function") {
            this.onMount();
        }
    },
    onMount() {}
}