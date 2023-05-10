const stack = require('../src/stack.js');

test('push should add an item to the stack', () => {
    stack.push('item1');
    expect(stack.peek()).toBe('item1');
  });
  
  test('pop should remove and return the top item from the stack', () => {
    stack.push('item1');
    stack.push('item2');
    expect(stack.pop()).toBe('item2');
    expect(stack.pop()).toBe('item1');
  });
  
  test('peek should return the top item from the stack without removing it', () => {
    stack.push('item1');
    stack.push('item2');
    expect(stack.peek()).toBe('item2');
    expect(stack.pop()).toBe('item2');
    expect(stack.peek()).toBe('item1');
  });