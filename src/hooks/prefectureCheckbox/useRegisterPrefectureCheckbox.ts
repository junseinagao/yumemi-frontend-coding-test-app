import { useMemo } from "react"
import { useFormContext } from "react-hook-form"
import useSWR from "swr"

export const useRegisterPrefectureCheckbox = () => {
  const { data } = useSWR<ResasAPIPrefecturesResponse>("/api/v1/prefectures")
  const { register, ...props } = useFormContext<PrefectureCheckboxesForm>()

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

  return {
    prefectureChecboxes,
    register,
    ...props,
  }
}
