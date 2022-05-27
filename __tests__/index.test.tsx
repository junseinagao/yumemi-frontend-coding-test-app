import { render, screen } from "@testing-library/react"
import HomePage from "src/pages/index"

describe("HomePage", () => {
  it("Home Pageが正しくレンダリングされているか", async () => {
    render(<HomePage />)

    const title = await screen.findByText("ゆめみコーディングテスト試験アプリ")

    expect(title).toBeInTheDocument()
  })
})
