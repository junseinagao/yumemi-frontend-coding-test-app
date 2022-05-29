import { render, screen } from "@testing-library/react"
import { mockPrefectures } from "src/lib/mock"
import HomePage from "src/pages/index"

beforeEach(() => {
  render(<HomePage />)
})

describe("HomePage", () => {
  it("タイトルが表示されているかどうか", async () => {
    const title = screen.getByText("ゆめみコーディングテスト試験アプリ")
    expect(title).toBeInTheDocument()
  })

  it("「都道府県」と書かれたセクションタイトルがレンダリングされているか", async () => {
    const sectionTitle = screen.getByText("都道府県")
    expect(sectionTitle).toBeInTheDocument()
  })

  it("全ての都道府県名とチェックボックスがレンダリングされているか", async () => {
    const prefectures = mockPrefectures()
    for (let i = 0; i < prefectures.length; i++) {
      const { name } = prefectures[i]
      const checkboxInput = screen.getByLabelText(name)
      expect(checkboxInput).toBeInTheDocument()
    }
  })

  it("グラフに「人口数」というラベルがあるか", async () => {
    const label = await screen.findByRole("tspan", {
      name: "人口数",
    })
    expect(label).toBeInTheDocument()
  })
  it("グラフに「年度」というラベルがあるか", async () => {
    const label = await screen.findByRole("tspan", {
      name: "年度",
    })
    expect(label).toBeInTheDocument()
  })
})
