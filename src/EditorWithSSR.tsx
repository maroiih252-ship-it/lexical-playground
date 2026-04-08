import type {JSX} from 'react';
import {useEffect, useState} from 'react';

import type {PlayGroundAppProps} from './App';
import type {OnEditorStateChangeCallback} from './Editor';

type EditorProps = {
  onChange?: OnEditorStateChangeCallback;
  hideToolbar?: boolean;
  readOnly?: boolean;
} & PlayGroundAppProps;

export function Editor(props: EditorProps): JSX.Element {
  const [EditorComponent, setEditorComponent] = useState(null);

  useEffect(() => {
    import('./App').then((mod) => {
      setEditorComponent(() => mod.default);
    });
  }, []);

  if (!EditorComponent) {
    return <div style={{minHeight: 200}} />;
  }

  return <EditorComponent {...props} />;
}
