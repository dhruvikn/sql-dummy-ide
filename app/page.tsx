'use client';

import { Header } from './components/Header';
import { BodyContainer } from './components/BodyContainer';
import { Sidebar } from './components/Sidebar';
import { IDE } from './components/IDE';
import { Editor } from './components/Editor';
import { Actions } from './components/Actions';
import { Viewer } from './components/Viewer';
import { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

export default function Home() {
  const gridRef = useRef<AgGridReact>(null);

  return (
    <main>
      <Header />
      <BodyContainer>
        <Sidebar />
        <IDE>
          <Editor />
          <Actions gridRef={gridRef} />
          <Viewer gridRef={gridRef} />
        </IDE>
      </BodyContainer>
    </main>
  );
}
