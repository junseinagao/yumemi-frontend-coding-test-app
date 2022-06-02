import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { ChartGraph } from "./ChartGraph"
import { ErrorBox } from "./ErrorBox"

export const ChartGraphSection = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorBox}>
        <Suspense fallback={<div>loading...</div>}>
          <ChartGraph />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
