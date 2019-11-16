/**
 * isOdd
 * @param {number} number - Value to check if odd
 * @return Boolean
 * @example
 * isOdd(3)
 */
function isOdd(number) {
  if (!isFinite(number) || !!(number % 1)) {
    throw TypeError('Must provide a valid whole number');
  }

  return (Math.abs(number) ^ 1) === 2;
}

/**
 * isFutureDate
 * @param {String|Date} when - when to compare against now
 * @param {String|Date} against - when to compare against the first argument
 * @return Boolean
 * @throws TypeError
 * @throws SyntaxError
 * @example
 * isFutureDate('2019-10-10', '2020-01-01')
 * isFutureDate(new Date('2019-10-10'), '2020-01-01')
 */
const isFutureDate = (when, against = new Date()) => {
  // Check on our types, we only want String and Date for comparison.
  const typesAreValid = (typeof when === 'string' || when instanceof Date) && (typeof against === 'string' || against instanceof Date);

  if (!typesAreValid) {
    throw TypeError('You must pass in at leasy one primary argument of type Date or String');
  } // Its important to remember that when we pass in just a String date
  // that we wont get a time. So we set this up to do checks later.


  let now = new Date(when);
  let then = new Date(against);
  /**
   * Check if valid Date. String with improper formats return `Invalid Date`
   * which is literal non-sense. Its not an Error of any kind, Number, String, Date or
   * truthy undefined. Just a typeof Object which no public keys.
   * In fact, the prototype returns undefined but when chcking for it,
   * we get not comparison validation at all
   */

  if (!isFinite(now) || !isFinite(then)) {
    throw SyntaxError('You must pass in a valid date time with a type of Date');
  } // Check if simply today is not the future.


  const isToday = now.toDateString() === then.toDateString();

  if (isToday) {
    return false;
  } // Store UTC miliseconds.


  if (typeof when === 'string') {
    now = Date.parse(when);
  } else {
    now = when.getTime();
  } // Store UTC miliseconds.


  if (typeof against === 'string') {
    then = Date.parse(against);
  } else {
    then = against.getTime();
  } // Compare the miliseconds. It's the only way to be sure.


  return then < now;
};

/**
 * getURLParams
 * @param {number} url - string or URL instance
 * @return object with key/val
 * @throws TypeError
 * @example
 * getURLParmas('http://www.placecage.com?height=100&width=200')
 */
function getURLParams(url = undefined) {
  const typeOfUrl = typeof url;
  const paramsObj = {};
  let params = undefined;

  if (typeOfUrl !== 'undefined' && (typeOfUrl === 'string' || url instanceof URL)) {
    url = new URL(url);
    params = new URLSearchParams(url.search);
    params.forEach(function (value, key) {
      paramsObj[key] = value;
    });
    return paramsObj;
  } else {
    throw TypeError('url must be of type String or URL');
  }
}

/**
 * convertToDate
 * @param {number|string|Date} date - Date you want to cast
 * @return Date
 * @throws TypeError
 * @example
 * convertToDate(number|string|date)
 */
function convertToDate(date) {
  if (date instanceof Date) {
    return date;
  }

  if (typeof date === 'string' || typeof date === 'number') {
    return new Date(date);
  }

  throw TypeError('You must pass in a primary argument of type Date, String, or Number');
}

/**
 * JSONMustaches - A JSON parser for mustaches templates in JSON objects.
 *
 * @type Class
 * @constructor @arguments
 * @param {object} schema - Schema compliant JSON object
 * @use {{type@text@url}}
 */
class JSONMustaches {
  constructor(schema) {
    this.schema = schema;
    this.delimiter = '@';
    this.allMustaches = /{{(.*?)}}/g;
    this.singleMustache = /{{(.*?)}}/; // Ensure we use Objects only for our schema

    if (!this.schema || this.schema === Object(this.schema) && Object.prototype.toString.call(this.schema) === '[object Array]') {
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
      code: `<code>${text}</code>`
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
      const value = this.schema[prop]; // Store the main property name so we can hydrate that too

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
    return str.split('-').map((n, i) => {
      if (i > 0) {
        return n.charAt(0).toUpperCase() + n.slice(1);
      }

      return n;
    }).join('');
  }

}

/**
 * getActualMonth
 * @param {number} num - number of the month from Date()
 * @return String of month
 * @throws TypeError
 * @example
 * getActualMonth(6)
 */
function getActualMonth(num = undefined) {
  const number = Number(num);

  if (!isNaN(number)) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[number];
  } else {
    throw TypeError('number must be of type string or number');
  }
}

