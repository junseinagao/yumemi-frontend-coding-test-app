import { Request as nodeRequest, Headers as nodeHeaders } from "node-fetch"

// @ts-ignore
describe("fetcher", () => {
  it("process.env.NEXT_PUBLIC_RESAS_API_URI を未設定で fetcher.ts を読み込むとエラーが発生するか", async () => {
    await expect(import("src/lib/fetcher")).rejects.toThrow()
  })

  it('createRequest が "X-API-KEY" : "${NEXT_PUBLIC_RESAS_API_KEY}" と "Content-Type": "application/json" を持った headers を持つ Request を生成するか', async () => {
    const mockHeadersAppend = jest.fn()
    nodeHeaders.prototype.append = mockHeadersAppend

    // @ts-ignore
    global.Request = nodeRequest

    process.env.NEXT_PUBLIC_RESAS_API_KEY = "DUMMY_API_KEY"
    process.env.NEXT_PUBLIC_RESAS_API_URI = "DUMMY_API_URI"

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
})
