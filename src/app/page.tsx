import {
  Button,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  Textarea
} from '@/components/ui'
import { FileVideo, Upload, Wand2 } from 'lucide-react'

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
        <form className="space-y-6">
          <label
            htmlFor="video"
            className="flex aspect-video w-full cursor-pointer items-center justify-center gap-2 rounded-md border
             border-dashed border-zinc-800 text-sm text-zinc-400 transition-colors hover:bg-zinc-900"
          >
            <FileVideo className="h-4 w-4" />
            Selecione um vídeo
          </label>
          <input type="file" id="video" accept="video/mp4" className="sr-only" />
          <Separator />
          <Textarea
            label="Prompt de transcrição"
            className="scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-thumb-rounded-full h-14 resize-none text-xs leading-relaxed"
            placeholder="Inclua palavras-chave mensionadas no video separadas por vírgula (,)"
          />
          <Button type="submit" size="sm" className="w-full font-semibold">
            Carregar vídeo <Upload className="h-4 w-4" />
          </Button>
        </form>
        <Separator />
        <form className="space-y-4">
          <div className="space-y-2">
            <Label>Prompt</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um prompt..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Título do YouTube</SelectItem>
                <SelectItem value="description">Descrição do YouTube</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Modelo</Label>
            <Select disabled defaultValue="gpt3.5">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt3.5">GPT 3.5-Turbo 16k</SelectItem>
              </SelectContent>
            </Select>
            <span className="block text-xs text-muted-foreground">
              Você poderá customizar essa opção em breve
            </span>
          </div>
          <Separator />
          <div className="space-y-4">
            <Label>Temperatura</Label>
            <Slider min={0} max={1} step={0.1} />
            <span className="block text-xs italic leading-relaxed text-muted-foreground">
              Valores mais altos tendem a deixar o resultado mais criativo e com
              possíveis erros
            </span>
          </div>
          <Separator />
          <Button type="submit" size="sm" className="w-full font-semibold">
            Executar
            <Wand2 className="h-4 w-4" />
          </Button>
        </form>
      </aside>
    </>
  )
}
