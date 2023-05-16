import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../lib/client";

const initialState = {
  posts: [],
};
const softDate = (a, b) => {
  return new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf();
};
export const fetchData = createAsyncThunk("getData/posts", async () => {
  try {
    const response = client.fetch(`*[_type == "post"]{
      title,
      slug,
      content,
      publishedAt,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt,
      },
      "name": author -> name,
      "authorPicture": author -> image.asset -> url,
    }`);

    return response;
  } catch (error) {
    console.log(error);
  }
});

export const fetchDataSlice = createSlice({
  name: "getData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        // console.log(state);
        return state;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log(action.payload);
        const newPost = action.payload.sort(softDate);
        console.log(newPost.sort(softDate), "Sorted");

        state.posts = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        return state;
      });
  },
});

// export {} = fetchDataSlice.actions;
export default fetchDataSlice.reducer;
