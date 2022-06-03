import Highcharts from "highcharts"
import HighchartsExporting from "highcharts/modules/exporting"
import HighchartsReact from "highcharts-react-official"
import { useChartsOptions } from "src/hooks/populationComposition"

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts)
}

export const ChartGraph = () => {
  const { options } = useChartsOptions()

  return (
    <>
      {options !== undefined ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <div role="alert">
          都道府県を選択してください。または、ローディング中です。
        </div>
      )}
    </>
  )
}
