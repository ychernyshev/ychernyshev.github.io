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
                    <div class="d-flex flex-column">
                        <p style="font-size: 2rem; font-weight: 400" class="text-black-100">Yevhenii Chernyshev</p>
                        <a class="mx-auto triangle-button" 
                            data-bs-toggle="collapse" 
                            href="#collapseCV" 
                            role="button" 
                            aria-expanded="false" 
                            aria-controls="collapseCV">
                                <span class="triangle-text">CV</span>
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