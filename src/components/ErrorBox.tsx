import { ComponentType, FC, useCallback } from "react"
import { FallbackProps } from "react-error-boundary"

export const ErrorBox: ComponentType<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const handleOnClick = useCallback(() => {
    if (resetErrorBoundary !== undefined) {
      resetErrorBoundary()
    }
  }, [resetErrorBoundary])
  return (
    <div role="alert">
      <p>エラーが発生しました</p>
      <pre>{error.message}</pre>
      <button onClick={handleOnClick}>もう一度試す</button>
    </div>
  )
}
