import type { NextPage } from "next"
import { FormProvider } from "react-hook-form"
import { ChartGraphSection } from "src/components/ChartGraphSection"
import { Header } from "src/components/Header"
import { SelectInputSection } from "src/components/SelectInputSection"
import { usePrefectureCheckboxForm } from "src/hooks/prefectureCheckbox"
import { mockHighchartsOptions } from "src/lib/mock"

const HomePage: NextPage = () => {
  const options = mockHighchartsOptions()
  const { methods } = usePrefectureCheckboxForm()

  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <SelectInputSection />
        <ChartGraphSection options={options} />
      </FormProvider>
    </>
  )
}

export default HomePage
