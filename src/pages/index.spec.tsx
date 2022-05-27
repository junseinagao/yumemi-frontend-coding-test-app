import { render, screen } from "@testing-library/react"
import Home from "./index"

describe("HomePage", () => {
  it("Home Pageが正しくレンダリングされているか", () => {
    render(<Home />)

    const title = screen.findByText("ゆめみコーディングテスト試験アプリ")

    expect(title).toBeInTheDocument()
  })
})
