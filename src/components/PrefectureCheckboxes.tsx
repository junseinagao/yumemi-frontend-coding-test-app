import styles from "./PrefectureCheckboxes.module.css"
import {
  useRegisterPrefectureCheckbox,
  useValidateIsLeastOneChecked,
} from "src/hooks/prefectureCheckbox"

export const PrefectureCheckboxes = () => {
  const { register, prefectureChecboxes } = useRegisterPrefectureCheckbox()
  const validateIsLeastOneChecked = useValidateIsLeastOneChecked()

  return (
    <>
      <form className={styles["checkboxes"]}>
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
      <div
        className={`${styles["whole-validation-alert-space"]} ${
          !validateIsLeastOneChecked &&
          styles["whole-validation-alert-space--invalid"]
        }`}
      >
        {!validateIsLeastOneChecked && (
          <span role="alert" className="g-line-breaker">
            １つ以上の都道府県を
            <wbr />
            選択してください。
          </span>
        )}
      </div>
    </>
  )
}
