import { ReactNode } from 'react';
import Header from '@/components/header/Header';
import MissingPage from '@/components/missing-page/MissingPage';
import ErrorButton from '@/components/error-button/ErrorButton';
import beer from './Beer.module.scss';

function CardsEmpty(): ReactNode {
  return (
    <div className={beer.missing__page}>
      <Header />
      <MissingPage />
      <div className={beer.missing__errorButton}>
        <ErrorButton />
      </div>
    </div>
  );
}

export default CardsEmpty;
