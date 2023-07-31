import ReactPlayer from "react-player";
import { next, userCurrentLesson } from "../store/slices/player";
import { useAppDispatch, useAppSelector } from "../store";
import { Loader } from "lucide-react";

export function Video() {
  const dispatch = useAppDispatch()
  const { currentLesson } = userCurrentLesson()
  const isCourseLoading = useAppSelector(state => state.player.isLoading)

  function handlePlayNext() {
    dispatch(next())
  }
  
  return (
    <div className="w-full bg-zinc-950 aspect-video">
     {isCourseLoading ? (
        <div className="flex items-center justify-center h-full">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin"/>
        </div>
     ): (
      <ReactPlayer
      width={'100%'}
      height={'100%'}
      controls
      playing
      onEnded={handlePlayNext}
      url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
    />
     )  
    }
    </div>
  )
}