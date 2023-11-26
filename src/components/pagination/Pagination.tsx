import pg from './Pagination.module.scss';
import { ReactNode, useEffect, useState } from 'react';
import ItemsPerPage from '../items-page/ItemsPerPage';
import { useRouter } from 'next/router';
import QueryParser from '@/utils/QueryParser';

function Pagination(): ReactNode {
  const router = useRouter();
  const queryParams = new QueryParser(router.asPath);
  const [page, SetPage] = useState<string | null>('');

  useEffect(() => {
    SetPage(queryParams.page);
  }, [queryParams.page]);

  return (
    <div className={pg.pagination}>
      <div className={pg.wrapper}>
        <span className={pg.pagination__textPage}>{'Page: '}</span>
        <span className={pg.pagination__page}>{page}</span>
      </div>
      <ItemsPerPage />
      <div className={pg.pagination__panel}>
        <button
          type="button"
          className={pg.pagination__button}
          onClick={onPageDown}
        >
          <span className={pg.pagination__buttonText}>⇦</span>
        </button>
        <button
          type="button"
          className={pg.pagination__button}
          onClick={onPageUp}
        >
          <span className={pg.pagination__buttonText}>⇨</span>
        </button>
      </div>
    </div>
  );

  async function onPageDown(): Promise<void> {
    let enteredPage: number = checkEnteredPage(queryParams.page) - 1;

    enteredPage = enteredPage < 1 ? 1 : enteredPage;

    await goToPage(enteredPage);
  }

  async function onPageUp(): Promise<void> {
    const enteredPage: number = checkEnteredPage(queryParams.page) + 1;

    await goToPage(enteredPage);
  }

  function checkEnteredPage(enteredPage: string | null): number {
    let pageConverted = 1;

    if (Array.isArray(enteredPage)) return 1;

    if (enteredPage) pageConverted = parseInt(enteredPage);

    if (isNaN(pageConverted) || Array.isArray(enteredPage))
      return pageConverted;

    return pageConverted;
  }

  async function goToPage(page: number): Promise<void> {
    let url: string = '?page=' + page + '&items=' + queryParams.items;

    if (queryParams.search) url = url + '&search=' + queryParams.search;

    await router.push(url);
  }
}

export default Pagination;
