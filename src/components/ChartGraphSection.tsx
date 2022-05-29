import { FC } from "react"
import Highcharts from "highcharts"
import HighchartsExporting from "highcharts/modules/exporting"
import HighchartsReact from "highcharts-react-official"

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts)
}

type ChartGraphSectionProps = {
  options: Highcharts.Options
}

export const ChartGraphSection: FC<ChartGraphSectionProps> = ({ options }) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />
}
