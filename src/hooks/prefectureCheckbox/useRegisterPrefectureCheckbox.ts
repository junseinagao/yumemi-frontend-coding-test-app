import { useMemo } from "react"
import useSWR from "swr"
import { usePrefectureCheckboxFormContext } from "."

export const useRegisterPrefectureCheckbox = () => {
  const { data } = useSWR<ResasAPIPrefecturesResponse>("/api/v1/prefectures")
  const { register } = usePrefectureCheckboxFormContext()

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
  }
}
