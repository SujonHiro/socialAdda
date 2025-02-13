import { createContext } from "react";

const AuthContext = createContext();
const PostContext = createContext();
const CommentContext = createContext();
const StoryContext = createContext();

export { AuthContext, CommentContext, PostContext, StoryContext };
