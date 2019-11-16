import { jsonMustaches } from '../src/index';
import testSchema from '../__schemas__/test.schema.json';

describe('jsonMustaches.js', () => {
  it('should hydrate using a "/{{(.*?)}}/g" pattern', () => {
    const mustaches = new jsonMustaches(testSchema);

    expect(mustaches.allMustaches).toEqual(/{{(.*?)}}/g);
  });

  it('should return a stored JSON schema', () => {
    const mustaches = new jsonMustaches(testSchema);

    expect(mustaches.schema).toBeDefined();
  });

  it('should return the same schema if no mustaches are found', () => {
    const mustachelessSchema = { "key": { "value": 'inner value' } };
    const mustaches = new jsonMustaches(mustachelessSchema);
    mustaches._init();

    expect(mustaches.schema).toMatchObject(mustachelessSchema);
  });

  it('should return a true that a schema has mustaches', () => {
    const mustaches = new jsonMustaches(testSchema);
    mustaches._init();

    expect(mustaches.hasMustaches).toBe(true);
  });

  it('should return a test schema with mustaches replaced', () => {
    const mustaches = new jsonMustaches(testSchema);
    mustaches._init();

    const noMustaches = !JSON.stringify(mustaches.schema).match(mustaches.allMustaches);

    expect(noMustaches).toBe(true);
  });

  it('should throw a SyntaxError if no schema is passed in', () => {
    const mustaches = new jsonMustaches();

    expect(() => {
      mustaches._init();
    }).toThrow(SyntaxError);
  });

  it('should throw a SyntaxError if incorrect mustaches mapping is used', () => {
    const badMustacheSchema = { "key": { "value": '{{cloud-strife@best-hero@/hero-of-ff7}}' } };
    const mustaches = new jsonMustaches(badMustacheSchema);

    expect(() => {
      mustaches._init();
    }).toThrow(SyntaxError);
  });

  it('should throw a SyntaxError if anything but an Object is passed in', () => {
    const mustachesArray = new jsonMustaches([]);
    const mustachesString = new jsonMustaches('');
    const mustachesFunc = new jsonMustaches(() => {});
    const mustachesInt = new jsonMustaches(12);
    const mustachesNull = new jsonMustaches(null);
    const mustachesUndef = new jsonMustaches(undefined);

    expect(() => {
      mustachesArray._init();
      mustachesString._init();
      mustachesFunc._init();
      mustachesInt._init();
      mustachesNull._init();
      mustachesUndef._init();
    }).toThrow(SyntaxError);
  });

  it('should throw a SyntaxError if an empty object is passed in', () => {
    const mustaches = new jsonMustaches({});

    expect(() => {
      mustaches._init();
    }).toThrow(SyntaxError);
  });
});
