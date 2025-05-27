import { createReducer } from "@reduxjs/toolkit";
import type { Post } from "../../types/blog.type";
import { initialPostList } from "../../constants/blog";

interface BlogState {
  postList: Post[];
}

const initialState: BlogState = {
  postList: initialPostList
};

const blogReducer = createReducer(initialState, (builder) => {
  console.log(builder);
});

export default blogReducer;
