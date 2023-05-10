import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "0biswao3",
  dataset: "production",
  apiVersion: "2023-05-04",
  //set to a day
  useCdn: true,
  //catching the request
});
