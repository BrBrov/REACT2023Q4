import item from './ItemsPerPage.module.scss';
import { ReactNode, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionItems } from '@/redux/redux-slices/items-operations';
import { ItemsAction } from '@/redux/redux-models/actions-model';
import { useRouter } from 'next/router';
import QueryParser from '@/utils/QueryParser';
import StoreType from '@/redux/redux-models/wrapper-type';

function ItemsPerPage(): ReactNode {
  const router = useRouter();
  const [items, SetItemsCount] = useState<string>('6');

  const queryParams = new QueryParser(router.asPath);

  const itemView = useSelector(
    (state: StoreType) => state.itemsPerPage.itemsPerPage
  );

  useEffect(() => {
    SetItemsCount(itemView.toString());
  }, [itemView]);

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
        value={items}
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

    let url = 'main?page=' + queryParams.page + `&items=` + target.value;

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
