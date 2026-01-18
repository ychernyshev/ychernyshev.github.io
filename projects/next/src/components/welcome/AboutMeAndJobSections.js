import {renderTemplate} from "../../core/helpers/renderTemplate.js";

export const AboutMeAndJobSections = {
    template: `
        
    `,
    mount(config = {}) {
        const container = document.getElementById("about-job-block");

        if (!container) {
            console.warn("[AboutMeAndJobSections] Container #about-job-block not found - component not mounted.");
            return;
        }

        const blocks = [
            {
                title: "About me",
                description: "Programming for me is a good and convenient tool that I can use to update and improve something as I work. And I like it. That's why I like to program in my spare time. Today, I study and practice full stack applications based on Django + Django Rest Framework + Vue.js as a powerful back-end and a simple and advanced interface to create high-level scalable projects"
            },
            {
                title: "Job experience",
                description: "I'm improving job processes during I have this job, by my programmer skills. For example, at Oriflame, for my coworkers, I created a FAQ on all questions we had when customers called our contact center. New operators have used this instrument as helpers during customer consultations. Or another instrument that collected all information about daily events in Oriflame. This instrument had to help the operator didn`t forget important information during customer consultation because it was a very big problem for us. Before Oriflame, at \"Almaz CNC\", I developed the customer support system, instructions, and design for the new store page. In my last job - at DD-Cargo, I chose a Django Framework to update and improve the system and processes we had on this job. Unfortunately, not all operations were comfortable for use there. So, I learned a Django Framework for creating a system that collects all processes in one \"window\" instead of thousand of Google Spreadsheets and Documents. Now I continue learning Django Framework. My next goal it's learning VUE.JS for connecting to Django Framework using Django Rest Framework. Therefore, all my jobs have been tangential to my programming desire and desire all update and improve"
            }
        ]

        blocks.forEach((item, index) => {
            const d_inline_flex = document.createElement("p");
            d_inline_flex.className = "d-inline-flex gap-1"

            const link = document.createElement("a");
            link.className = "btn btn-primary"
            link.setAttribute("data-bs-toggle", "collapse")
            link.setAttribute("href", `#multiCollapse_${item.title.upper}`)
            link.setAttribute("role", "button")
            link.setAttribute("aria-expanded", "false")
            link.setAttribute("aria-controls", `#multiCollapse_${item.title.upper}`)
            link.innerText = `${item.title.upper}`

            const block = document.createElement("div");
            block.className = "row"

            const col = document.createElement("div");
            col.className = "col"

            const collapse = document.createElement("div");
            collapse.className = "collapse multi-collapse"
            collapse.id = `#multiCollapse_${item.title.upper}`

            const card_body = document.createElement("div");
            card_body.className = "card card-body"
            card_body.innerText = `${item.description}`

            container.appendChild(block)
            block.appendChild(col)
            col.appendChild(collapse)
            collapse.appendChild(card_body)
        })

        container.innerHTML = renderTemplate(this.template, config);

        if (typeof this.onMount === "function") {
            this.onMount();
        }
    },
    onMount() {}
}