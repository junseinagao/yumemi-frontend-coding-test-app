import { render, screen, renderHook, cleanup } from "@testing-library/react"
import { Middleware, SWRConfig, SWRResponse } from "swr"
import { PrefectureCheckboxes } from "src/components/PrefectureCheckboxes"
import { mockPrefectures } from "src/lib/mock"
import { FormProvider } from "react-hook-form"
import { usePrefectureCheckboxForm } from "src/hooks/prefectureCheckbox"

afterEach(cleanup)

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
    const hook = renderHook(() => usePrefectureCheckboxForm())

    render(
      <SWRConfig value={{ use: [mockSWRMiddleware] }}>
        <FormProvider {...hook.result.current.methods}>
          <PrefectureCheckboxes />
        </FormProvider>
      </SWRConfig>
    )

    for (let i = 0; i < mockData.length; i++) {
      const { prefName } = mockData[i]
      const checkboxInput = screen.getByLabelText(prefName)
      expect(checkboxInput).toBeInTheDocument()
    }
  })
})
