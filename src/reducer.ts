import { combineReducers } from "redux";
import postsReducer from "./features/posts/posts.slice";
import settingsReducer from "./features/settings/settings.slice";

const reducer = combineReducers({
  posts: postsReducer,
  settings: settingsReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
