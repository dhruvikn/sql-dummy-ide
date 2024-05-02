'use client';

import { useCallback, useState } from 'react';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import type { ViewUpdate } from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import styles from '../styles/editor.module.css';
import { githubLight } from '@uiw/codemirror-theme-github';
import { SAVED_QUERIES } from '../helpers/constants';

const styleTheme = EditorView.baseTheme({
  '&.cm-editor.cm-focused': {
    outline: '2px solid rgb(33, 53, 155, 0.75)'
  }
});

export const Editor = () => {
  const [value, setValue] = useState<string>(SAVED_QUERIES[0]);

  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => {
    setValue(value);
  }, []);

  return (
    <>
      <div className={styles['editor-container']}>
        <CodeMirror
          value={value}
          style={{ height: '100%' }}
          height={'100%'}
          extensions={[styleTheme, sql()]}
          onChange={onChange}
          placeholder={'Type your SQL query here...'}
          autoFocus
          theme={githubLight}
        />
      </div>
    </>
  );
};
