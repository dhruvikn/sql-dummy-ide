import { Header } from './components/Header';
import { BodyContainer } from './components/BodyContainer';
import { Sidebar } from './components/Sidebar';
import { IDE } from './components/IDE';
import { Editor } from './components/Editor';
import { Actions } from './components/Actions';
import { Viewer } from './components/Viewer';

export default function Home() {
  return (
    <main>
      <Header />
      <BodyContainer>
        <Sidebar />
        <IDE>
          <Editor />
          <Actions />
          <Viewer />
        </IDE>
      </BodyContainer>
    </main>
  );
}
