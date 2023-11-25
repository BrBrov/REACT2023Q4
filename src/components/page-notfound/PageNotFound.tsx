import { ReactNode } from 'react';

import './PageNotFound.scss';
import {useRouter} from "next/router";

function PageNotFound(): ReactNode {
  const router = useRouter();

  return (
    <div className="page__not-found">
      <span className="page__title-not_found">404...</span>
      <span className="page__text-not_found">Page not found!</span>
      <button
        className="page__button-not_found"
        type="button"
        onClick={onRedirect}
      >
        <span className="page__button-txt_not_found">Return...</span>
      </button>
    </div>
  );

  async function onRedirect(): Promise<void> {
    await router.push('main?page=1&items=6');
  }
}

export default PageNotFound;
