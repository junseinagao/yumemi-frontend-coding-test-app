import { useCallback, useEffect } from "react"
import useSWRInfinite from "swr/infinite"
import { useSelectedPrefectureCodes } from "src/hooks/prefectureCheckbox/useSelectedPrefectureCodes"

export const useGetPopulationComposition = () => {
  const selectedPrefectureCodes = useSelectedPrefectureCodes()
  const getKey = useCallback(
    (index: number, _prevData: ResasAPIPopulationCompositionResponse) => {
      console.log({ selectedPrefectureCodes, index })
      if (selectedPrefectureCodes[index] === undefined) return null
      return `/api/v1/population/composition/perYear?cityCode=-&prefCode=${selectedPrefectureCodes[index]}`
    },
    [selectedPrefectureCodes]
  )
  const methods = useSWRInfinite<ResasAPIPopulationCompositionResponse>(getKey)

  const { setSize } = methods
  useEffect(() => {
    if (selectedPrefectureCodes.length > 0) {
      // ! setSize をここで実行すると無限ループに陥る
    }
  }, [setSize, selectedPrefectureCodes])

  return {
    methods,
  }
}
