import { usePrefectureCheckboxes } from "src/hooks/usePrefectureCheckboxes"
export const PrefectureCheckboxes = () => {
  const {
    prefectureChecboxes,
    register,
    useWatchCheckboxesOnChange,
    validateIsLeastOneChecked,
  } = usePrefectureCheckboxes()
  useWatchCheckboxesOnChange()

  return (
    <>
      <form>
        {!validateIsLeastOneChecked && (
          <div role="alert">１つ以上の都道府県を選択してください。</div>
        )}
        {prefectureChecboxes.prefectures.map(
          ({ prefCode, prefName }, index) => {
            const key = `checkbox-prefcode-${prefCode}`
            return (
              <label key={key}>
                <input
                  type="checkbox"
                  {...register(`prefectures.${index}.selected`)}
                />
                {prefName}
              </label>
            )
          }
        )}
      </form>
    </>
  )
}
