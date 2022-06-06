import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={`g-box-container ${styles.header}`}>
      <h1>
        <span className={"g-line-breaker"}>
          ゆめみ
          <wbr />
          コーディングテスト
          <wbr />
          試験
          <wbr />
          アプリ
        </span>
      </h1>
    </header>
  )
}
