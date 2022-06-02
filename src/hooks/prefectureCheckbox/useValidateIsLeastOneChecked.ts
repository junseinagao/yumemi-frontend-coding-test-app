import { useMemo } from "react"
import { UseFormWatch } from "react-hook-form"

export const useValidateIsLeastOneChecked = (
  watch: UseFormWatch<PrefectureCheckboxesForm>
) => {
  const formValues = watch()
  return useMemo(() => {
    return (
      formValues.prefectures.length !== 0 &&
      formValues.prefectures.some(({ selected }) => selected)
    )
  }, [formValues])
}
