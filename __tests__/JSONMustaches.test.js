import { JSONMustaches } from '../src/index';
import testSchema from '../__schemas__/test.schema.json';

describe('JSONMustaches.js', () => {
  it('should hydrate using a "/{{(.*?)}}/g" pattern', () => {
    const jsonMustaches = new JSONMustaches(testSchema);

    expect(jsonMustaches.allMustaches).toEqual(/{{(.*?)}}/g);
  });

  it('should return a stored JSON schema', () => {
    const jsonMustaches = new JSONMustaches(testSchema);

    expect(jsonMustaches.schema).toBeDefined();
  });

  it('should return the same schema if no mustaches are found', () => {
    const mustachelessSchema = { "key": { "value": 'inner value' } };
    const jsonMustaches = new JSONMustaches(mustachelessSchema);
    jsonMustaches._init();

    expect(jsonMustaches.schema).toMatchObject(mustachelessSchema);
  });

  it('should return a true that a schema has mustaches', () => {
    const jsonMustaches = new JSONMustaches(testSchema);
    jsonMustaches._init();

    expect(jsonMustaches.hasMustaches).toBe(true);
  });

  it('should return a test schema with mustaches replaced', () => {
    const jsonMustaches = new JSONMustaches(testSchema);
    jsonMustaches._init();

    const noMustaches = !JSON.stringify(jsonMustaches.schema).match(jsonMustaches.allMustaches);

    expect(noMustaches).toBe(true);
  });

  it('should throw a SyntaxError if no schema is passed in', () => {
    const jsonMustaches = new JSONMustaches();

    expect(() => {
      jsonMustaches._init();
    }).toThrow(SyntaxError);
  });

  it('should throw a SyntaxError if incorrect mustaches mapping is used', () => {
    const badMustacheSchema = { "key": { "value": '{{cloud-strife@best-hero@/hero-of-ff7}}' } };
    const jsonMustaches = new JSONMustaches(badMustacheSchema);

    expect(() => {
      jsonMustaches._init();
    }).toThrow(SyntaxError);
  });

  it('should throw a SyntaxError if anything but an Object is passed in', () => {
    const jsonMustachesArray = new JSONMustaches([]);
    const jsonMustachesString = new JSONMustaches('');
    const jsonMustachesFunc = new JSONMustaches(() => {});
    const jsonMustachesInt = new JSONMustaches(12);
    const jsonMustachesNull = new JSONMustaches(null);
    const jsonMustachesUndef = new JSONMustaches(undefined);

    expect(() => {
      jsonMustachesArray._init();
      jsonMustachesString._init();
      jsonMustachesFunc._init();
      jsonMustachesInt._init();
      jsonMustachesNull._init();
      jsonMustachesUndef._init();
    }).toThrow(SyntaxError);
  });

  it('should throw a SyntaxError if an empty object is passed in', () => {
    const jsonMustaches = new JSONMustaches({});

    expect(() => {
      jsonMustaches._init();
    }).toThrow(SyntaxError);
  });
});
