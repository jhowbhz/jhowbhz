import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermosDeUsoPage() {
  return (
    <div className="dark-theme-bg min-h-screen flex flex-col">
      <Header />
      <main className="policy-page-wrapper">
        {" "}
        {/* Changed class here */}
        <div className="policy-container">
          <div className="policy-content">
            <h1>Termo de Uso</h1>
            <p className="policy-last-updated">
              {" "}
              {/* Added class here */}
              Última atualização: {new Date("2025-06-05").toLocaleDateString("pt-BR")}
            </p>

            <p>
              Este Termo de Uso (“Contrato”) aplicam-se ao uso dos serviços oferecidos pela APIBRASIL SITES E SOFTWARES
              LTDA
            </p>
            <p>
              Inscrita perante o CNPJ n.º 44.959.669/000180, estabelecida na cidade de Belo Horizonte, MG, situada na
              Rua Helga Taveira de Souza, 646, Céu Azul, CEP 31.585 230, doravante denominada (“APIBRASIL”), acessada
              pelo site apibrasil.com.br, cujos serviços respeitarão os dispositivos do presente Contrato, doravante
              denominado.
            </p>
            <p>
              Usuário (pessoa física ou jurídica), maior e capaz, que tenha preenchido o Cadastro, cujos dados passam a
              ser parte integrante deste instrumento, bem como que tenha consentido eletronicamente de forma inequívoca
              todas as cláusulas do mesmo, além de todas as políticas disponíveis no site.
            </p>

            <h2>CLÁUSULA 1ª – DEFINIÇÕES</h2>
            <p>
              1.1 Para a correta compreensão e interpretação dos direitos e obrigações estabelecidos neste Termo de Uso,
              aplicam-se as seguintes definições:
            </p>
            <ul>
              <li>
                <strong>Assinatura Digital:</strong> Tipo de assinatura eletrônica baseada em operações matemáticas e
                algoritmos criptográficos de criptografia assimétrica, garantindo autenticidade e segurança dos
                documentos assinados digitalmente. A utilização exige um certificado digital válido.
              </li>
              <li>
                <strong>Assinatura Eletrônica:</strong> Mecanismo que permite a assinatura de documentos digitais com
                validade jurídica. Regulamentada pela legislação brasileira, incluindo a Medida Provisória 2002-2/2001.
              </li>
              <li>
                <strong>Assinatura APIBRASIL:</strong> Contratação do software APIBRASIL realizada após o cadastro na
                plataforma, permitindo ao Usuário acesso às funcionalidades disponíveis no site https://apibrasil.com.br
              </li>
              <li>
                <strong>Autenticação:</strong> Processo de verificação de identidade digital no momento de solicitação
                de acesso ao sistema. A autenticação ocorre através da validação de credenciais previamente registradas,
                garantindo que a entidade solicitante seja legítima.
              </li>
              <li>
                <strong>Cadastro ou Credenciamento:</strong> Procedimento pelo qual o Usuário recebe credenciais de
                acesso, incluindo autenticação, código de identificação e definição de perfil conforme autorização e
                necessidade de conhecimento.
              </li>
              <li>
                <strong>Credenciamento de Segurança:</strong> Processo destinado à habilitação de órgãos, entidades
                públicas ou privadas para conceder acesso ao tratamento de informações classificadas.
              </li>
              <li>
                <strong>Login:</strong> Identificador do Usuário utilizado para acesso à APIBRASIL, podendo ser seu
                e-mail ou CPF informado no ato do cadastro.
              </li>
              <li>
                <strong>Senha:</strong> Sequência de caracteres alfanuméricos utilizada para autenticação do Usuário na
                plataforma APIBRASIL. A senha é pessoal e intransferível, devendo atender aos requisitos de segurança
                estabelecidos pela plataforma.
              </li>
            </ul>

            <h2>CLÁUSULA 2ª – DO OBJETO</h2>
            <p>
              2.1. O presente Termo de Uso tem como objeto regular o acesso e a utilização da APIBRASIL, disponibilizada
              pela APIBRASIL, inscrita no CNPJ sob o nº 44.959.669/0001-80 e detentora da marca 930993071.
            </p>
            <p>
              2.2. A APIBRASIL é um hub de dados desenvolvido por e para desenvolvedores, unificando diversos serviços
              em uma única integração simplificada. Seu objetivo é facilitar o acesso a dados e integrações por meio de
              um conjunto abrangente de APIs e soluções tecnológicas.
            </p>
            <p>2.3. Os serviços oferecidos incluem:</p>
            <ul>
              <li>
                Um hub que centraliza mais de 120 APIs e permite mais de 80 integrações com os melhores softwares do
                mercado.
              </li>
              <li>
                Ferramentas para desenvolvedores, como documentação completa via Postman, SDKs de integração em cinco
                linguagens e exemplos de código.
              </li>
            </ul>
            <p>2.4. A APIBRASIL disponibiliza um portfólio diversificado de APIs, organizadas em categorias como:</p>
            <ul>
              <li>
                API WhatsApp: Diferentes soluções para integração com WhatsApp (ressalva: esta API não é um produto
                oficial da Meta e seu uso pode acarretar riscos, como o banimento de números).
              </li>
              <li>
                API Veicular: Consulta de informações de veículos, reconhecimento de placas por imagem, detalhes da
                Tabela FIPE e busca de multas.
              </li>
              <li>API Pessoas: Serviços de verificação de CPF e dados completos.</li>
              <li>API Empresas: Consultas sobre CNPJ, dados empresariais e busca por CNAEs.</li>
              <li>
                APIs de comunicação: Integração com chip virtual, ligações URA, envio de SMS e gerenciamento de
                WhatsApp.
              </li>
              <li>
                API CEP + IBGE: Busca por CEPs com latitude e longitude, informações geográficas e listas de cidades e
                bairros.
              </li>
              <li>
                Outras APIs: Rastreamento de encomendas, feriados nacionais, consulta de DDDs da Anatel e rastreamento
                de IPs.
              </li>
              <li>
                APIs adicionais: Dados climáticos, emissão de nota fiscal, cálculo de distâncias e inteligência
                artificial (soluções beta em desenvolvimento).
              </li>
            </ul>
            <p>
              2.5. A APIBRASIL compromete-se a utilizar exclusivamente dados de acesso público em suas operações,
              garantindo que todas as informações fornecidas pelas suas APIs sejam obtidas a partir de fontes acessíveis
              e legalmente disponíveis.
            </p>
            <p>
              2.6. Nenhuma das APIs oferecidas pela APIBRASIL acessa, processa ou compartilha dados sigilosos, privados
              ou protegidos por legislação específica sem a devida autorização legal. O Usuário reconhece que, ao
              utilizar os serviços da APIBRASIL, terá acesso apenas a informações publicamente disponíveis e que deve
              respeitar as normativas vigentes relacionadas à proteção de dados.
            </p>
            <p>
              2.7. A APIBRASIL informa que é remunerada pelo que recebe das empresas e dos Usuários finais e, ainda, que
              remunera os Usuários conforme valores acordados, caso a caso, efetuando os pagamentos sempre mediante
              apresentação de nota fiscal.
            </p>
            <p>
              2.8. O Usuário está ciente que é vedada a subcontratação e/ou a cessão dos direitos de uso da plataforma
              APIBRASIL.
            </p>

            <h2>CLÁUSULA 3ª – DAS MODIFICAÇÕES NO PRESENTE TERMO</h2>
            <p>
              3.1. A APIBRASIL poderá alterar, a qualquer tempo, as condições do presente Termo de Uso, visando seu
              aprimoramento e melhoria dos serviços prestados. As novas condições entrarão em vigor imediatamente após o
              consentimento ofertado pelo Usuário.
            </p>
            <p>
              3.2 Caso o Usuário não concorde com as modificações publicadas em até 15 (quinze) dias corridos, este
              deverá imediatamente cessar o uso do aplicativo.
            </p>

            <h2>CLÁUSULA 4ª – DAS PRÁTICAS PROIBIDAS</h2>
            <p>
              4.1. É de responsabilidade exclusiva do Usuário velar pela legalidade de suas atividades e pelas
              informações fornecidas pela APIBRASIL. A APIBRASIL não assume nenhuma responsabilidade pela existência
              deles na sua plataforma digital, podendo excluir o Usuário e as informações por ele postadas que não
              cumpram com as finalidades descritas no presente Termo de Uso, independente de aviso prévio.
            </p>
            <p>
              4.2. Caso a APIBRASIL verifique ou suspeite que algum Usuário esteja violando alguma condição do presente
              Termo ou que esteja praticando atividade ilícita, seu cadastro será cancelado bem como os seus dados
              pessoais.
            </p>
            <p>4.3 Verificado os indícios do item 4.2 o infrator será encaminhado às autoridades competentes.</p>

            <h2>CLÁUSULA 5ª – DAS RESPONSABILIDADES E DO ALCANCE DOS SERVIÇOS</h2>
            <p>
              5.1. A APIBRASIL disponibilizará ao Usuário a sua plataforma digital para acesso e utilização de suas
              APIs, mantendo-se neutra quanto às informações e dados tratados por meio dos serviços. Como a APIBRASIL
              atua exclusivamente como intermediadora de soluções tecnológicas, cabe ao Usuário a responsabilidade pela
              inserção, processamento e utilização dos dados obtidos através da plataforma, devendo zelar pela
              veracidade e legitimidade das informações acessadas.
            </p>
            <p>
              5.2. A APIBRASIL não se responsabiliza por qualquer dano, prejuízo ou perda que o Usuário venha a sofrer
              em razão de falhas no sistema, servidor ou internet, decorrentes de fatores externos, condutas de
              terceiros, caso fortuito ou força maior. Ademais, a APIBRASIL não se responsabiliza por eventuais ataques
              de vírus ou ameaças cibernéticas que possam comprometer os dispositivos do Usuário em decorrência do uso
              da plataforma.
            </p>
            <p>
              5.3. Este Termo de Uso não estabelece qualquer vínculo societário, de mandato, franquia ou relação de
              trabalho entre a APIBRASIL e o Usuário. O uso da plataforma não caracteriza qualquer tipo de parceria
              comercial entre as partes.
            </p>
            <p>
              5.4. A APIBRASIL não se responsabiliza por quaisquer obrigações tributárias decorrentes das atividades
              exercidas pelos Usuários no uso da plataforma, sendo de sua exclusiva responsabilidade o cumprimento de
              todas as obrigações fiscais e legais aplicáveis.
            </p>

            <h2>CLÁUSULA 6ª – DO PRAZO E DA VIGÊNCIA</h2>
            <p>
              6.1. O presente Termo possui prazo indeterminado, entrando em vigor na data de seu aceite eletrônico. No
              entanto, a APIBRASIL poderá rescindir a prestação dos serviços objeto do presente Termo de Uso a qualquer
              momento, mediante comunicação prévia, podendo utilizar meios eletrônicos, ao Usuário.
            </p>
            <p>
              6.2. O presente Termo ainda poderá ser rescindido, de pleno direito, independentemente de qualquer
              notificação ou interpelação, judicial ou extrajudicial, nas seguintes hipóteses: (a)pela quebra de
              qualquer de suas disposições, por qualquer das partes, de forma a impedir a continuidade da execução do
              objeto do mesmo; (b) se o Usuário, de qualquerforma, comprometer a imagem pública da APIBRASIL e/ou de
              qualquer empresa associada e/ou parceiro comercial credenciado na APIBRASIL; (c) se o Usuário utilizar de
              práticas que desrespeitem a lei, a ordem pública, a moral, os bons costumes ou, ainda, o presente Termo e
              a política de privacidade; e (d) se o Usuário ingressar com ação judicial perante a APIBRASIL.
            </p>

            <h2>CLÁUSULA 7ª – DA PROPRIEDADE INTELECTUAL</h2>
            <p>
              7.1. O uso comercial da expressão “APIBRASIL“ como marca, nome empresarial ou nome de domínio bem como o
              conteúdo da tela relativa aos serviços disponíveis na APIBRASIL, assim como os programas, conteúdos,
              bancos de dados, redes e arquivos, que permitem que o Usuário exerça a sua atividade, são propriedade da
              APIBRASIL e estão protegidos pelas leis e tratados internacionais de direito autoral, marcas e Lei
              9.609/98. O uso indevido e a reprodução total ou parcial dos referidos conteúdos são proibidos, salvo
              quando autorizados expressamente pela APIBRASIL.
            </p>
            <p>
              7.2. Deverá ser expressamente autorizada pela APIBRASIL a reprodução, exibição, distribuição e/ou
              alteração de quaisquer dos materiais, serviços e conteúdos do site da APIBRASIL, uma vez que o mero uso da
              APIBRASIL pelo Usuário não significa em nenhuma hipótese a cessão ou a transferência dos direitos sobre
              sua propriedade intelectual, bem como a de terceiros.
            </p>

            <h2>CLÁUSULA 8ª – DA LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <p>
              8.1. A APIBRASIL não será responsável por quaisquer danos diretos ou indiretos, incidentais ou
              consequentes, ou relativos a lucros cessantes, despesas, taxas, multas e demais encargos fiscais ou
              trabalhistas, perda de receitas, de dados, ou de uso de dados, incorridos com a utilização ou com a
              impossibilidade de utilização do aplicativo ou com os resultados produzidos por este mesmo que provocado
              por defeito no software, pelo Usuário ou por quaisquer terceiros, seja por ação baseada em contrato ou por
              ato ilícito, mesmo que o Usuário ou qualquer outra pessoa tenha sido advertida da possibilidade da
              ocorrência de tais danos, ainda que o prejuízo decorra de alguma falha nas funcionalidades do aplicativo
              seja resultante de sua má ou incorreta utilização.
            </p>
            <p>
              8.2. Caso seja realmente comprovado que o Usuário incorreu em dano direto ao Usuário final da APIBRASIL
              esses não poder��o ultrapassar à média das últimas três remunerações percebidas pelo Usuário.
            </p>

            <h2>CLÁUSULA 9ª – FRAUDE E CORRUPÇÃO</h2>
            <p>
              9.1. As partes envolvidas deverão tomar todas as medidas necessárias, de acordo com as boas práticas
              comerciais, observando plenamente todas as leis anticorrupção aplicáveis, mormente a Lei 12.846/13, para
              impedir qualquer atividade fraudulenta por si (inclusive por seus acionistas, conselheiros, diretores e
              empregados) e/ou por quaisquer fornecedores, agentes, ou empregados dessas com relação ao recebimento de
              quaisquer recursos de uma parte a outra. A parte deverá notificar imediatamente a outra se tiver motivo
              para suspeitar que qualquer fraude tenha ocorrido, esteja ocorrendo, ou provavelmente ocorrerá.
            </p>

            <h2>CLÁUSULA 10ª – FORÇA MAIOR OU CASO FORTUITO</h2>
            <p>
              10.1. Nenhuma das Partes deve ser responsável pelo atraso ou pelo não cumprimento das obrigações contidas
              neste Contrato, no todo ou em parte, em decorrência, de força maior ou caso fortuito, nos termos do Artigo
              393 do Código Civil Brasileiro.
            </p>
            <p>
              10.2. A Parte afetada por qualquer evento de força maior ou caso fortuito comunicará o fato à outra Parte
              imediatamente e, no menor prazo possível, esclarecerá as circunstâncias, as ações em curso para amenizar
              as perdas e solucionar o ocorrido, o tempo estimado de duração e tudo o mais que for necessário à
              compreensão do fato, suas consequências e solução.
            </p>

            <h2>CLÁUSULA 11ª – DOS DIREITOS AUTORAIS DO SOFTWARE</h2>
            <p>11.1. É expressamente vedado ao Usuário:</p>
            <ul>
              <li>
                Copiar, alterar, sublicenciar, vender, dar em locação, comodato ou garantia, doar, alienar de qualquer
                forma, transferir, emprestar ou ceder, total ou parcialmente, sob quaisquer modalidades, gratuita ou
                onerosamente, provisória ou permanentemente, o software, nem permitir seu uso por terceiros, a qualquer
                título, assim como seus manuais ou quaisquer informações relativas ao mesmo;
              </li>
              <li>
                Modificar as características do aplicativo, arquivos ou rotinas dos sistemas ou de seus programas
                acessórios, ampliá-los ou alterá-los de qualquer forma, sem a prévia, expressa e específica anuência da
                APIBRASIL, ficando acertado que quaisquer alterações, a qualquer tempo, por interesse do Usuário, que
                devam ser efetuadas nos sistemas, só poderão ser operadas pela APIBRASIL ou pessoa expressamente
                autorizada pela mesma, sendo o resultado final considerado como parte do softwares da APIBRASIL, ficando
                portanto sua propriedade incorporada pela APIBRASIL, e seu uso condicionado às presentes cláusulas
                contratuais.
              </li>
              <li>É vedada a engenaria reversa, bem como decompilar ou decompor o programa;</li>
              <li>
                Caso o Usuário venha a desenvolver um novo sistema ou produto que caracterize cópia, de todo ou em
                parte, quer seja dicionário de dados, quer seja do programa, será considerado como parte do aplicativo
                fornecido pela APIBRASIL, ficando portanto sua propriedade incorporada por esta, e seu uso condicionado
                às presentes cláusulas contratuais.
              </li>
              <li>
                Revelar, duplicar, copiar ou reproduzir, autorizar ou permitir o uso ou dar conhecimento a terceiros do
                material fornecido pela APIBRASIL, seja ele de cunho técnico, operacional ou de qualquer outra natureza,
                como por exemplo, mas não se limitando a estes, quaisquer dados, materiais, documentos, especificações
                técnicas ou comerciais, ou dados gerais em razão do presente contrato, de que venha a ter acesso ou
                conhecimento, ou ainda que lhes tenha sido confiados, ficando, neste caso, responsável pela utilização
                indevida destas informações.
              </li>
            </ul>
            <p>
              O Usuário reconhece que a não observância de quaisquer destas obrigações configurará violação da
              legislação aplicável ao direito autoral e à utilização de software, submetendo-se, o Usuário às sanções
              cíveis e penais cabíveis.
            </p>

            <h2>CLÁUSULA 12ª – PRIVACIDADE E PROTEÇÃO DOS DADOS PESSOAIS</h2>
            <p>
              12.1. A APIBRASIL reconhece a importância da proteção de dados pessoais e compromete-se a observar
              integralmente os ditames da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais LGPD). O
              tratamento de dados pessoais será realizado apenas para a execução dos serviços oferecidos, garantindo que
              todas as informações coletadas sejam utilizadas conforme o previsto neste Termo de Uso.
            </p>
            <p>
              12.2. A coleta de dados pessoais ocorrerá exclusivamente para os Usuários que optarem pela utilização da
              plataforma APIBRASIL, sendo a base legal aplicável a execução de contrato, nos termos do art. 7º, inciso
              V, da LGPD. O fornecimento das informações será voluntário e realizado de forma clara e inequívoca, sem
              qualquer contrapartida ou imposição.
            </p>
            <p>
              12.3. Os Usuários serão responsáveis pelo compartilhamento de seus dados pessoais de maneira livre,
              informada e expressa, garantindo o entendimento sobre a finalidade e forma de tratamento das informações.
            </p>
            <p>
              12.4. A APIBRASIL assegura o direito dos Usuários de solicitar a interrupção do tratamento dos seus dados
              pessoais, sua exclusão ou anonimização irreversível, conforme previsto nos artigos 18, inciso VI, e 16,
              inciso IV, da LGPD. Essas solicitações podem ser feitas diretamente pelos titulares dos dados ou pelas
              organizações às quais os colaboradores estejam vinculados.
            </p>
            <p>
              12.5. Os dados pessoais coletados pela APIBRASIL não serão utilizados para finalidades diversas daquelas
              previstas neste Termo de Uso, sendo proibido o compartilhamento com terceiros, salvo nos casos de
              hospedagem de bancos de dados, sempre priorizando a manutenção das informações em território nacional
              brasileiro. Em situações de transferência internacional de dados, a APIBRASIL garantirá total conformidade
              com os artigos 33 a 36 da LGPD.
            </p>
            <p>
              12.6. A APIBRASIL assume integral responsabilidade pela segurança e proteção dos dados tratados, adotando
              medidas técnicas e organizacionais adequadas para prevenir acessos indevidos, vazamentos ou qualquer
              incidente relacionado à privacidade. Em casos de falhas de segurança que possam ser atribuídas à
              APIBRASIL, esta responderá perante os titulares dos dados e as autoridades competentes.
            </p>
            <p>
              12.7. A APIBRASIL poderá fornecer às organizações parceiras relatórios sobre os dados tratados, incluindo
              resultados de avaliações realizadas por seus colaboradores, garantindo sempre que a destinação dessas
              informações seja de exclusiva responsabilidade das referidas organizações.
            </p>
            <p>
              12.8. Os dados coletados poderão ser utilizados para fins acadêmicos ou de pesquisa, garantindo-se, em
              todos os casos, sua anonimização irreversível, conforme determina a LGPD.
            </p>
            <p>
              12.9. A APIBRASIL disponibilizará este Termo de Uso em local público e acessível a todos os Usuários,
              parceiros e investidores, garantindo ampla transparência sobre suas práticas de proteção de dados.
            </p>

            <h2>CLÁUSULA 13ª – DISPOSIÇÕES FINAIS</h2>
            <p>
              13.1. A falta de aplicação das sanções previstas neste Contrato, bem como a abstenção ao exercício de
              qualquer direito aqui conferido às Partes, serão considerados atos de mera tolerância e não implicarão
              novação ou renúncia a direito, podendo as Partes exercê-los a qualquer momento.
            </p>
            <p>
              13.2. Este Contrato estabelece o acordo definitivo das Partes a respeito do seu objeto, revogando todos os
              entendimentos e acordos anteriores entre as Partes porventura existente.
            </p>
            <p>
              13.3. A nulidade ou inaplicabilidade de qualquer disposição ou cláusula não afeta ou invalida às demais,
              devendo a cláusula declarada nula ou inaplicável ser substituída por outra que conduza as Partes aos
              mesmos resultados econômicos e jurídicos almejados.
            </p>
            <p>
              13.4. Na ocorrência de liquidação, falência, nos casos de dissolução judicial ou extrajudicial ou abandono
              das atividades de informática pela APIBRASIL, ou na eventual impossibilidade de a APIBRASIL continuar suas
              atividades, deixando de comercializar o aplicativo, sem deixar sucessora, esta se compromete a entregar
              todos dados inseridos na plataforma pelo Usuário para o mesmo.
            </p>

            <h2>CLÁUSULA 14ª – DA SOLUÇÃO DE CONTROVÉRSIAS E DO FORO</h2>
            <p>
              14.1. Em caso de impasse no transcurso do presente instrumento as Partes poderão solucionar as suas
              questões por via de conciliação ou mediação em uma Instituição de livre escolha pelo prazo de 30 (trinta)
              dias.
            </p>
            <p>
              14.2. Ultrapassado o prazo acima estipulado ou por opção de qualquer das partes, fica eleito o foro da
              Comarca de Belo Horizonte, Estado de Minas Gerais como o único competente para dirimir quaisquer questões
              pertinentes a este contrato, renunciando as Partes a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
