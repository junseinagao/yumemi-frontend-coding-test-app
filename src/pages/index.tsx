import type { NextPage } from "next"
import { ChartGraphSection } from "src/components/ChartGraphSection"
import { Header } from "src/components/Header"
import { SelectInputSection } from "src/components/SelectInputSection"
import { mockHighchartsOptions } from "src/lib/mock"

const HomePage: NextPage = () => {
  const options = mockHighchartsOptions()

  return (
    <>
      <Header />
      <SelectInputSection />
      <ChartGraphSection options={options} />
    </>
  )
}

export default HomePage
