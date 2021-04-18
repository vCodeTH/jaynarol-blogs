import { createMocks } from 'node-mocks-http'
import helloApi from "../../pages/api/hello"

describe("/api/hello handler", () => {

  test("http should be 200 + name john", async () => {
    const { req, res } = createMocks({
      method: 'GET'
    })

    await helloApi(req, res)
    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        name: 'John Doe',
      }),
    )
  })
})