/**
 * quickSortArray
 * @param {array} arr - Array of values of a single type
 * @return Array
 * @throws TypeError
 * @example
 * quickSortArray([10, 7, 1, 4])
 * quickSortArray(['banana', 'orange', 'apple'])
 */
function quickSortArray(arr) {
  if (!Array.isArray(arr)) {
    throw TypeError('You must pass in an array');
  } // Only want to sort on one type in a arr


  const isValid = new Set(arr.map(item => typeof item)).size < 2;

  if (!isValid) {
    throw TypeError('You must pass in an array containing a single type');
  } // So more quick sorts can be added in the future


  switch (typeof arr[0]) {
    case 'number':
      return arr.sort((a, b) => {
        return a - b;
      });

    case 'string':
    default:
      return arr.sort();
  }
}

function commonDenominators(...args) {
  const numerators = args.filter(numerator => Number.isInteger(numerator) && numerator > 0);
  const denominators = [Math.min(...numerators)];
  let minimum = Math.ceil(denominators[0] / 2);

  if (!numerators.length) {
    return [];
  }

  if (minimum < 2) {
    return [1];
  }

  while (minimum > 0) {
    if (denominators[0] % minimum === 0) {
      denominators.push(minimum);
    }

    minimum--;
  }

  denominators.reverse();

  if (numerators.length === 1) {
    return [...denominators];
  }

  numerators.splice(1, numerators.length - 1).map(numerator => {
    let denominator = denominators.length - 1;

    while (denominator >= 0) {
      if (numerator % denominators[denominator] !== 0) {
        denominators.splice(denominator, 1);
      }

      denominator--;
    }
  });
  return denominators;
}

/**
 * sortArrayOfObjects
 * @param {string} property - name of property to sort objects by
 * @param {array} arr - Array of objects to sort over
 * @param {boolean} desc - optional, default to descending order of objects
 * @return Array of objects, sorted by property
 * @throws TypeError
 * @example
 * sortArrayOfObjects('name', [{'name': 'Charles'}, {'name': 'Scott'}, {'name': 'Erik'}], true)
 */
function sortArrayOfObjects(property = undefined, arr = undefined, desc = false) {
  const isArray = Array.isArray(arr);
  let arrTypes = undefined;

  if (isArray && arr.length === 1) {
    return arr;
  }

  if (!isArray) {
    throw TypeError('You must pass in an array to sort');
  } else {
    arrTypes = Array.from(new Set(arr.map(obj => typeof obj)));
  }

  if (arrTypes.length > 1 || !arrTypes.includes('object')) {
    throw TypeError('You must pass in an array of only objects');
  }

  if (typeof property !== 'string') {
    throw TypeError('You must pass in a key as type string to sort your objects by');
  }

  const order = desc ? -1 : 1;
  return arr.sort((a, b) => {
    const x = a[property];
    const y = b[property]; // Magical stuff.

    return order * (x < y ? -1 : +(x > y));
  });
}

/**
 * querySelectorAllArray
 * @param {string} el - DOM element class name
 * @return Array of class based elements
 * @throws TypeError
 * @example
 * querySelectorArray('.my-element')
 */
function querySelectorAllArray(el) {
  if (typeof el !== 'string') {
    throw TypeError('el must be of type string');
  }

  if (el[0] !== '.') {
    throw TypeError('el must include a period prepended to the selector');
  }

  return Array.from(document.querySelectorAll(el));
}

export { JSONMustaches, commonDenominators, convertToDate, getActualMonth, getURLParams, isFutureDate, isOdd, querySelectorAllArray, quickSortArray, sortArrayOfObjects };
//# sourceMappingURL=index.js.map
