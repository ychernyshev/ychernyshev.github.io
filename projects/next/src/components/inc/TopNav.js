export const TopNav = {
    mount() {
        const container = document.getElementById("top-nav");

        if (!container) {
            console.warn("[TopNav] Container #top-nav not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <nav class="navbar navbar-expand-lg p-5 justify-content-center" id="navbar_text_style">
                <button type="button" class="navbar-toggler" id="menu_btn" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="border: 0.2rem solid rgb(64, 74, 85);">MENU</button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav mx-auto">
                        <li class="nav-item text-center w-100">
                            <a class="nav-link color-dark nav-link-style active" href="index.html#introducing">Introducing</a>
                        </li>
                    </ul>
                    <ul class="nav mx-auto">
                        <li class="nav-item text-center w-100">
                            <a class="nav-link color-dark nav-link-style active" href="index.html#worked">Worked</a>
                        </li>
                    </ul>
                    <h2 class="mx-auto persona-font-size text-center" id="YC">Yevhenii Chernyshev</h2>
                    <ul class="nav mx-auto">
                        <li class="nav-item text-center w-100">
                            <a class="nav-link color-dark nav-link-style active" href="index.html#education">Education</a>
                        </li>
                    </ul>
                    <ul class="nav mx-auto">
                        <li class="nav-item text-center w-100">
                            <a class="nav-link color-dark nav-link-style active" href="index.html#contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }
}