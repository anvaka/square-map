var queryState = require('query-state');

var qs = queryState({
  rows: 55,
  columns: 42,
  cellWidth: 42,
  cellHeight: 42
}, {
  useSearch: true,
  rewriteHashToSearch: true
});

var currentState = qs.get();

var cellWidth = currentState.cellWidth;
var columns = currentState.columns;
var paintWidth = cellWidth * columns;

var rows = currentState.rows;
var cellHeight = currentState.cellHeight;
var paintHeight = cellHeight * rows;

var cells = [];
for(var row = 0; row <= rows; row++) {
  cells.push('M0,' + row * cellHeight + 'H' + paintWidth);
}

for (var col = 0; col <= columns; col++) {
  cells.push('M' + col * cellWidth + ',0V' + paintHeight);
}
var viewBox = '0 0 ' + paintWidth + ' ' + paintHeight;

var html = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="' + viewBox + '"><g>' + 
'<path d="' + cells.join('') + '" stroke="black"></path>' + 
'</svg>'

document.body.innerHTML = html;