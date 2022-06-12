beforeAll(() => {
  jest.mock("src/lib/fetcher", () => ({
    cache: jest.fn(),
  }))
})

afterAll(jest.resetAllMocks)

describe("cache", () => {
  it("同一のkeyでリクエストを送ったときにキャッシュした結果が返されるか", async () => {
    process.env.NEXT_PUBLIC_RESAS_API_KEY = "DUMMY_API_KEY"
    process.env.NEXT_PUBLIC_RESAS_API_URI = "https://dummy_api_uri"
    const { cache } = await import("src/lib/cache")
    jest.spyOn(cache, "request")
    jest
      .spyOn(cache, "getCacheResponse")
      .mockImplementationOnce(() => undefined)
    jest.spyOn(cache, "getCacheResponse").mockImplementationOnce(() => ({
      message: null,
      result: {
        boundaryYear: 2000,
        data: [{ label: "総人口", data: { year: 1000, value: 0 } }],
      },
    }))
    cache.request("/dummy-endpoint")
    expect(cache.request).toBeCalledWith("/dummy-endpoint")
    cache.request("/dummy-endpoint")
    expect(cache.getCacheResponse).toBeCalledTimes(3)
  })
})
