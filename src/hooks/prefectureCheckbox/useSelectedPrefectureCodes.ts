import { useMemo } from "react"
import { UseFormWatch } from "react-hook-form"
import { usePrefectureCheckboxFormContext } from "./usePrefectureCheckboxFormContext"

export const useSelectedPrefectureCodes = () => {
  const { watch } = usePrefectureCheckboxFormContext()
  const formValues = watch()
  return useMemo(() => {
    if (formValues !== null && formValues.prefectures.length > 0)
      return formValues.prefectures
        .filter(({ selected }) => selected)
        .map(({ prefCode }) => prefCode)
    return []
  }, [formValues])
}
