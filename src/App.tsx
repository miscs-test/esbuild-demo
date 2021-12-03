import React from 'react'
import './style.css'

// Below line works fine with native esbuild, without any plugins
// Below line doesn't work with esbuild-plugin-postcss2
import 'bulma/css/bulma.css'

export default function App() {
  return <div>Hello World!</div>
}
