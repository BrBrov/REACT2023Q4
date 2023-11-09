import Card from '../components/card/Card';
import { ReactNode } from 'react';
import DataContext from '../models/DataContext-model';

class CardCreator {
  private readonly data: DataContext;
  private readonly id: number;

  constructor(data: DataContext, id: number) {
    this.data = data;
    this.id = id;
  }

  public getCard(): ReactNode {
    return <Card key={this.id} id={this.id} />;
  }
}

export default CardCreator;
