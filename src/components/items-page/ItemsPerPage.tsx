import item from './ItemsPerPage.module.scss';
import { ReactNode, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { actionItems } from '@/redux/redux-slices/items-operations';
import { ItemsAction } from '@/redux/redux-models/actions-model';
import { useRouter } from 'next/router';
import QueryParser from '@/utils/QueryParser';

function ItemsPerPage(): ReactNode {
  const router = useRouter();
  const queryParams = new QueryParser(router.asPath);
  const items = queryParams.items;
  const dispatcher = useDispatch();

  return (
    <div className={item.wrapper}>
      <label className={item.items__label} htmlFor="items-select">
        Items per page
      </label>
      <select
        className={item.items__selectCount}
        id="items-select"
        onChange={onSelectCount}
        value={items ? items : '6'}
      >
        <option className={item.items__selectItem} value="6">
          6
        </option>
        <option className={item.items__selectItem} value="12">
          12
        </option>
        <option className={item.items__selectItem} value="24">
          24
        </option>
      </select>
    </div>
  );

  async function onSelectCount(e: SyntheticEvent): Promise<void> {
    const target = e.target as HTMLSelectElement;

    let url = '&page=' + queryParams.page + `&items=` + target.value;

    if (queryParams.search) url += '&search=' + queryParams.search;

    if (queryParams.ids) url += '&ids=' + queryParams.ids;

    const items: ItemsAction = {
      items: parseInt(target.value),
    };
    dispatcher(actionItems(items));

    await router.push(url);
  }
}

export default ItemsPerPage;
