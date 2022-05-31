import { Checkbox } from "src/components/Checkbox"
import useSWR from "swr"

export const PrefectureCheckboxes = () => {
  const { data: prefectures } = useSWR("/api/v1/prefectures")
  return (
    <>
      {prefectures.result.map(
        (pref: { prefCode: string; prefName: string }) => {
          return (
            <Checkbox
              key={pref.prefCode}
              id={pref.prefCode}
              name={pref.prefName}
            />
          )
        }
      )}
    </>
  )
}
