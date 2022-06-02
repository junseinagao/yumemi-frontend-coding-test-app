import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import useSWR from "swr"

type PrefectureCheckboxes = Prefecture & { selected: boolean }
type PrefectureCheckboxesForm = { prefectures: PrefectureCheckboxes[] }

export const usePrefectureCheckboxes = () => {
  const { data } = useSWR<ResasAPIPrefecturesResponse>("/api/v1/prefectures")

  const prefectureChecboxes = useMemo(() => {
    if (typeof data === "object" && "result" in data) {
      return {
        prefectures: data.result.map((value) => {
          return { ...value, selected: false }
        }),
      }
    }
    return { prefectures: [] }
  }, [data])

  const {
    register,
    watch,
    formState: { isValid, isValidating },
  } = useForm<PrefectureCheckboxesForm>({
    mode: "onChange",
    defaultValues: prefectureChecboxes,
  })

  const formValues = watch()

  const validateIsLeastOneChecked = useMemo(() => {
    return (
      formValues.prefectures.length !== 0 &&
      formValues.prefectures.some(({ selected }) => selected)
    )
  }, [formValues])

  const useWatchCheckboxesOnChange = () =>
    useEffect(() => {
      if (isValid && !isValidating && validateIsLeastOneChecked) {
        // TODO Contextにフォームのデータを送る
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isValid, isValidating, formValues, validateIsLeastOneChecked])

  return {
    prefectureChecboxes,
    register,
    useWatchCheckboxesOnChange,
    validateIsLeastOneChecked,
  }
}
