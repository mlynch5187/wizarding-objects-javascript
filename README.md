# JavaScript Foundations

Each exercise emphasizes the fundamentals of object oriented programming in JavaScript.

## Installation Steps

1. Fork and clone this repo.
2. Type `cd javascript-foundations` to move into the root directory
3. Run `npm install`
4. Test that the unit tests are working by running the command `npm test wizarding-arrays-/test/potion-test.js` in your terminal

- [ ] 🔮 [Wizarding Arrays](./wizarding-arrays)
- [ ] ⚡️ [Wizarding Objects](./wizarding-objects)

## Skipped Tests

Most of the tests are skipped. When you see `it.skip('should be a function', function () {` in a test, it means that test has been skipped. They are skipped for a good reason - that way, when you run the test suite for the first time, you don't see tons of errors screaming at you in the terminal.

Unskip each test, one at a time in order, so you can concentrate on making one test pass. Unskip the test by deleting the `.skip` from the test's first line so it should look more like `it('should be a function', function () {`. Run the test to see what kind of error you are getting, and then implement the code to make the test pass!
