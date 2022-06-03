import { useCallback, useEffect, useMemo, useState } from "react"
import { useSelectedPrefectureCodes } from "src/hooks/prefectureCheckbox/useSelectedPrefectureCodes"
import { cache } from "src/lib/cache"
export const useGetPopulationComposition = () => {
  const selectedPrefectureCodes = useSelectedPrefectureCodes()
  const [responses, setResponses] = useState<
    ResasAPIPopulationCompositionResponse[]
  >([])

  const fetchResponses = useCallback(async () => {
    if (selectedPrefectureCodes.length !== responses.length) {
      const tempResponses: ResasAPIPopulationCompositionResponse[] = []
      for (let i = 0; i < selectedPrefectureCodes.length; i++) {
        const tempResponse = (await cache.request(
          `/api/v1/population/composition/perYear?cityCode=-&prefCode=${selectedPrefectureCodes[i]}`
        )) as ResasAPIPopulationCompositionResponse
        tempResponses.push(tempResponse)
      }
      setResponses(tempResponses)
    }
  }, [selectedPrefectureCodes, responses])

  useEffect(() => {
    fetchResponses()
  }, [fetchResponses])

  return { responses }
}
