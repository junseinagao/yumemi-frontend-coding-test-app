import { fetcher } from "src/lib/fetcher"

class Cache {
  private cache: Map<string, ResasAPIPopulationCompositionResponse>
  constructor() {
    this.cache = new Map<string, ResasAPIPopulationCompositionResponse>()
  }

  public addCacheResponse(
    key: string,
    response: ResasAPIPopulationCompositionResponse
  ) {
    this.cache.set(key, response)
  }

  public getCacheResponse(key: string) {
    return this.cache.get(key)
  }

  public async request(key: string) {
    const temp = this.getCacheResponse(key)
    if (temp && typeof temp === "object" && "results" in temp) {
      return this.getCacheResponse(key)
    }

    try {
      const data = (await fetcher(
        key,
        undefined
      )) as ResasAPIPopulationCompositionResponse
      if (data) {
        this.addCacheResponse(key, data)
      }
      return data
    } catch (error) {
      return error
    }
  }
}

export const cache = new Cache()
