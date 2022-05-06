import { Figure } from './figure';
import { FigureFactory } from './figure_factory';

export class Square implements Figure {
  constructor(
    private side: number
  ) { }

  public calculateArea(): number {
    return Math.pow(this.side, 2);
  }

  public calculatePerimeter(): number {
    return this.side * 4;
  }
}

export class SquareFactory extends FigureFactory {
  constructor(
    private side: number
  ) {
    super();
  }

  public getFigure(): Figure {
    return new Square(this.side);
  }
}
