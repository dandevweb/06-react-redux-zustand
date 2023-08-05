import { MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useEffect } from "react";
import { useStore, userCurrentLesson } from "../zustand-store";

export function Player() {
  const {course, load} = useStore(store => {
    return {
      course: store.course,
      load: store.load
    }
  })

  const {currentLesson} = userCurrentLesson()

  useEffect(() => {
    load()   
  }, [])

  useEffect(() => {
    if(currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">

        <div className="flex items-center justify-between">
          <Header />
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded bg-violet-500 hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden border rounded-lg shadow border-zinc-800 bg-zinc-900 pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="absolute top-0 bottom-0 right-0 overflow-y-scroll border-l divide-y-2 w-80 border-zinc-800 bg-zinc-900 scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-900 divide-zinc-900">
            {course?.modules && course?.modules.map((module, index) => {
               return (
                <Module
                key={module.id}
                moduleIndex={index}
                title={module.title}
                amountOfLessons={module.lessons.length}
              />
              )
            }) }
          </aside>
        </main>
      </div>
    </div>
  )
}