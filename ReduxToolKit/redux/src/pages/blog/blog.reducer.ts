import { createAction, createReducer } from "@reduxjs/toolkit";
import type { Post } from "../../types/blog.type";
import { initialPostList } from "../../constants/blog";

interface BlogState {
  postList: Post[];
  editingPost: Post | null;
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
};

export const addPost = createAction<Post>("blog/addPost");
export const deletePost = createAction<string>("blog/deletePost");
export const startEditingPost = createAction<string>("blog/startEditingPost");
export const cancelEditingPost = createAction("blog/cancelEditingPost");

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload;
      state.postList.push(post);
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload;
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId);
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1);
      }
    })
    .addCase(startEditingPost, (state, action) => {
      const postId = action.payload;
      const foundPost = state.postList.find((post) => post.id === postId) || null;
      state.editingPost = foundPost;
    })
    .addCase(cancelEditingPost, (state) => {
      state.editingPost = null;
    });
});

export default blogReducer;
