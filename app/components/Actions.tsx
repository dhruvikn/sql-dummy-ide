'use client';

import styles from '../styles/actions.module.css';
import { Button } from './Button';
import { useState } from 'react';

export const Actions = () => {
  const [isRunningQuery, setIsRunningQuery] = useState<boolean>(false);
  const [isDownloadingCSV, setisDownloadingCSV] = useState<boolean>(false);

  const runQuery = () => {
    setIsRunningQuery(true);

    setTimeout(() => {
      setIsRunningQuery(false);
    }, 2000);
  };

  const handleDownload = () => {
    setisDownloadingCSV(true);

    setTimeout(() => {
      setisDownloadingCSV(false);
    }, 2000);
  };

  return (
    <>
      <div className={styles['actions-container']}>
        <Button type="primary" label="Run query" isLoading={isRunningQuery} onClick={runQuery} />

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
