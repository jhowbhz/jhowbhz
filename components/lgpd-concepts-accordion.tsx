"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const concepts = [
  {
    id: "lgpd",
    question: "O que é LGPD?",
    answer: [
      "LGPD é a Lei nº 13.709/18 – Lei Geral de Proteção de Dados (LGPD), impôs regras sobre o tratamento de dados pessoais e que tem como finalidade proteger o direito à liberdade, privacidade e livre desenvolvimento dos cidadãos.",
      "A Lei não diz respeito apenas às informações mantidas em sistemas online, mas sua criação foi motivada pela complexidade que o tema gestão de dados ganhou na economia digital.",
      "Entre esses dados estão os dados pessoais, que, segundo a LGPD, são quaisquer informações relacionadas à pessoa natural identificada ou identificável.",
      "As regras da LGPD valem tanto para pessoas físicas quanto jurídicas (públicas e privadas), mas ela serve principalmente para que empresas e órgãos públicos sejam mais transparentes e responsáveis no manejo de dados alheios.",
    ],
  },
  {
    id: "dados-pessoais",
    question: "O que são dados pessoais?",
    answer: [
      "São os dados que identificam ou tornam as pessoas identificáveis. Se uma informação permite identificar, direta ou indiretamente, um indivíduo que esteja vivo, então ela é considerada um dado pessoal: nome, RG, CPF, gênero, data e local de nascimento, telefone, endereço residencial, localização via GPS, retrato em fotografia, prontuário de saúde, cartão bancário, renda, histórico de pagamentos, hábitos de consumo, preferências de lazer; endereço de IP (Protocolo da Internet) e cookies, entre outros.",
    ],
  },
  {
    id: "direito-anonimizacao",
    question: "Direito de anonimização, bloqueio ou eliminação de dados",
    answer: [
      "Você pode solicitar a anonimização, o bloqueio ou a eliminação de dados pessoais sobre você que sejam desnecessários, excessivos ou tratados em desconformidade com a LGPD*.",
    ],
  },
  {
    id: "dados-sensiveis",
    question: "O que são dados pessoais sensíveis?",
    answer: [
      "São aqueles dados que podem causar discriminação a uma pessoa, por isso merecem maior proteção. De acordo com a Lei, dados sensíveis são aqueles envolvem: Origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.",
    ],
  },
  {
    id: "tratamento-dados",
    question: "O que é tratamento de dados pessoais?",
    answer: [
      "Toda operação realizada com dados pessoais, como as que se referem à coleta, à produção, à recepção, à classificação, à utilização, ao acesso, à reprodução, à transmissão, à distribuição, ao processamento, ao arquivamento, ao armazenamento, à eliminação, à avaliação ou ao controle da informação, modificação, comunicação, transferência, difusão ou extração.",
    ],
  },
  {
    id: "titular-dados",
    question: "Quem é o titular dos dados?",
    answer: [
      "O titular é a pessoa física a quem se referem os dados pessoais. É o dono da informação que somente a ele diz respeito.",
    ],
  },
  {
    id: "anonimizacao",
    question: "O que é anonimização?",
    answer: [
      "A Anonimização é um método de preservação de informações privadas ou confidenciais por meio da exclusão ou codificação de identificadores que vinculam indivíduos aos dados armazenados. Sua finalidade é garantir a privacidade de uma pessoa ou empresa, preservando a credibilidade dos dados coletados e eventualmente repassados.",
      "<strong>Para que um dado seja anonimizado, faz-se necessário a utilização de meios técnicos irreversíveis</strong>.",
    ],
  },
  {
    id: "operador-controlador",
    question: "Quem é o operador e o controlador?",
    answer: [
      "<strong>CONTROLADOR</strong> é uma entidade jurídica que determina as regras gerais, finalidades e os meios para o tratamento de dados pessoais do Titular dos Dados, podendo este tratamento ser realizado diretamente pelo CONTROLADOR ou por terceiros.",
      "<strong>OPERADOR</strong> é qualquer pessoa física ou jurídica, autoridade pública, agência ou outro órgão que trata dados pessoais em nome de um CONTROLADOR.",
    ],
  },
  {
    id: "fiscaliza-lgpd",
    question: "Quem fiscaliza a LGPD?",
    answer: [
      "A fiscalização e a regulação da LGPD ficarão a cargo da Autoridade Nacional de Proteção de Dados Pessoais (ANPD).",
      "O Ministérios Público, o PROCON, SEDECON, Poder Judiciário e demais órgãos de controle também podem fiscalizar o cumprimento da LGPD.",
    ],
  },
]

export default function LgpdConceptsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {concepts.map((concept) => (
        <AccordionItem value={concept.id} key={concept.id} className="border-border/70">
          <AccordionTrigger className="text-left hover:no-underline text-base sm:text-lg font-medium text-foreground/90 py-4">
            {concept.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-3 pb-4">
            {concept.answer.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
