import { lazy, ReactNode } from 'react';
import ResponseData from '../models/ResponseData';

const Card = lazy(() => import('../components/card/Card'));

class CardCreator {
  private readonly data: ResponseData;
  private readonly id: number;

  constructor(data: ResponseData, id: number) {
    this.data = data;
    this.id = id;
  }

  public getCard(): ReactNode {
    return <Card key={this.id} card={this.data} />;
  }
}

export default CardCreator;
