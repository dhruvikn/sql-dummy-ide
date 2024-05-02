'use client';

import styles from './style.module.css';
import { useCallback, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { useLocalStorage } from '@uidotdev/usehooks';

import { Button } from '@/app/components/Button';
import { runQuery } from '@/app/helpers/utils';

type ActionsProps = {
  gridRef: React.RefObject<AgGridReact>;
};

export const Actions = (props: ActionsProps) => {
  const { gridRef } = props;

  const [isRunningQuery, setIsRunningQuery] = useState<boolean>(false);
  const [isDownloadingCSV, setIsDownloadingCSV] = useState<boolean>(false);
  const [gridData, setGridData] = useLocalStorage<any[]>('gridData');
  const [isViewerLoading, setIsViewerLoading] = useLocalStorage<boolean>('isViewerLoading');

  const handleDownload = useCallback(() => {
    setIsDownloadingCSV(true);
    gridRef.current!.api.exportDataAsCsv();

    setTimeout(() => {
      setIsDownloadingCSV(false);
    }, 1000);
  }, [gridRef]);

  return (
    <>
      <div className={styles['actions-container']}>
        <Button
          type="primary"
          label="Run query"
          isLoading={isRunningQuery}
          onClick={() => {
            runQuery('random', setGridData, state => {
              setIsRunningQuery(state);
              setIsViewerLoading(state);
            });
          }}
          subText="⌘ + Enter"
        />

        <div className="ml-auto">
          <Button
            type="secondary"
            label="Download CSV"
            isLoading={isDownloadingCSV}
            onClick={handleDownload}
          />
        </div>
      </div>
    </>
  );
};
