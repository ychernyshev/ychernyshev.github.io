# Changelog

All notable changes to this project will be documented in this file.

## [05.01.2026 - 11.01.2026 0.5.0]

### Added
- `media.css` with page media styles
- `content-main.js` as main container for home page content
- `examples-main.js` (later renamed to `ExamplesList`) for example cards
- `interactive-resume.js` (later renamed to `InteractiveResume`) for resume cards
- `DownloadCV.js` component with CV download button
- `bg-default` and `bg-darker` CSS classes

### Changed
- Project temporary name set to **"Next"**
- Old personal page shown again until "Next" is ready
- Fixed old personal page display
- Updated `index.html` title and DUI title
- Registered `media.css` in `index.html`
- Improved `IntroSection.js` (departure from old Jumbotron)
- Fixed and resized author image in `IntroSection.js`
- Updated skills section styles (background, text color, font weight, alignment)
- Changed default page background to `#E6E7EE`
- Added active link design in `TopNav.js`
- Renamed components:
  - `content-main` → `ContentMain`
  - `examples-main` → `ExamplesList`
  - `interactive-resume` → `InteractiveResume`
- Registered new components in `LayoutRegistryComponents.js` and `RegistryLayoutScheme.js`
- Mounted components: `ContentMain`, `ExamplesList`, `InteractiveResume`
- Added section title for number of examples in `ExamplesList.js`
- Corrected layout to align `ExamplesList` and `InteractiveResume` in one line
- Unified component view with old template

### Fixed
- Bugs with component constant names
- Warning message component names corrected
- Author image symmetry in `IntroSection.js`

--- 

## [12.01.2026 0.6.0]

### Added
- `AdditionalSkills.js` component created
- Registered `AdditionalSkills` component in layout registry

### Changed
- `ExamplesList.js`: minor alignment improvements
- `ContentMain.js`: applied `bg-darker` and `text-light` CSS classes to the `AdditionalSkills` component
- `AdditionalSkills.js`: updated section to correct appearance

---

[14.01.2026 0.7.0]

### Added
- `WorkedScene.js` created as a future page for portfolio projects
- `EducationScene.js` created as a future page with education information
- `ContactsScene.js` created as a future page with contact details

### Changed
- Components for the `WelcomeScene` have been separated into their own folder `welcome`

---

[15.01.2026 - 20.01.2026 0.8.0]

## Components

### ContentMain
- Centered the container by adding the `container-fluid` CSS class.

### InteractiveResume
- `DownloadCV` component now has full 100% width.
- Integrated the `MainSkills` component.

### MainSkills
- Created `MainSkills.js` and moved the main skills section into it.
- Registered the `MainSkills` component.
- Removed `margin-top` and `margin-bottom` from CSS classes.

### DownloadCV
- Moved `download-cv` component from `InteractiveResume` to `IntroSection` for logical arrangement.
- Adjusted height to match the `MainSkills` component.

### IntroSection
- `download-cv` component pushed to the bottom of the section.
- Author image height set to 100%.

### AboutMeAndJobSections
- Created `AboutMeAndJobSections.js` to show "About me" and "Job experience" collapsing sections.
- Completed integration into the main page DOM.
- Updated styles:
  - Removed `mb-4` from collapsed section.
  - Added `right-angle` style.
  - Added `text-dark` class to buttons.

### WorkExperience
- Created `WorkExperience.js` component.
- Registered `WorkExperience`.
- Started showing component content.

---

## Routing & Scenes

### index.js
- Added alternate route to home page: `"introducing"` (alias `"welcome"`).
- Added `"worked"` route.
- Added `"education"` route.
- Added `"contacts"` route.
- Fixed section id to `"contacts-block"`.

### RegistryLayoutScheme.js
- Added `worked_view` configuration for `WorkedScene`.

### WorkedScene
- Configured `WorkedScene`.
- Added `TopNav` menu.

### EducationScene
- Configured `EducationScene`.
- Added `TopNav` menu.

### ContactsScene
- Configured `ContactsScene`.
- Added `TopNav` menu.

---

## Styles (custom.css)
- Added `bg-blue-gray` and `right-angle` styles.
- Added `bg-dark-custom` and `justify` classes.

---

[21.01.2026 0.9.0]

## Components

### AboutMeAndJobSections
- Changed button hover class from `btn-primary` to `btn-warning`.
- Updated card title styles:
  - Changed color
  - Adjusted sizes
  - Modified paddings
  - Updated text position

### AdditionalSkills
- Removed redundant `div` with Bootstrap class `row`.
- Component changes:
  - Moved `AdditionalSkill` from `ContentMain.js` to `WelcomeScene.js`.
  - Converted `AdditionalSkill` into a `section`.
