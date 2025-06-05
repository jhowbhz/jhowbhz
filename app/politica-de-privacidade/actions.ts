"use server"

import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10).max(1000),
})

type FormData = z.infer<typeof formSchema>

export async function submitDpoContactForm(data: FormData): Promise<{ success: boolean; message: string | null }> {
  // Validate data on the server side as well
  const validationResult = formSchema.safeParse(data)
  if (!validationResult.success) {
    return { success: false, message: "Dados inválidos. Por favor, verifique o formulário." }
  }

  const { name, email, subject, message } = validationResult.data

  console.log("Nova mensagem para o DPO recebida:")
  console.log("Nome:", name)
  console.log("Email:", email)
  console.log("Assunto:", subject)
  console.log("Mensagem:", message)

  // Simulate sending an email or saving to a database
  await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network delay

  // In a real application, you would integrate with an email service (e.g., Resend, SendGrid)
  // or save the message to a database and notify the DPO.

  // For now, we'll just return a success message.
  return {
    success: true,
    message: `Obrigado, ${name}! Sua mensagem sobre "${subject}" foi enviada com sucesso. Nosso DPO entrará em contato em breve.`,
  }
}
