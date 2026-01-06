export const TopNav = {
    mount() {
        const container = document.getElementById("top-nav");

        if (!container) {
            console.warn("[TopNav] Container #top-nav not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="container-fluid mt-4 mb-5">
                <div class="row justify-content-center">
                    <div class="col-xxl-10 d-flex justify-content-between">
                    <a href="" class="text-dark">Introducing</a>
                    <a href="" class="text-dark">Worked</a>
                    <div style="position:relative;" class="d-flex flex-column text-center">
                        <p style="font-size: 2rem; font-weight: 400" class="text-black-100">Yevhenii Chernyshev</p>
                        <p style="position: absolute; top: 2.5rem; left: 25%; font-size: 1.2rem; font-weight: 400" class="text-darks">interactive resume</p>
                        <a class="mx-auto triangle-button" 
                            data-bs-toggle="collapse" 
                            href="#collapseCV" 
                            role="button" 
                            aria-expanded="false" 
                            aria-controls="collapseCV">
                                <span class="triangle-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-check" viewBox="0 0 12">
                                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                                </svg>
                                </span>
                        </a>
                    </div>
                    <a href="" class="text-dark">Education</a>
                    <a href="" class="text-dark">Contacts</a>
                    </div>
                </div>
                <div class="collapse" 
                     style="
                        position: absolute;
                        top: 9.5%;
                        width: 80%;
                        right: 9.89%;
                        background: white;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                        z-index: 9999;
                        padding-top: 20px;" 
                     id="collapseCV"></div>
        `;
    }
}