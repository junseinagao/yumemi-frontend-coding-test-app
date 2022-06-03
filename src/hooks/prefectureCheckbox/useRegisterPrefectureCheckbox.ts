import { useEffect, useMemo } from "react"
import useSWR from "swr"
import { usePrefectureCheckboxFormContext } from "."

export const useRegisterPrefectureCheckbox = () => {
  const { data } = useSWR<ResasAPIPrefecturesResponse>("/api/v1/prefectures")
  const { register, setValue } = usePrefectureCheckboxFormContext()

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

  useEffect(() => {
    prefectureChecboxes.prefectures.forEach((value, index) => {
      setValue(`prefectures.${index}`, value)
    })
  }, [prefectureChecboxes, setValue])

  return {
    prefectureChecboxes,
    register,
  }
}
