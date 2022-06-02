import { useMemo } from "react"
import { usePrefectureCheckboxFormContext } from "src/hooks/prefectureCheckbox"

export const useValidateIsLeastOneChecked = () => {
  const { watch } = usePrefectureCheckboxFormContext()
  const formValues = watch()
  return useMemo(() => {
    return (
      formValues.prefectures.length !== 0 &&
      formValues.prefectures.some(({ selected }) => selected)
    )
  }, [formValues])
}
