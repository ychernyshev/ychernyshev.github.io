import {renderTemplate} from "../../core/helpers/renderTemplate.js";

export const WorkExperience = {
    template: `
        <div class="row justify-content-center">
            <div class="row" id="job-index"></div>
        </div>
    `,
    mount(config = {}) {
        const container = document.getElementById("work-experience");

        if (!container) {
            console.warn("[WorkExperience] Container #work-experience not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);

        if (typeof this.onMount === "function") {
            this.onMount();
        }

        const job_list = [
            {
                index: 1,
                title: "JSC UKRPOSHTA",
                position: "Postmaster",
                duration_from: "october 2025",
                duration_to: "",
                description: "",
                responsibilities: [
                    ""
                ],
                preview_url: "",
                code_url: ""
            },
            {
                index: 2,
                title: "JSC UKRPOSHTA",
                position: "Postman",
                duration_from: "september 2022",
                duration_to: "september 2025",
                description: "I am a 2nd class postman. I deliver parcels and parcels. One of my duties is to find and return expired letters to the warehouse. Ukrposhta does not have a mail cataloging program. So I have to find those emails manually. To make this process more convenient, I created a program for myself and use it every time. If my colleagues have any questions about mail, this app will help them too. To create this application, I used my Django skills, and to have a better, scalable, and user-friendly interface, I started learning the Vue.js framework.",
                responsibilities: [
                    "Responsible for the timely delivery of parcels and packages;",
                    "Conducted searches and retrieved overdue letters, returning them to the warehouse for further processing;"
                ],
                preview_url: "",
                code_url: "https://github.com/ychernyshev/the_postman_crm__example"
            },
            {
                index: 3,
                title: "DD-CARGO INTERNATIONAL COURIER SERVICE",
                position: "Senior Customer Service Manager",
                duration_from: "August 2020",
                duration_to: "February 2022",
                description: "I am an operator and a senior contact center customer service specialist. I regularly work with customer support and have complex or unique customer questions. I improve ideas in business processes for better interaction with clients.",
                responsibilities: [
                    "Communication with clients",
                    "Operator training",
                    "Creation of documentation",
                    "Improving or updating business processes",
                    "Other responsibilities",
                    "Work with the database",
                ],
                preview_url: "",
                code_url: ""
            },
            {
                index: 4,
                title: "ORIFLAME COSMETICS GLOBAL AG",
                position: "Call Center Operator",
                duration_from: "March 2018",
                duration_to: "April 2020",
                description: "Learned business processes all time, updated this knowledge, had many hard tasks with the biggest load, and with short time realization or hard tasks with long time load and long time realization. This approach allowed me to take on complex/hard tasks at work without fear and complete them on time or faster and at the same time provide recommendations on the technological process, optimization, improvement, and generation of new ideas. I introduced ideas and templates about optimization and modification work with Database in time my work in Oriflame and many times updated it. I used some work instruments when I taught. Some employees used these instruments without me.",
                responsibilities: [
                    "Maintained effective communication with clients, addressing their inquiries and concerns",
                    "Assisted in training new operators to ensure they were well-prepared for their roles.",
                    "Played a role in the creation of necessary documentation to support the call centre operations"
                ],
                preview_url: "",
                code_url: ""
            },
            {
                index: 5,
                title: "ALMAZ® CNC",
                position: "UI/UX Designer and PC Service",
                duration_from: "November 2016",
                duration_to: "November 2017",
                description: "The company is engaged in designing, manufacturing, selling, and servicing engraving machines. Basically, my task in this work was to create and develop support and improve the trading platform to expand the range of services provided by the company. Also, I was engaged in supporting the IT infrastructure of the firm and advising on information security issues.",
                responsibilities: [
                    "Led the process of updating web resources, ensuring a modern and user-friendly interface",
                    "Designed and programmed web pages, enhancing the overall aesthetics and functionality of the company's site",
                    "Provided ongoing support and improvements to the website to keep it up-to-date and efficient",
                    "Took charge of expanding and maintaining the company's IT infrastructure",
                    "Offered valuable consultations on information security to safeguard the organization's digital assets",
                ],
                preview_url: "",
                code_url: "https://github.com/ychernyshev/platform_4.0"
            },
        ]

        job_list.forEach((item, index) => {
            const job_index = document.getElementById("job-index");

            const job_title_block = document.createElement("div");
            job_title_block.className = "col-xxl-4 card card-body right-angle text-center";

            const job_title = document.createElement("p");
            job_title.className = "text-bolder";
            job_title.innerText = `${item.title}`;

            const job_position = document.createElement("p");
            job_position.innerText = `${item.position}`;

            if(!item.duration_to) {
                const current_job = document.createElement("p");
                current_job.innerText = `Duration from ${item.duration_from}`;

                job_title_block.appendChild(current_job);
            } else {
                const job_duration = document.createElement("p");
                job_duration.innerText = `from ${item.duration_from} to ${item.duration_to}`;

                job_title_block.appendChild(job_duration);
            }

            const job_description_block = document.createElement("div");
            job_description_block.className = "col-xxl-8 card card-body right-angle justify bg-dark-custom text-light";
            job_description_block.innerText = `${item.description}`;

            const responsibilities_ul = document.createElement("ul");

            item.responsibilities.forEach(resp => {
                    const li = document.createElement("li");
                    li.innerText = resp;
                    responsibilities_ul.appendChild(li);
                }
            );

            job_title_block.appendChild(job_title);
            job_title_block.appendChild(job_position);

            job_description_block.appendChild(responsibilities_ul);

            job_index.appendChild(job_title_block);
            job_index.appendChild(job_description_block);
        })
    },
    onMount() {

    }
}


// export const WorkExperience = {
//     mount() {
//         const container = document.getElementById("work-experience");
//
//         if (!container) {
//             console.warn("[WorkExperience] Container #work-experience not found - component not mounted.");
//             return;
//         }
//
//         container.innerHTML = `
//             <div class="row justify-content-center">
//                 <div class="row" id="job-index"></div>
//             </div>
//         `;
//
//         const job_list = [
//             {
//                 index: 1,
//                 title: "JSC UKRPOSHTA",
//                 position: "Postmaster",
//                 duration_from: "october 2025",
//                 duration_to: "",
//                 description: "",
//                 responsibilities: [
//                     ""
//                 ],
//                 preview_url: "",
//                 code_url: ""
//             },
//             {
//                 index: 2,
//                 title: "JSC UKRPOSHTA",
//                 position: "Postman",
//                 duration_from: "september 2022",
//                 duration_to: "september 2025",
//                 description: "I am a 2nd class postman. I deliver parcels and parcels. One of my duties is to find and return expired letters to the warehouse. Ukrposhta does not have a mail cataloging program. So I have to find those emails manually. To make this process more convenient, I created a program for myself and use it every time. If my colleagues have any questions about mail, this app will help them too. To create this application, I used my Django skills, and to have a better, scalable, and user-friendly interface, I started learning the Vue.js framework.",
//                 responsibilities: [
//                     "Responsible for the timely delivery of parcels and packages;",
//                     "Conducted searches and retrieved overdue letters, returning them to the warehouse for further processing;"
//                 ],
//                 preview_url: "",
//                 code_url: "https://github.com/ychernyshev/the_postman_crm__example"
//             },
//             {
//                 index: 3,
//                 title: "DD-CARGO INTERNATIONAL COURIER SERVICE",
//                 position: "Senior Customer Service Manager",
//                 duration_from: "August 2020",
//                 duration_to: "February 2022",
//                 description: "I am an operator and a senior contact center customer service specialist. I regularly work with customer support and have complex or unique customer questions. I improve ideas in business processes for better interaction with clients.",
//                 responsibilities: [
//                     "Communication with clients",
//                     "Operator training",
//                     "Creation of documentation",
//                     "Improving or updating business processes",
//                     "Other responsibilities",
//                     "Work with the database",
//                 ],
//                 preview_url: "",
//                 code_url: ""
//             },
//             {
//                 index: 4,
//                 title: "ORIFLAME COSMETICS GLOBAL AG",
//                 position: "Call Center Operator",
//                 duration_from: "March 2018",
//                 duration_to: "April 2020",
//                 description: "Learned business processes all time, updated this knowledge, had many hard tasks with the biggest load, and with short time realization or hard tasks with long time load and long time realization. This approach allowed me to take on complex/hard tasks at work without fear and complete them on time or faster and at the same time provide recommendations on the technological process, optimization, improvement, and generation of new ideas. I introduced ideas and templates about optimization and modification work with Database in time my work in Oriflame and many times updated it. I used some work instruments when I taught. Some employees used these instruments without me.",
//                 responsibilities: [
//                     "Maintained effective communication with clients, addressing their inquiries and concerns",
//                     "Assisted in training new operators to ensure they were well-prepared for their roles.",
//                     "Played a role in the creation of necessary documentation to support the call centre operations"
//                 ],
//                 preview_url: "",
//                 code_url: ""
//             },
//             {
//                 index: 5,
//                 title: "ALMAZ® CNC",
//                 position: "UI/UX Designer and PC Service",
//                 duration_from: "November 2016",
//                 duration_to: "November 2017",
//                 description: "The company is engaged in designing, manufacturing, selling, and servicing engraving machines. Basically, my task in this work was to create and develop support and improve the trading platform to expand the range of services provided by the company. Also, I was engaged in supporting the IT infrastructure of the firm and advising on information security issues.",
//                 responsibilities: [
//                     "Led the process of updating web resources, ensuring a modern and user-friendly interface",
//                     "Designed and programmed web pages, enhancing the overall aesthetics and functionality of the company's site",
//                     "Provided ongoing support and improvements to the website to keep it up-to-date and efficient",
//                     "Took charge of expanding and maintaining the company's IT infrastructure",
//                     "Offered valuable consultations on information security to safeguard the organization's digital assets",
//                 ],
//                 preview_url: "",
//                 code_url: "https://github.com/ychernyshev/platform_4.0"
//             },
//         ]
//
//         job_list.forEach((item, index) => {
//             const job_index = document.getElementById("job-index");
//
//             const job_title_block = document.createElement("div");
//             job_title_block.className = "col-xxl-4 card card-body right-angle text-center";
//
//             const job_title = document.createElement("p");
//             job_title.className = "text-bolder";
//             job_title.innerText = `${item.title}`;
//
//             const job_position = document.createElement("p");
//             job_position.innerText = `${item.position}`;
//
//             if(!item.duration_to) {
//                 const current_job = document.createElement("p");
//                 current_job.innerText = `Duration from ${item.duration_from}`;
//
//                 job_title_block.appendChild(current_job);
//             } else {
//                 const job_duration = document.createElement("p");
//                 job_duration.innerText = `from ${item.duration_from} to ${item.duration_to}`;
//
//                 job_title_block.appendChild(job_duration);
//             }
//
//             const job_description_block = document.createElement("div");
//             job_description_block.className = "col-xxl-8 card card-body right-angle justify bg-dark-custom text-light";
//             job_description_block.innerText = `${item.description}`;
//
//             const responsibilities_ul = document.createElement("ul");
//             const responsibilities_li = document.createElement("li");
//
//             for(let i = 0; i < item.responsibilities.length; i++) {
//                 responsibilities_li.innerText = `${item.responsibilities[i]}`;
//             }
//
//             job_title_block.appendChild(job_title);
//             job_title_block.appendChild(job_position);
//
//             responsibilities_ul.appendChild(responsibilities_li);
//             job_description_block.appendChild(responsibilities_ul);
//
//             job_index.appendChild(job_title_block);
//             job_index.appendChild(job_description_block);
//         })
//     }
// }