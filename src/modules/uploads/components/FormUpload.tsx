'use client'

import { Button, Separator, Textarea } from '@/components/ui'
import { FileVideo, Upload } from 'lucide-react'
import React from 'react'

const FormUpload = () => {
  return (
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
  )
}

export default FormUpload
