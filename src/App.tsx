import React from 'react'
import './style.css'

// Below line works fine with native esbuild, without any plugins
// Below line doesn't work with esbuild-plugin-postcss2
// import 'bulma/css/bulma.css'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
// import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/light'
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql'
import darkTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'

SyntaxHighlighter.registerLanguage('sql', sql)

export default function App() {
  return (
    <div>
      <SyntaxHighlighter
        language='sql'
        style={darkTheme}
        customStyle={{
          background: 'none',
          padding: 0,
          overflowX: 'hidden'
        }}
      >
        {'SELECT COUNT(*) from test;'}
      </SyntaxHighlighter>
    </div>
  )
}
