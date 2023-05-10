const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//My new own test
test('Lägg till ett item i stacken', () => {
    stack.push('item1');
    expect(stack.peek()).toBe('item1');
  });
  
  test('Ta bort valuen som ligger högst upp i stacken', () => {
    stack.push('item1');
    stack.push('item2');
    expect(stack.pop()).toBe('item2');
    expect(stack.pop()).toBe('item1');
  });
  