import {
  useRegisterPrefectureCheckbox,
  useValidateIsLeastOneChecked,
} from "src/hooks/prefectureCheckbox"

export const PrefectureCheckboxes = () => {
  const { register, prefectureChecboxes, watch } =
    useRegisterPrefectureCheckbox()
  const validateIsLeastOneChecked = useValidateIsLeastOneChecked(watch)

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
