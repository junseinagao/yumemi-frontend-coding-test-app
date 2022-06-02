type Prefecture = {
  prefCode: number
  prefName: string
}

type Prefectures = Prefecture[]

type PrefecturesResponse = {
  message: null
  result: Prefectures
}

type Population = {
  year: number
  value: number
}

type OtherRatedPopulation = Population & {
  rate: number
}

type TotalPopulationData = {
  label: "総人口"
  data: Population[]
}

type OtherRatedPopulationData = {
  label: "年少人口" | "生産年齢人口" | "老年人口"
  data: OtherRatedPopulation[]
}

type PopulationCompositionResponse = {
  message: null
  result: {
    boundaryYear: number
    data: TotalPopulationData[] & OtherRatedPopulationData[]
  }
}

type BadRequest404Response = "400"

type Forbidden403Response = {
  statusCode: "403"
  message: "Forbidden."
  description: ""
}

type NotFound404Response =
  | {
      statusCode: "404"
      message: "404. That's an error."
      description: "The requested URL /404 was not found on this server."
    }
  | "404"

type TooManyRequests429Response = {
  message: null
}

type ResasAPIPrefecturesResponse =
  | PrefecturesResponse
  | BadRequest404Response
  | NotFound404Response
  | TooManyRequests429Response

type ResasAPIPopulationCompositionResponse =
  | PopulationCompositionResponse
  | BadRequest404Response
  | NotFound404Response
  | TooManyRequests429Response
