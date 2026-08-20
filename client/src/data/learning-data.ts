/**
 * Direção visual: Caderno de Plantão — dados rastreáveis do edital, organizados para
 * reduzir a distância entre conteúdo, prática autoral e evidência de avanço.
 * IDs desta versão devem permanecer estáveis para preservar o progresso local.
 */

import { enfermagemQuestionBank } from "./enfermagem-question-bank";
import { enfermagemThematicSupplementA } from "./enfermagem-thematic-supplement-a";
import { enfermagemThematicSupplementB } from "./enfermagem-thematic-supplement-b";
import { generalPracticeBank } from "./general-practice-bank";

export type Accent = "teal" | "coral" | "navy" | "sand";

export type StudyTopic = {
  id: string;
  order: string;
  title: string;
  shortTitle: string;
  description: string;
  focus: string;
  teacher?: string;
  source?: string;
  videoId?: string;
  videoTitle?: string;
  duration?: string;
  sourceUrl?: string;
  accent: Accent;
};

export type Subject = {
  id: string;
  module: string;
  title: string;
  shortTitle: string;
  summary: string;
  color: Accent;
  topics: StudyTopic[];
};

export type Question = {
  id: string;
  subjectId: string;
  topicId: string;
  statement: string;
  alternatives: [string, string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
};

export type AnswerMap = Record<string, number>;

export const subjects: Subject[] = [
  {
    id: "portugues",
    module: "Módulo I · Conhecimentos gerais",
    title: "Língua Portuguesa",
    shortTitle: "Português",
    summary: "Compreensão, gramática, sintaxe e redação oficial aplicadas ao contexto de prova.",
    color: "coral",
    topics: [
      {
        id: "portugues-leitura",
        order: "P1",
        title: "Leitura e construção de sentido",
        shortTitle: "Leitura",
        description: "Interpretação, compreensão, tipologia, gêneros, coesão, coerência e significação das palavras.",
        focus: "Inferência; tese; relações entre partes do texto; efeitos de sentido; campos semânticos.",
        accent: "coral",
      },
      {
        id: "portugues-norma",
        order: "P2",
        title: "Norma, ortografia e pontuação",
        shortTitle: "Norma",
        description: "Ortografia oficial, acentuação gráfica, emprego da pontuação e classes de palavras com suas flexões.",
        focus: "Acordo ortográfico; acentos; vírgula; valor morfológico e flexões.",
        accent: "coral",
      },
      {
        id: "portugues-sintaxe",
        order: "P3",
        title: "Sintaxe e relações de concordância",
        shortTitle: "Sintaxe",
        description: "Estrutura e formação de palavras, concordância, regência, colocação pronominal, crase, oração e período.",
        focus: "Termos da oração; período composto; concordância; regência; pronomes e crase.",
        accent: "coral",
      },
      {
        id: "portugues-reescrita",
        order: "P4",
        title: "Reescrita e redação oficial",
        shortTitle: "Reescrita",
        description: "Reescrita de frases, substituição de palavras ou trechos, correspondência verbal e redação oficial.",
        focus: "Preservação de sentido; adequação gramatical; concisão; impessoalidade e clareza.",
        accent: "coral",
      },
    ],
  },
  {
    id: "logica",
    module: "Módulo I · Conhecimentos gerais",
    title: "Raciocínio Lógico e Matemático",
    shortTitle: "Raciocínio lógico",
    summary: "Relações numéricas, álgebra, probabilidade, estatística e estruturas de argumentação.",
    color: "navy",
    topics: [
      {
        id: "logica-proporcoes",
        order: "L1",
        title: "Conjuntos, razões e finanças básicas",
        shortTitle: "Proporções",
        description: "Conjuntos numéricos, razões, proporções, regra de três, porcentagem e juros simples e compostos.",
        focus: "Grandezas diretamente e inversamente proporcionais; percentuais; capital, taxa e montante.",
        accent: "navy",
      },
      {
        id: "logica-algebra",
        order: "L2",
        title: "Álgebra, funções e sequências",
        shortTitle: "Álgebra",
        description: "Equações, inequações, sistemas, funções, sequências, matrizes e determinantes.",
        focus: "Modelagem; resolução de sistemas; leitura de funções; regularidades e operações matriciais.",
        accent: "navy",
      },
      {
        id: "logica-probabilidade",
        order: "L3",
        title: "Contagem, probabilidade e estatística",
        shortTitle: "Probabilidade",
        description: "Probabilidade, análise combinatória e estatística descritiva.",
        focus: "Espaço amostral; eventos; princípio multiplicativo; média, mediana, moda e leitura de dados.",
        accent: "navy",
      },
      {
        id: "logica-proposicoes",
        order: "L4",
        title: "Proposições e argumentação lógica",
        shortTitle: "Proposições",
        description: "Proposições, conectivos, tabelas-verdade, equivalências, negações, argumentação e diagramas lógicos.",
        focus: "Condicionais; negação; equivalência; validade de argumentos; organização de conjuntos.",
        accent: "navy",
      },
    ],
  },
  {
    id: "tocantins",
    module: "Módulo I · Conhecimentos gerais",
    title: "História e Geografia do Tocantins",
    shortTitle: "Tocantins",
    summary: "Formação territorial, diversidade sociocultural, ambiente e desenvolvimento regional do Estado.",
    color: "sand",
    topics: [
      {
        id: "tocantins-formacao",
        order: "T1",
        title: "Criação, território e organização do Estado",
        shortTitle: "Formação",
        description: "Processo histórico de criação, organização política e administrativa e formação territorial do Tocantins.",
        focus: "Marcos de criação; escalas administrativas; ocupação e organização do espaço tocantinense.",
        accent: "sand",
      },
      {
        id: "tocantins-povos",
        order: "T2",
        title: "População, povos e patrimônio",
        shortTitle: "Povos e patrimônio",
        description: "Aspectos demográficos, povos indígenas, comunidades quilombolas e patrimônio histórico, cultural e ambiental.",
        focus: "Diversidade socioterritorial; indicadores demográficos; reconhecimento e preservação do patrimônio.",
        accent: "sand",
      },
      {
        id: "tocantins-meio",
        order: "T3",
        title: "Meio físico e conservação",
        shortTitle: "Meio físico",
        description: "Clima, vegetação, relevo, hidrografia, recursos naturais e Unidades de Conservação.",
        focus: "Relações entre componentes naturais; bacias; uso de recursos; conservação ambiental.",
        accent: "sand",
      },
      {
        id: "tocantins-desenvolvimento",
        order: "T4",
        title: "Economia e desenvolvimento regional",
        shortTitle: "Desenvolvimento",
        description: "Economia estadual, desenvolvimento regional, matriz produtiva e matriz energética.",
        focus: "Atividades produtivas; infraestrutura; desigualdades regionais; energia e sustentabilidade.",
        accent: "sand",
      },
    ],
  },
  {
    id: "legislacao",
    module: "Módulo I · Conhecimentos gerais",
    title: "Legislação",
    shortTitle: "Legislação",
    summary: "SUS, controle social, normas estruturantes e políticas nacionais de saúde.",
    color: "teal",
    topics: [
      {
        id: "legislacao-sus",
        order: "S1",
        title: "Princípios, diretrizes e gestão do SUS",
        shortTitle: "Base do SUS",
        description: "Princípios, diretrizes, organização, regionalização, financiamento e gestão do Sistema Único de Saúde.",
        focus: "Universalidade; integralidade; equidade; descentralização; regionalização; redes e financiamento.",
        accent: "teal",
      },
      {
        id: "legislacao-controle",
        order: "S2",
        title: "Participação e controle social",
        shortTitle: "Controle social",
        description: "Participação social, Conselhos de Saúde, Conferências de Saúde e Comissões Intergestores.",
        focus: "Papel das instâncias; representação; deliberação; pactuação interfederativa.",
        accent: "teal",
      },
      {
        id: "legislacao-leis",
        order: "S3",
        title: "Constituição e legislação básica do SUS",
        shortTitle: "Leis do SUS",
        description: "Constituição Federal, Leis nº 8.080/1990 e nº 8.142/1990 e Decreto nº 7.508/2011.",
        focus: "Seguridade e saúde; atribuições do SUS; transferências; planejamento e regiões de saúde.",
        teacher: "Natale Souza",
        source: "Gran Cursos Saúde",
        videoId: "bR6fvRKZrKQ",
        videoTitle: "SUS para Concursos 2025: A Lei 8.142/1990 na sua prova!",
        duration: "38 min 45 s",
        sourceUrl: "https://www.youtube.com/watch?v=bR6fvRKZrKQ",
        accent: "teal",
      },
      {
        id: "legislacao-politicas",
        order: "S4",
        title: "Humanização e saúde do trabalhador",
        shortTitle: "Políticas",
        description: "Política Nacional de Humanização e Política Nacional de Saúde do Trabalhador e da Trabalhadora.",
        focus: "Acolhimento; gestão participativa; ambiência; vigilância e promoção da saúde do trabalhador.",
        accent: "teal",
      },
    ],
  },
  {
    id: "enfermagem",
    module: "Módulo II · Conhecimentos específicos",
    title: "Conhecimentos de Enfermagem",
    shortTitle: "Enfermagem",
    summary: "Assistência, gestão, redes de atenção, segurança, urgência e prática profissional do enfermeiro.",
    color: "teal",
    topics: [
      {
        id: "enfermagem-sus",
        order: "E1",
        title: "SUS, políticas e planejamento em saúde",
        shortTitle: "SUS e gestão",
        description: "Estrutura, organização e políticas do SUS, redes e níveis de assistência, planejamento, direitos e participação social.",
        focus: "Relação entre instituições e serviços; recursos; planejamento estratégico e normativo; direitos dos usuários.",
        accent: "teal",
      },
      {
        id: "enfermagem-vigilancia",
        order: "E2",
        title: "Vigilância em saúde e imunização",
        shortTitle: "Vigilância",
        description: "Vigilância epidemiológica, prevenção e controle de doenças transmissíveis e não transmissíveis e Programa Nacional de Imunizações.",
        focus: "Investigação de agravos; prevenção; indicadores; imunização e resposta em saúde coletiva.",
        accent: "teal",
      },
      {
        id: "enfermagem-comunidade",
        order: "E3",
        title: "Modalidades assistenciais e território",
        shortTitle: "Comunidade",
        description: "Hospital-dia, assistência domiciliar, trabalho em grupo, enfermagem na comunidade, Saúde da Família e ESF.",
        focus: "Continuidade do cuidado; território; vínculo; práticas coletivas e coordenação da atenção.",
        accent: "teal",
      },
      {
        id: "enfermagem-processo",
        order: "E4",
        title: "Teorias, processo e diagnósticos de enfermagem",
        shortTitle: "Processo de enfermagem",
        description: "Teorias de enfermagem, processo de enfermagem e taxonomias de diagnósticos de enfermagem.",
        focus: "Coleta de dados; diagnóstico; planejamento; implementação; avaliação; linguagem diagnóstica.",
        teacher: "Ketyllin",
        source: "YouTube",
        videoId: "BpMS6Hz9UuM",
        videoTitle: "5 Etapas do Processo de Enfermagem na PRÁTICA",
        duration: "12 min 32 s",
        sourceUrl: "https://www.youtube.com/watch?v=BpMS6Hz9UuM",
        accent: "teal",
      },
      {
        id: "enfermagem-mental",
        order: "E5",
        title: "Saúde mental e comunicação terapêutica",
        shortTitle: "Saúde mental",
        description: "Assistência ao adulto com transtorno mental, unidades de atenção, CAPS, ambulatório, psicopatologias, psicofarmacologia e intervenção.",
        focus: "Rede de atenção psicossocial; vínculo; comunicação terapêutica; manejo e direitos no cuidado.",
        accent: "teal",
      },
      {
        id: "enfermagem-adulto",
        order: "E6",
        title: "Adulto, idoso, procedimentos e perioperatório",
        shortTitle: "Adulto e idoso",
        description: "Gerontologia, procedimentos técnicos, perioperatório e assistência nas alterações cardiovasculares, digestivas, metabólicas, renais, reprodutivas, tegumentares, neurológicas e musculoesqueléticas.",
        focus: "Avaliação clínica; prioridades de cuidado; prevenção de complicações; técnica e continuidade assistencial.",
        accent: "teal",
      },
      {
        id: "enfermagem-materno",
        order: "E7",
        title: "Saúde da mulher, materna e da criança",
        shortTitle: "Materno-infantil",
        description: "Saúde sexual e reprodutiva, pré-natal, parto, puerpério, recém-nascido, climatério, ginecopatias, crescimento, desenvolvimento, aleitamento e doenças prevalentes da infância.",
        focus: "Atenção de baixa e média complexidade; cuidado humanizado; linhas de cuidado e educação em saúde.",
        accent: "teal",
      },
      {
        id: "enfermagem-emergencia",
        order: "E8",
        title: "Urgência, emergência e paciente crítico",
        shortTitle: "Emergência",
        description: "Organização do serviço, suporte básico de vida, politrauma, parada cardiorrespiratória, ventilação, distúrbios, diálise, insuficiências, coma, intoxicações e emergências ambientais.",
        focus: "Priorização; avaliação inicial; suporte; estabilidade hemodinâmica; resposta a eventos agudos.",
        accent: "teal",
      },
      {
        id: "enfermagem-gerenciamento",
        order: "E9",
        title: "Gerenciamento e processos de trabalho",
        shortTitle: "Gerenciamento",
        description: "Gerenciamento de serviços, recursos humanos, dimensionamento, educação continuada, liderança, supervisão, qualidade e métodos diagnósticos.",
        focus: "Planejamento de equipe; processo grupal; avaliação de desempenho; indicadores e melhoria contínua.",
        accent: "teal",
      },
      {
        id: "enfermagem-seguranca",
        order: "E10",
        title: "CME, biossegurança, ética e segurança",
        shortTitle: "Segurança",
        description: "Pesquisa, CME, processamento e esterilização, biossegurança, precauções, risco biológico, infecção hospitalar, ética, saúde do trabalhador e segurança do paciente.",
        focus: "Processamento seguro; precauções; controle de infecção; responsabilidade ética; cultura de segurança.",
        accent: "teal",
      },
    ],
  },
];

export const questions: Question[] = [
  {
    id: "q-port-1",
    subjectId: "portugues",
    topicId: "portugues-leitura",
    statement: "Em um memorando, a expressão “portanto” introduz uma ação que decorre dos fatos relatados no parágrafo anterior. Em uma reescrita que preserve essa relação argumentativa, a substituição adequada é:",
    alternatives: ["contudo", "por conseguinte", "embora", "à medida que", "ainda que"],
    correctIndex: 1,
    explanation: "“Por conseguinte” mantém o valor conclusivo de “portanto”. As demais alternativas introduzem oposição, concessão ou proporcionalidade, alterando a relação lógica do enunciado.",
  },
  {
    id: "q-port-2",
    subjectId: "portugues",
    topicId: "portugues-norma",
    statement: "No período “Os resultados do levantamento, quando divulgados, orientarão as equipes”, o emprego das vírgulas se justifica porque o trecho destacado:",
    alternatives: ["isola um vocativo", "separa uma oração subordinada adverbial intercalada", "marca uma enumeração de termos simples", "antecipa o objeto direto", "isola um aposto explicativo"],
    correctIndex: 1,
    explanation: "“Quando divulgados” expressa circunstância temporal e está intercalado na oração principal. Por isso, o trecho é isolado por vírgulas.",
  },
  {
    id: "q-port-3",
    subjectId: "portugues",
    topicId: "portugues-sintaxe",
    statement: "A redação que atende à regência verbal e à norma-padrão é:",
    alternatives: ["A equipe assistiu o treinamento ontem.", "A chefia informou os servidores sobre a mudança.", "Os profissionais preferem mais segurança do que improviso.", "O setor visou à melhoria dos processos e aos indicadores.", "O gestor implicou em novos fluxos de trabalho."],
    correctIndex: 3,
    explanation: "No sentido de “ter por objetivo”, o verbo visar rege a preposição “a”, exigindo crase antes de termo feminino: “visou à melhoria”. “Assistir” no sentido de ver pede “a”; “preferir” não admite “mais”; “implicar” no sentido de acarretar é transitivo direto.",
  },
  {
    id: "q-port-4",
    subjectId: "portugues",
    topicId: "portugues-reescrita",
    statement: "Para manter impessoalidade, clareza e concisão em comunicação oficial, a reescrita mais adequada de “A gente precisa que vocês mandem os relatórios logo” é:",
    alternatives: ["Pedimos que vossas senhorias deem um jeito de encaminhar os relatórios.", "Solicita-se o encaminhamento dos relatórios até o prazo estabelecido.", "Vocês precisam enviar os relatórios o quanto antes, por favor.", "É para mandar os relatórios sem demora.", "Nós gostaríamos que os relatórios fossem mandados rapidamente."],
    correctIndex: 1,
    explanation: "A construção com “solicita-se” é impessoal, objetiva e informa a providência necessária sem marcas coloquiais ou ambíguas.",
  },
  {
    id: "q-log-1",
    subjectId: "logica",
    topicId: "logica-proporcoes",
    statement: "Uma unidade utilizou 240 frascos de uma solução em 12 dias, mantendo consumo diário constante. Se o consumo diário aumentar 25%, o mesmo estoque atenderá à unidade por:",
    alternatives: ["8 dias", "9 dias", "9,6 dias", "10 dias", "15 dias"],
    correctIndex: 2,
    explanation: "O consumo original é de 20 frascos/dia. Com aumento de 25%, passa a 25 frascos/dia. Logo, 240 ÷ 25 = 9,6 dias.",
  },
  {
    id: "q-log-2",
    subjectId: "logica",
    topicId: "logica-algebra",
    statement: "Um setor registra a quantidade de atendimentos por meio da função A(t) = 18t + 42, em que t representa o número de semanas transcorridas. A interpretação correta é:",
    alternatives: ["o setor começa sem atendimentos e cresce 42 por semana", "a quantidade inicial é 18 e o crescimento semanal é 42", "a quantidade inicial é 42 e há acréscimo de 18 atendimentos por semana", "a função atinge 42 atendimentos somente após 18 semanas", "o crescimento semanal diminui 18 atendimentos a cada semana"],
    correctIndex: 2,
    explanation: "Em uma função afim A(t) = at + b, b é o valor inicial e a é a taxa de variação. Portanto, há 42 atendimentos no ponto inicial e acréscimo de 18 por semana.",
  },
  {
    id: "q-log-3",
    subjectId: "logica",
    topicId: "logica-probabilidade",
    statement: "Em uma caixa há 3 cartões de revisão de urgência, 2 de saúde mental e 5 de legislação. Retirando-se um cartão ao acaso, a probabilidade de ele NÃO ser de legislação é:",
    alternatives: ["1/5", "2/5", "1/2", "3/5", "4/5"],
    correctIndex: 2,
    explanation: "Há 10 cartões no total e 5 deles não são de legislação. A probabilidade é 5/10, equivalente a 1/2.",
  },
  {
    id: "q-log-4",
    subjectId: "logica",
    topicId: "logica-proposicoes",
    statement: "Considere a afirmação: “Se o indicador é revisado, então o plano é atualizado”. A negação lógica dessa afirmação é:",
    alternatives: ["O indicador não é revisado e o plano não é atualizado.", "O indicador é revisado e o plano não é atualizado.", "O indicador não é revisado ou o plano é atualizado.", "O indicador é revisado ou o plano não é atualizado.", "Se o plano não é atualizado, então o indicador não é revisado."],
    correctIndex: 1,
    explanation: "A condicional p → q só é falsa quando p é verdadeira e q é falsa. Assim, sua negação é “o indicador é revisado e o plano não é atualizado”.",
  },
  {
    id: "q-toc-1",
    subjectId: "tocantins",
    topicId: "tocantins-formacao",
    statement: "Ao analisar a formação territorial e a organização político-administrativa do Tocantins, uma resposta tecnicamente consistente deve considerar, simultaneamente:",
    alternatives: ["apenas os limites municipais atuais", "somente os aspectos naturais do relevo", "processos históricos de ocupação e as escalas de organização do território", "exclusivamente os indicadores econômicos recentes", "somente os marcos culturais urbanos"],
    correctIndex: 2,
    explanation: "A formação territorial envolve processos históricos e decisões político-administrativas em diferentes escalas. Reduzir a análise a apenas um elemento perde a relação entre território, ocupação e organização do Estado.",
  },
  {
    id: "q-toc-2",
    subjectId: "tocantins",
    topicId: "tocantins-povos",
    statement: "Uma política de valorização do patrimônio tocantinense que contemple povos indígenas e comunidades quilombolas deve, prioritariamente:",
    alternatives: ["tratar todas as referências culturais como homogêneas", "substituir práticas tradicionais por modelos urbanos padronizados", "reconhecer a diversidade sociocultural e apoiar a preservação de referências materiais e imateriais", "restringir a proteção aos bens já tombados em áreas centrais", "desvincular patrimônio cultural das comunidades que o produzem"],
    correctIndex: 2,
    explanation: "A proteção do patrimônio pressupõe reconhecimento da diversidade, vínculo com os grupos sociais e atenção tanto a referências materiais quanto imateriais.",
  },
  {
    id: "q-toc-3",
    subjectId: "tocantins",
    topicId: "tocantins-meio",
    statement: "Em um diagnóstico ambiental, a análise da hidrografia sem considerar relevo, vegetação e uso dos recursos naturais é limitada porque:",
    alternatives: ["as bacias hidrográficas independem das formas de relevo", "os elementos naturais e as ações humanas se relacionam na dinâmica da água e da conservação", "a vegetação não exerce influência sobre processos ambientais", "as Unidades de Conservação substituem todo planejamento territorial", "o clima é o único fator associado à disponibilidade de água"],
    correctIndex: 1,
    explanation: "A dinâmica hídrica se conecta a relevo, cobertura vegetal, clima, uso do solo e medidas de conservação. A abordagem integrada é a mais adequada.",
  },
  {
    id: "q-toc-4",
    subjectId: "tocantins",
    topicId: "tocantins-desenvolvimento",
    statement: "Uma leitura crítica da matriz produtiva e energética do Tocantins deve buscar relações entre produção, infraestrutura, distribuição regional de oportunidades e:",
    alternatives: ["eliminação da necessidade de planejamento ambiental", "sustentabilidade no uso dos recursos naturais", "abandono de indicadores sociais", "padronização de todos os territórios estaduais", "redução da análise ao setor agrícola"],
    correctIndex: 1,
    explanation: "Desenvolvimento regional exige articular atividades produtivas, energia, infraestrutura, inclusão e sustentabilidade, evitando uma leitura de setor único.",
  },
  {
    id: "q-leg-1",
    subjectId: "legislacao",
    topicId: "legislacao-sus",
    statement: "Em uma região de saúde, a organização de fluxos entre atenção primária, serviços especializados e hospitalares busca materializar, principalmente, a diretriz de:",
    alternatives: ["centralização administrativa absoluta", "regionalização e hierarquização da rede", "privatização compulsória da assistência", "substituição do controle social por gestão técnica", "restrição do acesso a grupos prioritários"],
    correctIndex: 1,
    explanation: "A regionalização e a hierarquização organizam serviços em rede e níveis de complexidade, favorecendo acesso coordenado e continuidade do cuidado.",
  },
  {
    id: "q-leg-2",
    subjectId: "legislacao",
    topicId: "legislacao-controle",
    statement: "No controle social do SUS, a Conferência de Saúde se distingue do Conselho de Saúde porque a Conferência:",
    alternatives: ["atua de forma permanente e deliberativa no acompanhamento da política", "reúne-se periodicamente para avaliar a situação de saúde e propor diretrizes", "substitui as Comissões Intergestores na pactuação federativa", "é composta exclusivamente por gestores públicos", "tem função apenas consultiva sobre orçamento"],
    correctIndex: 1,
    explanation: "A Conferência ocorre periodicamente para avaliar a situação de saúde e propor diretrizes. O Conselho é permanente e deliberativo, com atuação contínua.",
  },
  {
    id: "q-leg-3",
    subjectId: "legislacao",
    topicId: "legislacao-leis",
    statement: "Ao diferenciar as Leis nº 8.080/1990 e nº 8.142/1990, é correto afirmar que a Lei nº 8.142/1990 dispõe especialmente sobre:",
    alternatives: ["a definição de vigilância sanitária e epidemiológica", "a participação da comunidade e as transferências intergovernamentais de recursos", "a regulamentação exclusiva dos serviços privados de saúde", "a criação do Ministério da Saúde", "a extinção dos Conselhos de Saúde"],
    correctIndex: 1,
    explanation: "A Lei nº 8.142/1990 trata da participação da comunidade na gestão do SUS e das transferências intergovernamentais de recursos financeiros na área da saúde.",
  },
  {
    id: "q-leg-4",
    subjectId: "legislacao",
    topicId: "legislacao-politicas",
    statement: "Uma ação coerente com a Política Nacional de Humanização combina acolhimento com:",
    alternatives: ["fragmentação das decisões entre setores isolados", "supressão da participação de usuários e trabalhadores", "valorização dos sujeitos e cogestão dos processos de trabalho", "priorização exclusiva da velocidade do atendimento", "substituição da escuta por protocolos inflexíveis"],
    correctIndex: 2,
    explanation: "A PNH valoriza usuários, trabalhadores e gestores, fortalecendo acolhimento, vínculo, participação e cogestão. Não se reduz a uma etapa de recepção.",
  },
  {
    id: "q-enf-1",
    subjectId: "enfermagem",
    topicId: "enfermagem-processo",
    statement: "Durante a consulta de enfermagem, a enfermeira identifica dados subjetivos e objetivos, formula um diagnóstico, define resultados esperados, executa intervenções e reavalia a resposta da pessoa atendida. A sequência descrita expressa:",
    alternatives: ["um registro administrativo sem finalidade assistencial", "o processo de enfermagem articulado e contínuo", "apenas a etapa de prescrição médica", "um protocolo exclusivo de internação hospitalar", "uma auditoria de materiais"],
    correctIndex: 1,
    explanation: "O enunciado apresenta as etapas articuladas do processo de enfermagem: avaliação, diagnóstico, planejamento, implementação e avaliação dos resultados.",
  },
  {
    id: "q-enf-2",
    subjectId: "enfermagem",
    topicId: "enfermagem-vigilancia",
    statement: "Após observar aumento incomum de casos com o mesmo quadro em uma área adscrita, a conduta que melhor expressa a vigilância em saúde é:",
    alternatives: ["aguardar o encerramento espontâneo dos casos antes de registrar dados", "restringir a análise aos pacientes já internados", "notificar, investigar, analisar o território e desencadear medidas de prevenção e controle", "encaminhar todos os casos diretamente para atenção terciária", "suspender a busca de informações para evitar alarme"],
    correctIndex: 2,
    explanation: "A vigilância articula informação, investigação, análise territorial e intervenção oportuna. A resposta não se limita ao registro ou ao cuidado individual.",
  },
  {
    id: "q-enf-3",
    subjectId: "enfermagem",
    topicId: "enfermagem-emergencia",
    statement: "No atendimento inicial a uma pessoa politraumatizada, a prioridade de uma avaliação estruturada é reconhecer e intervir primeiro em condições que comprometem imediatamente:",
    alternatives: ["o conforto térmico e a documentação do atendimento", "via aérea, respiração e circulação", "a prescrição de dieta e o histórico familiar completo", "a coleta de todos os exames laboratoriais de rotina", "a definição do leito de internação"],
    correctIndex: 1,
    explanation: "A abordagem inicial em trauma prioriza ameaças imediatas à vida, com atenção sistemática à via aérea, à respiração e à circulação antes de etapas complementares.",
  },
  {
    id: "q-enf-4",
    subjectId: "enfermagem",
    topicId: "enfermagem-seguranca",
    statement: "Ao manipular materiais potencialmente contaminados, a medida que deve estar presente independentemente de diagnóstico confirmado de infecção é:",
    alternatives: ["precaução-padrão baseada na avaliação do risco de exposição", "isolamento respiratório para todos os pacientes", "dispensa de higiene das mãos quando há uso de luvas", "uso de antibiótico profilático pela equipe", "reprocessamento de material de uso único"],
    correctIndex: 0,
    explanation: "As precauções-padrão orientam práticas seguras para todos os atendimentos conforme risco de exposição. Luvas não substituem a higiene das mãos e precauções específicas dependem da via de transmissão.",
  },
  ...enfermagemQuestionBank,
  ...enfermagemThematicSupplementA,
  ...enfermagemThematicSupplementB,
  ...generalPracticeBank,
];

export const totalTopics = subjects.reduce((total, subject) => total + subject.topics.length, 0);
