import { render, screen } from "@testing-library/react"
import Home from "src/pages/index"

describe("HomePage", () => {
  it("Home Pageが正しくレンダリングされているか", () => {
    render(<Home />)

    const title = screen.findByText("ゆめみコーディングテスト試験アプリ")

    expect(title).toBeInTheDocument()
  })
})
