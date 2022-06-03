import { useFormContext } from "react-hook-form"

export const usePrefectureCheckboxFormContext = () =>
  useFormContext<PrefectureCheckboxesForm>()
