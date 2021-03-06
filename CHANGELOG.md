## 1.9.0 (October 21, 2018)
* Updates for <React.StrictMode />
* Fix for zeros' trimming on pasting numbers like 3.6020
* Dependencies updates
* Code reformatting

## 1.8.0 (May 19, 2018)
* `trimOnPaste` property expanded with removing of unsignificant zeros on the end of number

## 1.7.2 (April 21, 2018)
* Replaces of thousand separators fixed

## 1.7.1 (April 21, 2018)
* Build fixed

## 1.7.0 (April 8, 2018)
* `trimOnPaste` property added

## 1.6.1 (April 1, 2018)
* Misspelling fixed

## 1.6.0 (April 1, 2018)
* It's possible now to import separate components like `import Input from 'state-control/lib/Input'`

## 1.5.1 (March 25, 2018)
* Caret moving to the end of input field on automatic replaces and removes fixed
* Name added to `controlled()` HOC for easy debugging
* Dependencies is updated

## 1.5.0 (December 17, 2017)
* `suffix` property added
* More unit tests had been written

## 1.4.1 (December 9, 2017)
* Look of `<Input />` with background color improved
* `readOnly` prop in `<Check />` and `<Radio />` fixed

## 1.4.0 (December 9, 2017)
* Add `numberColor` property

## 1.3.2 (December 3, 2017)
* Bug fix

## 1.3.0 (November 9, 2017)
* Add `selectAll` handler

## 1.2.0 (November 4, 2017)
* Object setters allowed

## 1.1.1 (October 28, 2017)
* Text input fixed

## 1.1.0 (October 28, 2017)
* Alternate decimal marks supported now, that can be useful on pasting values from clipboard.
* Also
    * `<Connector />` assepts one node now
    * Eslint style updated

## 1.0.1 (October 15, 2017)
* Not fully controlled state are acceptable now. Packages updated.

## 1.0.0 (October 5, 2017)
* First stable version. README updated.

## 0.9.0
Label prop added to `<Radio />`.

## 0.8.0
Removing of symbols `,`, `'`, `’` added for `.` as decimal mark and `.`, spaces for `,`. It helps on pasting in `<Input />` numbers like `5,000,777.15`.

## 0.7.2
`<Input />` fixed for float numbers like `3.02`.

## 0.7.1
Packages updated (including React 16.0.0).

## 0.7.0
Click and focus handlers updated. Code linted. `.eslintrc.js` file added.

## 0.6.5
Event handlers fixed.

## 0.6.4
Warning about switching between controlled and uncontrolled component fixed.

## 0.6.3
Loosing focus fixed.

## 0.6.2
Typo fixed.

## 0.6.1
Style of `<Input />` fixed.

## 0.6.0
Nasty global CSS removed, styled-components are in use.

## 0.5.2
Readme updated, changelog added.
