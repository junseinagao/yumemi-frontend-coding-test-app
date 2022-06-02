import { render, renderHook, screen } from "@testing-library/react"
import { FormProvider } from "react-hook-form"
import { SelectInputSection } from "src/components/SelectInputSection"
import { usePrefectureCheckboxForm } from "src/hooks/prefectureCheckbox"
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

    const hook = renderHook(() => usePrefectureCheckboxForm())

    render(
      <SWRConfig value={{ use: [mockSWRMiddleware] }}>
        <FormProvider {...hook.result.current.methods}>
          <SelectInputSection />
        </FormProvider>
      </SWRConfig>
    )

    const sectionTitle = screen.getByText("都道府県")
    expect(sectionTitle).toBeInTheDocument()
  })
})
