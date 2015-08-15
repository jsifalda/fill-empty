fill = function(toFill, path) {
  var filled, piece, pieces;
  if (typeof toFill !== 'object') {
    throw new Error('Only object can be populated with properties');
  }
  pieces = path;
  if (typeof pieces === 'string') {
    pieces = pieces.split('.');
  }
  filled = toFill;
  piece = pieces.shift();
  if (piece) {
    if (filled[piece] == null) {
      if (pieces.length) {
        filled[piece] = {};
      } else {
        filled[piece] = null;
      }
    }
    if (typeof filled[piece] === 'object') {
      filled[piece] = fill(filled[piece], pieces);
    }
  }
  return filled;
};

module.exports = fill;
