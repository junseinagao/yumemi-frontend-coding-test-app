import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { ChartGraph } from "./ChartGraph"
import { ErrorBox } from "./ErrorBox"

export const ChartGraphSection = () => {
  return (
    <section className="g-box-container">
      <ErrorBoundary FallbackComponent={ErrorBox}>
        <Suspense fallback={<div>読み込み中です。</div>}>
          <ChartGraph />
        </Suspense>
      </ErrorBoundary>
    </section>
  )
}
