/**
 * Direção de conteúdo: segunda prova integralmente autoral, inspirada em competências
 * analíticas de concursos. Não reproduz enunciados, alternativas ou gabaritos de provas externas.
 */
import type { Question } from "./learning-data";

export const fgvStyleQuestionBankV2: Question[] = [
  {
    id: "q-fgv-style-v2-e1-01", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Em reunião do Conselho Local de Saúde, moradores apontam dificuldade de acesso a consultas e trabalhadores relatam falta de informação sobre a demanda reprimida. Para que a participação social contribua para a gestão, a unidade deve:",
    alternatives: ["limitar a pauta aos comunicados já definidos pela chefia", "apresentar dados compreensíveis, escutar prioridades e pactuar encaminhamentos acompanháveis", "substituir a reunião por pesquisa de satisfação sem devolutiva", "impedir a presença de trabalhadores para evitar conflito de interesses", "transferir toda decisão ao nível central antes de registrar as demandas"], correctIndex: 1,
    explanation: "Participação qualificada exige informação acessível, escuta e devolutiva. O conselho não substitui a gestão, mas amplia a leitura de necessidades e o acompanhamento de encaminhamentos.",
  },
  {
    id: "q-fgv-style-v2-e1-02", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Ao receber recursos para ampliar uma ação de saúde, a enfermeira propõe escolher a intervenção apenas pelo número de pessoas atendidas no último mês. Uma análise mais consistente de prioridade deve acrescentar:",
    alternatives: ["a magnitude do problema, vulnerabilidades, efetividade esperada e recursos necessários", "a preferência individual do profissional com maior tempo de serviço", "a eliminação de indicadores para evitar comparações entre áreas", "a manutenção automática de toda ação realizada no período anterior", "a exclusão de grupos que demandem acompanhamento mais complexo"], correctIndex: 0,
    explanation: "Priorizar em saúde requer combinar magnitude, gravidade, vulnerabilidade, viabilidade e potencial de impacto. Volume de atendimentos, isoladamente, pode ocultar necessidades relevantes.",
  },
  {
    id: "q-fgv-style-v2-e2-01", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Ao conferir fichas de notificação, uma enfermeira identifica datas incompatíveis entre início de sintomas, atendimento e registro do caso. Antes de usar esses dados para uma curva temporal, é necessário:",
    alternatives: ["manter as datas como foram preenchidas para preservar o registro original", "excluir todos os casos com inconsistência sem investigação complementar", "verificar a consistência dos campos e corrigir ou qualificar a informação conforme o fluxo vigente", "considerar apenas a data de digitação para qualquer análise de tendência", "suspender a notificação até que o sistema seja substituído"], correctIndex: 2,
    explanation: "Qualidade da informação é parte da vigilância. Campos temporais inconsistentes podem distorcer a leitura de oportunidade e evolução de um evento; por isso, precisam ser verificados e qualificados.",
  },
  {
    id: "q-fgv-style-v2-e2-02", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Uma falha elétrica interrompe o monitoramento regular da temperatura de imunobiológicos. A resposta inicial mais segura é:",
    alternatives: ["seguir utilizando os produtos sem registrar o ocorrido", "descartar imediatamente todo o estoque sem qualquer avaliação", "acionar o plano de contingência, registrar a ocorrência e avaliar as condições de conservação antes do uso", "transferir os produtos para qualquer superfície disponível fora da unidade", "aguardar o próximo dia útil para comunicar a intercorrência"], correctIndex: 2,
    explanation: "Intercorrências na cadeia de frio exigem plano de contingência, registro e avaliação técnica antes da utilização. Decisões automáticas, sem observar tempo e condições de exposição, podem gerar perda ou risco desnecessários.",
  },
  {
    id: "q-fgv-style-v2-e3-01", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "Uma equipe de Saúde da Família pede apoio de outros profissionais para discutir casos complexos, mas pretende encaminhar todos os usuários para atendimento individual especializado. O apoio matricial é melhor caracterizado quando:",
    alternatives: ["substitui a equipe de referência no acompanhamento longitudinal", "funciona como consulta isolada, sem troca de saberes com a equipe", "compartilha análise e estratégias de cuidado, fortalecendo a capacidade da equipe de referência", "se limita à autorização de encaminhamentos para outros serviços", "ocorre apenas depois de esgotadas todas as possibilidades de tratamento hospitalar"], correctIndex: 2,
    explanation: "O apoio matricial favorece cuidado compartilhado e educação em serviço. Ele não rompe o vínculo da equipe de referência com a pessoa e com o território.",
  },
  {
    id: "q-fgv-style-v2-e3-02", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "Após alta hospitalar, uma pessoa retorna ao território com necessidade de curativo e dificuldades para organizar deslocamento. Para reduzir descontinuidade, a equipe deve:",
    alternatives: ["aguardar procura espontânea antes de programar qualquer contato", "articular o plano de saída com a rede, avaliar condições de acesso e definir seguimento compatível com a necessidade", "orientar retorno exclusivo ao hospital para qualquer dúvida futura", "priorizar apenas o procedimento técnico, sem considerar apoio familiar ou território", "encerrar o caso após registrar a alta no prontuário"], correctIndex: 1,
    explanation: "A transição do cuidado deve articular informação clínica, acesso, rede de apoio e responsabilidades de seguimento. O registro isolado não assegura continuidade.",
  },
  {
    id: "q-fgv-style-v2-e4-01", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "Ao organizar um plano de cuidado, a enfermeira identifica risco de lesão por pressão em pessoa com mobilidade muito reduzida. A formulação de um diagnóstico de risco exige, principalmente:",
    alternatives: ["a presença obrigatória de lesão instalada para ser registrada", "a identificação de fatores de vulnerabilidade que justifiquem intervenções preventivas", "a confirmação de diagnóstico médico específico antes de qualquer ação", "a substituição da avaliação clínica por escala isolada", "o encerramento da avaliação após a primeira prescrição"], correctIndex: 1,
    explanation: "Diagnósticos de risco orientam prevenção a partir de vulnerabilidades identificadas. Eles não dependem da ocorrência do dano e devem conduzir intervenções, monitoramento e reavaliação.",
  },
  {
    id: "q-fgv-style-v2-e4-02", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "Uma enfermeira observa que o plano de cuidados contém ações, mas não explicita resultados esperados nem critérios de reavaliação. A principal consequência dessa lacuna é:",
    alternatives: ["ampliar a objetividade da avaliação do cuidado", "impedir que a prescrição médica seja registrada", "dificultar a verificação da efetividade das intervenções e a revisão do plano", "eliminar a necessidade de comunicação entre turnos", "reduzir automaticamente o tempo destinado ao registro"], correctIndex: 2,
    explanation: "Resultados e critérios de avaliação permitem verificar se a intervenção produziu a resposta pretendida. Sem eles, o plano tende a se tornar uma lista de tarefas sem acompanhamento de efeito.",
  },
  {
    id: "q-fgv-style-v2-e5-01", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "Uma pessoa acompanhada no CAPS manifesta desejo de retomar atividades no território, mas a família teme que ela não consiga manter a rotina. A construção terapêutica mais coerente é:",
    alternatives: ["proibir qualquer atividade até que não haja mais sintomas relatados", "definir um projeto terapêutico singular com metas graduais, apoio em rede e reavaliação compartilhada", "transferir a decisão exclusivamente para os familiares", "substituir o plano de cuidado por internação preventiva imediata", "manter somente intervenções medicamentosas, sem atividades sociais"], correctIndex: 1,
    explanation: "O projeto terapêutico singular considera desejos, possibilidades, rede e acompanhamento progressivo. A reabilitação psicossocial busca ampliar autonomia com suporte, e não impor isolamento.",
  },
  {
    id: "q-fgv-style-v2-e5-02", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "Em consulta, uma pessoa relata sono excessivo após mudança recente de medicação e afirma que parou de tomá-la por conta própria. A conduta de Enfermagem deve:",
    alternatives: ["orientar retorno imediato ao uso sem ouvir os efeitos referidos", "validar a experiência, avaliar riscos, reforçar adesão informada e articular reavaliação com a equipe responsável", "confirmar que qualquer efeito adverso significa falha definitiva do tratamento", "sugerir que a pessoa escolha sozinha uma dose menor", "encerrar o acompanhamento por interrupção não autorizada"], correctIndex: 1,
    explanation: "A adesão exige escuta dos efeitos percebidos, orientação e comunicação com a equipe. A pessoa não deve ser culpabilizada; interrupções e riscos precisam ser avaliados de forma compartilhada e segura.",
  },
  {
    id: "q-fgv-style-v2-e6-01", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Uma pessoa com diabetes relata que tem perdido a sensibilidade nos pés e costuma caminhar descalça em casa. Na consulta de Enfermagem, a prioridade educativa deve incluir:",
    alternatives: ["apenas a redução de açúcar na alimentação, sem examinar os pés", "inspeção regular, proteção dos pés, reconhecimento de alterações e busca oportuna de avaliação", "suspensão de toda atividade física de forma permanente", "uso de calçados apenas quando houver ferida visível", "interrupção do tratamento medicamentoso até que a sensibilidade retorne"], correctIndex: 1,
    explanation: "Alteração de sensibilidade aumenta risco de lesões não percebidas. A prevenção integra inspeção, proteção, orientação sobre sinais de alerta e seguimento clínico, sem reduzir o cuidado a um único hábito.",
  },
  {
    id: "q-fgv-style-v2-e6-02", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Durante avaliação de pessoa com cateter urinário de demora, a equipe questiona se o dispositivo ainda é necessário. Essa revisão é relevante porque:",
    alternatives: ["a permanência deve seguir exclusivamente a preferência do turno", "o cateter elimina a necessidade de monitorar eliminações urinárias", "a indicação deve ser reavaliada para reduzir riscos associados ao uso prolongado e manter apenas o necessário", "a retirada exige substituir imediatamente por outro cateter de maior calibre", "o dispositivo deve ser mantido até a alta, independentemente da evolução"], correctIndex: 2,
    explanation: "Dispositivos invasivos demandam indicação e reavaliação contínuas. Manter apenas o necessário reduz exposição a riscos e reforça decisão baseada na situação clínica atual.",
  },
  {
    id: "q-fgv-style-v2-e7-01", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "Uma adolescente procura a unidade para conversar sobre contracepção e pede confidencialidade. Uma abordagem ética e acolhedora deve:",
    alternatives: ["recusar a escuta até que um responsável compareça obrigatoriamente", "oferecer informação compreensível, avaliar necessidades e respeitar os limites legais e éticos de confidencialidade", "restringir a conversa a métodos definidos previamente pela equipe", "encerrar o atendimento para evitar abordar tema considerado sensível", "divulgar a procura à comunidade para estimular prevenção"], correctIndex: 1,
    explanation: "O cuidado em saúde sexual exige acolhimento, informação e respeito à autonomia progressiva, observando marcos legais, proteção e necessidades individuais. Estigma e exposição reduzem acesso.",
  },
  {
    id: "q-fgv-style-v2-e7-02", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "Em atendimento infantil, o cuidador relata que a criança apresenta diarreia há um dia, está menos ativa e aceita pouco líquido. A prioridade inicial da enfermeira é:",
    alternatives: ["orientar retorno apenas se a diarreia durar uma semana", "avaliar estado geral, sinais de desidratação e capacidade de ingestão, definindo a conduta conforme gravidade", "restringir todos os líquidos para reduzir evacuações", "prescrever dieta fixa sem exame da criança", "considerar o quadro irrelevante por ter iniciado há pouco tempo"], correctIndex: 1,
    explanation: "Em quadros diarreicos, a avaliação do estado geral, hidratação e aceitação de líquidos orienta prioridade e conduta. Duração isolada não substitui reconhecimento de sinais de gravidade.",
  },
  {
    id: "q-fgv-style-v2-e8-01", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Durante atendimento de parada cardiorrespiratória, a enfermeira percebe pausas prolongadas entre as compressões por falta de organização da equipe. A medida que mais contribui para a qualidade do atendimento é:",
    alternatives: ["manter as pausas para que todos discutam cada conduta com calma", "organizar funções, comunicação em circuito fechado e compressões de qualidade com interrupções mínimas", "aguardar a presença de toda a equipe antes de iniciar manobras", "priorizar o registro completo antes das intervenções iniciais", "substituir reavaliações por uma única decisão ao começo do atendimento"], correctIndex: 1,
    explanation: "Situações críticas exigem organização de funções, comunicação clara e redução de interrupções em intervenções prioritárias. O trabalho em equipe melhora oportunidade e segurança.",
  },
  {
    id: "q-fgv-style-v2-e8-02", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Em serviço de urgência, duas pessoas chegam ao mesmo tempo: uma apresenta dor intensa com estabilidade clínica e outra tem dificuldade respiratória progressiva. A priorização deve considerar:",
    alternatives: ["a ordem de chegada como único critério de atendimento", "o relato de dor como sinal automaticamente mais grave que alterações respiratórias", "o risco de deterioração e as ameaças imediatas à vida, com reavaliação contínua", "a preferência do acompanhante sobre quem deve ser atendido primeiro", "a disponibilidade de prontuários completos antes da classificação"], correctIndex: 2,
    explanation: "Classificação de risco não se baseia apenas em ordem de chegada ou intensidade subjetiva. Prioriza ameaça à vida, potencial de deterioração e necessidade de intervenção imediata, com reavaliação.",
  },
  {
    id: "q-fgv-style-v2-e9-01", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Após treinamento sobre identificação segura, a enfermeira deseja saber se a prática realmente mudou na unidade. O indicador mais útil para essa avaliação é:",
    alternatives: ["quantidade de certificados emitidos ao fim da capacitação", "proporção de verificações de identificação realizadas conforme o protocolo em observações ou auditorias", "número de cadeiras ocupadas durante a aula", "tempo total de apresentação dos slides", "quantidade de mensagens enviadas pela chefia"], correctIndex: 1,
    explanation: "Avaliar educação permanente requer observar mudança de processo e aderência à prática segura. Participação no treinamento é relevante, mas não comprova por si só a incorporação do procedimento.",
  },
  {
    id: "q-fgv-style-v2-e9-02", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Uma técnica relata que recebeu orientação divergente de profissionais diferentes sobre a mesma rotina. Para qualificar o processo de trabalho, a liderança deve:",
    alternatives: ["manter orientações individuais para preservar autonomia de cada profissional", "padronizar a decisão com a equipe, registrar o fluxo e criar espaço de esclarecimento e atualização", "atribuir a divergência apenas à falta de atenção da trabalhadora", "proibir dúvidas durante o turno para evitar atrasos", "substituir toda comunicação por mensagens informais"], correctIndex: 1,
    explanation: "Processos seguros dependem de comunicação e fluxos compartilhados. Padronização construída com a equipe reduz variações injustificadas e favorece atualização consistente.",
  },
  {
    id: "q-fgv-style-v2-e10-01", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "Após realizar procedimento com luvas, uma profissional retira o equipamento e passa diretamente para outro atendimento sem higienizar as mãos. A falha é relevante porque:",
    alternatives: ["o uso de luvas substitui a higiene das mãos em qualquer situação", "a higiene das mãos é uma barreira básica e deve ocorrer nos momentos indicados, inclusive após retirar luvas", "luvas dispensam avaliação de risco de transmissão entre atendimentos", "a medida só é necessária quando há diagnóstico confirmado de infecção", "a prática de higiene deve ser evitada para reduzir ressecamento da pele"], correctIndex: 1,
    explanation: "Luvas não substituem higiene das mãos. A medida integra precauções-padrão e reduz risco de transmissão relacionada ao cuidado, devendo ser realizada nos momentos recomendados.",
  },
  {
    id: "q-fgv-style-v2-e10-02", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "Em auditoria interna, a equipe identifica que pacientes com nomes semelhantes tiveram seus documentos próximos durante a preparação de procedimentos. A barreira de segurança mais adequada é:",
    alternatives: ["confiar apenas no reconhecimento visual de quem realiza o atendimento", "usar identificadores padronizados e realizar conferência ativa antes do procedimento", "evitar registrar o nome para reduzir risco de exposição de dados", "manter a preparação sem interrupções, mesmo diante de dúvida sobre identificação", "solicitar que acompanhantes definam a identidade antes de cada etapa"], correctIndex: 1,
    explanation: "Identificação segura requer conferência ativa com identificadores padronizados antes de procedimentos e administração de cuidados. Reconhecimento visual e suposições não funcionam como barreiras confiáveis.",
  },
];
