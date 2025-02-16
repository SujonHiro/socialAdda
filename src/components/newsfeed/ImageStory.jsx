import { useEffect, useState } from "react";
import { actions } from "../../action";
import useAxios from "../../hook/useAxios";
import useStory from "../../hook/useStory";
import ImageModal from "../ImageModal";
import StoryRectangle from "../StoryRectangle";
import UploadStory from "./post/UploadStory";

function ImageStory() {
  const [selectedStories, setSelectedStories] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { state, dispatch } = useStory();

  useEffect(() => {
    const fetchStory = async () => {
      dispatch({ type: actions.story.STORY_FETCHING });
      try {
        const response = await useAxios.get("/stories");
        console.log("response", response.data.stories);
        if (response.status === 200) {
          dispatch({
            type: actions.story.STORY_FETCHED,
            payload: response.data.stories,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.story.STORY_FETCHED_ERROR,
          payload: error.message,
        });
      }
    };
    fetchStory();
  }, [dispatch]);

  return (
    <>
      {selectedStories && (
        <ImageModal
          stories={selectedStories}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClose={() => setSelectedStories(null)}
        />
      )}

      <div className="flex gap-2  mb-[-1rem]">
        <div className="relative flex shadow-none">
          <div className="border-2 border-dashed bg-[#202227] h-[150px] w-[120px] md:w-[140px] text-center border-gray-700 px-4 flex items-center justify-center shadow-none rounded-md">
            <UploadStory />
          </div>
        </div>
        <div className="flex  overflow-x-auto whitespace-nowrap gap-4 scroll-smooth hide-scrollbar rounded-lg">
          {Object.entries(state.stories).map(([userId, userStories]) => (
            <StoryRectangle
              key={userId}
              user={userStories[0].user}
              story={userStories[0].image}
              onClick={() => {
                setSelectedStories(userStories);
                setCurrentIndex(0);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageStory;
