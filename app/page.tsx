'use client';

import { useRef } from 'react';

import { Header } from '@/app/components/Header';
import { BodyContainer } from '@/app/components/BodyContainer';
import { Sidebar } from '@/app/components/Sidebar';
import { IDE } from '@/app/components/IDE';
import { Editor } from '@/app/components/Editor';
import { Actions } from '@/app/components/Actions';
import { Viewer } from '@/app/components/Viewer';

import type { AgGridReact } from 'ag-grid-react';

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
