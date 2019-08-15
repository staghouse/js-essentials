module.exports = el => {
  let $el = el;

  if ($el && $el.indexOf('.') < 0) {
    $el = `.${$el}`;
  }

  if (document) {
    return Array.from(document.querySelectorAll($el));
  }
};
