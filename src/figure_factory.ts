import { Figure } from './figure';

abstract class FigureFactory {
  public abstract getFigure(): Figure;

  public getArea(): number {
    const figure = this.getFigure();

    return figure.calculateArea();
  }

  public getPerimeter(): number {
    const figure = this.getFigure();

    return figure.calculatePerimeter();
  }
}

export { FigureFactory }