import React from "react"
import { render, cleanup } from "react-testing-library"
import UpcomingEvents from "./index"

describe("<UpcomingEvents />", () => {
  afterEach(cleanup)
  it("Should render self", () => {
    const { container } = render(<UpcomingEvents />)
    expect(container.firstChild).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})