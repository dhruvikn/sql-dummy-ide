'use client';

import styles from './style.module.css';

import { useLocalStorage } from '@uidotdev/usehooks';

import { SAMPLE_TABLE_NAMES } from '@/app/helpers/constants';
import { runQuery, type SampleTableNamesType } from '@/app/helpers/utils';
import { ListItem } from '@/app/components/ListItem';

export const Sidebar = () => {
  const [gridData, setGridData] = useLocalStorage<any[]>('gridData');
  const [isViewerLoading, setIsViewerLoading] = useLocalStorage<boolean>('isViewerLoading');

  const handleTableNameClick = (tableName: SampleTableNamesType) => {
    runQuery(tableName, setGridData, setIsViewerLoading);
  };

  return (
    <>
      <div className={styles['sidebar-container']}>
        <h2 className={styles['sidebar-heading']}>Tables</h2>

        <ul className={styles['list']}>
          {SAMPLE_TABLE_NAMES.map(tableName => {
            return (
              <ListItem
                key={tableName}
                label={tableName}
                handleClick={() => handleTableNameClick(tableName)}
                iconType="table"
              />
            );
          })}
        </ul>

        <h2 className={styles['sidebar-heading']}>Saved Queries</h2>

        <ul className={styles['list']}>
          {SAMPLE_TABLE_NAMES.map(tableName => {
            return (
              <ListItem
                key={tableName}
                label={tableName}
                handleClick={() => handleTableNameClick(tableName)}
                iconType="query"
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
