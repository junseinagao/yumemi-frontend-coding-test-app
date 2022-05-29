import type { NextPage } from "next"
import { Header } from "src/components/Header"
import { SelectInputSection } from "src/components/SelectInputSection"
import { mockPrefectures } from "src/lib/mock"

const HomePage: NextPage = () => {
  const prefectures = mockPrefectures()
  return (
    <>
      <Header />
      <SelectInputSection prefectures={prefectures} />
    </>
  )
}

export default HomePage
