import { FigureFactory } from './src/figure_factory';
import { SquareFactory } from './src/square';
import { RectangleFactory } from './src/rectangle';

const showResult = (figure: FigureFactory) => {
  const result = `
    Area: ${figure.getArea()}
    Perimetro: ${figure.getPerimeter()}
  `

  console.log(result);
}

const square = new SquareFactory(5);
console.log('Datos del Cuadrado');
showResult(square);

console.log('-----------------------------\n');

const rectangle = new RectangleFactory(8, 5);
console.log('Datos del Rectangulo');
showResult(rectangle);
