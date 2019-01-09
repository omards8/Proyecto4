var filas;
var columnas;
function pintarTablero () {
  filas = [[2, 4, 3, 1, 5, 4], [6, 6, 4, 4, 5, 1], [5, 6, 1, 2, 3, 4], [4, 3, 2, 5, 2, 3], [5, 2, 6, 6, 2, 1], [5, 6, 3, 1, 1, 3]];
  colores = [["blue", "blue", "blue", "pink", "green", "green"], ["yellow", "white", "yellow", "white", "white", "white"], ["pink", "pink", "blue", "pink", "green", "pink"], ["red", "red", "red", "red", "green", "white"], ["yellow", "yellow", "red", "green", "white", "green"], ["blue", "blue", "pink", "red", "yellow", "yellow"]];

  document.write("<table>");
  for (var i = 0; i < 6; i++) {
    document.write("<tr>");
      for (var j = 0; j < 6; j++) {
        document.write("<td style='background-color:" + colores[i][j] +"';>"+ filas[i][j]);
        document.write("</td>");
      }
    document.write("</tr>");
  }
  document.write("</table>");
}
pintarTablero();
