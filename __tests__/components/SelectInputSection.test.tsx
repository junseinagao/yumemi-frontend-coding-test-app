import { render, screen } from "@testing-library/react"
import { SelectInputSection } from "src/components/SelectInputSection"
import { mockPrefectures } from "src/lib/mock"
import { Middleware, SWRResponse, SWRConfig } from "swr"

describe("SelectInputSection", () => {
  it("「都道府県」と書かれたセクションタイトルがレンダリングされているか", async () => {
    const mockData = mockPrefectures()
    const mockSWRMiddleware: Middleware = () => {
      return (): SWRResponse<any, any> => {
        return {
          data: { result: mockData },
          error: undefined,
          mutate: (_) => Promise.resolve(),
          isValidating: false,
        }
      }
    }

    render(
      <SWRConfig value={{ use: [mockSWRMiddleware] }}>
        <SelectInputSection />
      </SWRConfig>
    )

    const sectionTitle = screen.getByText("都道府県")
    expect(sectionTitle).toBeInTheDocument()
  })
})
