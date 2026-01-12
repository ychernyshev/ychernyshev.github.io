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

