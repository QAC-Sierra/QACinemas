# Introduction
This guide will provide some basic formatting guides for the QA Cinema project, to ensure coding cohesiveness
throughout the project, and to help improve code readability.

Reacts full styleguide can be found [here](https://airbnb.io/javascript/react/).

- [Git Branch Naming](#git-branch-naming)
- [Merging Branches](#merging-branches)
- [File Naming](#file-naming)
- [Variable Naming](#variable-naming)
- [Component Naming](#component-naming)
- [If-Else Statements](#if-else-statements)
- [Functions](#functions)
- [Indentation](#indentation)

-------------
### Git Branch Naming
Branch names should be all lower-case, using the Epic issue number and epic name, using `-` where there are spaces
in the epic name, e.g. `qac-3-my-epic`.

In each branch, smart commits must be used to highlight each task being tackled in the commit message.

For moving an issue on Jira Board to in-progress use:
```
git commit -m "QAC-4 #in-progress #comment Relevant comment relating to issue and work done on issue."
```
Note use of caps for issue number in commit message.

`#in-progress` can be substituted for `#done` once the task is complete.

-------------
### Merging Branches
Merges to `dev` branch should only be done via pull requests on GitHub. No-one should be creating any pull requests
to main until whole team is happy we have an MVP.

-------------
### File Naming
Should be `PascalCase` for `.jsx` files only, `camelCase` for any other file type.

Use appropriate file extension for file type, i.e. `.js` for JavaScript files, `.jsx` for Java Extension Syntax files,
`.html` for HTML pages.

File Names should be clear and concise, using the component name as the filename, so a navbar React would be

-------------
### Variable Naming
For variables, use `camelCase`, making sure that the name is clear and concise as to its purpose.

-------------
### Component Naming
For components, use `PascalCase`, making sure the name of the component is relevant to its purpose.

-------------
### If-Else Statements
if-else statements should be on their own individual lines in accordance with Allman styling, but with the opening
brace on the same line:
```javascript
if (...) {
    ...
}
else {
    ...
}
```

This will make for easier readability and maintainability.

-------------
### Functions
Should adhere to ES6 arrow function standard as much as possible, only using `function` keyword when required, i.e.
if it needs to be called as a constructor, we need access to `this` or `new` keywords.

ES6 Standard:
```javascript
const myFunc = (...) => { 
    ...
}
```

Using `function` keyword:
```javascript
function myFunc() {
    ...
}
```

-------------
### Indentation
Indentation should be one tab character, (hit the tab key once). Indents should be used in the following cases:
- After function creation for the definiton of the function:
```javascript
const myFunc = (myVar) => {
    return myVar;
}
```
- Should follow the declaration of if-else statements:
```javascript
if (myVar === 0) {
    console.log(myVar);
}
else {
    console.log("Hello");
}
```
- HTML Elements inside parent elements should be indented:
```html
<header>
    <h1>Hello World</h1>
    <div>
        <p>Child elements indented inside parent elements</p>
    </div>
</header>
```