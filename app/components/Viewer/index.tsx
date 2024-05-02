'use client';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import styles from './style.module.css';
import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { AgGridReact } from 'ag-grid-react';
import { useLocalStorage } from '@uidotdev/usehooks';

type ViewerProps = {
  gridRef: React.RefObject<AgGridReact>;
};

export const Viewer = (props: ViewerProps) => {
  const { gridRef } = props;
  const [gridData, setGridData] = useLocalStorage<any[]>('gridData');
  const [isViewerLoading, setIsViewerLoading] = useLocalStorage<boolean>('isViewerLoading');

  const [rowData, setRowData] = useState<any[]>();
  const [colDefs, setColDefs] = useState<any[]>();

  useEffect(() => {
    setIsViewerLoading(true);
    setRowData(gridData);

    if (gridData?.length) {
      const columns = Object.keys(gridData[0]).map(col => {
        return {
          field: col,
          headerName: col
        };
      });

      setColDefs(columns);
    }

    setIsViewerLoading(false);
  }, [setGridData]);

  if (isViewerLoading) {
    return (
      <div
        className={classNames({
          [styles['viewer-container']]: true,
          'd-flex items-center content-center text-center': true
        })}
      >
        <div className="loader"></div>
      </div>
    );
  }

  if (!rowData?.length || !colDefs?.length) {
    return (
      <div
        className={classNames({
          [styles['viewer-container']]: true,
          'd-flex items-center content-center': true
        })}
      >
        <p className="text-center">
          Nothing to show here at the moment.
          <br />
          Select a table or run a query to get started.
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        className={classNames({
          [styles['viewer-container']]: true,
          'ag-theme-quartz': true
        })}
      >
        <AgGridReact ref={gridRef} rowData={rowData} columnDefs={colDefs} />
      </div>
    </>
  );
};
