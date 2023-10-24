import ResponseData from '../models/ResponseData';
import Card from '../components/card/Card';
import { CardProps } from '../models/Card-model';
import { ReactNode } from 'react';

class CardCreator {
  private readonly data: CardProps;

  constructor(data: ResponseData) {
    this.data = this.convertToCardProps(data);
  }

  public getCard(): ReactNode {
    return <Card key={this.data.id} {...this.data} />;
  }

  private convertToCardProps(data: ResponseData): CardProps {
    const { id, name, description, image_url, volume, ibu, srm, abv } = data;
    return { id, name, description, image_url, volume, ibu, srm, abv };
  }
}

export default CardCreator;
