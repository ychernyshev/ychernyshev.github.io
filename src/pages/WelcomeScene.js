import {renderTemplate} from "../core/helpers/renderTemplate.js";

export const WelcomeScene = {
    template: ``,
    mount(config = {}) {
        const container = document.getElementById("welcome-block");

        if (!container) {
            console.warn("[WelcomeScene] Container #welcome-block not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);

        if (typeof this.onMount === "function") {
            this.onMount();
        }
    },
    onMount() {}
}