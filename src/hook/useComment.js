import { useContext } from "react";
import { CommentContext } from "../context";

export default function useComment() {
  return useContext(CommentContext);
}
