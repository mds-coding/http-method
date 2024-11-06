import { HttpMethod } from "./index.js";

test("`HttpMethod` can be used", () => {
  const getMethod: HttpMethod = "GET";
  const postMethod: HttpMethod = "POST";
  const putMethod: HttpMethod = "PUT";
  const patchMethod: HttpMethod = "PATCH";
  const deleteMethod: HttpMethod = "DELETE";
  const optionMethod: HttpMethod = "OPTION";

  expect(getMethod).toBeDefined();
  expect(postMethod).toBeDefined();
  expect(putMethod).toBeDefined();
  expect(patchMethod).toBeDefined();
  expect(deleteMethod).toBeDefined();
  expect(optionMethod).toBeDefined();
})
