import {Dispatcher} from "../core/helpers/useDispatcher.js";

export function init(app) {
    app.routing.add("page_404", () => {
        app.sceneManager.mountScene("page_404");
    });

    app.routing.add("introducing", () => {
        app.sceneManager.mountScene("welcome_view");
    });

    app.routing.add("welcome", () => {
        app.sceneManager.mountScene("welcome_view");
    });

    app.routing.add("worked", () => {
        app.sceneManager.mountScene("worked_view");
    });

    app.routing.add("education", () => {
        app.sceneManager.mountScene("education_view");
    });

    app.routing.add("contacts", () => {
        app.sceneManager.mountScene("contacts_view");
    });

    app.routing.init();
    app.localStorage.init();
    // app.dispatcher.init();
    // const defaultTheme = localStorage.getItem("theme") || "light";
    // app.dispatcher.set("theme", defaultTheme);
    // app.sceneManager.init();
}