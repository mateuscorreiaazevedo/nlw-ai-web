import { Separator, Textarea } from '@/components/ui'
import { FormPrompt } from '@/modules/prompts'
import { FormUpload } from '@/modules/uploads'

export default async function Home() {
  return (
    <>
      <article className="flex flex-1 flex-col gap-6 rounded-md border border-zinc-800 p-6">
        <section className="grid flex-1 grid-rows-2 gap-4">
          <Textarea
            placeholder="Inclua o prompt para IA..."
            className="resize-none"
          />
          <Textarea
            placeholder="Resultado gerado pela IA..."
            className="resize-none"
            readOnly
          />
        </section>
        <p className="text-xs text-zinc-400">
          Lembrete: você pode utilizar a variável{' '}
          <code className="text-violet-400">{'{transcription}'}</code> no seu prompt
          para adicionar o conteúdo do seu vídeo selecionado
        </p>
      </article>
      <aside className="w-80 space-y-6 rounded-md p-6">
        <FormUpload />
        <Separator />
        <FormPrompt />
      </aside>
    </>
  )
}
