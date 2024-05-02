'use client';

import { AgGridReact } from 'ag-grid-react';
import styles from '../styles/actions.module.css';
import { Button } from './Button';
import { useCallback, useState } from 'react';

type ActionsProps = {
  gridRef: React.RefObject<AgGridReact>;
};

export const Actions = (props: ActionsProps) => {
  const { gridRef } = props;

  const [isRunningQuery, setIsRunningQuery] = useState<boolean>(false);
  const [isDownloadingCSV, setIsDownloadingCSV] = useState<boolean>(false);

  const runQuery = () => {
    setIsRunningQuery(true);

    setTimeout(() => {
      setIsRunningQuery(false);
    }, 2000);
  };

  const handleDownload = useCallback(() => {
    setIsDownloadingCSV(true);
    gridRef.current!.api.exportDataAsCsv();

    setTimeout(() => {
      setIsDownloadingCSV(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className={styles['actions-container']}>
        <Button
          type="primary"
          label="Run query"
          isLoading={isRunningQuery}
          onClick={runQuery}
          subText="⌘ + Enter"
        />

        <div className="ml-auto">
          <Button
            type="secondary"
            label="Downlad CSV"
            isLoading={isDownloadingCSV}
            onClick={handleDownload}
          />
        </div>
      </div>
    </>
  );
};
