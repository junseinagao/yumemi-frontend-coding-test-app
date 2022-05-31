const API_URI = process.env.NEXT_PUBLIC_RESAS_API_URI
  ? process.env.NEXT_PUBLIC_RESAS_API_URI
  : ""

if (process.env.NEXT_PUBLIC_RESAS_API_KEY === undefined) {
  throw new Error("No set NEXT_PUBLIC_RESAS_API_KEY.")
}

export const createRequest = (
  resource: RequestInfo,
  init: RequestInit | undefined
): Request => {
  const input =
    !!process.env.NEXT_PUBLIC_RESAS_API_URI &&
    process.env.NEXT_PUBLIC_RESAS_API_URI?.match(/https?:\/\//i)
      ? `${API_URI}${resource}`
      : resource

  const headers = new Headers({
    ...init?.headers,
    "content-type": "application/json",
  })

  if (
    process.env.NEXT_PUBLIC_RESAS_API_URI &&
    process.env.NEXT_PUBLIC_RESAS_API_KEY
  ) {
    headers.append("X-API-KEY", process.env.NEXT_PUBLIC_RESAS_API_KEY)
  }

  const request = new Request(input, { ...init, headers })

  if (process.env.NODE_ENV === "development") {
    console.log("[FETCH]", { request })
  }

  return request
}

export const fetcher = (resource: RequestInfo, init: RequestInit | undefined) =>
  fetch(createRequest(resource, init))
    .then((response) => {
      if (process.env.NODE_ENV === "development") {
        console.log("[FETCH RESPONSE]", { response })
      }
      return response.json()
    })
    .catch((error) => {
      if (process.env.NODE_ENV === "development") {
        console.error("[FETCH ERROR]", { error })
      }
      throw error
    })
