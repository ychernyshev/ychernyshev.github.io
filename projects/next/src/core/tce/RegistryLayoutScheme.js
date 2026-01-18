export const RegistryLayoutScheme = {
    page_404: {
        primary_structure: ``,
        layout: ["Page404"],
        config: {
            Page404: {title: '404. Page not found'},
        },
    },
    welcome_view: {
        primary_structure: `
                <main>
                  <section id="welcome-block"></section>
                </main>
            `,
        layout: [
            "WelcomeView",
            "TopNav",
            "CV",
            "IntroSection",
            "ContentMain",
            "ExamplesList",
            "InteractiveResume",
            "DownloadCV",
            "AdditionalSkills",
            "MainSkills"
        ],
        config: {
            WelcomeView: {
                title: "Horizon Dynamic UI",
                subtitle: "Your scene-driven front-end engine",
                version: "v0.1.19 Beta",
                tagline: "Pure JS. No build. Host-ready.",
                CTA: {label: "Get Started with Horizon", link: "#guide"},
            },
        },
        linkHref: [],
        scriptSrc: [],
    },
    worked_view: {
        primary_structure: `
            <main>
              <section id="worked-block"></section>
            </main>
        `,
        layout: [
            "WorkedView",
            "TopNav",
        ],
        config: {},
        linkHref: [],
        scriptSrc: [],
    },
    education_view: {
        primary_structure: `
            <main>
              <section id="education-block"></section>
            </main>
        `,
        layout: [
            "EducationView",
            "TopNav",
        ],
        config: {},
        linkHref: [],
        scriptSrc: [],
    },
    contacts_view: {
        primary_structure: `
            <main>
              <section id="contacts-block"></section>
            </main>
        `,
        layout: [
            "ContactsView",
            "TopNav",
        ],
        config: {},
        linkHref: [],
        scriptSrc: [],
    }
}