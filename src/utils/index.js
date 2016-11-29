export const isNumeric = (obj) => {
  const type = typeof obj;
  return (type === "number" || type === "string") &&
  // parseFloat NaNs numeric-cast false positives ("")
  // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
  // subtraction forces infinities to NaN
  !isNaN(obj - parseFloat( obj));
}

export const format1 = (n, currency) => {
    return n.toFixed(2).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? " " + c : c;
    }) + ' ' + currency;
}
