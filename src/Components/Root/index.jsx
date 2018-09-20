import React from "react"
import { object } from "prop-types"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "Components/App"

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: object.isRequired
}

export default Root
