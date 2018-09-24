import React from "react"
import { render, cleanup } from "react-testing-library"
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import NewsFeed from "./index"
import getNewsFeed from "./actions/index.js"

const mockStore = configureMockStore([ReduxThunk])
const store = mockStore({
  Theme: { themeName: "Pinterest" },
  NewsFeed: { feed: [] }
})

describe("<NewsFeed />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(
      <Provider store={store}>
        <NewsFeed getNewsFeed={() => getNewsFeed()} />
      </Provider>
    )
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})