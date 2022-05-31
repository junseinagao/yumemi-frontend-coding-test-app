import { render, screen } from "@testing-library/react"
import { Header } from "src/components/Header"

describe("Header", () => {
  it("タイトルが表示されているかどうか", async () => {
    render(<Header />)
    const title = screen.getByText("ゆめみコーディングテスト試験アプリ")
    expect(title).toBeInTheDocument()
  })
})
