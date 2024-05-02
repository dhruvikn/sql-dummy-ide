'use client';

import styles from './style.module.css';

import { useLocalStorage } from '@uidotdev/usehooks';

import { DEFAULT_QUERY, SAMPLE_TABLE_NAMES, SAVED_QUERIES } from '@/app/helpers/constants';
import { runQuery, type SampleTableNamesType } from '@/app/helpers/utils';
import { ListItem } from '@/app/components/ListItem';

export const Sidebar = () => {
  const [gridData, setGridData] = useLocalStorage<any[]>('gridData');
  const [isViewerLoading, setIsViewerLoading] = useLocalStorage<boolean>('isViewerLoading');
  const [queryData, setQueryData] = useLocalStorage<string>('queryData');

  const handleTableNameClick = (tableName: SampleTableNamesType) => {
    runQuery(tableName, setGridData, setIsViewerLoading);
    setQueryData(DEFAULT_QUERY(tableName));
  };

  const handleQueryClick = (query: string) => {
    setQueryData(query);
    setGridData([]);
  };

  return (
    <>
      <div className={styles['sidebar-container']}>
        <h2 className={styles['sidebar-heading']}>Saved Queries</h2>

        <ul className={styles['list']}>
          {SAVED_QUERIES.map(sqlQuery => {
            return (
              <ListItem
                key={sqlQuery.name}
                label={sqlQuery.name}
                handleClick={() => handleQueryClick(sqlQuery.query)}
                iconType="query"
              />
            );
          })}
        </ul>

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
      </div>
    </>
  );
};
