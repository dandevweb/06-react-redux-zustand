import { useAppSelector } from "../store"
import { userCurrentLesson } from "../store/slices/player"

export function Header() {
  const { currentModule, currentLesson } = userCurrentLesson()
  const isCourseLoading = useAppSelector(state => state.player.isLoading)

  if(isCourseLoading) {
    return (
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Carregando...</h1>
        <span className="text-sm text-zinc-400">Módulo "Carregando..."</span>
      </div>
    )
  }


  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
    </div>
  )
}