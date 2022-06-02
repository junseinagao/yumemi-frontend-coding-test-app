import { useForm } from "react-hook-form"

export const usePrefectureCheckboxForm = () => {
  const methods = useForm<PrefectureCheckboxesForm>({
    mode: "onChange",
    defaultValues: { prefectures: [] },
  })

  return {
    methods,
  }
}
