'use client';
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';
import classNames from 'classnames';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import styles from '../styles/viewer.module.css';

type ViewerProps = {
  gridRef: React.RefObject<AgGridReact>;
};

export const Viewer = (props: ViewerProps) => {
  const { gridRef } = props;

  const [rowData, setRowData] = useState<any>([
    { make: 'Tesla', model: 'Model Y', price: 64950 },
    { make: 'Ford', model: 'F-Series', price: 33850 },
    { make: 'Toyota', model: 'Corolla', price: 29600 }
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<any>([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ]);

  return (
    <>
      <div
        className={classNames({
          [styles['viewer-container']]: true,
          'ag-theme-quartz': true
        })}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={colDefs}
          autoSizeStrategy={{
            type: 'fitGridWidth',
            defaultMinWidth: 100,
            columnLimits: [
              {
                colId: 'country',
                minWidth: 900
              }
            ]
          }}
        />
      </div>
    </>
  );
};
