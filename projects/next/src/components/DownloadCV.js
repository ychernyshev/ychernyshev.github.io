export const DownloadCV = {
    mount(config = {}) {
        const container = document.getElementById("download-cv")

        if (!container) {
            console.warn("[DownloadCV] Container #download-cv not found - component not mounted.");
            return;
        }

        container.innerHTML = `
                <div class="row" style="margin-top: 2rem;">
                    <div class="col-lg-1 bg-darker"></div>
                    <div class="col-lg-11 bg-warning">
                        <div class="row">
                            <div class="col-lg-1 col-sm-2 text-center my-auto">
                                <a href="" class="text-secondary" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor"
                                         class="bi bi-download" viewBox="0 0 16 16">
                                        <path
                                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                                        <path
                                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div class="col-lg-10 col-sm-9 my-auto p-2 bg-darker">
                                <div class="text-center text-light">
                                    <h4 class="my-auto text-light">
                                        Python/JavaScript Developer
                                    </h4>
                                </div>
                            </div>
                            <div class="col-lg-1 bg-darker"></div>
                        </div>
                    </div>
            </div>
        `
    }
}