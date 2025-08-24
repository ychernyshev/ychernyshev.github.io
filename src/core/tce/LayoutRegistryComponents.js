// Pages
import { Page_404_View } from "../../pages/reports/Page_404_View.js";
import { WelcomeScene } from "../../pages/WelcomeScene.js";

// Components
import {TopNav} from "../../components/inc/TopNav.js";
import {CV} from "../../components/cv.js";
import {IntroSection} from "../../components/IntroSection.js";

export class LayoutRegistryComponents {
    static
    ComponentMap = Object.freeze({
        // sceneName
        Page404: Page_404_View,
        WelcomeView: WelcomeScene,
        // componentName
        TopNav,
        CV,
        IntroSection,
    });
}