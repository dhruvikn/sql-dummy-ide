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
import { ClientOnly } from './helpers/ClientOnly';

export default function Home() {
  const gridRef = useRef<AgGridReact>(null);

  return (
    <main>
      <Header />

      <BodyContainer>
        <ClientOnly>
          <Sidebar />
        </ClientOnly>

        <IDE>
          <ClientOnly>
            <Editor />
          </ClientOnly>

          <ClientOnly>
            <Actions gridRef={gridRef} />
          </ClientOnly>

          <ClientOnly>
            <Viewer gridRef={gridRef} />
          </ClientOnly>
        </IDE>
      </BodyContainer>
    </main>
  );
}
