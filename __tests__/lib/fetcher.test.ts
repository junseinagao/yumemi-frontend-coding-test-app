import { Request as nodeRequest, Headers as nodeHeaders } from "node-fetch"

describe("fetcher", () => {
  beforeEach(jest.resetModules)

  it("process.env.NEXT_PUBLIC_RESAS_API_URI を未設定で fetcher.ts を読み込むとエラーが発生するか", async () => {
    await expect(import("src/lib/fetcher")).rejects.toThrow()
  })

  it('createRequest が "X-API-KEY" : "${NEXT_PUBLIC_RESAS_API_KEY}" と "Content-Type": "application/json" を持った headers を持つ Request を生成するか', async () => {
    const mockHeadersAppend = jest.fn()
    nodeHeaders.prototype.append = mockHeadersAppend

    // @ts-ignore
    global.Request = nodeRequest

    process.env.NEXT_PUBLIC_RESAS_API_KEY = "DUMMY_API_KEY"
    process.env.NEXT_PUBLIC_RESAS_API_URI = "https://dummy_api_uri"

    const { createRequest } = await import("src/lib/fetcher")
    createRequest("", undefined)

    expect(mockHeadersAppend).toHaveBeenCalledWith(
      "x-api-key",
      process.env.NEXT_PUBLIC_RESAS_API_KEY
    )
    expect(mockHeadersAppend).toHaveBeenCalledWith(
      "content-type",
      "application/json"
    )
  })

  it("process.env.NEXT_PUBLIC_RESAS_API_URI を設定して、createRequestがドメインを組み合わせたRequestInfoを生成するか", async () => {
    const mockHeadersAppend = jest.fn()
    nodeHeaders.prototype.append = mockHeadersAppend

    // @ts-ignore
    global.Request = nodeRequest

    process.env.NEXT_PUBLIC_RESAS_API_URI = "https://dummy_api_uri"

    const { createRequest } = await import("src/lib/fetcher")
    const request = createRequest("/DUMMY_API_ENDPOINT", undefined)
    expect(request.url).toBe("https://dummy_api_uri/DUMMY_API_ENDPOINT")
  })

  it("process.env.NEXT_PUBLIC_RESAS_API_URI が未設定の時、createRequestが相対パスのRequestInfoを生成するか", async () => {
    const mockHeadersAppend = jest.fn()
    nodeHeaders.prototype.append = mockHeadersAppend

    // @ts-ignore
    global.Request = nodeRequest
    process.env.NEXT_PUBLIC_RESAS_API_URI = undefined
    const { createRequest } = await import("src/lib/fetcher")
    const request = createRequest("/DUMMY_API_ENDPOINT", undefined)
    expect(request.url).toBe("/DUMMY_API_ENDPOINT")
  })
})
