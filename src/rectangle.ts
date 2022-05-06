import { Figure } from './figure';
import { FigureFactory } from './figure_factory';

export class Rectangle implements Figure {
  constructor(
    private base: number,
    private height: number
  ) { }

  public calculateArea(): number {
    return this.base * this.height;
  }

  public calculatePerimeter(): number {
    return 2 * (this.base + this.height);
  }
}

export class RectangleFactory extends FigureFactory {
  constructor(
    private base: number,
    private height: number
  ) {
    super();
  }

  public getFigure(): Figure {
    return new Rectangle(
      this.base,
      this.height
    );
  }
}