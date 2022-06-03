import { render, screen } from "@testing-library/react"
import { ChartGraphSection } from "src/components/ChartGraphSection"

beforeEach(() => {
  render(<ChartGraphSection />)
})

describe("ChartGraphSection", () => {
  it("グラフに「人口数」というラベルがあるか", async () => {
    const label = screen.getByText("人口数", {
      selector: "text",
    })
    expect(label).toBeInTheDocument()
  })
  it("グラフに「年度」というラベルがあるか", async () => {
    const label = screen.getByText("人口数", {
      selector: "text",
    })
    expect(label).toBeInTheDocument()
  })
})
