"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Menu, X, ChevronRight } from "lucide-react"
import OptimizedImage from "./optimized-image"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navigationItems = [
  {
    name: "Soluções",
    href: "#solucoes",
    description: "APIs e integrações disponíveis",
  },
  {
    name: "Preços",
    href: "#precos",
    description: "Planos e valores",
  },
  {
    name: "Documentação",
    href: "https://doc.apibrasil.io/",
    target: "_blank",
    description: "Guias e exemplos",
    external: true,
  },
  {
    name: "Contato",
    href: "#contato",
    description: "Fale conosco",
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        className={cn(
          "header-critical fixed top-0 w-full z-50 transition-all duration-300 ease-out",
          isScrolled || isMenuOpen
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group z-50 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
              onClick={closeMenu}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <OptimizedImage
                  src="/logo-apibrasil.webp"
                  alt="APIBrasil"
                  width={160}
                  height={43}
                  priority={true}
                  className="logo-critical transition-opacity duration-200 group-hover:opacity-90 pt-2"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    href={item.href}
                    target={item.target || "_self"}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      "text-muted-foreground hover:text-foreground",
                      "hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "group flex items-center gap-1",
                    )}
                  >
                    <span>{item.name}</span>
                    {item.external && (
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-80 transition-opacity" />
                    )}

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-200 group-hover:w-6" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <motion.div
              className="hidden lg:flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200 font-medium h-9 px-4"
                asChild
              >
                <Link href="https://app.apibrasil.io/" target="_blank" rel="noopener noreferrer">
                  Entrar
                </Link>
              </Button>
              <Button
                size="sm"
                className="btn-critical h-9 px-6 font-medium shadow-sm hover:shadow-md transition-all duration-200"
                asChild
              >
                <Link href="https://app.apibrasil.io/auth/register" target="_blank" rel="noopener noreferrer">
                  Cadastre-se
                </Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "lg:hidden relative z-50 p-2 rounded-lg transition-all duration-200",
                "text-foreground hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50",
                "active:scale-95",
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-background/98 backdrop-blur-xl border-l border-border/50 shadow-2xl z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/30">
                  <Link href="/" onClick={closeMenu}>
                    <OptimizedImage
                      src="/logo-apibrasil.webp"
                      alt="APIBrasil"
                      width={140}
                      height={37}
                      className="h-7 w-auto"
                    />
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    aria-label="Fechar menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        <Link
                          href={item.href}
                          target={item.target || "_self"}
                          rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                          className={cn(
                            "group flex items-center justify-between p-4 rounded-xl transition-all duration-200",
                            "text-foreground hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/50",
                            "border border-transparent hover:border-primary/20",
                          )}
                          onClick={closeMenu}
                        >
                          <div className="flex flex-col">
                            <span className="font-medium flex items-center gap-2">
                              {item.name}
                              {item.external && <ExternalLink className="w-4 h-4 opacity-60" />}
                            </span>
                            <span className="text-sm text-muted-foreground mt-1">{item.description}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA Section */}
                <motion.div
                  className="p-6 border-t border-border/30 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-center h-12 font-medium border-border hover:bg-secondary/50"
                    asChild
                  >
                    <Link
                      href="https://app.apibrasil.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      Entrar na Plataforma
                    </Link>
                  </Button>
                  <Button size="lg" className="btn-critical w-full justify-center h-12 font-medium shadow-sm" asChild>
                    <Link
                      href="https://app.apibrasil.io/auth/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      Começar
                    </Link>
                  </Button>

                  {/* Quick Info */}
                  <div className="text-center pt-4">
                    <p className="text-xs text-muted-foreground">Mais de 120 APIs • Suporte 24/7 • Sem fidelidade</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
