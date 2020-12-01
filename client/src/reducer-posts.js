export const Posts = {
    fetchPosts: 'FETCH_POSTS',
    fetchPostsSuccess: 'FETCH_POSTS_SUCCESS',
    fetchPostsError: 'FETCH_POSTS_ERROR'
  }

const initialState = {}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Posts.fetchPosts:
      // here we catch our payload data and pass it into the state of the store
      return {...state, action.payload}
    default:
      return state
  }
}