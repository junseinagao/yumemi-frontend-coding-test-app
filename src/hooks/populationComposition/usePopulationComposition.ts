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
      const result = await Promise.all(
        selectedPrefectureCodes.map((prefCode) => {
          return cache.request(
            `/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`
          )
        }) as ResasAPIPopulationCompositionResponse[] | []
      )
      setResponses(result)
    }
  }, [selectedPrefectureCodes, responses])

  useEffect(() => {
    fetchResponses()
  }, [fetchResponses])

  return { responses }
}
