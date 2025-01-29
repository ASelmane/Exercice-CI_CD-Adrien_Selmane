const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const { sum } = require("../../index");

let number1, number2, result;

Given("I have two numbers {int} and {int}", function (int1, int2) {
  number1 = int1;
  number2 = int2;
});

When("I add the numbers", function () {
  result = sum(number1, number2);
});

Then("the result should be {int}", function (expectedResult) {
  expect(result).to.equal(expectedResult);
});
