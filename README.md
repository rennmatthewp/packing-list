# Your Mars Packing List

You'll be making an application so that you can assemble a packing list for a trip to Mars! You can work from 9am-2pm. Any commits after 2pm should be done on a separate branch from `master`.

## Technology Stack

**Front-End:** jQuery or vanilla JavaScript

**Back-End:** Express server with postgreSQL database (using knex)

**Testing:** Mocha, chai, and chai-http

**Production:** The application should be hosted using Heroku (you do _not_ need to implement TravisCI)

## Feature Requirements

* The user should be able to type an item's name in an input field, click a button, and submit an item to the list (the item should be saved to the database, be displayed on the page, and should persist if you refresh the page)
* The input field should clear after an item is successfully submitted
* In the item list, the item's name should be displayed
* Each item should have a delete button to remove the item from the page
* If you click the delete button, then the item should be removed from the page and deleted from the database (if you refresh, then the item should be gone from the list)
* Each item should have a `packed` checkbox to show if the item has been packed or not (if you refresh, then the checkbox should keep its current state)
* By default, the checkbox should _not_ be selected when an item is added

## Wireframe

Here is generally what the application should look like. Keep it simple.

![Wireframe](https://i.imgur.com/GlQi9S9.png)

## Grading Rubric

In order to pass the assessment, students must achieve a 3 or above on all rubric sections.

### Specification Adherence

* **3: The application consists of one page with all feature requirements being provided. No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use. Application is on production.**
* 2: The application is in a usable state, but is missing 1 feature outlined in the specification above. Application is in production.
* 1: The application is missing 2 or more features outlined in the specification above. Application is in production but not working.
* 0: The application is unusable and not in production.

### JavaScript Syntax & Style

* 4: Developer uses elegant and idiomatic JavaScript with vast majority of functions 5 lines or shorter. Demonstrates solid understanding of the single responsibility principle. Developer can speak to choices made in the code and knows what every line of code is doing. Uses consistent style and conventions.
* 3: Developer writes solid JavaScript code using common patterns and idioms. Code is organized appropriately within objects and functions. Developer can speak to choices made in the code and knows what every line of code is doing.
* 2: Developer can accomplish basic tasks with JavaScript but implementation is largely copy/pasted or non-idiomatic. Developer is not confident in what every line of the code is doing or cannot speak to the choices made.
* 1: Developer can manipulate JavaScript syntax but implementation is buggy or inconsistent.

### Testing

* 4: Project has a running test suite that tests every server-side endpoint with all happy and sad path cases.
* 3: Project has a running test suite that tests every server-side endpoint with most happy and sad path cases.
* 2: Project has sporadic testing of some server-side endpoints. There are happy path tests, but there are is one or zero sad path cases.
* 1: There is little or no evidence of testing in this application. Most or all of the tests in the test suite are failing.

### CSS Style

*CSS is graded on quality, not quantity. You don't need a lot of CSS to have a pleasant interface*

* 4: Application has exceptionally well-factored CSS with little or no duplication and all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.
* 3: Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of CSS is doing.
* 2: Application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
* 1: Application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of CSS is doing. Developer writes code with unnecessary selectors or tags which do not increase clarity.

### User Interface

* 4: The application is pleasant, logical, and easy to use. The interface is aesthetically pleasing to the evaluator. There is good use color and whitespace. There is no point where the instructor cannot figure out how to use the application without guidance from the developer.
* 3: The application has many strong pages/interactions, but a few holes in lesser-used functionality
* 2: The application shows effort in the interface, but the result is not effective
* 1: The application is confusing or difficult to use

### Workflow

* 4: Developer makes many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developer effectively uses git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. There are no instances where the developer has committed source code that should be .gitignored. There are no instances of "dead" or commented-out code and debugger statements like console.log.
* 3: Developer makes many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developer uses git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developer has committed source code that should be .gitignored. There may be some instances of "dead" or commented-out code and debugger statements like console.log that need to be cleaned up.
* 2: Developer makes large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer rarely uses git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be .gitignored and instances of dead code and/or debugger statements.
* 1: Developer makes very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be .gitignored and many instances of dead code and/or debugger statements.