import { render, screen } from "@testing-library/react"
import { mockHighchartsOptions } from "src/lib/mock"

beforeAll(async () => {
  process.env.NEXT_PUBLIC_RESAS_API_KEY = "DUMMY_API_KEY"
  process.env.NEXT_PUBLIC_RESAS_API_URI = "https://dummy_api_uri"
  jest.mock("src/hooks/populationComposition/useChartsOptions")
  const { useChartsOptions } = await import(
    "src/hooks/populationComposition/useChartsOptions"
  )
  const mockedUseChartsOptions = useChartsOptions as jest.Mock
  mockedUseChartsOptions.mockReturnValue({ options: mockHighchartsOptions() })
})

beforeEach(async () => {
  const component = await import("src/components/ChartGraph")
  render(component.ChartGraph())
})

afterAll(() => {
  jest.resetModules()
  jest.resetAllMocks()
})

describe("ChartGraph", () => {
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
