"use client"

import { useState, useTransition } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Send } from "lucide-react"
import { submitDpoContactForm } from "@/app/politica-de-privacidade/actions"

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  subject: z.string().min(5, { message: "O assunto deve ter pelo menos 5 caracteres." }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." })
    .max(1000, { message: "A mensagem não pode exceder 1000 caracteres." }),
})

type FormData = z.infer<typeof formSchema>

interface FormState {
  success: boolean
  message: string | null
}

export default function DpoContactForm() {
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<FormState | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    startTransition(async () => {
      const result = await submitDpoContactForm(data)
      setFormState(result)
      if (result.success) {
        reset()
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-muted-foreground">
          Nome Completo
        </Label>
        <Input
          id="name"
          type="text"
          {...register("name")}
          className="mt-1 bg-background/70 border-border focus:ring-primary"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="text-muted-foreground">
          Seu Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 bg-background/70 border-border focus:ring-primary"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="subject" className="text-muted-foreground">
          Assunto
        </Label>
        <Input
          id="subject"
          type="text"
          {...register("subject")}
          className="mt-1 bg-background/70 border-border focus:ring-primary"
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
      </div>

      <div>
        <Label htmlFor="message" className="text-muted-foreground">
          Sua Mensagem
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          rows={5}
          className="mt-1 bg-background/70 border-border focus:ring-primary"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md button-glow-effect-primary"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Enviar Mensagem
          </>
        )}
      </Button>

      {formState && (
        <p className={`mt-4 text-sm ${formState.success ? "text-green-500" : "text-red-500"}`}>{formState.message}</p>
      )}
    </form>
  )
}
