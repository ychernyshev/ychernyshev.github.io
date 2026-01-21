import {renderTemplate} from "../core/helpers/renderTemplate.js";

export const WelcomeScene = {
    template: `
        <section id="top-nav"></section>
        <section 
            style="background: linear-gradient(#404a55, #0e1014);" 
            class="col-xxl-12 text-light" 
            id="intro-section"></section>
        <section id="content-main"></section>
        <section id="content-main"></section>
        <section class="row justify-content-center bg-darker text-light" id="additional-skills"></section>
    `,
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