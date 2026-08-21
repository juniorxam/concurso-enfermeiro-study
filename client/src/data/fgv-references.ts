/**
 * Direção visual: Caderno de Plantão — referências externas são fichas de consulta,
 * nunca reprodução de enunciados ou alternativas de provas da FGV.
 */
export type FgvReference = {
  id: string;
  topicId: string;
  exam: string;
  year: string;
  role: string;
  questionNumber: number;
  label: string;
  studyNote: string;
  sourceUrl: string;
};

const ENARE_PDF = "https://mapa-vagas-enare-ebserh.conhecimento.fgv.br/provas-gabaritos/multiuni/Provas/ENFERMAGEM%20(ENFERMT01)%20-%20Tipo%201.pdf";
const PMAM_PDF = "https://conhecimento.fgv.br/sites/default/files/concursos/oficial_da_pm_-_enfermeirons401_tipo_2.pdf";
const TCESE_PDF = "https://conhecimento.fgv.br/sites/default/files/concursos/tcese/TCE_SE_Enfermeiro_(ENF)_Tipo_2.pdf";

export const fgvEnareAnswerKeyUrl = "https://mapa-vagas-enare-ebserh.conhecimento.fgv.br/provas-gabaritos/multiuni/ENARE2024%20Gabarito%20Definitivo%20-%20Multi_Uniprofissional.pdf";

