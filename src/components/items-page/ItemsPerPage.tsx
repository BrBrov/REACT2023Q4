import './ItemsPerPage.scss';
import { ReactNode, SyntheticEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

function ItemsPerPage(): ReactNode {
  const [sParams, setNewParams] = useSearchParams();
  const items: string | null = sParams.get('items');

  return (
    <div className="items__wrapper">
      <label className="items__label" htmlFor="items-select">
        Items per page
      </label>
      <select
        className="items__select-count"
        id="items-select"
        onChange={onSelectCount}
        value={items ? items : '6'}
      >
        <option className="items__select-item" value="6">
          6
        </option>
        <option className="items__select-item" value="12">
          12
        </option>
        <option className="items__select-item" value="24">
          24
        </option>
      </select>
    </div>
  );

  function onSelectCount(e: SyntheticEvent): void {
    const target = e.target as HTMLSelectElement;

    let url = '&page=' + sParams.get('page') + `&items=` + target.value;

    if (sParams.get('search')) url += '&search=' + sParams.get('search');

    if (sParams.get('ids')) url += '&ids=' + sParams.get('ids');

    setNewParams(url);
  }
}

export default ItemsPerPage;
