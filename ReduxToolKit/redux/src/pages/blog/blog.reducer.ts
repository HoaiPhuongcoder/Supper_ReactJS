import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
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

// export const addPost = createAction("blog/addPost", function (post: Omit<Post, "id">) {
//   return {
//     payload: {
//       ...post,
//       id: nanoid
//     }
//   };
// });
// export const deletePost = createAction<string>("blog/deletePost");
// export const startEditingPost = createAction<string>("blog/startEditingPost");
// export const cancelEditingPost = createAction("blog/cancelEditingPost");
// export const finishEditingPost = createAction<Post>("blog/finishEditingPost");

// const blogReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addPost, (state, action) => {
//       const post = action.payload;
//       state.postList.push(post);
//     })
//     .addCase(deletePost, (state, action) => {
//       console.log("start", current(state));
//       const postId = action.payload;
//       const foundPostIndex = state.postList.findIndex((post) => post.id === postId);
//       if (foundPostIndex !== -1) {
//         state.postList.splice(foundPostIndex, 1);
//       }
//       console.log("finish", current(state));
//     })
//     .addCase(startEditingPost, (state, action) => {
//       const postId = action.payload;
//       const foundPost = state.postList.find((post) => post.id === postId) || null;
//       state.editingPost = foundPost;
//     })
//     .addCase(cancelEditingPost, (state) => {
//       state.editingPost = null;
//     })
//     .addCase(finishEditingPost, (state, action) => {
//       const postId = action.payload.id;
//       state.postList.some((post, index) => {
//         if (post.id === postId) {
//           state.postList[index] = action.payload;
//           return true;
//         }
//         return false;
//       });
//       state.editingPost = null;
//     })
//     .addMatcher(
//       (action) => action.type.includes("cancel"),
//       (state, action) => {
//         console.log(current(state), action);
//       }
//     );
// });

const blogReducer = createSlice({
  name: "blog",
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId);
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1);
      }
    },
    startEditingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      const foundPost = state.postList.find((post) => post.id === postId) || null;
      state.editingPost = foundPost;
    },
    cancelEditingPost: (state) => {
      state.editingPost = null;
    },
    finishEditingPost: (state, action: PayloadAction<Post>) => {
      const postId = action.payload.id;
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList[index] = action.payload;
          return true;
        }
        return false;
      });
      state.editingPost = null;
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        const post = action.payload;
        state.postList.push(post);
      },
      prepare: (post: Omit<Post, "id">) => ({
        payload: {
          ...post,
          id: nanoid()
        }
      })
    }
  }
});

export const { addPost, cancelEditingPost, deletePost, finishEditingPost, startEditingPost } = blogReducer.actions;

export default blogReducer.reducer;
