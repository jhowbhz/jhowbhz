import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import DpoContactForm from "@/components/dpo-contact-form"
import LgpdConceptsAccordion from "@/components/lgpd-concepts-accordion" // Import the new accordion component

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="dark-theme-bg min-h-screen flex flex-col">
      <Header />
      <main className="policy-page-wrapper">
        <div className="policy-container">
          <div className="policy-content">
            <h1>Políticas de Privacidade</h1>
            <p className="policy-last-updated">
              Essa é a política de privacidade para utilização da plataforma e serviços derivados.
              <br />
              Última atualização: {new Date("2025-06-05").toLocaleDateString("pt-BR")}
            </p>

            <p>
              Para quaisquer dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais
              pela APIBRASIL, bem como para o exercício dos direitos dos titulares, você pode entrar em contato através
              dos seguintes canais:
            </p>

            <div className="my-6 p-6 bg-card-foreground/5 border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-2">CANAL DE COMUNICAÇÃO E ENCARREGADO DE DADOS</h3>
              <p className="text-muted-foreground">
                <strong>PRIVACY POINT</strong> - CNPJ: 44.649.485/0001-14
                <br />
                Site:{" "}
                <Link href="https://privacypoint.com.br" target="_blank" rel="noopener noreferrer">
                  https://privacypoint.com.br
                </Link>
                <br />
                E-mail: <Link href="mailto:dpo@privacypoint.com.br">dpo@privacypoint.com.br</Link>
              </p>
            </div>

            <h2>1. Objetivo</h2>
            <p>
              O objetivo desta Política é descrever as medidas implementadas pela APIBRASIL para garantir a proteção
              adequada dos dados pessoais que trata. Ela visa explicar, de maneira clara, como as informações e dados
              pessoais de colaboradores (onde aplicável externamente, como em contratos de serviço), clientes,
              parceiros, fornecedores e prestadores de serviço são coletados, usados, compartilhados, armazenados e/ou
              eliminados. A Política busca assegurar que o tratamento de dados pessoais esteja em conformidade com a Lei
              nº 13.709/2018 – Lei Geral de Proteção de Dados (LGPD). Além disso, visa guiar o comportamento de todos
              que se relacionam externamente com a APIBRASIL em relação ao tratamento de dados, garantindo a segurança e
              privacidade dos dados e assegurando que não serão utilizados de forma indevida, vendidos ou compartilhados
              com terceiros, sendo usados apenas para a oferta dos serviços da APIBRASIL.
            </p>
            <p>
              A APIBRASIL SITES E SOFTWARES LTDA realiza exclusivamente o compartilhamento de dados públicos obtidos de
              sites governamentais. Esses dados são acessíveis a qualquer cidadão e seguem os princípios de
              transparência e legalidade, conforme estabelecido pela legislação brasileira.
            </p>
            <p>
              A APIBRASIL não coleta, armazena ou compartilha dados privados ou confidenciais, garantindo que todas as
              informações disponibilizadas sejam provenientes de bases de dados oficiais, como portais do governo,
              órgãos reguladores e fontes públicas verificadas.
            </p>

            <h2>2. Abrangência</h2>
            <p>
              Esta Política de Privacidade se destina a todos os clientes, parceiros, fornecedores, prestadores de
              serviço e usuários que interagem com a APIBRASIL, por meio de seus sites, softwares e serviços. Ela
              abrange todo o âmbito de relacionamento externo da APIBRASIL que envolva tratamento de dados pessoais. Ao
              concordar com esta Política, o indivíduo declara familiaridade com as disposições da LGPD.
            </p>

            <h2>3. Definições Importantes</h2>
            <p>
              Para facilitar a compreensão desta Política, utilizamos os seguintes termos com os significados definidos
              na LGPD:
            </p>
            <ul>
              <li>
                <strong>Dados:</strong> Elementos brutos sem significado próprio, mas que podem ser processados e
                transformados em informação.
              </li>
              <li>
                <strong>Informação:</strong> Conjunto de dados organizados e interpretados que adquirem significado e
                valor.
              </li>
              <li>
                <strong>Dado Pessoal:</strong> Informação relacionada a pessoa natural identificada ou identificável.
              </li>
              <li>
                <strong>Dado Pessoal Sensível:</strong> Dado pessoal sobre origem racial ou étnica, convicção religiosa,
                opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político,
                dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa
                natural.
              </li>
              <li>
                <strong>Titular dos Dados:</strong> Pessoa natural a quem se referem os dados pessoais.
              </li>
              <li>
                <strong>Tratamento de Dados Pessoais:</strong> Toda operação realizada com dados pessoais, como as que
                se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão,
                distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da
                informação, modificação, comunicação, transferência, difusão ou extração.
              </li>
              <li>
                <strong>Controlador:</strong> É a pessoa natural ou jurídica, de direito público ou privado, a quem
                competem as decisões referentes ao tratamento de dados pessoais.
              </li>
              <li>
                <strong>Controlador Conjunto:</strong> Quando há dois ou mais responsáveis pelo tratamento de dados que
                determinam conjuntamente as finalidades e os meios desse tratamento.
              </li>
              <li>
                <strong>Operador:</strong> É a pessoa natural ou jurídica, de direito público ou privado, que realiza o
                tratamento de dados pessoais em nome do controlado.
              </li>
              <li>
                <strong>Segurança da Informação:</strong> Conjunto de medidas e práticas para proteger as informações de
                ameaças internas e externas, garantindo confidencialidade, integridade, disponibilidade e autenticidade.
                Aplica-se a todos os aspectos de proteção de informações e dados, não se restringindo a sistemas
                computacionais.
              </li>
              <li>
                <strong>Política de Segurança:</strong> Diretrizes gerais para governar a segurança da informação em uma
                organização.
              </li>
              <li>
                <strong>Princípio da Necessidade:</strong> Limitação do tratamento de dados ao mínimo necessário para a
                realização de suas finalidades, com dados pertinentes, proporcionais e não excessivos.
              </li>
              <li>
                <strong>Transparência:</strong> Direito do titular à consulta facilitada e gratuita sobre a forma e a
                duração do tratamento dos seus dados pessoais. Assegura que o titular seja informado sobre alterações na
                finalidade, forma ou duração do tratamento, controlador responsável ou compartilhamento dos dados.
                Requer mecanismos e procedimentos claros para o titular consultar seus dados.
              </li>
              <li>
                <strong>Finalidade:</strong> O tratamento de dados deve ser subordinado a propósitos legítimos,
                específicos, explícitos e informados ao titular, sem possibilidade de tratamento posterior incompatível.
                A política de privacidade deve definir como a finalidade do tratamento será informada ao titular antes
                do início do tratamento.
              </li>
              <li>
                <strong>Relatório de Impacto à Proteção de Dados Pessoais:</strong> Documentação que descreve os
                processos de tratamento de dados que podem gerar riscos às liberdades civis e aos direitos fundamentais,
                incluindo medidas de mitigação de riscos. Elaborado pelo controlador quando determinado pela autoridade
                nacional, observando os segredos comercial e industrial. Deve conter a descrição dos dados coletados e a
                metodologia para coleta e transferência.
              </li>
              <li>
                <strong>Conscientização em Segurança da Informação:</strong> Criação de um plano de conscientização para
                garantir que os colaboradores estejam cientes de suas responsabilidades e dos procedimentos para
                proteger os dados pessoais.
              </li>
              <li>
                <strong>Boas Práticas em Segurança da Informação:</strong> Implementação de medidas de segurança, como
                senhas de acesso, firewall, antivírus e políticas de segurança para prevenir violações de privacidade e
                garantir a integridade, confidencialidade e disponibilidade dos dados.
              </li>
            </ul>

            <div className="my-8">
              {" "}
              {/* Wrapper for the accordion section */}
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">CONCEITOS BÁSICOS</h2>
              <LgpdConceptsAccordion />
            </div>

            <h2>4. Princípios da Proteção de Dados</h2>
            <p>A APIBRASIL pauta o tratamento de dados pessoais pelos princípios da LGPD, que incluem:</p>
            <ul>
              <li>
                <strong>Legalidade, Justiça e Transparência:</strong> O tratamento deve ser lícito, justo e transparente
                em relação ao titular.
              </li>
              <li>
                <strong>Limitação de Finalidade:</strong> Os dados pessoais devem ser coletados para finalidades
                determinadas, explícitas e legítimas, e não podem ser tratados de forma incompatível com essas
                finalidades.
              </li>
              <li>
                <strong>Minimização de Dados:</strong> A coleta de dados deve ser limitada ao necessário para as
                finalidades do tratamento.
              </li>
              <li>
                <strong>Precisão:</strong> Os dados pessoais devem ser precisos e, quando necessário, mantidos
                atualizados.
              </li>
              <li>
                <strong>Limitação de Armazenamento:</strong> Os dados devem ser conservados apenas pelo tempo necessário
                para as finalidades para as quais foram coletados.
              </li>
              <li>
                <strong>Integridade e Confidencialidade:</strong> Os dados devem ser tratados de forma a garantir a
                segurança, incluindo a proteção contra tratamento não autorizado ou ilícito e contra perda, destruição
                ou dano acidental, mediante medidas técnicas ou organizacionais adequadas.
              </li>
              <li>
                <strong>Prestação de Contas:</strong> O controlador deve ser capaz de demonstrar a conformidade com as
                normas de proteção de dados.
              </li>
            </ul>

            <h2>5. Direitos dos Titulares de Dados</h2>
            <p>
              Conforme a LGPD, o titular de dados pessoais possui diversos direitos que podem ser exercidos em relação
              aos dados tratados pela APIBRASIL. Estes direitos incluem:
            </p>
            <ul>
              <li>Direito de ser informado.</li>
              <li>Direito de acesso aos seus dados.</li>
              <li>Direito de retificação de dados incompletos, inexatos ou desatualizados.</li>
              <li>Direito de excluir dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</li>
              <li>Direito de limitar o tratamento.</li>
              <li>Direito à portabilidade dos dados.</li>
              <li>Direito de oposição ao tratamento.</li>
            </ul>
            <p>
              A APIBRASIL se compromete a atender às solicitações relativas a estes direitos conforme a legislação
              aplicável.
            </p>

            <h2>6. Como coletamos dados pessoais e para quais finalidades</h2>
            <p>
              A coleta de dados pessoais pela APIBRASIL ocorre por meio de diversas interações, como por e-mail, site,
              redes sociais, ou quando o usuário usufrui dos serviços da organização.
            </p>
            <p>
              Os dados podem ser coletados de colaboradores, clientes, parceiros, fornecedores e prestadores de serviço.
              As informações coletadas podem incluir dados pessoais.
            </p>
            <p>As finalidades para as quais os dados pessoais são utilizados incluem, mas não se limitam a:</p>
            <ul>
              <li>Fornecer e aprimorar os serviços oferecidos pela APIBRASIL.</li>
              <li>Gerenciar o relacionamento com clientes, parceiros, fornecedores e prestadores de serviço.</li>
              <li>Comunicar sobre serviços, atualizações e informações relevantes.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
              <li>Processar pagamentos e transações.</li>
              <li>Realizar análises e pesquisas para melhorar os serviços.</li>
            </ul>
            <p>
              Detalhes específicos sobre quais dados são coletados e para quais finalidades exatas em cada serviço ou
              interação podem ser fornecidos em avisos de privacidade complementares ou no momento da coleta. As
              operações de tratamento previstas e suas finalidades devem ser descritas.
            </p>

            <h2>7. Dados de crianças e adolescentes</h2>
            <p>
              A coleta e o tratamento de dados pessoais de crianças e adolescentes pela APIBRASIL, caso ocorram,
              seguirão as diretrizes específicas da LGPD, requerendo o consentimento específico e em destaque dado por
              pelo menos um dos pais ou responsável legal, e o tratamento deverá ser realizado no melhor interesse da
              criança e do adolescente.
            </p>
            <p>A APIBRASIL somente presta serviço para empresas e não coleta dados de crianças e adolescentes.</p>

            <h2>8. Segurança da Informação</h2>
            <p>
              A APIBRASIL implementa medidas técnicas e organizacionais de segurança para proteger os dados pessoais.
            </p>
            <p>
              A Política de Segurança da Informação (PSI) da APIBRASIL, que serve como base para a prote��ão de dados,
              está baseada nas recomendações propostas pela norma ABNT NBR ISO/IEC 27002:2022, reconhecida como código
              de prática para a gestão da segurança da informação.
            </p>
            <p>
              A segurança da informação é requisito básico para proteger a confidencialidade, integridade e
              disponibilidade dos dados. As medidas de segurança incluem:
            </p>
            <ul>
              <li>Proteção dos dados pessoais contra acessos físicos e lógicos não autorizados.</li>
              <li>Implementação de controles físicos e lógicos adequados.</li>
              <li>
                Políticas de segurança que consideram requisitos para cópia de segurança, recuperação e restauração de
                dados pessoais.
              </li>
              <li>
                Controles relacionados ao tratamento de dados pessoais, como uso de senhas, acesso à informação,
                compartilhamento de dados, atualização de softwares, uso de correio eletrônico e uso de antivírus.
              </li>
              <li>Uso de controles criptográficos.</li>
              <li>Gerenciamento seguro de rede e computadores.</li>
              <li>Controle de acesso a sistemas.</li>
              <li>Planejamento de continuidade de negócio.</li>
            </ul>
            <p>
              A organização demonstra um comprometimento em adotar processos e políticas internas abrangentes de
              proteção de dados.
            </p>

            <h2>10. Compartilhamento de Dados</h2>
            <p>
              A coleta e o tratamento de dados pessoais de crianças e adolescentes pela APIBRASIL, caso ocorram,
              seguirão as diretrizes específicas da LGPD, requerendo o consentimento específico e em destaque dado por
              pelo menos um dos pais ou responsável legal, e o tratamento deverá ser realizado no melhor interesse da
              criança e do adolescente.
            </p>
            <p>A APIBRASIL somente presta serviço para empresas e não coleta dados de crianças e adolescentes.</p>

            <h2>11. Utilização de Cookies</h2>
            <p>
              O website da APIBRASIL utiliza cookies para acompanhar os acessos realizados pelos visitantes e para
              possibilitar que eles tenham uma experiência personalizada. Com a ajuda dos cookies, será possível a
              APIBRASIL proporcionar conteúdos personalizados que serão de maior interesse para o visitante. Os cookies
              também são utilizados para lembrar as preferências dos visitantes quando retornam ao website.
            </p>
            <p>
              O visitante possui a opção de configurar a utilização de cookies pelo navegador. Porém, ao desabilitar
              alguns cookies, algumas funcionalidades do website poderão ser comprometidas.
            </p>
            <p>Tipos de cookies utilizados pela APIBRASIL:</p>
            <div className="overflow-x-auto my-4">
              <table className="min-w-full text-sm border border-border">
                <thead className="bg-card-foreground/5">
                  <tr>
                    <th className="p-3 border-b border-border text-left font-semibold">Tipos de Cookies</th>
                    <th className="p-3 border-b border-border text-left font-semibold">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-border align-top">Cookies necessários</td>
                    <td className="p-3 border-b border-border align-top">
                      São os cookies que permitem a navegação pelo website, bem como o funcionamento dos recursos
                      essenciais, como áreas seguras, por exemplo. Esses cookies não armazenam dados pessoais que possam
                      ser utilizadas em ações de publicidade on-line.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border align-top">Cookies de sessão</td>
                    <td className="p-3 border-b border-border align-top">
                      Armazenam dados pessoais que possam ser utilizadas em ações de publicidade on-line.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border align-top">Cookies funcionais</td>
                    <td className="p-3 border-b border-border align-top">
                      São os cookies utilizados para lembrar informações da navegação do visitante e para melhorar a
                      experiência nas áreas do website.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>12. Por quanto tempo armazenamos dados pessoais</h2>
            <p>
              Os dados pessoais são armazenados pela APIBRASIL apenas pelo tempo necessário para cumprir as finalidades
              para as quais foram coletados, para o cumprimento de obrigações legais ou regulatórias, ou pelo tempo
              necessário para o exercício regular de direitos em processo judicial, administrativo ou arbitral. Após o
              término do período de tratamento e a ausência de bases legais para retenção, os dados pessoais serão
              eliminados de forma segura. As políticas da organização devem considerar os requisitos para a eliminação
              de dados pessoais.
            </p>

            <h2>13. Registro de Operações de Tratamento de Dados</h2>
            <p>
              O objetivo principal do ROPA (Registro de Operações de Processamento de Dados) na APIBRASIL é documentar e
              controlar as atividades de tratamento de dados pessoais dentro da instituição, garantindo a conformidade
              com a Lei Geral de Proteção de Dados (LGPD).
            </p>
            <ul>
              <li>
                <strong>Mapear os processos de tratamento de dados:</strong> O ROPA realizado pela APIBRASIL identifica
                e descreve cada processo dentro do hospital que envolve dados pessoais, como coleta, armazenamento,
                compartilhamento e descarte.
              </li>
              <li>
                <strong>Definir a base legal para cada processo:</strong> O ROPA realizado pela APIBRASIL indica a base
                legal que justifica o tratamento de dados em cada processo, como o consentimento do titular, o
                cumprimento de obrigação legal ou o legítimo interesse do hospital.
              </li>
              <li>
                <strong>Especificar os dados pessoais tratados:</strong> O ROPA realizado pela APIBRASIL lista os tipos
                de dados pessoais tratados em cada processo, como nome, CPF, endereço, e-mail, entre outros.
              </li>
              <li>
                <strong>Descrever as medidas de segurança:</strong> O ROPA realizado pela APIBRASIL detalha as medidas
                de segurança adotadas para proteger os dados pessoais em cada processo, como medidas administrativas,
                técnicas e físicas.
              </li>
              <li>
                <strong>Definir o ciclo de vida dos dados:</strong> O ROPA realizado pela APIBRASIL determina o período
                de retenção de cada dado pessoal, a partir da sua coleta até o descarte, considerando as bases legais,
                as necessidades do hospital e os direitos dos titulares.
              </li>
              <li>
                <strong>Comprovar a conformidade com a LGPD:</strong> O ROPA realizado pela APIBRASIL serve como um
                documento importante para demonstrar às autoridades e aos titulares de dados que a APIBRASIL está em
                conformidade com as normas de proteção de dados.
              </li>
            </ul>

            <h2>14. Revisão e Atualização da Política</h2>
            <p>
              Esta Política de Privacidade está sujeita a um processo de revisão, conforme ISO 27005 e 27701 e deve ser
              revisada periodicamente para garantir sua relevância e conformidade com a legislação, regulamentação e as
              necessidades do negócio. Recomenda-se que as revisões sejam periódicas. As alterações materiais nesta
              Política serão comunicadas aos usuários pelos canais de comunicação apropriados.
            </p>

            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Fale com nosso DPO</h2>
              <p className="text-muted-foreground mb-6">
                Tem alguma dúvida sobre como seus dados são tratados ou deseja exercer seus direitos? Preencha o
                formulário abaixo.
              </p>
              <DpoContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
