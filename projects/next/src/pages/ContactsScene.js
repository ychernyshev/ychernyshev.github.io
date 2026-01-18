import {renderTemplate} from "../core/helpers/renderTemplate.js";

export const ContactsScene = {
    template: `
        <section id="top-nav"></section>
    `,
    mount(config = {}) {
        const container = document.getElementById("contacts-block");

        if (!container) {
            console.warn("[ContactsScene] Container #contacts-block not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);

        if (typeof this.onMount === "function") {
            this.onMount();
        }
    },
    onMount() {}
}