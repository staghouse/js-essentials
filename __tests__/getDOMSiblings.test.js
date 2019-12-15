import jsdom from 'jsdom';
const { JSDOM } = jsdom;

import { getDOMSiblings } from '../src/index';

describe('getDOMSiblings', () => {
  it('should return an empty array when a valid DOM Nod is passed in with no siblings', () => {
    const dom = new JSDOM(`<!DOCTYPE html><p class="test-class">Hello world</p>`);
    const $el = dom.window.document.querySelector(".test-class");
    const $siblings = getDOMSiblings($el);

    expect($siblings).toEqual([]);
  });

  it('should return an array of a single DOM Node when a valid DOM Nod is passed in with possible siblings', () => {
    const dom = new JSDOM(`<!DOCTYPE html><p class="test-class">Hello world</p><p>Hello again!</p>`);
    const $el = dom.window.document.querySelector(".test-class");
    const $siblings = getDOMSiblings($el);

    expect($siblings).toHaveLength(1);
  });

  it('should return a TypeError when passing in an array of DOM Nodes', () => {
    const dom = new JSDOM(`<!DOCTYPE html><p class="test-class">Hello world</p><p>Hello again!</p>`);
    const $el = dom.window.document.querySelectorAll("p");

    expect(() => {
      getDOMSiblings($el);
    }).toThrow(TypeError);
  });

  it('should return a SyntaxError when no argument is passed in', () => {
    expect(() => {
      getDOMSiblings();
    }).toThrow(SyntaxError);
  });

  it('should return a TypeError when a DOM Node is not passed in', () => {
    expect(() => {
      getDOMSiblings([]);
    }).toThrow(TypeError);
  });
});
