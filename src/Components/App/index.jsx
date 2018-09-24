import React from "react"
import { string } from "prop-types"
import { Route, Switch, withRouter } from "react-router-dom"
import NewsFeed from "Components/Pages/NewsFeed"
import People from "Components/Pages/People"
import Profile from "Components/Pages/Profile"
import NavBar from "Components/Navbar"
import PageContainer from "Pages/PageContainer"
import ThemeSwitcher from "Components/Common/ThemeSwitcher"
import { connect } from "react-redux"
import themeSelector from "selectors/themeSelector"
import "./App.scss"

const App = ({ theme }) => (
  <div className={`App ${theme}__Theme`}>
    <NavBar />
    <Switch>
      <Route path="/" exact component={NewsFeed} />
      <Route path="/feed" component={NewsFeed} />
      <Route path="/people" component={People} />
      <Route path="/profile/:user" component={Profile} />
      <Route
        path="/*"
        component={() => <PageContainer>Not Yet Implemented</PageContainer>}
      />
    </Switch>
    <footer>
      <ThemeSwitcher switchTheme={() => null} />
    </footer>
  </div>
)

const mapStateToProps = state => ({
  theme: themeSelector(state)
})

App.propTypes = {
  theme: string.isRequired
}

export default withRouter(connect(mapStateToProps)(App))
