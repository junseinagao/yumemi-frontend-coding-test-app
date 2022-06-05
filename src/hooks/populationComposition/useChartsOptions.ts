import { useMemo } from "react"
import { baseOptions, getCategories, makeSeries } from "src/lib/chartOptions"
import { useSelectedPrefectureNames } from "../prefectureCheckbox"
import { useGetPopulationComposition } from "./usePopulationComposition"

export const useChartsOptions = () => {
  const names = useSelectedPrefectureNames()
  const { responses } = useGetPopulationComposition()

  const options = useMemo<Highcharts.Options>(() => {
    if (names.length === 0 || names.length !== responses.length)
      return baseOptions
    if (
      !responses.every(
        (response) => typeof response === "object" && "result" in response
      )
    ) {
      return baseOptions
    }
    const series = responses.map((response, index) => {
      return makeSeries(names[index], response)
    })

    if (!series) baseOptions

    const categoriesSample = responses.find(
      (response) => typeof response === "object" && "result" in response
    )
    const categories = getCategories(categoriesSample)

    return {
      ...baseOptions,
      xAxis: {
        ...baseOptions.zAxis,
        categories,
      },
      series,
    } as unknown as Highcharts.Options
  }, [names, responses])

  return {
    options,
  }
}
