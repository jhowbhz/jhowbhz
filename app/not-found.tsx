import Link from "next/link"
import { Home, MessageCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Página não encontrada</h2>
          <p className="text-muted-foreground">A página que você está procurando não existe ou foi movida.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Voltar ao Início
          </Link>

          <Link
            href="/#contato"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Contato
          </Link>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Precisa de ajuda? Entre em contato conosco em{" "}
            <a href="mailto:contato@apibrasil.com.br" className="text-primary hover:underline">
              contato@apibrasil.com.br
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
