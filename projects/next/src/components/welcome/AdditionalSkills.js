export const AdditionalSkills = {
    mount(config = {}) {
        const container = document.getElementById("additional-skills")

        if (!container) {
            console.warn("[AdditionalSkills] Container #additional-skills not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="col-xl-10 col-sm-12 text-light mt-3 p-3">
                    <h5 class="text-center regular-text font-weight-bold text-light">My additional skills</h5>
                    <p class="regular-text" style="font-size: 1.3rem;">
                        These are the primary skills I have acquired while working as a contact center operator. I can't ignore these
                        experiences and skills because I use it\`s every time in my daily life, and I believe, will help me in other
                        spheres:
                    </p>
                    <div class="row regular-text text-center" style="font-size: 1.3rem;">
                        <div class="col-xl-6 col-lg-6 col-sm-12">
                            <p class="mx-auto text-justify">
                                <strong class="text-uppercase bg-light text-secondary p-1">
                                effective handling of challenging clients
                                </strong>
                                &nbsp;
                                My experience in customer service has equipped me with the ability to adeptly manage interactions with difficult clients, demonstrating patience and conflict resolution prowess.
                            </p>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-sm-12">
                            <p class="mx-auto text-justify">
                                <strong class="text-uppercase bg-light text-secondary p-1">stress resilience</strong>
                                &nbsp;
                                My capacity to remain composed in high-pressure situations, honed through my call centre experience, enables me to
                                    tackle challenges with a calm and collected demeanour.
                            </p>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-sm-12">
                            <p class="mx-auto text-justify">
                                <strong class="text-uppercase bg-light text-secondary p-1">rapid learning</strong>
                                &nbsp;
                                I have a strong aptitude for swiftly acquiring new skills and knowledge, which proves invaluable in dynamic and
                                    fast-paced environments.
                            </p>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-sm-12">
                            <p class="mx-auto text-justify">
                                <strong class="text-uppercase bg-light text-secondary p-1">dedication at work</strong>
                                &nbsp;
                                I am a reliable and dedicated team member who consistently works hard to achieve goals, demonstrating unwavering commitment and determination in my tasks and responsibilities.
                            </p>
                        </div>
                    </div>
                </div>
        `
    }
}