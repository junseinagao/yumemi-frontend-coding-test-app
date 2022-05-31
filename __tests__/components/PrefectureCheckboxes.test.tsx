import { render, screen } from "@testing-library/react"
import { Middleware, SWRConfig, SWRResponse } from "swr"
import { PrefectureCheckboxes } from "src/components/PrefectureCheckboxes"
import { mockPrefectures } from "src/lib/mock"

describe("PrefectureCheckboxes", () => {
  it("全ての都道府県名とチェックボックスがレンダリングされているか", async () => {
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
        <PrefectureCheckboxes />
      </SWRConfig>
    )

    for (let i = 0; i < mockData.length; i++) {
      const { prefName } = mockData[i]
      const checkboxInput = screen.getByLabelText(prefName)

      expect(checkboxInput).toBeInTheDocument()
    }
  })
})
