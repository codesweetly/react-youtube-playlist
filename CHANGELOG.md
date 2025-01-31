# Changelog

## 3.1.0 (2025-01-09)

* build: Add support for react 19 ([8c07aef](https://github.com/codesweetly/react-youtube-playlist/commit/8c07aef))
* build: Bump @release-it/conventional-changelog@latest from v9.0.3 to v9.0.4 ([a7aca78](https://github.com/codesweetly/react-youtube-playlist/commit/a7aca78))
* build: Bump dotenv-cli from v7.4.4 to v8.0.0 ([0782bfe](https://github.com/codesweetly/react-youtube-playlist/commit/0782bfe))
* build: Bump react from v18.3.1 to v19.0.0 ([1fc2829](https://github.com/codesweetly/react-youtube-playlist/commit/1fc2829))
* build: Bump release-it to v18.0.0 ([1f959d4](https://github.com/codesweetly/react-youtube-playlist/commit/1f959d4))
* build: Bump typescript from v5.7.2 to v5.7.3 ([77f76ac](https://github.com/codesweetly/react-youtube-playlist/commit/77f76ac))
* build: Downgrade release-it to from v18.0.0 to v17.11.0 ([6e4d701](https://github.com/codesweetly/react-youtube-playlist/commit/6e4d701))
* build: Revert back to react v18.3.1 ([dae3f83](https://github.com/codesweetly/react-youtube-playlist/commit/dae3f83))
* docs: Add features section ([094959e](https://github.com/codesweetly/react-youtube-playlist/commit/094959e))
* style: Specify the gallery images' initial aspect ratio ([27653fb](https://github.com/codesweetly/react-youtube-playlist/commit/27653fb))
* feat: Provide the option to specify the exact number of columns in the gallery ([0c2e54d](https://github.com/codesweetly/react-youtube-playlist/commit/0c2e54d))
* test: Customize image button's style ([946004e](https://github.com/codesweetly/react-youtube-playlist/commit/946004e))
* refactor: Make styles customizable ([d6d328f](https://github.com/codesweetly/react-youtube-playlist/commit/d6d328f))
* chore: Add watch script ([07a651c](https://github.com/codesweetly/react-youtube-playlist/commit/07a651c))
* chore: Reconfigure commit-msg hook ([5c39c72](https://github.com/codesweetly/react-youtube-playlist/commit/5c39c72))

## [3.0.0](https://github.com/codesweetly/react-youtube-playlist/compare/v2.0.0...v3.0.0) (2024-07-16)


### ⚠ BREAKING CHANGES

* Delete uniqueName prop

### 🧱 Dependency

* Bump dev dependencies ([370c88d](https://github.com/codesweetly/react-youtube-playlist/commit/370c88dc50c7d26b5b544e570ec79c5b9fd13e46))
* Drop fslightbox-react dependency ([366d15d](https://github.com/codesweetly/react-youtube-playlist/commit/366d15d44c8877166c09878b36742638bc2d8d69))
* Drop prop-types dependency ([33535e0](https://github.com/codesweetly/react-youtube-playlist/commit/33535e0ba90771ade57436413aadf08d10eea322))
* Drop react-loader-spinner dependency ([8da1c02](https://github.com/codesweetly/react-youtube-playlist/commit/8da1c024dfa3a41790704a508f9d045806641bea))


### 🏠 Chores

* Delete console.log ([444f030](https://github.com/codesweetly/react-youtube-playlist/commit/444f0307ae6010277d1764c7a4e8e0d6ca852fee))


### 📝 Documentation

* Delete uniqueName prop ([e8570f4](https://github.com/codesweetly/react-youtube-playlist/commit/e8570f43dd97b74714321c6fb97d627e5f98ab43))
* Update description ([67799ef](https://github.com/codesweetly/react-youtube-playlist/commit/67799efa18167bb8d78ce1703e3f5737a9115619))


### 🐛 Bug Fix

* Open lightbox when keyboard enter key is pressed on video card ([3112a50](https://github.com/codesweetly/react-youtube-playlist/commit/3112a50713cbc42d75baa8a52814c6c41960aea3))
* Stop video when lightbox is closed ([9cdc3de](https://github.com/codesweetly/react-youtube-playlist/commit/9cdc3de3d9b71218f3cf545b52c247ad19cdd0d6))


### 🔄️ Code Refactoring

* Create video cards only while rendering gallery ([9f2271f](https://github.com/codesweetly/react-youtube-playlist/commit/9f2271f0646c153cf8542a46347724e09277795c))
* Delete redundant isNotFetchingData state ([ac0a70b](https://github.com/codesweetly/react-youtube-playlist/commit/ac0a70b97cc21acdd6d4d9a47fa4d3768cb9949f))
* Delete uniqueName prop ([29df23c](https://github.com/codesweetly/react-youtube-playlist/commit/29df23c7a75e0d11483c3d63c74460a3487ce221))
* Make infinite scrolling performant ([85e097f](https://github.com/codesweetly/react-youtube-playlist/commit/85e097f61d8916b44887595423d2230320b9d634))
* Rename youtubeVideoFiguresArray to videoCardsArray ([712d5e1](https://github.com/codesweetly/react-youtube-playlist/commit/712d5e1424b4eeed867418b51a101745d1e294ba))
* Separate gallery and loader's container ([cc4a06b](https://github.com/codesweetly/react-youtube-playlist/commit/cc4a06bf7bb6fe660165147923fb0467b788c67c))
* Use async/await to implement asynchronous logic ([0ef52ee](https://github.com/codesweetly/react-youtube-playlist/commit/0ef52ee8ddb3569e6b57c21b52229d691f2a5b4e))


### 💅 Styling and Formatting

* Change class declaration to function ([bf06811](https://github.com/codesweetly/react-youtube-playlist/commit/bf068116a3b3e4be6b738c2e0c0703bb9da2b999))
* Change javascript file to typescript ([5a53ff0](https://github.com/codesweetly/react-youtube-playlist/commit/5a53ff05e32695566e600d1675029a41057a3130))


### 🧪 Code Testing

* Mock the intersection observer api ([23da8ca](https://github.com/codesweetly/react-youtube-playlist/commit/23da8caedc4bf5c67c26e28181f4eb73b44816ba))

## [2.0.0](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.16...v2.0.0) (2024-01-03)


### ⚠ BREAKING CHANGES

* Users must now use named importation to add the package to their apps.

Named importation provides better compatibility with node and babel-like tools.

Ref: https://esbuild.github.io/content-types/#default-interop

### 🧱 Dependency

* Bump @types/react to v18.2.46 ([95b9c9e](https://github.com/codesweetly/react-youtube-playlist/commit/95b9c9e6e749db0ce19c755f816f801e4ad62b74))
* Configure jest to read typescript configuration files ([e514fc4](https://github.com/codesweetly/react-youtube-playlist/commit/e514fc4b19e80d8992d008ef58d9c1f707266e8c))
* Remove emotionjs package ([94e5ee2](https://github.com/codesweetly/react-youtube-playlist/commit/94e5ee206153321061f1add05317287b42596e72))
* Remove jest-transform-css configurations ([f5ee273](https://github.com/codesweetly/react-youtube-playlist/commit/f5ee273bcc6597f29fc5e996290d4d99957dd3c9))


### 🏠 Chores

* Add email ([e4ac718](https://github.com/codesweetly/react-youtube-playlist/commit/e4ac7183809965b1d12005c5f6346e3a619acf32))
* Change commitlint configuration file to typescript ([a4a356a](https://github.com/codesweetly/react-youtube-playlist/commit/a4a356a9669d7315c57aa0e7d0a37242da0ac252))
* Change entry point from index to YouTubePlaylist ([2634c14](https://github.com/codesweetly/react-youtube-playlist/commit/2634c145614dc3ef0e346826b2c51449932b2076))
* Delete css modules type declaration file ([7aa8ec4](https://github.com/codesweetly/react-youtube-playlist/commit/7aa8ec4854506161dd103b6728536590df3eb323))
* Provide url and email for reporting bugs ([914a125](https://github.com/codesweetly/react-youtube-playlist/commit/914a1254516afff1226bc0431a0ba0f6c0791510))


### 📝 Documentation

* Add contact email ([95dbc01](https://github.com/codesweetly/react-youtube-playlist/commit/95dbc01cb76c35fcb109bddfeb5656707180df58))
* Add emotion installation note for yarn users ([354a365](https://github.com/codesweetly/react-youtube-playlist/commit/354a36582c9e5a1fb48577429cf2346d0fcea2c7))
* Remove emotionjs references and change import statement to named importation ([501bd0c](https://github.com/codesweetly/react-youtube-playlist/commit/501bd0c3015fc177a16f697d49f7a7d9382360a9))
* Update license's year ([081b997](https://github.com/codesweetly/react-youtube-playlist/commit/081b997bdf9c27db30def79ed0dd24abd47a7ed3))


### 🔄️ Code Refactoring

* Change package's export mode from default to named exportation ([9a0885d](https://github.com/codesweetly/react-youtube-playlist/commit/9a0885ddcc13dbd9414bba0e0ae382459c5d292d))
* Rename index files to YouTubePlaylist ([01d1eb8](https://github.com/codesweetly/react-youtube-playlist/commit/01d1eb8a89a394786faaf062f04852a6cea7d7ff))


### 💅 Styling and Formatting

* Remove emotion's configurations ([f33d542](https://github.com/codesweetly/react-youtube-playlist/commit/f33d5423cfef62143f4a3847d47f21bf156a73c9))
* Replace emotion css with inline styling ([b7f2b0b](https://github.com/codesweetly/react-youtube-playlist/commit/b7f2b0b88db313863fe185ec8b495377261b8054))
* Use spinner color with aa contrast on dark and light scheme ([0934bc5](https://github.com/codesweetly/react-youtube-playlist/commit/0934bc5b240c1b9b70009f41eb9ddf058624f555))


### 🧪 Code Testing

* Add configuration file to the test command ([51ad035](https://github.com/codesweetly/react-youtube-playlist/commit/51ad0358fc322bb19343ad776989771438c29d93))
* Change jest configuration file to typescript ([392cb57](https://github.com/codesweetly/react-youtube-playlist/commit/392cb57224ad6adb725d348babab8fe57d62810d))

## [1.0.16](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.15...v1.0.16) (2023-08-16)


### 📝 Documentation

* Add notes on resolving known errors ([4a520b9](https://github.com/codesweetly/react-youtube-playlist/commit/4a520b99fcc6c55b866b1b969f6ddae93bc9dd66))

## [1.0.15](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.14...v1.0.15) (2023-08-16)


### 🧱 Dependency

* Install @emotion/react ([416d057](https://github.com/codesweetly/react-youtube-playlist/commit/416d05733b82bc0931a9841ac1d85355116a465c))


### 🔄️ Code Refactoring

* Change jsx field from react to react-jsx ([c12043e](https://github.com/codesweetly/react-youtube-playlist/commit/c12043ec7eedf10b67a9eb25f46e63173c71fea5))


### 💅 Styling and Formatting

* Delete css modules stylesheet ([2ebd1ba](https://github.com/codesweetly/react-youtube-playlist/commit/2ebd1ba0584f184e68324f1faaa49d7a5867ad30))
* Replace className with emotion's css prop ([0c701ea](https://github.com/codesweetly/react-youtube-playlist/commit/0c701eabbbe6ddac2a2832b90a0fddaffc09bf90))


### 🏠 Chores

* Delete copy-files script ([df149e6](https://github.com/codesweetly/react-youtube-playlist/commit/df149e678b1c6fd50b20c73d7613b614f8e700d7))
* Use @emotion/react to import jsx factory functions ([2f06f20](https://github.com/codesweetly/react-youtube-playlist/commit/2f06f20e6c95834335645005e82ed53ee3e6ec87))

## [1.0.14](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.13...v1.0.14) (2023-08-15)


### 🏠 Chores

* Add script to copy stylesheet to dist during build step ([0dbeea3](https://github.com/codesweetly/react-youtube-playlist/commit/0dbeea315e80f5cc50136bda7bc0fe87e308d211))
* Configure build script to emit es and commonjs modules ([073e0fb](https://github.com/codesweetly/react-youtube-playlist/commit/073e0fb8ff5ec4633afa692fd00004a60e1cf716))
* Emit es modules compilations to dist/esm ([7990c37](https://github.com/codesweetly/react-youtube-playlist/commit/7990c37ec01b495449501a7a9c822007ce362c48))
* Empty dist before each build ([2bf2fd3](https://github.com/codesweetly/react-youtube-playlist/commit/2bf2fd3f1c2cc93702222939ac56f51262a269eb))
* Exclude test files from compilation ([d08a710](https://github.com/codesweetly/react-youtube-playlist/commit/d08a710f89750208b3135eec734d62550481005f))
* Move stylesheet to src ([6731f1d](https://github.com/codesweetly/react-youtube-playlist/commit/6731f1da1a4399d87cdbb866446b95d40a05fbf1))
* Remove stylesheet from files list ([3bfe802](https://github.com/codesweetly/react-youtube-playlist/commit/3bfe8023117e85bd142248147b37d0e58226d840))
* Update main field to reference the cjs compilation ([c843a78](https://github.com/codesweetly/react-youtube-playlist/commit/c843a78ffd091ea852c732f86e4a0351242ed55e))
* Update types to reference the es module's declaration file ([691386d](https://github.com/codesweetly/react-youtube-playlist/commit/691386d9122a9d4f71c396fa908aabf8f85bb5e7))
* Use module field to reference the es module compilation ([4e227e7](https://github.com/codesweetly/react-youtube-playlist/commit/4e227e706a83c6b4d2af32c731cbf8e908152a03))


### 📝 Documentation

* Add build section ([9a6788b](https://github.com/codesweetly/react-youtube-playlist/commit/9a6788b6355f53a67e358f810984e45acff26d91))
* Update urls ([fd9a793](https://github.com/codesweetly/react-youtube-playlist/commit/fd9a793dfbd83cb9accc54db3b181d0a9236ae40))

## [1.0.11](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.10...v1.0.11) (2023-07-21)


### 📝 Documentation

* Add configuration note for remix users ([d0d7502](https://github.com/codesweetly/react-youtube-playlist/commit/d0d7502ccb9b152fe971a07ee01d8541ca81f38c))

## [1.0.10](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.9...v1.0.10) (2023-07-21)


### 🐛 Bug Fix

* Ignore private videos ([a0e2526](https://github.com/codesweetly/react-youtube-playlist/commit/a0e25269c950e966779959f94baf5dcb1f17cea9))

## [1.0.9](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.8...v1.0.9) (2023-07-20)


### 🐛 Bug Fix

* Rename module.rule to module.rules ([e685f67](https://github.com/codesweetly/react-youtube-playlist/commit/e685f67fab646c2e2f3791bdc294a1d85afa42d0))


### 💅 Styling and Formatting

* Add class to figcaption ([6d256e7](https://github.com/codesweetly/react-youtube-playlist/commit/6d256e7a979b92af8f48892de5e2e17558a122dc))
* Declare css modules type ([b779e3c](https://github.com/codesweetly/react-youtube-playlist/commit/b779e3c0a1d2fc9589f55513f6cfb0ba9fc08c41))


### 🧪 Code Testing

* Configure jest as the testing tool ([83221fb](https://github.com/codesweetly/react-youtube-playlist/commit/83221fbe7e741c11753af074e1f2b536563496f0))
* Remove jest configurations ([fe691ba](https://github.com/codesweetly/react-youtube-playlist/commit/fe691baa34646b4a1283e49dec46fe7d37d2ef56))


### 🧱 Dependency

* Change target to es5 ([ad790cb](https://github.com/codesweetly/react-youtube-playlist/commit/ad790cb19180c518c24a2d555ef1c6d1231d5e7e))
* Delete vanilla-extract configurations ([1040a65](https://github.com/codesweetly/react-youtube-playlist/commit/1040a65150df9025ed72237df436d00fcf1b5a7f))
* Install webpack for bundling modules ([b0339ff](https://github.com/codesweetly/react-youtube-playlist/commit/b0339ff223af76031d80b614241fc6ec8d6577d0))
* Remove babel configurations ([00bc7d7](https://github.com/codesweetly/react-youtube-playlist/commit/00bc7d70ef1f4991d5f16fd7ac0c6d76d2a30203))
* Setup vanilla-extract to generate static css at build time ([875c39e](https://github.com/codesweetly/react-youtube-playlist/commit/875c39efc4c89bf7d2ae5b74e705578a94031351))
* Update typescript configuration ([dfa0aa3](https://github.com/codesweetly/react-youtube-playlist/commit/dfa0aa332414c973b2e7641339a760902b4aad5c))


### 🏠 Chores

* Add css module to the files field ([8cf09e6](https://github.com/codesweetly/react-youtube-playlist/commit/8cf09e6d5e10916a83f3e256f8bb4e8f2fc4be05))
* Change stylesheet to css module ([91d0a07](https://github.com/codesweetly/react-youtube-playlist/commit/91d0a070723c2f676871f785d6dafbebbaad5b73))
* Configure webpack to bundle typescript files ([36e2d13](https://github.com/codesweetly/react-youtube-playlist/commit/36e2d136b3ca9ccc3fe6441c42f0091a4ae81936))
* Configure webpack to bundle vanilla-extract's css files ([1fe9795](https://github.com/codesweetly/react-youtube-playlist/commit/1fe9795cbdd4c1189dd498197c0d8013b034976f))
* Define variables' types ([3a899ad](https://github.com/codesweetly/react-youtube-playlist/commit/3a899ad901c9c98b2b701b6c6bf134d80f49a713))
* Rename YouTubePlaylist file to index ([1f6425c](https://github.com/codesweetly/react-youtube-playlist/commit/1f6425c8e6c992e75e700e4892e8e99885666f4e))
* Resolve import statements with typescript and javascript extensions ([9f7b6ce](https://github.com/codesweetly/react-youtube-playlist/commit/9f7b6ced115ceb89acf2d7916b6ea1db1352f3dc))
* Use typescript to compile source code ([68dc1a6](https://github.com/codesweetly/react-youtube-playlist/commit/68dc1a610d2903c364633d756e289b11fbdb4a18))
* Use typescript to transpile and type check ([e107610](https://github.com/codesweetly/react-youtube-playlist/commit/e107610e441f7df9d80b5b560f94a4ad7eeb6037))

## [1.0.8](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.7...v1.0.8) (2023-07-18)


### 🔄️ Code Refactoring

* Convert code to typescript ([9ff1ee8](https://github.com/codesweetly/react-youtube-playlist/commit/9ff1ee8aec63bb1d52343147e559418bff72ea26)), closes [#1](https://github.com/codesweetly/react-youtube-playlist/issues/1)
* Rename lengthScrolled to viewportLengthScrolled ([ce32701](https://github.com/codesweetly/react-youtube-playlist/commit/ce327015d5016a6b1da5cad8a7a4d93795ddc7e2))


### 🧪 Code Testing

* Check if playlist correctly renders when given all arguments ([d68d635](https://github.com/codesweetly/react-youtube-playlist/commit/d68d6356618bcad1e97aa101e70862f21fef617f))
* Configure jest as the package's test runner tool ([607bd1c](https://github.com/codesweetly/react-youtube-playlist/commit/607bd1cc669751a2b2c520b47037fd1b84dbf7a7))


### 📝 Documentation

* Add type and default columns to the table ([9861a89](https://github.com/codesweetly/react-youtube-playlist/commit/9861a89cc5456f1da5a645caae086f45c58f2e64))


### 🏠 Chores

* Add 'files' field ([8d678eb](https://github.com/codesweetly/react-youtube-playlist/commit/8d678ebe4eda33700cc6564e8755eac8fa5c80d1))
* Change file from .jsx to .tsx ([c0f2009](https://github.com/codesweetly/react-youtube-playlist/commit/c0f2009a51bf5226a278a98b71764843fadf0bfe))
* Create types files ([711fddf](https://github.com/codesweetly/react-youtube-playlist/commit/711fddf8c5f7bbdf0389440c0fe8a3ae8e434faa))
* Define data variable's type ([f668a58](https://github.com/codesweetly/react-youtube-playlist/commit/f668a584ad0f79a0a96ff2fb64f26e92f89a6f54))
* Delete src directory ([d708016](https://github.com/codesweetly/react-youtube-playlist/commit/d7080162f66dba91c7595a3d44cb98788ff7d003))
* Rename YouTubePlaylist.css to index.css ([a220fd2](https://github.com/codesweetly/react-youtube-playlist/commit/a220fd2988e5c97afc3de69ba6482d076c3f2d56))
* Replace Loader.css with react-loader-spinner ([9ffacf5](https://github.com/codesweetly/react-youtube-playlist/commit/9ffacf5af1d68fb3dd206d6bb8daf0ea5c524ba9)), closes [#2](https://github.com/codesweetly/react-youtube-playlist/issues/2)
* Track configurations ([192426c](https://github.com/codesweetly/react-youtube-playlist/commit/192426cc2b3a3d904682b512ccbbafb06fff54bd))
* Update types ([ff11203](https://github.com/codesweetly/react-youtube-playlist/commit/ff112037807e6c04dbf9fa95c055ff848a55a777))
* Use balltriangle spinner ([f30268b](https://github.com/codesweetly/react-youtube-playlist/commit/f30268b6380e072b2dd123378ca814d6bf9d7b2d))


### 🧱 Dependency

* Add dependencies field ([8bb6c7d](https://github.com/codesweetly/react-youtube-playlist/commit/8bb6c7d0e74fe792d9267eae25679ce769027611))
* Add react to devDependencies ([d1daf43](https://github.com/codesweetly/react-youtube-playlist/commit/d1daf43e252edd97e2a2e8783f73bb6277340128))
* Add TypeScript ([1222ccb](https://github.com/codesweetly/react-youtube-playlist/commit/1222ccb4f29e68250d7a70fb1de02008e389cd8a))
* Change entry point to index.js ([dd232f3](https://github.com/codesweetly/react-youtube-playlist/commit/dd232f3f5336b3c2eb3ca5e694634fc53a99e66d))
* Update packages ([c9ce844](https://github.com/codesweetly/react-youtube-playlist/commit/c9ce844dbb7295bb0bbadbf8dcdf2254e8d3656d))

## [1.0.7](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.6...v1.0.7) (2023-05-18)


### 🏠 Internal

* **babel:** Remove configuration file from version control ([37b73b5](https://github.com/codesweetly/react-youtube-playlist/commit/37b73b5ae3ad24f1b96b79240db38d6779031010))
* **commitlint:** Remove configuration file from version control ([0490813](https://github.com/codesweetly/react-youtube-playlist/commit/0490813516738f354fef8237fefb641e4cee9df2))
* **release-it:** Remove configuration file from version control ([50ea5d6](https://github.com/codesweetly/react-youtube-playlist/commit/50ea5d65d34692673721114737797e7df920122d))

## [1.0.6](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.5...v1.0.6) (2023-05-17)


### 🏠 Internal

* **gitignore:** Ignore .env ([e41503c](https://github.com/codesweetly/react-youtube-playlist/commit/e41503c42871a40124a68c6c71d998a2290ddfc2))

## [1.0.5](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.3...v1.0.5) (2023-05-17)


### 🔨 Underlying Tools

* **husky:** Install package for configuring Git hooks ([6968cf5](https://github.com/codesweetly/react-youtube-playlist/commit/6968cf53c3a1faf2c5a767d71966e9409517e536))
* **package.json:** Change package manager from yarn to npm ([db4a771](https://github.com/codesweetly/react-youtube-playlist/commit/db4a7712e0c42235164abe1426fa67d9920d0532))
* **package.json:** Install plugins for enforcing Conventional Commits ([9c0754a](https://github.com/codesweetly/react-youtube-playlist/commit/9c0754ac2f67ca17425607a87658615e9d645aec))
* **release-it:** install plugin for managing release version ([b497d5b](https://github.com/codesweetly/react-youtube-playlist/commit/b497d5b3519df29bfe6af730b409c73fb6040eb0))
* **release-it:** Use plugin to provide recommended bump to release-it ([3ce09ee](https://github.com/codesweetly/react-youtube-playlist/commit/3ce09ee88f820d32ad86633d89b7982e476b7ebf))


### 📝 Documentation

* **changelog:** Define changelog's sections to show ([963e76f](https://github.com/codesweetly/react-youtube-playlist/commit/963e76f862f8ead01c8b99326cdc0feb91014567))


### 🏠 Internal

* **fslightbox-react:** Upgrade to v1.7.4 ([98a7f7e](https://github.com/codesweetly/react-youtube-playlist/commit/98a7f7e370cebede2fd619a776f0d2566f1b7ec2))
* **github:** Configure release-it to auto-generate project's GitHub releases ([76afe9c](https://github.com/codesweetly/react-youtube-playlist/commit/76afe9c605cb14788414e8f19b93712f31f10986))
* **gitignore:** Delete .env ([761415c](https://github.com/codesweetly/react-youtube-playlist/commit/761415cca9f168d37f7a09254058f66786acc575))
* **gitignore:** Ignore /.husky directory ([cfe5047](https://github.com/codesweetly/react-youtube-playlist/commit/cfe504716b6d10b58d22adb88450919d2b0ac1c4))
* **release-it:** Customize changelog's headings ([73a3265](https://github.com/codesweetly/react-youtube-playlist/commit/73a32657315ac03cf10a00edf11a01f5ac29abfa))
* **release-it:** Let release-it auto-generate project's changelog ([5d62ffc](https://github.com/codesweetly/react-youtube-playlist/commit/5d62ffc469dfea85323380713d4ee8671497c81c))
* **release-it:** Make commitMessage's subject sentence-case ([d5b1113](https://github.com/codesweetly/react-youtube-playlist/commit/d5b1113e18d65494a1b2a319f197637a871fc56f))

## [1.0.4](https://github.com/codesweetly/react-youtube-playlist/compare/v1.0.3...v1.0.4) (2023-05-17)


### 🔨 Underlying Tools

* **husky:** Install package for configuring Git hooks ([6968cf5](https://github.com/codesweetly/react-youtube-playlist/commit/6968cf53c3a1faf2c5a767d71966e9409517e536))
* **package.json:** Change package manager from yarn to npm ([db4a771](https://github.com/codesweetly/react-youtube-playlist/commit/db4a7712e0c42235164abe1426fa67d9920d0532))
* **package.json:** Install plugins for enforcing Conventional Commits ([9c0754a](https://github.com/codesweetly/react-youtube-playlist/commit/9c0754ac2f67ca17425607a87658615e9d645aec))
* **release-it:** install plugin for managing release version ([b497d5b](https://github.com/codesweetly/react-youtube-playlist/commit/b497d5b3519df29bfe6af730b409c73fb6040eb0))
* **release-it:** Use plugin to provide recommended bump to release-it ([3ce09ee](https://github.com/codesweetly/react-youtube-playlist/commit/3ce09ee88f820d32ad86633d89b7982e476b7ebf))


### 📝 Documentation

* **changelog:** Define changelog's sections to show ([963e76f](https://github.com/codesweetly/react-youtube-playlist/commit/963e76f862f8ead01c8b99326cdc0feb91014567))


### 🏠 Internal

* **fslightbox-react:** Upgrade to v1.7.4 ([98a7f7e](https://github.com/codesweetly/react-youtube-playlist/commit/98a7f7e370cebede2fd619a776f0d2566f1b7ec2))
* **github:** Configure release-it to auto-generate project's GitHub releases ([76afe9c](https://github.com/codesweetly/react-youtube-playlist/commit/76afe9c605cb14788414e8f19b93712f31f10986))
* **gitignore:** Delete .env ([761415c](https://github.com/codesweetly/react-youtube-playlist/commit/761415cca9f168d37f7a09254058f66786acc575))
* **gitignore:** Ignore /.husky directory ([cfe5047](https://github.com/codesweetly/react-youtube-playlist/commit/cfe504716b6d10b58d22adb88450919d2b0ac1c4))
* **release-it:** Customize changelog's headings ([73a3265](https://github.com/codesweetly/react-youtube-playlist/commit/73a32657315ac03cf10a00edf11a01f5ac29abfa))
* **release-it:** Let release-it auto-generate project's changelog ([5d62ffc](https://github.com/codesweetly/react-youtube-playlist/commit/5d62ffc469dfea85323380713d4ee8671497c81c))
