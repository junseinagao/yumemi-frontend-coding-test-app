export const getCategories = (
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

export const makeSeries = (
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

export const baseOptions: Highcharts.Options = {
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
