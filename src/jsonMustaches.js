/**
 * JSONMustaches - A JSON parser for mustaches templates in JSON objects.
 *
 * @type Class
 * @constructor @arguments
 * @param {object} schema - Schema compliant JSON object
 * @use {{type@text@url}}
 */
export class JSONMustaches {
  constructor(schema) {
    this.schema = schema;
    this.delimiter = '@';
    this.allMustaches = /{{(.*?)}}/g;
    this.singleMustache = /{{(.*?)}}/;

    // Ensure we use Objects only for our schema
    if (
      !this.schema ||
      (this.schema === Object(this.schema) &&
        Object.prototype.toString.call(this.schema) === '[object Array]')
    ) {
      throw SyntaxError('You must pass in a valid JSON Schema');
    } else {
      if (!JSON.stringify(this.schema).match(this.allMustaches)) {
        return this.schema;
      }
    }
  }

  /**
   * @type function
   * @param {string} value A string containing mustache templates
   */
  hydrate(value) {
    let values = value.match(this.singleMustache)[1]; // get just whats inside the mustache
    let [type, text, link = ''] = values.split(this.delimiter);

    const isExternal = `target=${link.indexOf('/') === 0 ? '' : '_blank'}`;

    const mustacheMap = {
      html: text,
      link: `<a class='code-link' href='${link}/' ${isExternal}/>${this.unwrap(text)}</a>`,
      code: `<code>${text}</code>`,
    };

    return mustacheMap[type];
  }

  /**
   * @type function
   * Cycle through the JSON schema and replace mustaches as needed,
   * then return the new JSON
   */
  cycle() {
    for (const prop in this.schema) {
      // Store the value of each object in our schema
      const value = this.schema[prop];
      // Store the main property name so we can hydrate that too
      value.main_property_name = prop;

      for (const key in value) {
        const val = value[key].toString();
        const mustaches = val.match(this.allMustaches);

        if (mustaches) {
          for (const mustache of mustaches) {
            const hydratedHTML = value[key].replace(mustache, this.hydrate(mustache));

            this.schema[prop][key] = hydratedHTML;
          }
        }
      }
    }

    return this;
  }

  /**
   * @type function
   * @param {string} str Multiple word normalizing for anchors and URI's
   */
  unwrap(str) {
    return str
      .split('-')
      .map((n, i) => {
        if (i > 0) {
          return n.charAt(0).toUpperCase() + n.slice(1);
        }
        return n;
      })
      .join('');
  }
}
