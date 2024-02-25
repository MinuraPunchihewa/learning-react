import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// styles
import 'bootstrap/dist/css/bootstrap.css' // run `npm install bootstrap` to install and then import it

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
