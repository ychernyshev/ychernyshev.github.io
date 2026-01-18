// Pages
import { Page_404_View } from "../../pages/reports/Page_404_View.js";
import { WelcomeScene } from "../../pages/WelcomeScene.js";
import {WorkedScene} from "../../pages/WorkedScene.js";
import {EducationScene} from "../../pages/EducationScene.js";

// Components
import {TopNav} from "../../components/inc/TopNav.js";
import {CV} from "../../components/welcome/cv.js";
import {IntroSection} from "../../components/welcome/IntroSection.js";
import {ContentMain} from "../../components/welcome/ContentMain.js";
import {ExamplesList} from "../../components/welcome/ExamplesList.js";
import {InteractiveResume} from "../../components/welcome/InteractiveResume.js";
import {DownloadCV} from "../../components/welcome/DownloadCV.js";
import {AdditionalSkills} from "../../components/welcome/AdditionalSkills.js";
import {MainSkills} from "../../components/welcome/MainSkills.js";

export class LayoutRegistryComponents {
    static
    ComponentMap = Object.freeze({
        // sceneName
        Page404: Page_404_View,
        WelcomeView: WelcomeScene,
        WorkedView: WorkedScene,
        EducationView: EducationScene,
        // componentName
        TopNav,
        IntroSection,
        ContentMain,
        ExamplesList,
        InteractiveResume,
        DownloadCV,
        AdditionalSkills,
        MainSkills
    });
}