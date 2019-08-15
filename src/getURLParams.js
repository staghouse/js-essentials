module.exports = (url) => {
  if(!url){
    return undefined;
  } else {
    const { search } = new URL(url);
    const params = new URLSearchParams(search);
    const entries = Array.from(params.entries());

    return entries.reduce((accumulator, entry) => {
      const [key, value] = entry;
      accumulator[key] = value;
      return accumulator;
    }, {});
  }
};
