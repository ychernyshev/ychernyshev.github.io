export const AboutMeAndJobSections = {
    mount() {
        const container = document.getElementById("about-job-block");

        if (!container) {
            console.warn("[AboutMeAndJobSections] Container #about-job-block not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="row">
                <div id="about-job-blocks-col"></div>
            </div>
            <div id="about-job-blocks"></div>
        `;

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
            const about_job_blocks_col = document.getElementById("about-job-blocks-col");
            const about_job_blocks = document.getElementById("about-job-blocks");

            const d_inline_flex = document.createElement("p");
            d_inline_flex.className = "col-xxl-6 d-inline-flex gap-1"

            const link = document.createElement("a");
            link.className = "btn btn-warning w-100 right-angle bg-blue-gray text-dark"
            link.setAttribute("data-bs-toggle", "collapse")
            link.setAttribute("href", `#multiCollapse_${item.title.toUpperCase().replace(/\s+/g, "")}`)
            link.setAttribute("role", "button")
            link.setAttribute("aria-expanded", "false")
            link.setAttribute("aria-controls", `multiCollapse_${item.title.toUpperCase().replace(/\s+/g, "")}`)
            link.innerText = `${item.title.toUpperCase()}`

            const block = document.createElement("div");
            block.className = "row"

            const col = document.createElement("div");
            col.className = "col"

            const collapse = document.createElement("div");
            collapse.className = "collapse multi-collapse right-angle"
            collapse.id = `multiCollapse_${item.title.toUpperCase().replace(/\s+/g, "")}`

            const card = document.createElement("div");
            card.className = "card card-body right-angle"

            const card_title = document.createElement("p");
            card_title.className = "col-xxl-3 title-text media-text-center media-mt-2 bg-warning text-dark bold p-1 text-center";
            card_title.innerText = `${item.title}`;

            const card_body = document.createElement("div");
            card_body.innerText = `${item.description}`

            block.appendChild(col);
            col.appendChild(collapse);
            card.appendChild(card_title)
            card.appendChild(card_body);
            collapse.appendChild(card);

            d_inline_flex.appendChild(link);

            about_job_blocks_col.appendChild(d_inline_flex);
            about_job_blocks.appendChild(block);
        })
    }
}