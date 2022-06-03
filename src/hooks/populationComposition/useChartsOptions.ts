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

export const useChartsOptions = () => {
  const names = useSelectedPrefectureNames()
  const { responses } = useGetPopulationComposition()

  // @ts-ignore
  const options = useMemo<Highcharts.Options | undefined>(() => {
    if (names.length === 0 || names.length !== responses.length)
      return undefined
    if (
      !responses.every(
        (response) => typeof response === "object" && "result" in response
      )
    ) {
      return undefined
    }
    const categoriesSample = responses.find(
      (response) => typeof response === "object" && "result" in response
    )
    return {
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
        categories: getCategories(categoriesSample),
      },
      series: responses.map((response, index) => {
        return makeSeries(names[index], response)
      }),
    }
  }, [names, responses])

  return {
    options,
  }
}
