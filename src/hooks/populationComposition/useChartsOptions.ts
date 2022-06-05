import { useMemo } from "react"
import { useSelectedPrefectureNames } from "../prefectureCheckbox"
import { useGetPopulationComposition } from "./usePopulationComposition"

const getCategories = (
  response: ResasAPIPopulationCompositionResponse | undefined
) => {
  if (!(typeof response === "object" && "result" in response)) return []

  let tempCategories: number[] = []
  response.result.data.forEach((data) => {
    if (data.label === "総人口") {
      tempCategories = data.data.map(({ year }) => year)
    }
  })
  return tempCategories
}

const makeSeries = (
  name: string,
  response: ResasAPIPopulationCompositionResponse
) => {
  if (!(typeof response === "object" && "result" in response)) return undefined
  const totalPopulationData = response.result.data.find(
    (value) => value.label === "総人口"
  )
  if (!totalPopulationData) return undefined
  return {
    type: "line",
    name,
    data: totalPopulationData.data.map(({ value }) => value),
  }
}

const baseOptions: Highcharts.Options = {
  title: {
    text: "",
  },
  yAxis: {
    title: {
      text: "人口数",
    },
  },
  xAxis: {
    title: {
      text: "年度",
    },
    categories: [],
  },
  series: [],
}

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
