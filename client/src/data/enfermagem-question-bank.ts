/**
 * Direção de conteúdo: itens integralmente autorais, com cinco alternativas e foco em
 * decisão profissional. A complexidade é calibrada por referência de estilo FGV, sem reprodução.
 */
import type { Question } from "./learning-data";

export const enfermagemQuestionBank: Question[] = [
  // E1 — SUS, políticas e planejamento em saúde
  {
    id: "q-enf-sus-01", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Em uma região de saúde, uma pessoa com condição crônica passa da unidade de saúde da família para consulta especializada e retorna com plano terapêutico atualizado. A conduta que melhor sustenta a continuidade do cuidado é:",
    alternatives: ["encerrar o acompanhamento na atenção primária após o encaminhamento", "manter referência e contrarreferência, com acompanhamento compartilhado pela rede", "transferir todas as decisões para o serviço especializado", "restringir o acesso da pessoa à unidade de origem", "registrar somente o procedimento realizado no serviço de destino"], correctIndex: 1,
    explanation: "A rede deve articular referência e contrarreferência. A atenção primária permanece responsável pela coordenação e pela continuidade do cuidado no território.",
  },
  {
    id: "q-enf-sus-02", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Ao iniciar o planejamento anual de enfermagem de uma unidade, a etapa que mais qualifica a escolha de prioridades é:",
    alternatives: ["definir ações antes de conhecer a realidade local", "usar apenas a experiência pessoal da chefia", "analisar situação de saúde, recursos, demandas e indicadores do território", "repetir integralmente o plano do ano anterior", "concentrar o plano em procedimentos de maior custo"], correctIndex: 2,
    explanation: "O planejamento situacional começa pela análise da realidade, identificando necessidades, recursos disponíveis e problemas prioritários antes da definição das ações.",
  },
  {
    id: "q-enf-sus-03", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Uma equipe identificou faltas frequentes em consultas de acompanhamento. Para investigar o problema de modo coerente com o planejamento em saúde, deve inicialmente:",
    alternatives: ["atribuir as ausências exclusivamente à falta de interesse dos usuários", "suspender os agendamentos do grupo com maior falta", "cruzar dados de acesso, território, horários, comunicação e barreiras relatadas", "substituir o acompanhamento por atendimento eventual", "aplicar advertência coletiva aos usuários"], correctIndex: 2,
    explanation: "A investigação deve considerar barreiras de acesso e características do território. Atribuições individuais sem análise de dados não orientam intervenções efetivas.",
  },
  {
    id: "q-enf-sus-04", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "No planejamento de recursos materiais, uma medida que reduz risco de desabastecimento sem gerar estoque excessivo é:",
    alternatives: ["solicitar o maior volume possível de todos os materiais", "relacionar consumo histórico, sazonalidade, prazo de entrega e estoque disponível", "repor materiais apenas quando o estoque estiver zerado", "delegar o controle exclusivamente ao almoxarifado central", "substituir materiais sem avaliar indicação e segurança"], correctIndex: 1,
    explanation: "A previsão de materiais integra consumo, variações da demanda, estoque atual e prazo de reposição, favorecendo uso racional e segurança assistencial.",
  },
  {
    id: "q-enf-sus-05", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Uma usuária solicita explicações sobre o tratamento proposto e manifesta preferência por participar da decisão. A atitude mais compatível com os direitos dos usuários do SUS é:",
    alternatives: ["oferecer informação compreensível e considerar sua participação na decisão", "informar que apenas a equipe pode decidir sobre o cuidado", "fornecer somente termos técnicos para preservar a precisão", "adiar toda explicação até o fim do tratamento", "limitar a conversa aos procedimentos já autorizados"], correctIndex: 0,
    explanation: "Informação clara, respeito à autonomia e participação nas decisões são componentes de um cuidado orientado por direitos e por vínculo ético.",
  },
  {
    id: "q-enf-sus-06", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Para avaliar se uma ação educativa de prevenção alcançou o público inicialmente definido, o indicador mais diretamente relacionado ao alcance é:",
    alternatives: ["quantidade de cadeiras disponíveis na sala", "proporção do público-alvo que participou da ação", "idade média dos profissionais da equipe", "custo unitário do material gráfico", "número total de serviços do município"], correctIndex: 1,
    explanation: "O alcance é estimado pela relação entre participantes e população-alvo. Outros dados podem ser úteis, mas não respondem diretamente à cobertura da ação.",
  },
  {
    id: "q-enf-sus-07", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Em reunião de planejamento, profissionais e usuários apontam que a mesma família procura repetidamente serviços distintos para a mesma necessidade. Esse achado sugere fragilidade principalmente na:",
    alternatives: ["continuidade e coordenação do cuidado na rede", "existência de equipamentos hospitalares de alta tecnologia", "padronização da identidade visual dos serviços", "duração das reuniões administrativas", "quantidade de formulários preenchidos"], correctIndex: 0,
    explanation: "A procura repetida e desarticulada sinaliza dificuldade de coordenação entre pontos da rede e de acompanhamento longitudinal das necessidades da família.",
  },
  {
    id: "q-enf-sus-08", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "A gestão participativa de uma unidade é fortalecida quando a enfermeira:",
    alternatives: ["centraliza decisões para ganhar rapidez", "compartilha informações, escuta trabalhadores e pactua responsabilidades", "evita discutir problemas para não gerar conflito", "substitui reuniões por comunicados unilaterais", "atribui metas sem considerar condições de trabalho"], correctIndex: 1,
    explanation: "A gestão participativa exige transparência, escuta e corresponsabilização. Isso não elimina a função de coordenação, mas qualifica as decisões coletivas.",
  },
  {
    id: "q-enf-sus-09", subjectId: "enfermagem", topicId: "enfermagem-sus",
    statement: "Ao comparar resultados planejados e alcançados, a equipe concluiu que uma meta não foi atingida. A ação mais adequada no ciclo de gestão é:",
    alternatives: ["descartar o indicador para evitar avaliação negativa", "manter o plano inalterado até o fim do período", "analisar causas, ajustar estratégias e monitorar novo plano de ação", "atribuir o resultado a um único trabalhador", "suspender o registro de resultados futuros"], correctIndex: 2,
    explanation: "Avaliação produz aprendizagem para o planejamento. Diante de resultados insuficientes, a equipe deve analisar causas, revisar estratégias e acompanhar os efeitos do ajuste.",
  },

  // E2 — Vigilância em saúde e imunização
  {
    id: "q-enf-vig-01", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Uma unidade detecta aumento inesperado de casos com sintomas semelhantes em um mesmo bairro. Antes de concluir a origem do evento, a equipe deve:",
    alternatives: ["divulgar uma causa definitiva sem investigação", "organizar dados, notificar conforme o agravo, investigar e desencadear medidas oportunas", "aguardar o fim dos sintomas em todos os casos", "encaminhar todos os registros para arquivo sem análise", "interromper a comunicação com o território"], correctIndex: 1,
    explanation: "A vigilância exige detecção, registro, investigação e resposta. Ações oportunas podem ser iniciadas enquanto a hipótese causal é confirmada.",
  },
  {
    id: "q-enf-vig-02", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Na busca por melhorar uma cobertura vacinal baixa, a medida mais consistente é:",
    alternatives: ["avaliar apenas a quantidade de doses armazenadas", "identificar grupos com menor acesso, revisar registros e planejar estratégias territoriais", "suspender a vacinação até alcançar mais profissionais", "considerar que a ausência de procura elimina a necessidade de ação", "realizar campanha sem definir população-alvo"], correctIndex: 1,
    explanation: "Cobertura vacinal é influenciada por acesso, informação, registros e características do território. A resposta deve ser orientada por dados e população-alvo.",
  },
  {
    id: "q-enf-vig-03", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Após a administração de imunobiológico, uma pessoa apresenta sinal clínico inesperado. A conduta inicial da equipe deve priorizar:",
    alternatives: ["negar qualquer relação possível sem registro", "avaliar clinicamente, registrar, orientar e seguir o fluxo de notificação e investigação aplicável", "interromper definitivamente todo o calendário vacinal da comunidade", "medicar sem avaliação ou documentação", "aguardar manifestações em outros usuários antes de agir"], correctIndex: 1,
    explanation: "Eventos após vacinação requerem acolhimento, avaliação, registro e seguimento no fluxo apropriado. A investigação evita conclusões precipitadas e protege o usuário.",
  },
  {
    id: "q-enf-vig-04", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Um indicador de incidência é mais útil quando a equipe pretende acompanhar:",
    alternatives: ["novos casos em uma população e período definidos", "todos os atendimentos históricos do serviço", "apenas os óbitos registrados no hospital", "somente os recursos materiais consumidos", "o número de profissionais contratados"], correctIndex: 0,
    explanation: "Incidência expressa a ocorrência de novos casos em uma população sob risco durante determinado período, apoiando a leitura da dinâmica de agravos.",
  },
  {
    id: "q-enf-vig-05", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Em relação às doenças e agravos não transmissíveis, uma estratégia de vigilância adequada inclui:",
    alternatives: ["monitorar fatores de risco e tendências para orientar promoção e prevenção", "atuar somente depois de internações recorrentes", "limitar dados aos eventos infecciosos", "desconsiderar hábitos, ambiente e condições sociais", "substituir ações coletivas por atendimento exclusivamente hospitalar"], correctIndex: 0,
    explanation: "A vigilância de agravos não transmissíveis acompanha tendências e fatores de risco para orientar políticas e ações de promoção da saúde.",
  },
  {
    id: "q-enf-vig-06", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Durante visita ao território, a equipe identifica pessoas com esquema vacinal incompleto. A ação de busca ativa é justificada porque:",
    alternatives: ["substitui todos os atendimentos da unidade", "amplia oportunidade de proteção em grupos com barreiras de acesso", "elimina a necessidade de registro nominal", "permite vacinar sem considerar condições clínicas", "dispensa a organização da cadeia de frio"], correctIndex: 1,
    explanation: "A busca ativa reduz barreiras de acesso e favorece atualização do esquema, mantendo os demais requisitos técnicos, clínicos e de registro.",
  },
  {
    id: "q-enf-vig-07", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Uma base de dados tem fichas com data de início de sintomas ausente em parte dos casos. O principal risco para a vigilância é:",
    alternatives: ["melhorar automaticamente a precisão das curvas temporais", "dificultar a análise da oportunidade e da evolução do evento", "substituir a necessidade de investigação de campo", "aumentar a validade das conclusões sem revisão", "dispensar a conferência de consistência dos registros"], correctIndex: 1,
    explanation: "Dados incompletos prejudicam a análise temporal, a oportunidade da resposta e a interpretação do comportamento do agravo.",
  },
  {
    id: "q-enf-vig-08", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "Na comunicação de risco com a comunidade diante de um agravo em investigação, a equipe deve:",
    alternatives: ["usar linguagem clara, informar medidas de proteção e evitar especulações", "omitir toda informação até o encerramento do evento", "confirmar hipóteses ainda não investigadas", "transmitir apenas termos técnicos para evitar perguntas", "responsabilizar publicamente indivíduos do território"], correctIndex: 0,
    explanation: "A comunicação de risco deve ser transparente, compreensível e proporcional às evidências disponíveis, orientando proteção sem estigmatizar pessoas ou comunidades.",
  },
  {
    id: "q-enf-vig-09", subjectId: "enfermagem", topicId: "enfermagem-vigilancia",
    statement: "O monitoramento da temperatura de armazenamento de imunobiológicos tem por objetivo principal:",
    alternatives: ["registrar apenas a rotina administrativa", "preservar condições adequadas para a qualidade dos produtos", "reduzir a necessidade de conferir validade", "substituir a avaliação do usuário antes da vacinação", "eliminar a necessidade de plano de contingência"], correctIndex: 1,
    explanation: "O controle das condições de armazenamento protege a qualidade dos imunobiológicos. Ele integra uma rotina que também inclui validade, organização e contingência.",
  },

  // E3 — Modalidades assistenciais e território
  {
    id: "q-enf-com-01", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "Em assistência domiciliar, a definição do plano de cuidado deve considerar, além da condição clínica da pessoa:",
    alternatives: ["somente a disponibilidade de leito hospitalar", "rede de apoio, segurança do domicílio, capacidade do cuidador e articulação com a equipe", "preferência exclusiva do profissional que realiza a visita", "apenas a idade cronológica da pessoa atendida", "a substituição de todo cuidado familiar pela equipe"], correctIndex: 1,
    explanation: "A assistência domiciliar requer avaliação clínica, contexto familiar, ambiente, cuidador e integração com a rede para que o plano seja seguro e exequível.",
  },
  {
    id: "q-enf-com-02", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "A territorialização na Estratégia Saúde da Família contribui para o cuidado porque permite:",
    alternatives: ["atender sem conhecer a população adscrita", "reconhecer necessidades, vulnerabilidades, recursos e prioridades de uma população definida", "restringir o vínculo aos atendimentos agendados", "eliminar ações coletivas e visitas domiciliares", "substituir registros por impressões pessoais"], correctIndex: 1,
    explanation: "Conhecer o território orienta planejamento, busca ativa, ações coletivas e acompanhamento de grupos ou pessoas em maior vulnerabilidade.",
  },
  {
    id: "q-enf-com-03", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "Um grupo educativo sobre autocuidado terá maior potencial de participação quando a equipe:",
    alternatives: ["define temas sem ouvir as necessidades do grupo", "usa linguagem acessível e constrói a atividade a partir de problemas relevantes para os participantes", "mantém exposição longa sem espaço para perguntas", "exclui usuários com experiências diferentes", "concentra a atividade em normas punitivas"], correctIndex: 1,
    explanation: "Trabalho em grupo é mais efetivo quando parte de necessidades reais, favorece diálogo e reconhece os participantes como sujeitos ativos do processo.",
  },
  {
    id: "q-enf-com-04", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "A modalidade hospital-dia pode ser indicada quando há necessidade de cuidado programado e intensivo, mas a pessoa mantém condições de:",
    alternatives: ["permanecer sem qualquer acompanhamento após o procedimento", "retornar ao domicílio com plano de seguimento e suporte compatível", "substituir toda a atenção primária do território", "internar obrigatoriamente por período indeterminado", "dispensar avaliação multiprofissional"], correctIndex: 1,
    explanation: "O hospital-dia articula cuidado programado e retorno ao domicílio quando há condições clínicas e suporte para continuidade do acompanhamento.",
  },
  {
    id: "q-enf-com-05", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "Durante visita domiciliar, a enfermeira identifica dificuldade do cuidador em executar uma orientação. A conduta mais adequada é:",
    alternatives: ["repetir a orientação de modo mais técnico e encerrar a visita", "demonstrar, solicitar retorno demonstrativo e ajustar a orientação à realidade do domicílio", "registrar incapacidade do cuidador sem oferecer apoio", "transferir imediatamente toda responsabilidade para outro familiar", "evitar abordar o tema para não constranger"], correctIndex: 1,
    explanation: "A educação no domicílio precisa ser demonstrada, compreendida e adaptada às condições reais. O retorno demonstrativo ajuda a verificar segurança e entendimento.",
  },
  {
    id: "q-enf-com-06", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "A coordenação do cuidado na Atenção Primária é fortalecida quando a equipe:",
    alternatives: ["acompanha encaminhamentos e atualiza o plano após o retorno de outros serviços", "considera o encaminhamento como encerramento do vínculo", "atua somente em demandas agudas", "evita contato com serviços especializados", "limita registros aos procedimentos técnicos"], correctIndex: 0,
    explanation: "A atenção primária coordena o percurso do usuário, acompanha os encaminhamentos e incorpora os retornos dos demais pontos da rede ao plano de cuidado.",
  },
  {
    id: "q-enf-com-07", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "Uma ação comunitária sobre alimentação saudável deve ser planejada, preferencialmente, com:",
    alternatives: ["orientações isoladas, sem relação com disponibilidade de alimentos no território", "participação de atores locais e consideração de hábitos, acesso e condições sociais", "proibição de perguntas sobre dificuldades cotidianas", "substituição de toda alimentação familiar por prescrições padronizadas", "foco exclusivo em dados laboratoriais individuais"], correctIndex: 1,
    explanation: "Promoção da saúde no território considera hábitos, acesso e contexto social, favorecendo ações mais viáveis e articuladas a recursos comunitários.",
  },
  {
    id: "q-enf-com-08", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "Quando uma família apresenta vulnerabilidade social que ultrapassa a capacidade de resposta isolada da unidade, a equipe deve:",
    alternatives: ["ignorar o contexto por não ser clínico", "articular rede intersetorial preservando sigilo e finalidade do cuidado", "transferir toda responsabilidade ao usuário", "substituir o acompanhamento por notificação informal", "romper o vínculo para evitar sobrecarga"], correctIndex: 1,
    explanation: "Situações complexas exigem articulação com a rede social e intersetorial, mantendo responsabilidade sanitária, sigilo e acompanhamento pela equipe de referência.",
  },
  {
    id: "q-enf-com-09", subjectId: "enfermagem", topicId: "enfermagem-comunidade",
    statement: "Em uma reunião de equipe, o uso de mapa do território é particularmente útil para:",
    alternatives: ["substituir todos os prontuários individuais", "visualizar distribuição de demandas, recursos e áreas prioritárias para planejamento", "definir condutas clínicas sem avaliação das pessoas", "eliminar a necessidade de visitas domiciliares", "registrar apenas atividades administrativas"], correctIndex: 1,
    explanation: "Mapas territoriais ajudam a visualizar padrões, recursos e necessidades, apoiando planejamento e priorização sem substituir avaliações individuais.",
  },

  // E4 — Processo e diagnósticos de enfermagem
  {
    id: "q-enf-proc-01", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "Durante a coleta de dados, a enfermeira identifica relato de dor, expressão facial de desconforto e limitação para movimentar-se. Esses elementos são utilizados, principalmente, para:",
    alternatives: ["formular julgamento clínico e subsidiar diagnósticos de enfermagem", "substituir a avaliação contínua do paciente", "definir automaticamente uma prescrição médica", "registrar somente a intensidade da dor", "dispensar exame físico complementar"], correctIndex: 0,
    explanation: "Dados subjetivos e objetivos subsidiam o raciocínio clínico e a formulação de diagnósticos. Eles não substituem avaliação, exame físico ou acompanhamento contínuo.",
  },
  {
    id: "q-enf-proc-02", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "No processo de enfermagem, um resultado esperado deve ser descrito de modo que permita:",
    alternatives: ["avaliar se as intervenções produziram mudança observável", "repetir uma atividade sem relação com objetivos", "substituir a necessidade de diagnóstico", "omitir o prazo de acompanhamento", "eliminar a participação da pessoa cuidada"], correctIndex: 0,
    explanation: "Resultados esperados orientam a avaliação da efetividade do cuidado. Devem ser observáveis e relacionados às necessidades identificadas.",
  },
  {
    id: "q-enf-proc-03", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "Após identificar risco de queda, a enfermeira planeja medidas de prevenção e explica sua finalidade à pessoa e à família. Essa conduta corresponde mais diretamente à etapa de:",
    alternatives: ["planejamento de enfermagem", "auditoria externa", "dispensa de avaliação", "prescrição exclusivamente médica", "encerramento do processo"], correctIndex: 0,
    explanation: "O planejamento define prioridades, resultados e intervenções. A orientação à pessoa e à família favorece participação e segurança na implementação.",
  },
  {
    id: "q-enf-proc-04", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "A avaliação no processo de enfermagem é inadequada quando a equipe:",
    alternatives: ["compara a resposta da pessoa aos resultados esperados", "revisa intervenções diante de resposta insuficiente", "considera o plano imutável, mesmo quando a condição se altera", "registra evolução e achados relevantes", "discute necessidades persistentes com a equipe"], correctIndex: 2,
    explanation: "O processo de enfermagem é dinâmico. Mudanças na condição ou ausência de resposta exigem reavaliação e possível ajuste das intervenções.",
  },
  {
    id: "q-enf-proc-05", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "O uso de taxonomia de diagnósticos de enfermagem contribui principalmente para:",
    alternatives: ["padronizar linguagem clínica e tornar o raciocínio comunicável entre profissionais", "eliminar a necessidade de julgamento clínico", "substituir toda comunicação com a pessoa atendida", "fixar diagnósticos sem reavaliação", "reduzir o registro a códigos sem significado"], correctIndex: 0,
    explanation: "Taxonomias organizam a linguagem diagnóstica e favorecem comunicação, continuidade e análise do cuidado. Elas não substituem julgamento clínico e reavaliação.",
  },
  {
    id: "q-enf-proc-06", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "Uma intervenção de enfermagem é mais bem selecionada quando se relaciona diretamente:",
    alternatives: ["ao problema identificado, aos resultados esperados e às condições da pessoa", "à preferência pessoal do profissional, sem considerar dados", "somente à disponibilidade imediata de materiais", "a uma lista fixa aplicada a todos os pacientes", "a um diagnóstico que já foi descartado"], correctIndex: 0,
    explanation: "Intervenções são escolhidas a partir do diagnóstico, dos resultados desejados, da evidência disponível e das condições individuais da pessoa cuidada.",
  },
  {
    id: "q-enf-proc-07", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "A documentação do processo de enfermagem favorece a segurança porque:",
    alternatives: ["permite rastrear avaliação, decisões, intervenções e respostas ao cuidado", "dispensa comunicação entre profissionais", "substitui a necessidade de assistir a pessoa", "serve apenas para fins financeiros", "evita que o plano seja revisado"], correctIndex: 0,
    explanation: "Registros claros sustentam continuidade, comunicação e rastreabilidade do cuidado, além de apoiar avaliação do plano e responsabilidade profissional.",
  },
  {
    id: "q-enf-proc-08", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "Ao identificar sinais que podem indicar mais de uma necessidade de enfermagem, a atitude mais segura é:",
    alternatives: ["escolher o primeiro diagnóstico lembrado e não revisar", "aprofundar a coleta de dados e priorizar conforme risco e necessidades", "ignorar sinais que não se encaixem em um diagnóstico único", "delegar o julgamento sem compartilhar achados", "aguardar semanas para registrar a avaliação"], correctIndex: 1,
    explanation: "Dados ambíguos exigem aprofundamento da avaliação e priorização clínica. O raciocínio não deve ser reduzido a associação automática de um único sinal.",
  },
  {
    id: "q-enf-proc-09", subjectId: "enfermagem", topicId: "enfermagem-processo",
    statement: "Uma pessoa apresenta melhora parcial após as intervenções planejadas. No processo de enfermagem, a conduta apropriada é:",
    alternatives: ["encerrar o plano sem analisar a resposta", "avaliar o progresso, manter ou ajustar intervenções e redefinir metas se necessário", "desconsiderar a melhora por não ser completa", "registrar apenas o procedimento realizado", "repetir o plano sem nova avaliação"], correctIndex: 1,
    explanation: "A avaliação da resposta orienta a continuidade, manutenção ou modificação do plano. Melhoras parciais exigem leitura clínica, não encerramento automático.",
  },

  // E5 — Saúde mental e comunicação terapêutica
  {
    id: "q-enf-mental-01", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "Durante atendimento, uma pessoa afirma ouvir vozes e demonstra medo. A comunicação terapêutica da enfermeira deve priorizar:",
    alternatives: ["ridicularizar o relato para reduzir a importância", "validar o sofrimento, avaliar segurança e conversar sobre a experiência sem confirmar o conteúdo como fato", "ignorar a fala e mudar imediatamente de assunto", "confrontar a pessoa de modo brusco para que ela pare de relatar", "prometer que as vozes desaparecerão no mesmo dia"], correctIndex: 1,
    explanation: "A postura terapêutica acolhe a experiência subjetiva, avalia risco e mantém comunicação clara, sem reforçar a percepção como realidade objetiva nem desqualificar o sofrimento.",
  },
  {
    id: "q-enf-mental-02", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "Em uma situação de agitação, a primeira atitude da equipe de enfermagem deve buscar:",
    alternatives: ["aumentar estímulos e reunir grande número de pessoas ao redor", "reduzir riscos, manter abordagem calma e avaliar necessidade de apoio imediato", "discutir longamente sobre regras enquanto a pessoa está desorganizada", "deixar a pessoa sozinha sem observação", "adotar medidas coercitivas como primeira escolha em qualquer situação"], correctIndex: 1,
    explanation: "Manejo inicial seguro inclui ambiente com menos estímulos, abordagem calma, avaliação de risco e acionamento de suporte. Medidas restritivas não são resposta automática.",
  },
  {
    id: "q-enf-mental-03", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "O cuidado em um Centro de Atenção Psicossocial é orientado, entre outros elementos, por:",
    alternatives: ["isolamento permanente da pessoa de sua comunidade", "cuidado territorial, vínculo, projeto terapêutico e articulação em rede", "substituição de toda participação da família", "atendimento exclusivamente hospitalar", "decisões sem escuta da pessoa atendida"], correctIndex: 1,
    explanation: "O cuidado psicossocial valoriza território, vínculo, autonomia, projeto terapêutico singular e articulação com a rede de atenção e apoio social.",
  },
  {
    id: "q-enf-mental-04", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "Ao orientar uma pessoa em uso de psicofármacos, a enfermagem contribui para o cuidado quando:",
    alternatives: ["estimula interrupção por conta própria diante de qualquer desconforto", "observa efeitos, favorece adesão informada e encaminha sinais relevantes para avaliação", "prescreve ajustes de dose sem avaliação competente", "evita registrar reações por serem subjetivas", "substitui a escuta por recomendações genéricas"], correctIndex: 1,
    explanation: "A enfermagem monitora respostas, orienta, registra e comunica sinais relevantes à equipe responsável, promovendo segurança e participação informada.",
  },
  {
    id: "q-enf-mental-05", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "Uma pergunta aberta que favorece comunicação terapêutica é:",
    alternatives: ["Você não acha que está exagerando?", "Por que você não consegue simplesmente se controlar?", "Como essa situação tem afetado seu dia a dia?", "Você entende que isso não faz sentido?", "Você vai seguir exatamente o que eu determinar?"], correctIndex: 2,
    explanation: "Perguntas abertas convidam a pessoa a narrar experiências e necessidades. Formulações julgadoras, confrontativas ou impositivas tendem a dificultar vínculo e expressão.",
  },
  {
    id: "q-enf-mental-06", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "A preservação do sigilo no cuidado em saúde mental deve ser compreendida como:",
    alternatives: ["proibição absoluta de compartilhar qualquer informação, inclusive diante de risco grave", "dever ético, com compartilhamento restrito à finalidade assistencial e aos limites legais de proteção", "liberdade para comentar casos em qualquer espaço da unidade", "dispensa de registro no prontuário", "substituição da conversa com a pessoa atendida"], correctIndex: 1,
    explanation: "O sigilo protege a pessoa, mas informações podem ser compartilhadas de modo restrito e justificado na equipe e em situações previstas para proteção e continuidade do cuidado.",
  },
  {
    id: "q-enf-mental-07", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "A construção de um projeto terapêutico em saúde mental é mais consistente quando:",
    alternatives: ["ignora desejos e objetivos da pessoa", "considera necessidades, recursos, riscos, autonomia e rede de apoio", "se limita à escolha de medicação", "é definido uma única vez e nunca revisado", "exclui profissionais de diferentes áreas"], correctIndex: 1,
    explanation: "Projeto terapêutico é construído e revisto de forma compartilhada, contemplando dimensões clínicas, sociais e subjetivas, além dos recursos disponíveis no território.",
  },
  {
    id: "q-enf-mental-08", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "Diante de relato de ideação suicida, a enfermeira deve:",
    alternatives: ["evitar perguntar detalhes para não aumentar o risco", "acolher, avaliar risco de forma direta, não deixar a pessoa sem suporte e acionar a rede de cuidado", "tratar o relato como manipulação sem investigação", "orientar apenas retorno em consulta de rotina futura", "prometer segredo absoluto independentemente de risco"], correctIndex: 1,
    explanation: "A abordagem direta e acolhedora permite avaliar risco e organizar proteção. A situação requer suporte imediato e articulação com rede, conforme a avaliação clínica.",
  },
  {
    id: "q-enf-mental-09", subjectId: "enfermagem", topicId: "enfermagem-mental",
    statement: "No relacionamento interpessoal terapêutico, estabelecer limites claros significa:",
    alternatives: ["adotar postura punitiva e distante", "combinar regras de convivência de modo respeitoso, previsível e protetivo", "ceder a toda solicitação para evitar tensão", "ignorar comportamentos que comprometem segurança", "usar ameaças para obter adesão"], correctIndex: 1,
    explanation: "Limites terapêuticos são claros, coerentes e respeitosos. Eles protegem a pessoa, a equipe e o ambiente sem humilhar ou desconsiderar a autonomia.",
  },
  // E6 — Adulto, idoso, procedimentos e perioperatório
  {
    id: "q-enf-adulto-01", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Na admissão de uma pessoa idosa que utiliza vários medicamentos, a ação que mais contribui para a segurança inicial é:",
    alternatives: ["manter a lista verbal sem conferência", "realizar reconciliação medicamentosa e verificar uso, doses, horários e dificuldades", "suspender todos os medicamentos sem avaliação", "solicitar que um familiar escolha quais fármacos continuar", "registrar apenas os medicamentos de uso hospitalar"], correctIndex: 1,
    explanation: "A reconciliação medicamentosa identifica divergências, duplicidades e dificuldades de uso, apoiando decisões seguras junto à equipe responsável.",
  },
  {
    id: "q-enf-adulto-02", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Uma pessoa com mobilidade reduzida apresenta risco aumentado de lesão por pressão. A prevenção deve incluir:",
    alternatives: ["avaliar pele, redistribuir pressão, cuidar da umidade e rever condições nutricionais", "massagear intensamente áreas já hiperemiadas", "manter a mesma posição para evitar desconforto", "usar somente curativos após surgirem lesões", "limitar hidratação e alimentação para reduzir cuidados"], correctIndex: 0,
    explanation: "Prevenção é multifatorial e envolve avaliação frequente, reposicionamento conforme condição clínica, manejo de umidade, superfícies adequadas e atenção nutricional.",
  },
  {
    id: "q-enf-adulto-03", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Para prevenir quedas em uma pessoa hospitalizada com tontura ao levantar, a medida mais adequada é:",
    alternatives: ["orientar que ela caminhe sozinha para ganhar autonomia", "avaliar risco, orientar chamada de ajuda e adequar ambiente e mobilização", "restringir toda ingestão hídrica", "retirar dispositivos de apoio sem avaliação", "manter iluminação apagada durante a noite"], correctIndex: 1,
    explanation: "Prevenção de quedas combina avaliação individual, orientação, auxílio na mobilização e ambiente seguro, preservando autonomia com proteção proporcional.",
  },
  {
    id: "q-enf-adulto-04", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "No período pré-operatório imediato, uma prática de segurança essencial é:",
    alternatives: ["confirmar identidade, procedimento e informações críticas conforme protocolo institucional", "evitar esclarecer dúvidas da pessoa para reduzir ansiedade", "deixar a conferência de documentos para depois da indução", "desconsiderar alergias relatadas quando o procedimento é de rotina", "realizar preparo sem verificar condições clínicas atuais"], correctIndex: 0,
    explanation: "A verificação pré-operatória reduz erros evitáveis. Identificação, procedimento, informações relevantes e comunicação de dúvidas são etapas essenciais de segurança.",
  },
  {
    id: "q-enf-adulto-05", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "No pós-operatório, uma pessoa relata dor intensa associada a respiração superficial. A enfermagem deve:",
    alternatives: ["registrar apenas se a dor persistir por muitas horas", "avaliar intensidade, sinais associados, intervenções prescritas e necessidade de reavaliação imediata", "informar que dor sempre é esperada e não precisa de atenção", "estimular esforço respiratório sem avaliar condição", "suspender toda mobilização sem comunicar a equipe"], correctIndex: 1,
    explanation: "Dor intensa pode comprometer recuperação e ventilação. A avaliação sistemática, o manejo indicado e a comunicação oportuna são necessários.",
  },
  {
    id: "q-enf-adulto-06", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Em pessoa com cateter urinário de demora, a conduta que reduz risco de complicações é:",
    alternatives: ["manter o sistema aberto para facilitar esvaziamento", "avaliar diariamente a necessidade, preservar sistema fechado e observar sinais de alteração", "desconectar o sistema em cada troca de turno", "elevar a bolsa coletora acima do nível da bexiga", "substituir a higiene de rotina por uso contínuo de antimicrobianos"], correctIndex: 1,
    explanation: "Uso seguro requer indicação revisada diariamente, sistema fechado, posicionamento adequado e observação clínica. Desconexões desnecessárias elevam risco de infecção.",
  },
  {
    id: "q-enf-adulto-07", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Uma pessoa com diabetes apresenta alteração do estado geral e medida de glicemia fora de sua faixa habitual. A prioridade de enfermagem é:",
    alternatives: ["desconsiderar o dado por ser uma medida isolada", "avaliar sinais, repetir ou confirmar conforme protocolo e acionar o plano de cuidado indicado", "oferecer qualquer alimento sem considerar condição clínica", "esperar o próximo dia para nova avaliação", "registrar apenas após a normalização"], correctIndex: 1,
    explanation: "Alterações glicêmicas exigem avaliação clínica, confirmação quando aplicável e resposta conforme plano e protocolos, com registro e comunicação apropriados.",
  },
  {
    id: "q-enf-adulto-08", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "No acompanhamento de pessoa com comprometimento renal, o balanço hídrico é relevante porque auxilia a:",
    alternatives: ["avaliar relação entre entradas, eliminações e sinais de retenção ou déficit", "substituir exame físico e avaliação laboratorial", "definir diagnóstico sem observar outros dados", "eliminar a necessidade de monitorar peso", "registrar somente a ingestão oral"], correctIndex: 0,
    explanation: "Balanço hídrico integra avaliação de entradas e saídas e deve ser interpretado com peso, sinais clínicos e demais informações da condição renal.",
  },
  {
    id: "q-enf-adulto-09", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Uma pessoa com condição neurológica apresenta mudança súbita de fala e força. A conduta mais segura é:",
    alternatives: ["atribuir a mudança à ansiedade sem avaliação", "reconhecer alteração aguda, avaliar imediatamente e acionar resposta conforme fluxo do serviço", "aguardar a próxima visita programada", "oferecer alimento antes de avaliar deglutição", "solicitar que a pessoa caminhe para testar equilíbrio"], correctIndex: 1,
    explanation: "Alterações neurológicas agudas demandam reconhecimento e resposta imediata conforme o fluxo de urgência, evitando atrasos e condutas que elevem risco.",
  },
  {
    id: "q-enf-adulto-10", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Ao acompanhar uma lesão cutânea, um registro útil para continuidade do cuidado deve incluir:",
    alternatives: ["apenas a expressão “melhor” ou “pior”", "localização, dimensões, aspecto, exsudato, pele adjacente e resposta às medidas", "somente o tipo de cobertura utilizada", "fotografia sem qualquer descrição", "a opinião pessoal sem dados observáveis"], correctIndex: 1,
    explanation: "Registros objetivos e comparáveis permitem acompanhar evolução, comunicar achados e ajustar o plano de cuidado com segurança.",
  },
  {
    id: "q-enf-adulto-11", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Em pessoa idosa, a avaliação funcional é importante porque ajuda a identificar:",
    alternatives: ["somente o diagnóstico médico principal", "capacidade para atividades cotidianas, necessidades de apoio e riscos de perda de autonomia", "a obrigatoriedade de institucionalização", "apenas o grau de dor no momento", "somente a presença de doenças crônicas"], correctIndex: 1,
    explanation: "A funcionalidade informa necessidades de cuidado, prevenção de dependência e planejamento de apoio, não se reduzindo ao diagnóstico ou à idade cronológica.",
  },
  {
    id: "q-enf-adulto-12", subjectId: "enfermagem", topicId: "enfermagem-adulto",
    statement: "Durante procedimento técnico, a pausa para conferir identificação e prescrição antes de administrar um cuidado demonstra:",
    alternatives: ["atraso desnecessário em rotinas simples", "barreira de segurança para reduzir erros e garantir rastreabilidade", "substituição do registro no prontuário", "falta de autonomia profissional", "conduta aplicável apenas a medicamentos de alto custo"], correctIndex: 1,
    explanation: "Checagens antes de procedimentos são barreiras de segurança. Elas reduzem risco de erro e apoiam a execução correta do cuidado previsto.",
  },

  // E7 — Saúde da mulher, materna e da criança
  {
    id: "q-enf-mat-01", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "No acompanhamento pré-natal, a enfermeira identifica sintoma novo e potencialmente relevante relatado pela gestante. A conduta mais apropriada é:",
    alternatives: ["tranquilizar sem avaliação porque desconfortos são comuns", "avaliar sinais associados, estratificar necessidade e orientar ou encaminhar conforme o fluxo", "aguardar obrigatoriamente a próxima consulta mensal", "orientar automedicação para todos os sintomas", "registrar apenas se houver internação"], correctIndex: 1,
    explanation: "O pré-natal requer identificação oportuna de sinais e sintomas, avaliação clínica e encaminhamento quando indicado, sem banalizar queixas relevantes.",
  },
  {
    id: "q-enf-mat-02", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "No puerpério, uma orientação prioritária deve abordar:",
    alternatives: ["apenas retorno às atividades domésticas", "autocuidado, amamentação, sinais de alerta, apoio familiar e acesso ao acompanhamento", "suspensão de qualquer contato com a equipe", "uso rotineiro de medicamentos sem avaliação", "restrição de perguntas sobre saúde emocional"], correctIndex: 1,
    explanation: "O cuidado puerperal integra recuperação, apoio à amamentação, saúde emocional, sinais de alerta e continuidade do acompanhamento da mulher e do recém-nascido.",
  },
  {
    id: "q-enf-mat-03", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "Logo após o nascimento, quando a condição clínica permite, uma prática que favorece vínculo e início da amamentação é:",
    alternatives: ["separar rotineiramente mãe e recém-nascido sem necessidade", "favorecer contato pele a pele e apoio ao início oportuno da amamentação", "oferecer alimentação alternativa antes de qualquer orientação", "adiar todo contato até o dia seguinte", "limitar a participação materna nas primeiras horas"], correctIndex: 1,
    explanation: "Contato pele a pele e apoio precoce à amamentação favorecem vínculo e adaptação, desde que as condições clínicas de ambos permitam.",
  },
  {
    id: "q-enf-mat-04", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "Em aconselhamento sobre saúde sexual e reprodutiva, uma postura profissional adequada é:",
    alternatives: ["impor um método conforme preferência da equipe", "oferecer informação compreensível, discutir opções e respeitar escolhas informadas", "limitar a orientação a pessoas casadas", "evitar discutir efeitos adversos possíveis", "condicionar atendimento a julgamento moral"], correctIndex: 1,
    explanation: "O cuidado deve apoiar decisão informada, com respeito à autonomia, acesso à informação e consideração de condições clínicas e preferências da pessoa.",
  },
  {
    id: "q-enf-mat-05", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "Ao avaliar crescimento infantil, a equipe deve interpretar medidas antropométricas:",
    alternatives: ["isoladamente, sem comparar com registros anteriores", "em série, considerando curvas, contexto clínico e desenvolvimento da criança", "apenas quando houver queixa familiar", "somente após os dois anos de idade", "como critério único para definir todo o cuidado"], correctIndex: 1,
    explanation: "Acompanhar tendência de crescimento ao longo do tempo e articulá-la ao desenvolvimento e contexto permite avaliação mais consistente do que uma medida isolada.",
  },
  {
    id: "q-enf-mat-06", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "Uma mãe relata dor e dificuldade durante a amamentação. A primeira abordagem de enfermagem deve:",
    alternatives: ["orientar interrupção definitiva sem observar a mamada", "acolher, observar técnica e posição, identificar dificuldades e oferecer apoio prático", "atribuir a situação à falta de esforço materno", "oferecer fórmula como única alternativa inicial", "evitar perguntar sobre sinais associados"], correctIndex: 1,
    explanation: "A observação da mamada e a orientação prática ajudam a identificar fatores modificáveis e a apoiar a mãe, avaliando sinais que exijam encaminhamento.",
  },
  {
    id: "q-enf-mat-07", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "Uma criança com diarreia apresenta redução da atividade habitual. A orientação inicial segura inclui:",
    alternatives: ["suspender toda oferta de líquidos", "avaliar sinais de gravidade, orientar hidratação e definir necessidade de avaliação imediata", "usar medicamento antidiarreico sem avaliação", "aguardar vários dias antes de qualquer conduta", "substituir toda alimentação por bebidas açucaradas"], correctIndex: 1,
    explanation: "Diarreia exige atenção à hidratação e aos sinais de gravidade. A equipe deve orientar medidas apropriadas e encaminhar conforme avaliação clínica.",
  },
  {
    id: "q-enf-mat-08", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "Em criança com sintomas respiratórios, um sinal que requer avaliação oportuna é:",
    alternatives: ["manutenção do padrão habitual de alimentação e atividade", "aumento do esforço respiratório ou alteração importante do estado geral", "melhora progressiva após medidas orientadas", "sono habitual sem desconforto", "interesse preservado por brincadeiras"], correctIndex: 1,
    explanation: "Sinais de esforço respiratório e mudança importante do estado geral podem indicar gravidade e devem ser avaliados sem atraso conforme o serviço disponível.",
  },
  {
    id: "q-enf-mat-09", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "No cuidado à mulher no climatério, uma consulta de enfermagem qualificada deve:",
    alternatives: ["atribuir todos os sintomas inevitavelmente à idade", "acolher queixas, avaliar repercussões, orientar autocuidado e identificar necessidade de acompanhamento", "evitar discutir sexualidade por ser tema privado", "prescrever tratamento sem avaliação compartilhada", "limitar-se à aferição de sinais vitais"], correctIndex: 1,
    explanation: "O cuidado no climatério integra escuta, avaliação de sintomas e riscos, orientação e encaminhamentos pertinentes, respeitando individualidade e sexualidade.",
  },
  {
    id: "q-enf-mat-10", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "A consulta de planejamento reprodutivo é mais efetiva quando a enfermeira:",
    alternatives: ["apresenta uma única opção sem diálogo", "discute opções, critérios de uso, preferências e possibilidade de retorno para dúvidas", "exige decisão imediata em todos os casos", "omite informações sobre proteção contra infecções", "restringe o cuidado a uma faixa etária sem justificativa clínica"], correctIndex: 1,
    explanation: "O planejamento reprodutivo pressupõe informação, escolha informada e acompanhamento. O diálogo deve contemplar necessidades, critérios clínicos e prevenção de infecções.",
  },
  {
    id: "q-enf-mat-11", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "Ao identificar sofrimento emocional relevante no pós-parto, a equipe deve:",
    alternatives: ["tratar a manifestação como falta de adaptação e encerrar a conversa", "acolher, avaliar risco, fortalecer apoio e articular acompanhamento quando necessário", "orientar isolamento para evitar críticas", "ignorar o relato se o recém-nascido estiver bem", "registrar somente após confirmação por outro profissional"], correctIndex: 1,
    explanation: "Saúde emocional no pós-parto exige escuta, avaliação e apoio oportunos, com articulação de rede conforme intensidade dos sintomas e riscos identificados.",
  },
  {
    id: "q-enf-mat-12", subjectId: "enfermagem", topicId: "enfermagem-materno",
    statement: "A educação em saúde para familiares de recém-nascido deve priorizar:",
    alternatives: ["orientações genéricas sem considerar condições de nascimento", "cuidados cotidianos, alimentação, sinais de alerta e quando buscar atendimento", "substituição completa do papel dos responsáveis pela equipe", "uso de medicamentos preventivos sem indicação", "apenas técnicas de banho"], correctIndex: 1,
    explanation: "Orientação ao familiar deve abranger cuidados práticos, alimentação, sinais de alerta e acesso à rede, ajustada às condições do recém-nascido e da família.",
  },

  // E8 — Urgência, emergência e paciente crítico
  {
    id: "q-enf-urg-01", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Na avaliação inicial de uma pessoa gravemente enferma, a priorização de via aérea, respiração e circulação se justifica porque:",
    alternatives: ["esses sistemas devem ser avaliados somente após exames laboratoriais", "comprometimentos nessas funções podem ameaçar a vida de forma imediata", "a ordem substitui toda reavaliação posterior", "os demais aspectos do cuidado deixam de ser necessários", "a prioridade depende apenas da idade da pessoa"], correctIndex: 1,
    explanation: "Funções vitais exigem reconhecimento e intervenção precoces. A avaliação é sistemática e contínua, incorporando outras necessidades após estabilização inicial.",
  },
  {
    id: "q-enf-urg-02", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Ao encontrar uma pessoa inconsciente e sem resposta, a equipe deve agir de acordo com o protocolo institucional, priorizando:",
    alternatives: ["aguardar confirmação de familiar antes de iniciar avaliação", "reconhecer a emergência, acionar ajuda e iniciar medidas de suporte indicadas", "transportar a pessoa sem avaliação inicial", "administrar medicações sem verificar situação", "registrar o evento antes de qualquer intervenção"], correctIndex: 1,
    explanation: "Reconhecimento rápido, acionamento de ajuda e início das medidas previstas no protocolo são essenciais diante de perda de responsividade e possível parada.",
  },
  {
    id: "q-enf-urg-03", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Em pessoa com dispneia importante, a enfermagem deve inicialmente:",
    alternatives: ["minimizar o relato se não houver dor", "avaliar padrão respiratório, sinais de esforço, oxigenação quando disponível e acionar suporte conforme gravidade", "orientar caminhada para testar tolerância", "oferecer líquidos em grande volume imediatamente", "aguardar exame complementar sem observação"], correctIndex: 1,
    explanation: "Dispneia importante requer avaliação imediata do padrão respiratório e estado geral, suporte conforme protocolos e acionamento oportuno da equipe.",
  },
  {
    id: "q-enf-urg-04", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Durante ventilação mecânica, um alarme dispara e a pessoa apresenta desconforto. A primeira prioridade da enfermagem é:",
    alternatives: ["silenciar definitivamente o alarme sem avaliação", "avaliar a pessoa e a situação clínica antes de atribuir o evento ao equipamento", "desconectar o circuito como resposta automática", "aguardar a próxima ronda da equipe", "alterar parâmetros sem comunicação ou protocolo"], correctIndex: 1,
    explanation: "Alarmes exigem avaliação da pessoa primeiro, seguida de verificação do sistema e acionamento de suporte conforme achados. Silenciar sem avaliar eleva risco.",
  },
  {
    id: "q-enf-urg-05", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "O acompanhamento do nível de consciência em pessoa crítica é relevante porque mudanças podem sinalizar:",
    alternatives: ["apenas preferência por repouso", "alteração clínica que requer reavaliação e possível intervenção rápida", "situação sem relação com outros sinais vitais", "necessidade de suspender todos os registros", "condição que deve ser observada somente no fim do turno"], correctIndex: 1,
    explanation: "Alterações do nível de consciência devem ser comparadas ao basal e interpretadas com outros dados clínicos, pois podem indicar deterioração e necessidade de resposta imediata.",
  },
  {
    id: "q-enf-urg-06", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Em pessoa com sinais de hipoperfusão, a enfermagem contribui para resposta segura ao:",
    alternatives: ["adiar monitorização até a definição final do diagnóstico", "observar perfusão, sinais vitais, estado mental, diurese quando aplicável e acionar a equipe", "fornecer informação tranquilizadora sem avaliação", "restringir qualquer comunicação com outros profissionais", "registrar apenas ao término do atendimento"], correctIndex: 1,
    explanation: "Sinais de perfusão, estado mental, diurese e parâmetros vitais ajudam a reconhecer gravidade e acompanhar resposta às intervenções na pessoa crítica.",
  },
  {
    id: "q-enf-urg-07", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "No atendimento inicial a uma pessoa com suspeita de intoxicação, uma informação que deve ser buscada de forma segura é:",
    alternatives: ["possível agente, tempo de exposição, quantidade aproximada e condições clínicas atuais", "opiniões de pessoas sem contato com o evento", "apenas o endereço da residência", "histórico escolar completo antes da avaliação", "exposição sem qualquer proteção da equipe"], correctIndex: 0,
    explanation: "Identificar agente, circunstância e tempo de exposição apoia resposta e contato com referências especializadas, sempre preservando segurança da equipe e atendimento clínico.",
  },
  {
    id: "q-enf-urg-08", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Diante de uma emergência psiquiátrica com risco de agressão, a equipe deve:",
    alternatives: ["aproximar-se em grande número e elevar o tom de voz", "organizar ambiente seguro, manter comunicação objetiva e solicitar apoio conforme necessidade", "provocar a pessoa para avaliar reação", "deixar outros usuários expostos ao conflito", "usar contenção como resposta automática e sem avaliação"], correctIndex: 1,
    explanation: "Segurança, redução de estímulos, comunicação clara e apoio coordenado são fundamentais. Intervenções restritivas dependem de avaliação, necessidade e regras de segurança.",
  },
  {
    id: "q-enf-urg-09", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "A classificação de risco em um serviço de urgência tem como propósito principal:",
    alternatives: ["atender por ordem de chegada em todas as situações", "priorizar atendimento segundo gravidade e potencial de deterioração", "substituir avaliação clínica subsequente", "definir diagnóstico definitivo na recepção", "reduzir comunicação com usuários"], correctIndex: 1,
    explanation: "Classificação de risco organiza prioridade de atendimento conforme gravidade e vulnerabilidade, sem substituir avaliação clínica contínua ou comunicação acolhedora.",
  },
  {
    id: "q-enf-urg-10", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "No cuidado a pessoa em terapia dialítica, a enfermagem deve dar atenção especial a:",
    alternatives: ["avaliação do acesso, sinais clínicos e intercorrências durante o procedimento", "dispensa de registro de peso e sinais vitais", "uso do acesso para qualquer finalidade sem avaliação", "interrupção de comunicação com a equipe especializada", "manutenção da mesma conduta diante de mal-estar importante"], correctIndex: 0,
    explanation: "O cuidado envolve monitorização, avaliação do acesso e reconhecimento de intercorrências, com comunicação rápida à equipe responsável conforme alterações observadas.",
  },
  {
    id: "q-enf-urg-11", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Em situação de emergência ambiental por calor, uma ação inicial de enfermagem é:",
    alternatives: ["manter a pessoa em ambiente quente para evitar mudança brusca", "retirar da fonte de exposição, avaliar estado clínico e iniciar medidas de suporte previstas", "estimular atividade física para aumentar circulação", "adiar oferta de cuidados até identificação completa da causa", "restringir observação dos sinais vitais"], correctIndex: 1,
    explanation: "Afastar da exposição, avaliar rapidamente e iniciar suporte adequado reduz risco. A continuidade do cuidado depende da gravidade e do fluxo de emergência.",
  },
  {
    id: "q-enf-urg-12", subjectId: "enfermagem", topicId: "enfermagem-emergencia",
    statement: "Na passagem de cuidado de uma pessoa crítica, a comunicação segura deve incluir:",
    alternatives: ["somente o diagnóstico principal, sem dados atuais", "situação atual, antecedentes relevantes, avaliações, intervenções e pendências", "informações vagas para acelerar a troca", "comentários pessoais sem registros objetivos", "dados omitidos para que a equipe seguinte investigue"], correctIndex: 1,
    explanation: "Uma comunicação estruturada reduz perdas de informação e sustenta continuidade do cuidado, destacando estado atual, condutas realizadas e necessidades pendentes.",
  },

  // E9 — Gerenciamento e processos de trabalho
  {
    id: "q-enf-ger-01", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "O dimensionamento de pessoal em enfermagem deve considerar, entre outros elementos:",
    alternatives: ["somente a preferência de horários da equipe", "carga de trabalho, complexidade assistencial, perfil dos usuários e competências necessárias", "apenas o número de leitos físicos", "o tempo de serviço de um único trabalhador", "apenas o orçamento do mês"], correctIndex: 1,
    explanation: "Dimensionamento seguro relaciona demanda assistencial, complexidade, perfil de usuários, horas de cuidado e qualificação profissional, não apenas número de leitos.",
  },
  {
    id: "q-enf-ger-02", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Ao identificar falha recorrente em um processo, a gestão da qualidade deve inicialmente buscar:",
    alternatives: ["um culpado individual antes de conhecer o fluxo", "analisar processo, condições de trabalho, barreiras existentes e causas contribuintes", "suspender todos os registros de incidentes", "ocultar o problema para preservar indicadores", "manter a rotina sem discutir o evento"], correctIndex: 1,
    explanation: "Melhoria da qualidade analisa sistemas e causas contribuintes. Uma visão exclusivamente punitiva pode ocultar problemas e impedir aprendizagem organizacional.",
  },
  {
    id: "q-enf-ger-03", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Uma atividade de educação continuada é mais efetiva quando:",
    alternatives: ["repete conteúdo sem relação com necessidades observadas", "parte de problemas do serviço, estimula prática reflexiva e acompanha aplicação", "ocorre apenas no ingresso de novos profissionais", "substitui toda supervisão cotidiana", "avalia apenas presença, sem verificar aprendizagem"], correctIndex: 1,
    explanation: "Educação continuada deve responder a necessidades reais, conectar teoria e prática e acompanhar mudanças no trabalho, não se limitar a exposição ou presença.",
  },
  {
    id: "q-enf-ger-04", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "No feedback sobre desempenho, uma abordagem construtiva é:",
    alternatives: ["usar generalizações e críticas pessoais", "descrever comportamentos observáveis, impacto e possibilidades de melhoria", "realizar comentários apenas diante de outros colegas", "evitar qualquer espaço para escuta", "restringir-se a elogios sem discutir necessidades"], correctIndex: 1,
    explanation: "Feedback útil é específico, baseado em fatos, respeitoso e orientado a desenvolvimento, com espaço para escuta e pactuação de ações.",
  },
  {
    id: "q-enf-ger-05", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "A delegação de uma atividade pela enfermeira deve considerar:",
    alternatives: ["apenas quem está disponível no momento", "competência do profissional, complexidade da tarefa, supervisão e condições do serviço", "a transferência integral de responsabilidade profissional", "preferências pessoais sem relação com segurança", "a dispensa de comunicação sobre o que foi delegado"], correctIndex: 1,
    explanation: "Delegar exige avaliar competência e contexto, comunicar claramente e manter supervisão compatível. A responsabilidade pela coordenação do cuidado não desaparece.",
  },
  {
    id: "q-enf-ger-06", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Em conflito entre trabalhadores, uma postura de liderança adequada é:",
    alternatives: ["ignorar o problema até que ele desapareça", "escutar envolvidos, delimitar fatos, buscar acordos e proteger o cuidado ao usuário", "escolher um lado antes de ouvir as pessoas", "expor o conflito aos usuários", "resolver por mensagens vagas sem diálogo"], correctIndex: 1,
    explanation: "Conflitos devem ser abordados de modo respeitoso e orientado ao trabalho. A liderança protege relações, clima de equipe e segurança do cuidado.",
  },
  {
    id: "q-enf-ger-07", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Um indicador de qualidade assistencial é especialmente útil quando a equipe o utiliza para:",
    alternatives: ["produzir números sem relação com decisões", "acompanhar desempenho, reconhecer variações e orientar melhoria", "substituir análise qualitativa de problemas", "punir equipes sem discutir contexto", "evitar revisão de processos"], correctIndex: 1,
    explanation: "Indicadores apoiam monitoramento e melhoria quando interpretados no contexto do processo, combinados a análise crítica e planos de ação.",
  },
  {
    id: "q-enf-ger-08", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Na organização de uma escala, a enfermeira deve priorizar:",
    alternatives: ["distribuição aleatória de profissionais em áreas críticas", "compatibilização entre demanda, competências, continuidade e condições de trabalho", "mudanças sem comunicar a equipe", "preferências individuais como único critério", "manutenção de déficit assistencial sem sinalização"], correctIndex: 1,
    explanation: "Escalas seguras consideram necessidade assistencial, qualificação e continuidade. Situações de risco devem ser comunicadas e gerenciadas, não naturalizadas.",
  },
  {
    id: "q-enf-ger-09", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "A supervisão de enfermagem contribui para qualidade quando é entendida como:",
    alternatives: ["vigilância punitiva desvinculada do cuidado", "acompanhamento, orientação, apoio e avaliação do trabalho em processo", "substituição da autonomia de todos os profissionais", "atividade restrita à conferência de presença", "mecanismo para evitar diálogo sobre dificuldades"], correctIndex: 1,
    explanation: "Supervisão qualificada orienta, apoia e avalia processos, identificando necessidades de desenvolvimento e protegendo a segurança assistencial.",
  },
  {
    id: "q-enf-ger-10", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "O processo de trabalho gerencial em enfermagem envolve de forma articulada:",
    alternatives: ["planejar, organizar, executar, acompanhar e avaliar ações e recursos", "somente distribuir tarefas diárias", "apenas controlar materiais de alto custo", "evitar interlocução com a equipe", "substituir o cuidado direto em todas as situações"], correctIndex: 0,
    explanation: "Gerenciamento envolve planejamento, organização, coordenação, acompanhamento e avaliação de recursos e processos para sustentar assistência segura e resolutiva.",
  },
  {
    id: "q-enf-ger-11", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Na comunicação de mudança de turno, o uso de estrutura padronizada é desejável porque:",
    alternatives: ["reduz a necessidade de informações relevantes", "favorece transmissão organizada de dados críticos e pendências", "impede perguntas da equipe que recebe o cuidado", "substitui todo registro em prontuário", "permite omitir intercorrências para ganhar tempo"], correctIndex: 1,
    explanation: "Estruturas de comunicação auxiliam a troca clara de informações importantes, reduzindo omissões e fortalecendo continuidade e segurança do cuidado.",
  },
  {
    id: "q-enf-ger-12", subjectId: "enfermagem", topicId: "enfermagem-gerenciamento",
    statement: "Diante de necessidade de novo material para um procedimento, a decisão gerencial adequada é:",
    alternatives: ["incorporar imediatamente sem avaliar indicação, custo e segurança", "avaliar necessidade assistencial, evidências, impacto, treinamento e disponibilidade", "substituir todos os materiais existentes sem teste", "deixar a escolha a cargo de um único trabalhador sem consulta", "usar produto sem registro ou condições de uso"], correctIndex: 1,
    explanation: "Incorporação de recursos deve considerar necessidade, segurança, evidências, impacto operacional, treinamento e condições de uso no serviço.",
  },

  // E10 — CME, biossegurança, ética e segurança
  {
    id: "q-enf-seg-01", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "As precauções-padrão devem ser aplicadas:",
    alternatives: ["somente a pessoas com diagnóstico confirmado de infecção", "a todos os atendimentos, conforme risco de exposição a fluidos e materiais", "apenas em unidades de terapia intensiva", "somente quando houver isolamento formal", "apenas durante procedimentos cirúrgicos"], correctIndex: 1,
    explanation: "Precauções-padrão são adotadas em todos os atendimentos conforme risco de exposição, independentemente de diagnóstico conhecido, protegendo usuários e trabalhadores.",
  },
  {
    id: "q-enf-seg-02", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "A higiene das mãos é uma medida central de prevenção porque:",
    alternatives: ["substitui todas as demais precauções", "reduz transmissão de microrganismos quando realizada nos momentos indicados", "dispensa uso de equipamentos de proteção quando necessários", "serve apenas para proteção individual", "é necessária somente quando as mãos parecem sujas"], correctIndex: 1,
    explanation: "Higiene das mãos reduz transmissão e integra outras medidas de prevenção. Sua indicação não depende apenas de sujidade visível e não substitui EPIs quando necessários.",
  },
  {
    id: "q-enf-seg-03", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "As precauções baseadas na transmissão são definidas principalmente a partir:",
    alternatives: ["da preferência do profissional de plantão", "da via de transmissão suspeita ou confirmada e da avaliação de risco", "do tempo de internação isoladamente", "da idade da pessoa atendida", "da disponibilidade de quartos vazios apenas"], correctIndex: 1,
    explanation: "Precauções adicionais são selecionadas conforme vias de transmissão e avaliação de risco, complementando as precauções-padrão e protocolos institucionais.",
  },
  {
    id: "q-enf-seg-04", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "No manejo de perfurocortantes, uma conduta preventiva essencial é:",
    alternatives: ["reencapar agulhas rotineiramente após o uso", "descartar imediatamente em coletor adequado, sem manipulação desnecessária", "transportar agulhas soltas até o expurgo", "deixar materiais usados sobre bancadas para conferência", "desconectar manualmente lâminas sem dispositivo seguro"], correctIndex: 1,
    explanation: "Descarte imediato em coletor apropriado reduz exposição ocupacional. Reencape e manipulações desnecessárias aumentam risco de acidentes.",
  },
  {
    id: "q-enf-seg-05", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "Um produto para saúde que entra em contato com tecidos estéreis deve passar por processamento compatível com seu risco, sendo esperada:",
    alternatives: ["apenas limpeza visual superficial", "esterilização quando classificado como crítico", "desinfecção de baixo nível em qualquer situação", "reutilização sem rastreabilidade", "armazenamento úmido após o processamento"], correctIndex: 1,
    explanation: "Produtos críticos demandam esterilização. O processamento deve considerar classificação do artigo, limpeza, método compatível, controle e rastreabilidade.",
  },
  {
    id: "q-enf-seg-06", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "O controle de qualidade em esterilização tem importância porque permite:",
    alternatives: ["substituir as etapas de limpeza e preparo", "verificar se o processo ocorreu dentro de condições previstas e seguras", "dispensar registro dos ciclos", "usar qualquer embalagem disponível", "considerar todos os materiais seguros sem monitoramento"], correctIndex: 1,
    explanation: "Monitoramento e registros do processo são parte da garantia de qualidade. Eles não substituem limpeza, preparo, embalagem e demais etapas adequadas.",
  },
  {
    id: "q-enf-seg-07", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "Ao encontrar produto de uso único após sua utilização, a equipe deve:",
    alternatives: ["reprocessá-lo para reduzir custos", "seguir a indicação de uso e descarte prevista, sem reutilização indevida", "armazená-lo para possível uso em outro paciente", "lavá-lo superficialmente e devolvê-lo ao setor", "manter a decisão sem registro ou protocolo"], correctIndex: 1,
    explanation: "Produtos de uso único devem seguir indicação e descarte apropriados. Reutilização inadequada pode comprometer segurança e conformidade do cuidado.",
  },
  {
    id: "q-enf-seg-08", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "Um incidente sem dano ao paciente deve ser tratado pela equipe como oportunidade para:",
    alternatives: ["ocultar a situação por não haver consequência imediata", "registrar, analisar barreiras e fortalecer prevenção de recorrência", "atribuir culpa sem entender o processo", "dispensar qualquer discussão em equipe", "aguardar ocorrência com dano para agir"], correctIndex: 1,
    explanation: "Incidentes sem dano revelam fragilidades do sistema. Seu registro e análise favorecem aprendizagem e prevenção antes que ocorram consequências mais graves.",
  },
  {
    id: "q-enf-seg-09", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "Antes de realizar procedimento, confirmar a identidade por identificadores confiáveis contribui para:",
    alternatives: ["agilizar sem necessidade de comunicação", "reduzir risco de cuidado, exame ou medicação destinados à pessoa errada", "substituir a explicação do procedimento", "eliminar necessidade de registro", "dispensar checagem de alergias"], correctIndex: 1,
    explanation: "Identificação segura é uma barreira contra erros de paciente, procedimento, exame e medicação. Ela se soma às demais verificações necessárias.",
  },
  {
    id: "q-enf-seg-10", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "No exercício ético da enfermagem, o registro em prontuário deve ser:",
    alternatives: ["subjetivo e baseado em comentários pessoais", "claro, objetivo, completo e compatível com o cuidado realizado", "omitido em situações de maior demanda", "substituído por recados informais", "alterado sem identificação quando houver erro"], correctIndex: 1,
    explanation: "Registros éticos e seguros são objetivos, legíveis e rastreáveis, descrevendo avaliações e cuidados realizados. Correções devem respeitar normas de registro.",
  },
  {
    id: "q-enf-seg-11", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "Após exposição ocupacional a material biológico, a conduta inicial do trabalhador deve incluir:",
    alternatives: ["ocultar o acidente para evitar burocracia", "adotar medidas imediatas previstas, comunicar o serviço e seguir avaliação e acompanhamento", "aguardar sintomas antes de informar", "manipular a área exposta com produtos não recomendados", "continuar o turno sem qualquer registro"], correctIndex: 1,
    explanation: "Exposição ocupacional requer medidas imediatas, comunicação e avaliação no fluxo do serviço. A notificação protege o trabalhador e apoia prevenção de novos eventos.",
  },
  {
    id: "q-enf-seg-12", subjectId: "enfermagem", topicId: "enfermagem-seguranca",
    statement: "Uma cultura de segurança do paciente é fortalecida quando trabalhadores:",
    alternatives: ["temem relatar falhas e quase falhas", "podem comunicar riscos, analisar processos e participar de melhorias", "recebem orientações contraditórias sem espaço de diálogo", "dependem apenas de memória para tarefas críticas", "consideram eventos adversos inevitáveis e sem possibilidade de prevenção"], correctIndex: 1,
    explanation: "Cultura de segurança promove comunicação, aprendizagem e melhoria contínua. Relatos de risco devem ser valorizados para fortalecer barreiras e prevenir danos.",
  },
];
