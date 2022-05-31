import { FC, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { PrefectureCheckboxes } from "src/components/PrefectureCheckboxes"
import { ErrorBox } from "./ErrorBox"
export const SelectInputSection: FC = () => {
  return (
    <>
      <section>
        <h2>都道府県</h2>
        <div>
          <ErrorBoundary FallbackComponent={ErrorBox}>
            <Suspense fallback={<div>loading...</div>}>
              <PrefectureCheckboxes />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>
    </>
  )
}
