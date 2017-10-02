QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});
QUnit.test('Testing our function Grade', function (assert) {
    assert.strictEqual(grade("A"),4, 'Equivalent for A should be 4');
    assert.strictEqual(grade("B"),3, 'Equivalent for B should be 3');
    assert.strictEqual(grade("C"),2, 'Equivalent for C should be 2');
    assert.strictEqual(grade("D"),1, 'Equivalent for D should be 1');
});
/*QUnit.test("Testing the function GPA", function(assert)
{
    assert.strictEqual(gpa(),"please enter only number in credits column", "Testing the type of credit");

});*/

QUnit.test("Testing the function testing_credits", function(assert)
{
    //assert.throws(function () {convertFeet(null); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
    assert.strictEqual(testing_credits(3,4,2),"valid inputs", 'Testig positive inputs');
    assert.throws(function () {testing_credits(null); }, /The given arguments is not a number/, 'Passing in null correctly raises an Error');
    assert.throws(function () {testing_credits(); }, /The given arguments is not a number/, 'Passing no arguments correctly raises an Error');
    assert.throws(function () {testing_credits(-2,-4,-5); },/The given numbers are negative/, 'Testing Negative Numbers');
    assert.throws(function () {testing_credits(2,4,-5); },/The given numbers are negative/, 'Testing Negative and positive Numbers');
    
});