import Link from "next/link"
import { Github, Linkedin, Instagram, MapPin, Clock, Smartphone } from "lucide-react"
import Image from "next/image"
import ReclameAquiSeal from "./reclame-aqui-seal"
import ObfuscatedEmail from "./obfuscated-email"
import SocialShare from "./social-share"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/apibrasil", label: "GitHub", color: "hover:text-gray-400" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/apibrasil-oficial",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/apibrasil.oficial/",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
  ]

  const footerSections = [
    {
      title: "Produto",
      links: [
        { name: "Soluções", href: "#solucoes" },
        { name: "Preços", href: "#precos" },
        { name: "Documentação", href: "https://doc.apibrasil.io/", target: "_blank" },
        { name: "Status", href: "https://status.apibrasil.io/", target: "_blank" },
        { name: "Discussions", href: "https://github.com/orgs/APIBrasil/discussions/new", target: "_blank" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Carreiras", href: "https://www.linkedin.com/company/apibrasil-oficial", target: "_blank" },
        { name: "Blog", href: "https://apibrasil.blog", target: "_blank" },
        { name: "Contato", href: "#contato" },
        { name: "Comunidade", href: "https://chat.whatsapp.com/JO2bhnTwuKaIOi6xDO76Oo", target: "_blank" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Termos de Uso", href: "/termos-de-uso" },
        { name: "Política de Privacidade", href: "/politica-de-privacidade" },
        {
          name: "LGPD",
          href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
          target: "_blank",
        },
      ],
    },
  ]

  const contactInfo = [
    { icon: MapPin, text: "Belo Horizonte, MG - Brasil" },
    { icon: Clock, text: "Seg. à Sex. 09h as 18h" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border-t border-border/20 pt-20 pb-8 text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center group mb-6">
              <Image
                src="/logo-apibrasil.webp"
                alt="APIBrasil Logo"
                width={180}
                height={48}
                className="h-12 w-auto transition-all duration-300 group-hover:opacity-90"
              />
            </Link>

            <p className="text-base text-gray-400 leading-relaxed">
              Potencializando desenvolvedores com APIs robustas, confiáveis e fáceis de integrar. Transforme suas ideias
              em soluções inteligentes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3" id="contato">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm text-gray-400">
                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <ObfuscatedEmail email="contato@apibrasil.com.br" />
              </div>
            </div>

            {/* Google Play Badge */}
            <div className="pt-4">
              <Link
                href="https://play.google.com/store/apps/details?id=app.apibrasil.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl px-4 py-3 transition-all duration-300 hover:scale-105 group"
              >
                <Smartphone className="w-5 h-5 text-primary group-hover:text-primary/80" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Baixe nosso app</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Social Share */}
            <SocialShare className="pt-4" />
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6 relative">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {section.links.map((linkItem) => {
                  const linkName = linkItem.name
                  const linkHref = linkItem.href
                  const linkTarget = linkItem.target || "_self"
                  return (
                    <li key={linkName}>
                      <Link
                        href={linkHref}
                        target={linkTarget}
                        rel={linkTarget === "_blank" ? "noopener noreferrer" : undefined}
                        className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                      >
                        {linkName}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Company Details */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-gray-400 mb-2">
                &copy; {currentYear} APIBrasil. Todos os direitos reservados.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>APIBRASIL PROCESSAMENTO DE DADOS LTDA</p>
                <p>CNPJ: 44.959.669/0001-80 – Marca Reg. 930993071</p>
              </div>
            </div>

            {/* Reclame Aqui Seal */}
            <ReclameAquiSeal />
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-gray-800/50">
            <p className="text-xs text-gray-500 text-center leading-relaxed max-w-4xl mx-auto">
              APIBRASIL não é um produto oficialmente associado ao WhatsApp INC, Meta Platforms, Inc. ou qualquer uma de
              suas empresas afiliadas. Não possuímos relação comercial formal ou consentimento explícito para uso de
              suas marcas, seja de forma paga ou gratuita, além do que é permitido por políticas de uso justo ou termos
              de serviço aplicáveis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
