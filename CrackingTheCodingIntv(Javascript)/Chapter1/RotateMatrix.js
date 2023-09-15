var rotateMatrix = function(matrix) {
    var edge = matrix.length - 1;
  
    var movePixels = function(row, col) {
      // starts at m[row][col]
      // moves to m[col][edge - row]
      var fromRow;
      var fromCol;
      var fromPixel;
  
      // first transformation
      var toRow = row; // 0
      var toCol = col; // 1
      var toPixel = matrix[row][col];
  
      // Do rotational transformation 4 times
      for (var i = 0; i < 4; i++) {
        fromRow = toRow;
        fromCol = toCol;
        toRow = fromCol;
        toCol = edge - fromRow;
  
        fromPixel = toPixel;
        toPixel = matrix[toRow][toCol];
        matrix[toRow][toCol] = fromPixel;
      }
    };
  
    for (var i = 0; i < matrix.length / 2; i++) {
      for (var j = i; j < edge - i; j++) {
        console.log(i, j);
        movePixels(i, j);
      }
    }
  };
  