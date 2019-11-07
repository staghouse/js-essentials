import { JSONMustaches } from '../src/index';
import testSchema from '../__schemas__/test.schema.json';

describe('JSONMustaches.js', () => {
  it('should hydrate using a "/{{(.*?)}}/g" pattern', () => {
    const data = new JSONMustaches(testSchema);

    expect(data.allMustaches).toEqual(/{{(.*?)}}/g);
  });

  it('should return a stored JSON schema', () => {
    const schema = new JSONMustaches(testSchema).schema;

    expect(schema).toBeDefined();
  });

  it('should return the same schema if no mustaches are found', () => {
    const input = { key: { value: 'inner value' } };
    const output = new JSONMustaches(input);

    expect(output).toMatchObject(input);
  });

  it('should return a Card schema with no mustaches', () => {
    const jsonMustaches = new JSONMustaches(testSchema).cycle();
    const noMustaches = !JSON.stringify(jsonMustaches.schema).match(jsonMustaches.allMustaches);

    expect(noMustaches).toBe(true);
  });

  it('should throw a SyntaxError if a non valid schema is passed in', () => {
    expect(() => {
      new JSONMustaches([]);
    }).toThrow(SyntaxError);
  });

  it('should throw a SyntaxError if no schema is passed in', () => {
    expect(() => {
      new JSONMustaches();
    }).toThrow(SyntaxError);
  });
});
