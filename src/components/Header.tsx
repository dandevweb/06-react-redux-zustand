import { useStore, userCurrentLesson } from "../zustand-store"

export function Header() {
  const { currentModule, currentLesson } = userCurrentLesson()
  const isLoading = useStore(store => store.isLoading)

  if(isLoading) {
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