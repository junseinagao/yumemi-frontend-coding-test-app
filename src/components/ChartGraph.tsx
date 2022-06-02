import Highcharts from "highcharts"
import HighchartsExporting from "highcharts/modules/exporting"
import HighchartsReact from "highcharts-react-official"
import { mockHighchartsOptions } from "src/lib/mock"

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts)
}

export const ChartGraph = () => {
  const options = mockHighchartsOptions()

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
