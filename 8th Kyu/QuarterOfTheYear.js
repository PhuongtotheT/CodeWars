/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


Test.describe("Basic Tests", () =>{
  Test.assertEquals(quarterOf(3), 1)
  Test.assertEquals(quarterOf(8), 3)
  Test.assertEquals(quarterOf(11), 4)
});
*/

const quarterOf = (month) => {
  return Math.ceil(month / 3); 
}

/*
Test Results:
Basic Tests
Month 3 = quarter 1
Month 8 = quarter 3
Month 11 = quarter 4
Completed in 5ms
Random Tests
Month 10 = quarter 4
Month 2 = quarter 1
Month 3 = quarter 1
Month 2 = quarter 1
Month 12 = quarter 4
Month 7 = quarter 3
Month 10 = quarter 4
Month 1 = quarter 1
Month 10 = quarter 4
Month 9 = quarter 3
Month 5 = quarter 2
Month 4 = quarter 2
Month 12 = quarter 4
Month 12 = quarter 4
Month 1 = quarter 1
Month 6 = quarter 2
Month 4 = quarter 2
Month 9 = quarter 3
Month 5 = quarter 2
Month 7 = quarter 3
Month 8 = quarter 3
Month 4 = quarter 2
Month 8 = quarter 3
Month 4 = quarter 2
Month 5 = quarter 2
Month 12 = quarter 4
Month 1 = quarter 1
Month 4 = quarter 2
Month 2 = quarter 1
Month 8 = quarter 3
Month 9 = quarter 3
Month 4 = quarter 2
Month 10 = quarter 4
Month 11 = quarter 4
Month 2 = quarter 1
Month 8 = quarter 3
Month 3 = quarter 1
Month 12 = quarter 4
Month 12 = quarter 4
Month 4 = quarter 2
Month 1 = quarter 1
Month 6 = quarter 2
Month 12 = quarter 4
Month 7 = quarter 3
Month 10 = quarter 4
Month 2 = quarter 1
Month 6 = quarter 2
Month 5 = quarter 2
Month 12 = quarter 4
Month 3 = quarter 1
Month 9 = quarter 3
Month 4 = quarter 2
Month 5 = quarter 2
Month 3 = quarter 1
Month 9 = quarter 3
Month 12 = quarter 4
Month 5 = quarter 2
Month 10 = quarter 4
Month 2 = quarter 1
Month 5 = quarter 2
Month 10 = quarter 4
Month 10 = quarter 4
Month 5 = quarter 2
Month 12 = quarter 4
Month 10 = quarter 4
Month 8 = quarter 3
Month 10 = quarter 4
Month 11 = quarter 4
Month 5 = quarter 2
Month 4 = quarter 2
Month 5 = quarter 2
Month 4 = quarter 2
Month 2 = quarter 1
Month 3 = quarter 1
Month 3 = quarter 1
Month 4 = quarter 2
Month 3 = quarter 1
Month 9 = quarter 3
Month 6 = quarter 2
Month 6 = quarter 2
Month 8 = quarter 3
Month 3 = quarter 1
Month 8 = quarter 3
Month 5 = quarter 2
Month 6 = quarter 2
Month 10 = quarter 4
Month 9 = quarter 3
Month 8 = quarter 3
Month 8 = quarter 3
Month 1 = quarter 1
Month 3 = quarter 1
Month 3 = quarter 1
Month 5 = quarter 2
Month 5 = quarter 2
Month 10 = quarter 4
Month 4 = quarter 2
Month 9 = quarter 3
Month 11 = quarter 4
Month 3 = quarter 1
Month 12 = quarter 4
*/
