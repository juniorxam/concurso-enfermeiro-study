/**
 * Direção de conteúdo: simulador inteiramente autoral, inspirado apenas em competências
 * analíticas recorrentes da FGV. Nenhum enunciado, alternativa ou gabarito de prova externa é reproduzido.
 */
import type { Question } from "./learning-data";

export const fgvStyleQuestionBank: Question[] = [
  {
    id: "q-fgv-style-e1-01", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Ao analisar faltas sucessivas de pessoas com hipertensão em uma unidade, a enfermeira observa que os horários de consulta coincidem com o transporte disponível apenas para bairros mais distantes. A decisão mais consistente com planejamento situacional é:",
    alternatives: ["manter a agenda porque a adesão depende exclusivamente do usuário", "cancelar o acompanhamento das pessoas com maior número de faltas", "cruzar os dados de acesso com o território e testar alternativas de horário ou busca ativa", "transferir o seguimento integralmente ao serviço especializado", "substituir consultas programadas por distribuição eventual de medicamentos"], correctIndex: 2,
    explanation: "O dado territorial aponta uma barreira concreta de acesso. O planejamento qualificado investiga causas, reorganiza a oferta e monitora o efeito da estratégia, sem atribuir o problema apenas ao usuário.",
  },
  {
    id: "q-fgv-style-e1-02", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Uma usuária retorna à unidade após atendimento especializado com mudanças no tratamento, mas não recebeu orientação sobre continuidade do acompanhamento. Para evitar fragmentação do cuidado, a equipe deve priorizar:",
    alternatives: ["registrar apenas a data do atendimento especializado", "reconstruir o plano terapêutico com a usuária e pactuar o seguimento na rede", "aguardar nova intercorrência antes de rever o plano de cuidados", "orientar que a usuária escolha livremente um único serviço para acompanhá-la", "encerrar o vínculo da atenção primária diante da conduta especializada"], correctIndex: 1,
    explanation: "A coordenação do cuidado exige incorporar a informação de outros pontos da rede ao plano da pessoa, com referência, contrarreferência e acompanhamento longitudinal pela atenção primária.",
  },
  {
    id: "q-fgv-style-e2-01", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Em três dias, uma equipe identifica aumento de casos com sintomas semelhantes em uma mesma área adscrita. Ainda não há confirmação da causa. A conduta que melhor articula vigilância e cuidado oportuno é:",
    alternatives: ["divulgar uma causa definitiva para orientar a população rapidamente", "aguardar o encerramento de todos os casos antes de registrar informações", "organizar os dados, notificar conforme o fluxo aplicável e iniciar investigação com medidas proporcionais ao risco", "encaminhar apenas os casos graves e arquivar os demais registros", "suspender toda atividade da unidade até que haja resultado laboratorial"], correctIndex: 2,
    explanation: "A vigilância trabalha com detecção, registro, investigação e resposta oportuna. Medidas de proteção podem ser iniciadas de modo proporcional enquanto a hipótese causal é confirmada.",
  },
  {
    id: "q-fgv-style-e2-02", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "A cobertura vacinal de um território parece elevada quando se considera o total da unidade, mas microáreas específicas têm faltosos recorrentes. Para interpretar adequadamente o cenário, a equipe deve:",
    alternatives: ["considerar o indicador global suficiente para encerrar a análise", "desagregar os dados por microárea e relacioná-los às barreiras de acesso e aos registros nominais", "atribuir a diferença exclusivamente à hesitação vacinal das famílias", "realizar vacinação apenas para quem procurar espontaneamente a unidade", "substituir a conferência de esquemas pela compra de maior estoque"], correctIndex: 1,
    explanation: "A média global pode ocultar iniquidades. A análise territorial e nominal identifica grupos com menor acesso e orienta busca ativa, comunicação e organização da oferta.",
  },
  {
    id: "q-fgv-style-e3-01", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "Na primeira visita de assistência domiciliar, a enfermeira identifica que a técnica proposta é clinicamente indicada, mas o cuidador demonstra insegurança e o domicílio não dispõe de local adequado para organizar os materiais. O plano seguro deve:",
    alternatives: ["prescrever a técnica e transferir toda a responsabilidade ao cuidador", "substituir a visita por orientação telefônica para reduzir custos", "demonstrar a técnica, verificar o retorno demonstrativo e adaptar o plano às condições reais do domicílio", "suspender todo o cuidado até que a família adquira equipamentos hospitalares", "manter a orientação original para evitar variações de conduta"], correctIndex: 2,
    explanation: "A assistência domiciliar combina indicação clínica, capacidade do cuidador, ambiente, rede de apoio e articulação com a equipe. O retorno demonstrativo permite verificar compreensão e segurança.",
  },
  {
    id: "q-fgv-style-e3-02", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "Ao planejar uma atividade coletiva, a equipe pretende discutir autocuidado com pessoas que abandonaram o seguimento de condição crônica. A escolha que aumenta a chance de vínculo e participação é:",
    alternatives: ["definir o conteúdo exclusivamente pelo protocolo, sem ouvir o grupo", "utilizar exposição longa e impedir interrupções para preservar o tempo", "construir a abordagem a partir das dificuldades relatadas e das condições do território", "restringir o convite às pessoas que já apresentam adesão regular", "substituir o encontro por um comunicado geral de advertência"], correctIndex: 2,
    explanation: "Práticas coletivas ganham efetividade quando reconhecem necessidades concretas, linguagem acessível e contexto territorial. O grupo não é apenas um canal de transmissão de informações.",
  },
  {
    id: "q-fgv-style-e4-01", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "Após avaliar uma pessoa com dispneia, fadiga e limitação para atividades habituais, a enfermeira registra dados, formula um julgamento clínico de Enfermagem e define resultados mensuráveis para reavaliação. A etapa descrita evidencia que o processo de Enfermagem:",
    alternatives: ["substitui a avaliação médica de diagnóstico etiológico", "articula coleta de dados, julgamento profissional e planejamento de cuidado avaliável", "se restringe ao preenchimento de formulários após a consulta", "dispensa registro quando a pessoa já possui tratamento prescrito", "ocorre somente em unidades de internação hospitalar"], correctIndex: 1,
    explanation: "O processo de Enfermagem estrutura o raciocínio clínico da profissão. Ele não substitui outros diagnósticos, mas orienta problemas, resultados, intervenções, registro e avaliação contínua.",
  },
  {
    id: "q-fgv-style-e4-02", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "Durante discussão de caso, a equipe propõe como resultado esperado “a pessoa demonstrará técnica correta de autocuidado antes da alta”. Essa formulação é mais adequadamente classificada como:",
    alternatives: ["dado subjetivo obtido na entrevista", "diagnóstico médico que explica a condição clínica", "resultado de Enfermagem passível de acompanhamento", "prescrição de medicamento de uso contínuo", "procedimento administrativo de encerramento"], correctIndex: 2,
    explanation: "Resultados de Enfermagem descrevem respostas esperadas e observáveis. Eles orientam a avaliação do efeito das intervenções e não se confundem com diagnóstico médico ou dado de avaliação.",
  },
  {
    id: "q-fgv-style-e5-01", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "Em acolhimento no serviço de saúde mental, uma pessoa apresenta grande agitação verbal, refere medo e recusa aproximação física. A primeira conduta de Enfermagem deve buscar:",
    alternatives: ["confrontar imediatamente as crenças relatadas para interromper a agitação", "reduzir estímulos, manter comunicação clara, avaliar risco e construir aproximação segura", "realizar contenção física como resposta inicial a qualquer recusa", "encerrar o acolhimento até que a pessoa se comunique de forma organizada", "transferir toda a situação para a família sem avaliação profissional"], correctIndex: 1,
    explanation: "O cuidado inicial prioriza segurança, escuta, ambiente menos estimulante e avaliação de risco. Medidas restritivas não substituem abordagem terapêutica e devem obedecer indicação, proporcionalidade e protocolo.",
  },
  {
    id: "q-fgv-style-e5-02", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "Uma pessoa afirma ouvir vozes e pergunta se a enfermeira também as escuta. Uma resposta terapêutica, sem validar ou confrontar diretamente a experiência, é:",
    alternatives: ["“Isso é impossível; você precisa parar de pensar nisso.”", "“Eu também escuto as vozes e sei o que elas querem.”", "“Eu não percebo essas vozes, mas entendo que isso pode ser muito angustiante; podemos conversar sobre como você está se sentindo?”", "“Não fale mais sobre isso para não reforçar o problema.”", "“Somente um familiar pode responder a essa pergunta.”"], correctIndex: 2,
    explanation: "A comunicação terapêutica reconhece o sofrimento sem confirmar como fato uma percepção não compartilhada. A resposta favorece vínculo, avaliação e estratégias de manejo.",
  },
  {
    id: "q-fgv-style-e6-01", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Uma pessoa idosa relata queda recente ao levantar-se durante a noite. Na avaliação, usa vários medicamentos e refere tontura postural. A intervenção inicial mais coerente é:",
    alternatives: ["atribuir a queda exclusivamente ao envelhecimento e evitar novas investigações", "avaliar fatores intrínsecos e ambientais, revisar o risco e pactuar medidas de prevenção com a pessoa", "orientar repouso permanente para eliminar todo risco de queda", "suspender por conta própria todos os medicamentos em uso", "restringir o cuidado à solicitação de exame de imagem"], correctIndex: 1,
    explanation: "Prevenção de quedas exige avaliação multifatorial: sintomas, medicamentos, mobilidade, ambiente e contexto. A intervenção deve preservar autonomia com segurança, e não produzir imobilização indiscriminada.",
  },
  {
    id: "q-fgv-style-e6-02", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "No período pós-operatório, uma pessoa relata dor intensa, palidez e piora progressiva do mal-estar. Antes de interpretar o quadro apenas como desconforto esperado, a enfermeira deve:",
    alternatives: ["oferecer líquidos e aguardar a próxima prescrição médica", "registrar a queixa para discussão apenas ao final do plantão", "realizar avaliação clínica imediata, identificar sinais de gravidade e acionar o fluxo assistencial necessário", "normalizar a manifestação porque a dor é comum após cirurgia", "suspender todos os dispositivos sem nova avaliação"], correctIndex: 2,
    explanation: "A mudança clínica no pós-operatório requer avaliação e priorização imediatas. Reconhecer sinais de instabilidade permite acionar precocemente a equipe e reduzir atraso em intervenções necessárias.",
  },
  {
    id: "q-fgv-style-e7-01", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "Em consulta pré-natal, uma gestante informa redução importante da percepção habitual de movimentos fetais. Considerando a escuta qualificada e a segurança do cuidado, a enfermeira deve:",
    alternatives: ["orientar que aguarde alguns dias antes de procurar novo atendimento", "registrar a informação, realizar a avaliação pertinente e providenciar encaminhamento oportuno conforme o risco identificado", "atribuir a queixa exclusivamente à ansiedade da gestante", "suspender o acompanhamento até a próxima consulta agendada", "substituir a avaliação por orientação genérica de repouso"], correctIndex: 1,
    explanation: "Queixas de possível alteração no bem-estar fetal exigem escuta, avaliação e encaminhamento oportunos de acordo com protocolos e rede local. A resposta não deve banalizar nem postergar o achado.",
  },
  {
    id: "q-fgv-style-e7-02", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "No puerpério, uma mãe refere dor ao amamentar e diz que o bebê realiza sucções curtas e frequentes. A conduta educativa mais adequada é:",
    alternatives: ["orientar interrupção definitiva do aleitamento até desaparecer qualquer desconforto", "avaliar mamada, posição e pega, oferecendo apoio prático e reavaliando a resposta", "substituir toda alimentação do bebê sem examinar a situação", "atribuir a dor à falta de tolerância materna e encerrar a consulta", "indicar oferta rotineira de outros líquidos para reduzir as mamadas"], correctIndex: 1,
    explanation: "O manejo inicial envolve observação da mamada e apoio à posição e à pega, preservando acolhimento e segurança. A queixa deve ser avaliada no contexto da dupla mãe-bebê.",
  },
  {
    id: "q-fgv-style-e8-01", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "No acolhimento de uma pessoa após trauma, a equipe encontra ruído respiratório, esforço para respirar e pele fria. A prioridade inicial deve ser organizada de modo a:",
    alternatives: ["coletar histórico completo antes de qualquer intervenção", "definir o leito de internação antes de avaliar sinais clínicos", "reconhecer e manejar primeiro ameaças imediatas à via aérea, respiração e circulação", "iniciar educação em saúde para o período após a alta", "aguardar exames complementares para iniciar qualquer suporte"], correctIndex: 2,
    explanation: "A abordagem inicial de situações críticas segue prioridades de ameaça à vida. Via aérea, respiração e circulação precisam ser avaliadas e manejadas antes de etapas complementares.",
  },
  {
    id: "q-fgv-style-e8-02", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Uma pessoa em observação evolui com rebaixamento do nível de consciência, respiração irregular e sinais de piora hemodinâmica. A atuação segura da enfermeira é:",
    alternatives: ["manter observação passiva até a avaliação programada", "priorizar reconhecimento da deterioração, suporte inicial e acionamento rápido da equipe conforme protocolo", "transferir a responsabilidade exclusivamente para o acompanhante", "oferecer alimentação para recuperar o nível de consciência", "aguardar a próxima troca de plantão para relatar a evolução"], correctIndex: 1,
    explanation: "Deterioração clínica pede reconhecimento precoce, intervenção inicial e comunicação estruturada. A demora em acionar suporte pode ampliar o risco de eventos graves.",
  },
  {
    id: "q-fgv-style-e9-01", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Ao perceber sobrecarga recorrente em determinado turno, a enfermeira pretende rever a distribuição de profissionais. Para fundamentar uma decisão tecnicamente defensável, deve considerar principalmente:",
    alternatives: ["preferências individuais sem observar a demanda assistencial", "grau de dependência das pessoas atendidas, carga de trabalho, competências e características do serviço", "somente o número absoluto de leitos da unidade", "a escala do mês anterior como único parâmetro", "a possibilidade de manter todas as tarefas sem priorização"], correctIndex: 1,
    explanation: "Dimensionamento e distribuição de equipe consideram carga de trabalho, complexidade, necessidades de cuidado e competências. O simples número de leitos não representa sozinho a demanda real.",
  },
  {
    id: "q-fgv-style-e9-02", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Após um incidente sem dano, a equipe propõe identificar quem “errou” para evitar repetição. Uma abordagem de qualidade mais consistente é:",
    alternatives: ["atribuir culpa individual antes de examinar o processo de trabalho", "omitir o evento para evitar desgaste da equipe", "analisar barreiras, condições do sistema, comunicação e oportunidades de melhoria", "proibir o relato de novos incidentes até encerrar a apuração", "concentrar a resposta em punição administrativa imediata"], correctIndex: 2,
    explanation: "A cultura de segurança aprende com eventos e quase eventos ao analisar o sistema, as barreiras e a comunicação. A responsabilização justa não se confunde com busca automática de culpados.",
  },
  {
    id: "q-fgv-style-e10-01", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "Um instrumento utilizado em procedimento invasivo entrará novamente em contato com tecido estéril. Para reduzir risco assistencial, a equipe deve assegurar que o processamento:",
    alternatives: ["se limite à limpeza visual quando não houver sujeira aparente", "seja definido pela criticidade do artigo e inclua as etapas compatíveis com seu uso seguro", "ocorra somente ao final da semana para otimizar o setor", "dispense rastreabilidade quando o material for reutilizável", "substitua a inspeção por embalagem de qualquer tipo"], correctIndex: 1,
    explanation: "O processamento de produtos para saúde é definido pelo risco e pelo uso previsto. Limpeza, inspeção, preparo e método adequado precisam formar um fluxo rastreável e seguro.",
  },
  {
    id: "q-fgv-style-e10-02", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "Durante o descarte de material perfurocortante, uma trabalhadora sofre exposição acidental. A conduta imediata coerente com biossegurança é:",
    alternatives: ["comprimir intensamente o local para provocar sangramento", "ocultar o acidente para evitar interrupção da atividade", "realizar os cuidados locais indicados, comunicar o evento e seguir prontamente o protocolo institucional de avaliação", "aguardar o aparecimento de sintomas antes de buscar orientação", "descartar o material em recipiente comum para concluir o atendimento"], correctIndex: 2,
    explanation: "Exposição ocupacional requer cuidado local adequado, comunicação imediata e seguimento do protocolo institucional. O registro e a avaliação oportuna protegem o trabalhador e qualificam a prevenção.",
  },
];
