import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "./../APIs/CoursesAPI";

export const getAllCourses = createAsyncThunk(
  "courses/getAllCourses",
  async (payload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await getAll();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    allCourses: [],
    data: null,
    summary: null,
    review: null,
    isLoading: false,
    error: null,
    // queryString:'',
  },
  reducers: {},
  extraReducers: {
    [getAllCourses.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
     
    },
    [getAllCourses.fulfilled]: (state, action) => {
      const { data, summary, review } = action.payload;
      state.data = data;
      state.summary = summary;
      state.review = review;

      state.summary.forEach((element) => {
        state.allCourses.push(...element.items);
      });

      state.isLoading = false;
      state.error = null;

   
    },
    [getAllCourses.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action);
    },
  },
});

export const { setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
