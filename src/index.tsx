import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app/app'
import store from './store/store'

function importAll (r: __WebpackModuleApi.RequireContext): void {
  r.keys().forEach(r)
}
importAll(require.context('./', true, /\.scss$/))

function Index (): JSX.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
)
