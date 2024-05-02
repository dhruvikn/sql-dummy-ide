'use client';

import styles from './style.module.css';
import { useCallback } from 'react';

import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { githubLight } from '@uiw/codemirror-theme-github';
import { Fira_Mono } from 'next/font/google';
import { useLocalStorage } from '@uidotdev/usehooks';

import { SAVED_QUERIES } from '@/app/helpers/constants';

const monoFont = Fira_Mono({ subsets: ['latin'], weight: '500' });

const styleTheme = EditorView.baseTheme({
  '*': {
    fontFamily: `${monoFont.style.fontFamily}, sans-serif !important`,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    'text-rendering': 'optimizeLegibility',
    fontSize: '0.9rem'
  },
  '&.cm-editor.cm-focused': {
    outline: '2px solid rgb(33, 53, 155, 0.75)'
  }
});

export const Editor = () => {
  const [queryData, setQueryData] = useLocalStorage<string>('queryData', SAVED_QUERIES[0].query);

  const onChange = useCallback(
    (value: string) => {
      setQueryData(value);
    },
    [setQueryData]
  );

  return (
    <>
      <div className={styles['editor-container']}>
        <CodeMirror
          value={queryData}
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
