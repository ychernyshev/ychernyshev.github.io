// Pages
import { Page_404_View } from "../../pages/reports/Page_404_View.js";
import { WelcomeScene } from "../../pages/WelcomeScene.js";

// Components
import {TopNav} from "../../components/inc/TopNav.js";
import {CV} from "../../components/cv.js";
import {IntroSection} from "../../components/IntroSection.js";
import {ContentMain} from "../../components/ContentMain.js";
import {ExamplesList} from "../../components/ExamplesList.js";
import {InteractiveResume} from "../../components/InteractiveResume.js";
import {DownloadCV} from "../../components/DownloadCV.js";
import {AdditionalSkills} from "../../components/AdditionalSkills.js";

export class LayoutRegistryComponents {
    static
    ComponentMap = Object.freeze({
        // sceneName
        Page404: Page_404_View,
        WelcomeView: WelcomeScene,
        // componentName
        TopNav,
        IntroSection,
        ContentMain,
        ExamplesList,
        InteractiveResume,
        DownloadCV,
        AdditionalSkills
    });
}