export const fgvReferences: FgvReference[] = [
  { id: "fgv-e1-1", topicId: "enfermagem-sus", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 1, label: "Modelo assistencial e trajetória do SUS", studyNote: "Compare modelo previdenciário, universalidade e organização histórica do sistema antes de conferir o item na fonte.", sourceUrl: ENARE_PDF },
  { id: "fgv-e1-2", topicId: "enfermagem-sus", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 3, label: "Organização interfederativa do SUS", studyNote: "Revise instrumentos de pactuação e a relação entre normas, responsabilidades e planejamento em saúde.", sourceUrl: ENARE_PDF },
  { id: "fgv-e2-1", topicId: "enfermagem-vigilancia", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 12, label: "Conceito e processo de vigilância em saúde", studyNote: "Organize o ciclo: coleta, consolidação, análise, disseminação e ação de saúde pública.", sourceUrl: ENARE_PDF },
  { id: "fgv-e2-2", topicId: "enfermagem-vigilancia", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 13, label: "Financiamento das ações de vigilância", studyNote: "Diferencie responsabilidades das esferas federativas e a lógica de financiamento da vigilância.", sourceUrl: ENARE_PDF },
  { id: "fgv-e3-1", topicId: "enfermagem-comunidade", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 6, label: "Apoio multiprofissional na Atenção Básica", studyNote: "Observe como o planejamento compartilhado se articula ao trabalho da equipe de referência.", sourceUrl: ENARE_PDF },
  { id: "fgv-e3-2", topicId: "enfermagem-comunidade", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 15, label: "Atenção à saúde em territórios específicos", studyNote: "Retome território, acesso, composição de equipe e coordenação do cuidado na Atenção Primária.", sourceUrl: ENARE_PDF },
  { id: "fgv-e3-3", topicId: "enfermagem-comunidade", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 16, label: "Registro e cuidado de populações vulnerabilizadas", studyNote: "Associe a modalidade assistencial ao sistema de informação e à continuidade do cuidado.", sourceUrl: ENARE_PDF },
  { id: "fgv-e4-1", topicId: "enfermagem-processo", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 22, label: "Etapas da Sistematização da Assistência", studyNote: "Diferencie coleta de dados, diagnóstico, planejamento, implementação e avaliação antes de resolver.", sourceUrl: ENARE_PDF },
  { id: "fgv-e4-2", topicId: "enfermagem-processo", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 24, label: "Individualização do cuidado", studyNote: "Avalie como sistematização, registro e necessidades singulares qualificam a tomada de decisão.", sourceUrl: ENARE_PDF },
  { id: "fgv-e4-3", topicId: "enfermagem-processo", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 26, label: "Classificações de intervenções e resultados", studyNote: "Separe linguagem diagnóstica, intervenção de Enfermagem, resultado esperado e diagnóstico médico.", sourceUrl: ENARE_PDF },
  { id: "fgv-e5-1", topicId: "enfermagem-mental", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 47, label: "Rede e cuidado em saúde mental", studyNote: "Use RAPS, vínculo, direitos e cuidado territorial como eixos de leitura do item externo.", sourceUrl: ENARE_PDF },
  { id: "fgv-e5-2", topicId: "enfermagem-mental", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 51, label: "CAPS e atenção psicossocial", studyNote: "Revise finalidade do serviço, articulação em rede e comunicação terapêutica.", sourceUrl: ENARE_PDF },
  { id: "fgv-e6-1", topicId: "enfermagem-adulto", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 37, label: "Cuidado ao adulto e idoso", studyNote: "Organize avaliação funcional, risco clínico, autonomia e continuidade assistencial.", sourceUrl: ENARE_PDF },
  { id: "fgv-e6-2", topicId: "enfermagem-adulto", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 54, label: "Envelhecimento e prioridades de cuidado", studyNote: "Diferencie alterações esperadas, agravos e objetivos funcionais no cuidado à pessoa idosa.", sourceUrl: ENARE_PDF },
  { id: "fgv-e6-3", topicId: "enfermagem-adulto", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 67, label: "Avaliação clínica no cuidado adulto", studyNote: "Retome sinais de gravidade, decisão por prioridade e registro de respostas ao cuidado.", sourceUrl: ENARE_PDF },
  { id: "fgv-e7-1", topicId: "enfermagem-materno", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 45, label: "Acompanhamento pré-natal", studyNote: "Revise acompanhamento, sinais de risco, educação em saúde e vínculo com a rede assistencial.", sourceUrl: ENARE_PDF },
  { id: "fgv-e7-2", topicId: "enfermagem-materno", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 55, label: "Aleitamento e saúde da criança", studyNote: "Conecte proteção, apoio e promoção do aleitamento às linhas de cuidado materno-infantil.", sourceUrl: ENARE_PDF },
  { id: "fgv-e7-3", topicId: "enfermagem-materno", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 83, label: "Cuidado pediátrico", studyNote: "Leia a situação priorizando idade, crescimento, desenvolvimento e sinais de alerta.", sourceUrl: ENARE_PDF },
  { id: "fgv-e8-1", topicId: "enfermagem-emergencia", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 29, label: "Priorização em situação aguda", studyNote: "Aplique avaliação inicial, identificação de ameaça à vida e sequência de intervenções seguras.", sourceUrl: ENARE_PDF },
  { id: "fgv-e8-2", topicId: "enfermagem-emergencia", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 52, label: "Atendimento de urgência", studyNote: "Organize a conduta por prioridade clínica, suporte e reavaliação do paciente.", sourceUrl: ENARE_PDF },
  { id: "fgv-e8-3", topicId: "enfermagem-emergencia", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 66, label: "Emergência e resposta rápida", studyNote: "Observe a relação entre reconhecimento precoce, intervenção e comunicação estruturada da equipe.", sourceUrl: ENARE_PDF },
  { id: "fgv-e10-1", topicId: "enfermagem-seguranca", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 17, label: "Risco biológico e NR 32", studyNote: "Diferencie classes de risco, meios de prevenção e o princípio de proteção do trabalhador.", sourceUrl: ENARE_PDF },
  { id: "fgv-e10-2", topicId: "enfermagem-seguranca", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 19, label: "Segurança do paciente", studyNote: "Revise identificação segura e a função de protocolos na prevenção de incidentes.", sourceUrl: ENARE_PDF },
  { id: "fgv-e10-3", topicId: "enfermagem-seguranca", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 40, label: "Central de Material e Esterilização", studyNote: "Retome fluxos, estrutura e processamento seguro de produtos para saúde.", sourceUrl: ENARE_PDF },
  { id: "fgv-e10-4", topicId: "enfermagem-seguranca", exam: "ENARE", year: "2024/2025", role: "Enfermagem · Tipo 1", questionNumber: 43, label: "Prevenção de eventos adversos", studyNote: "Identifique barreiras de segurança, protocolo e comunicação no cuidado cirúrgico e assistencial.", sourceUrl: ENARE_PDF },
  { id: "fgv-s1-1", topicId: "legislacao-sus", exam: "PMAM", year: "2021", role: "Oficial da PM – Enfermeiro · Tipo 2", questionNumber: 16, label: "Organização legal do SUS", studyNote: "Revise quem compõe o sistema e como se dá a participação complementar da iniciativa privada.", sourceUrl: PMAM_PDF },
  { id: "fgv-s1-2", topicId: "legislacao-sus", exam: "PMAM", year: "2021", role: "Oficial da PM – Enfermeiro · Tipo 2", questionNumber: 18, label: "Diretrizes constitucionais da saúde", studyNote: "Confronte atendimento integral, prevenção, descentralização e direção única no contexto do SUS.", sourceUrl: PMAM_PDF },
  { id: "fgv-s2-1", topicId: "legislacao-controle", exam: "PMAM", year: "2021", role: "Oficial da PM – Enfermeiro · Tipo 2", questionNumber: 19, label: "Conselhos e Conferências de Saúde", studyNote: "Diferencie natureza, periodicidade e atribuições das instâncias de participação social.", sourceUrl: PMAM_PDF },
  { id: "fgv-s3-1", topicId: "legislacao-leis", exam: "PMAM", year: "2021", role: "Oficial da PM – Enfermeiro · Tipo 2", questionNumber: 16, label: "Lei nº 8.080/1990", studyNote: "Revisite composição do SUS, administração direta e indireta e participação complementar.", sourceUrl: PMAM_PDF },
  { id: "fgv-s3-2", topicId: "legislacao-leis", exam: "PMAM", year: "2021", role: "Oficial da PM – Enfermeiro · Tipo 2", questionNumber: 19, label: "Lei nº 8.142/1990", studyNote: "Separe controle social de regras de transferências e relembre a lógica dos colegiados.", sourceUrl: PMAM_PDF },
  { id: "fgv-s4-1", topicId: "legislacao-politicas", exam: "PMAM", year: "2021", role: "Oficial da PM – Enfermeiro · Tipo 2", questionNumber: 21, label: "Humanização e transversalidade", studyNote: "Leia o item retomando comunicação, cogestão e corresponsabilização na produção do cuidado.", sourceUrl: PMAM_PDF },
  { id: "fgv-p1-1", topicId: "portugues-leitura", exam: "PMAM", year: "2021", role: "Oficial da PM – Enfermeiro · Tipo 2", questionNumber: 1, label: "Estrutura e interpretação de argumento", studyNote: "Identifique tese, público, efeito de sentido e relação entre partes antes de consultar a resposta oficial.", sourceUrl: PMAM_PDF },
  { id: "fgv-p1-2", topicId: "portugues-leitura", exam: "TCE-SE", year: "2015", role: "Enfermeiro · Tipo 2", questionNumber: 3, label: "Inferência em texto de opinião", studyNote: "Destaque a conclusão plausível e separe informação explícita de inferência sustentada pelo texto.", sourceUrl: TCESE_PDF },
  { id: "fgv-p2-1", topicId: "portugues-norma", exam: "PMAM", year: "2021", role: "Oficial da PM – Enfermeiro · Tipo 2", questionNumber: 10, label: "Estrutura frasal e adequação gramatical", studyNote: "Revise referência pronominal, concordância e efeitos da antecipação de termos.", sourceUrl: PMAM_PDF },
  { id: "fgv-p3-1", topicId: "portugues-sintaxe", exam: "PMAM", year: "2021", role: "Oficial da PM – Enfermeiro · Tipo 2", questionNumber: 8, label: "Valor de preposição", studyNote: "Diferencie exigência de regência e valor semântico acrescentado pela preposição.", sourceUrl: PMAM_PDF },
  { id: "fgv-p4-1", topicId: "portugues-reescrita", exam: "PMAM", year: "2021", role: "Oficial da PM – Enfermeiro · Tipo 2", questionNumber: 9, label: "Reescrita e preservação de sentido", studyNote: "Compare estrutura, tempo verbal e sentido global antes de escolher uma reformulação.", sourceUrl: PMAM_PDF },
];

