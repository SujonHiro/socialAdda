import { useContext } from "react";
import { StoryContext } from "../context";

export default function useStory() {
  return useContext(StoryContext);
}
