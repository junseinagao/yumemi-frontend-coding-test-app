import { useMemo } from "react"
import { usePrefectureCheckboxFormContext } from "./usePrefectureCheckboxFormContext"

export const useSelectedPrefectureCodes = () => {
  const { watch } = usePrefectureCheckboxFormContext()
  const formValues = watch()
  return useMemo(() => {
    if (formValues && formValues.prefectures.length > 0)
      return formValues.prefectures
        .filter(({ selected }) => selected)
        .map(({ prefCode }) => prefCode)
    return []
  }, [formValues])
}
