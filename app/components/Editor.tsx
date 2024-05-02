'use client';

import { useCallback, useState } from 'react';
import styles from '../styles/editor.module.css';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { githubLight } from '@uiw/codemirror-theme-github';
import { SAVED_QUERIES } from '../helpers/constants';
import { Fira_Mono } from 'next/font/google';

const monoFont = Fira_Mono({ subsets: ['latin'], weight: '500' });

console.log(monoFont);

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
  const [value, setValue] = useState<string>(SAVED_QUERIES[0]);

  const onChange = useCallback((value: string) => {
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