type OfficialAnswer = "A" | "B" | "C" | "D" | "E";

export type FgvSimReference = FgvReference & { officialAnswer: OfficialAnswer };

const enareSimOfficialAnswers: Record<string, OfficialAnswer> = {
  "fgv-e1-2": "B",
  "fgv-e2-1": "A",
  "fgv-e2-2": "E",
  "fgv-e3-1": "C",
  "fgv-e3-3": "D",
  "fgv-e4-1": "A",
  "fgv-e4-2": "E",
  "fgv-e5-1": "D",
  "fgv-e5-2": "C",
  "fgv-e6-2": "E",
  "fgv-e6-3": "B",
  "fgv-e7-1": "A",
  "fgv-e7-2": "A",
  "fgv-e7-3": "C",
  "fgv-e8-1": "C",
  "fgv-e8-3": "C",
  "fgv-e10-1": "C",
  "fgv-e10-2": "D",
  "fgv-e10-3": "C",
  "fgv-e10-4": "A",
};

export const fgvEnareSimReferences: FgvSimReference[] = Object.entries(enareSimOfficialAnswers).map(([id, officialAnswer]) => {
  const reference = fgvReferences.find((item) => item.id === id);
  if (!reference) throw new Error(`Referência FGV não encontrada: ${id}`);
  return { ...reference, officialAnswer };
});
