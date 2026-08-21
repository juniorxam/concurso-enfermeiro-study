# Direção visual — Trilha Enfermeiro

## Três direções consideradas

| Tema | Introdução breve | Probabilidade |
|---|---|---:|
| **Caderno de Plantão** | Uma experiência editorial tátil, inspirada em cadernos clínicos e no ritmo silencioso da preparação diária. Organiza estudo, revisão e simulado como páginas de um percurso profissional. | 0,07 |
| **Atlas de Cuidado** | Uma linguagem cartográfica de saúde pública, com trilhas topográficas, territórios e conexões entre saberes. Privilegia sensação de abrangência e orientação. | 0,04 |
| **Sala de Situação** | Um painel sóbrio de tomada de decisão, inspirado em briefing hospitalar e sinalização de campo. Valoriza urgência controlada, clareza e foco tático. | 0,08 |

## Abordagem selecionada: Caderno de Plantão

### Movimento de design

A interface adota o **editorial contemporâneo brasileiro**, com referências de cadernos de campo, diagramas clínicos discretos e design de informação de revistas. Em vez de um dashboard genérico, a página se comporta como uma estação de estudo: índices de margem, páginas de conteúdo, notas de progresso e marcadores de percurso.

### Princípios centrais

1. **Estudo como percurso visível:** cada escolha revela com clareza o próximo bloco, a prática associada e o avanço acumulado.
2. **Precisão sem frieza:** informação densa usa hierarquia editorial, espaços de respiro e linguagem acessível, sem aparência burocrática ou hospitalar estéril.
3. **Tato e evidência:** papéis, traços, linhas de caderno e marcas discretas tornam o estudo palpável, enquanto métricas permanecem objetivas.
4. **Atenção sustentada:** interações têm movimento curto e focado; a interface não compete com a leitura, a questão ou o vídeo.

### Filosofia de cor

O fundo em **marfim quente** reduz a sensação de tela fria e remete a materiais de estudo reais. O **azul-tinta** ancora concentração e leitura prolongada. O **verde-clínico** é a cor proprietária de sinalização: concluiu, avançou, compreendeu. Um **coral-terra** é reservado a pontos de atenção, tempo e revisões, sem simular alerta permanente.

### Paradigma de layout

O desenho se organiza como uma **mesa editorial em três faixas assimétricas**: uma margem de navegação persistente, uma página de conteúdo principal e um trilho lateral de evidências (progresso, tempo e ação seguinte). No celular, as faixas viram uma sequência de cartões-página, preservando o sentido de percurso sem reproduzir uma grade centralizada.

### Elementos de assinatura

1. **Linha de percurso manuscrita:** uma linha pontilhada, com nós discretos, costura tópicos, revisão e simulado.
2. **Marcadores de página clínicos:** pequenas abas coloridas identificam a disciplina atual e o estado do estudo.
3. **Carimbos de evidência:** selos compactos mostram progresso, domínio ou revisão pendente como registro de caderno, nunca como troféu genérico.

### Filosofia de interação

Cada clique deve reduzir a distância até a próxima ação útil. A troca de disciplina atualiza, em conjunto, trilha, aula, questão e indicadores. Conclusões recebem confirmação tátil breve; respostas revelam explicação com foco no raciocínio e não apenas no acerto.

### Animação

Entradas de painéis usam opacidade e deslocamento vertical de até 10 px, entre 180 e 260 ms, com curva `cubic-bezier(0.23, 1, 0.32, 1)`. A linha de percurso aparece em segmentos curtos conforme a trilha é selecionada. Botões reduzem para `scale(0.97)` no toque e voltam de imediato. Pessoas que preferem movimento reduzido recebem transições estáticas.

### Sistema tipográfico

**DM Serif Display** conduz títulos, blocos de foco e números-chave, dando a sensação de página editorial. **Manrope** cuida de texto, controles, metadados e explicações por sua excelente legibilidade. Títulos têm contraste generoso de tamanho e peso; corpo mantém entrelinha confortável; rótulos usam caixa alta discreta com espaçamento ampliado.

### Essência da marca

**Trilha Enfermeiro é a plataforma de estudo que transforma um conteúdo programático extenso em um percurso clínico, verificável e acionável para quem se prepara para concursos de Enfermagem.**

Personalidade: **serena, criteriosa, encorajadora**.

### Voz da marca

A voz é direta, humana e orientada à ação. Títulos nomeiam o que importa agora; CTAs descrevem o próximo gesto concreto; microcopy reconhece esforço sem fazer promessas grandiosas.

Exemplos: “**Hoje, avance um bloco que muda sua segurança na prova.**”

“**Você respondeu. Agora entenda o raciocínio que sustenta a alternativa correta.**”

### Logotipo e símbolo

O símbolo combina uma **agulha de bússola**, uma cruz de cuidado construída por espaço negativo e uma linha ascendente de estudo. Ele deve funcionar sem texto, em tamanho claro no cabeçalho e como favicon, evitando qualquer cruz médica genérica.

### Cor proprietária

**Verde-clínico `#0B8E85`**: a assinatura visual da Trilha Enfermeiro, usada para avanço, orientação e evidência de domínio.

## Style Decisions

- A **linha de percurso** não deve parecer um stepper genérico: usa traço pontilhado levemente irregular, nós clínicos discretos e sensação de anotação manual sobre página de estudo.
- Todo cartão principal deve funcionar como uma página ou ficha de caderno clínico, com margem, aba, carimbo ou linha editorial; caixas brancas sem materialidade são evitadas.
- O wordmark **Trilha Enfermeiro** combina azul-tinta e o verde-clínico `#0B8E85` como sinal proprietário recorrente de orientação e avanço.
- As superfícies de avaliação devem funcionar como **fichas de questão**: margem editorial, marcador de evidência e orientação de raciocínio substituem a aparência de quiz genérico.
- O trilho lateral se comporta como **registro diário de estudo**, com linhas de caderno, carimbos informacionais e hierarquia contida; o azul-tinta escuro fica reservado ao simulado principal.
- Nós ativos da linha de percurso carregam uma **anotação manuscrita** que liga o tópico, a ficha em curso e a próxima evidência de avanço.
- O percurso deve ter **ritmo levemente irregular de tinta e papel**; a geometria perfeitamente uniforme é evitada em favor de nós anotados e marcas de folio.
- O **verde-clínico** fica reservado a avanço, domínio, conclusão e orientação; navegação neutra e metadados usam azul-tinta, marfim e linhas discretas.
- A tipografia serifada destaca somente títulos de página, blocos de estudo, perguntas e numerais-chave; instruções, listas e dados densos permanecem em Manrope.
- O wordmark é uma composição editorial: **Trilha** conduz a leitura em azul-tinta, **Enfermeiro** marca orientação em verde-clínico e a seta ascendente ecoa a bússola de cuidado.
- O trilho de percurso inclui notas de folio, estrela de nó ativo e rótulo manuscrito de ficha atual para sustentar a metáfora de caderno de campo.
- O registro diário usa slips, carimbos e linhas de livro-caixa; métricas continuam legíveis, mas deixam de se comportar como cartões de produto genéricos.
- A linha de percurso é o gesto visual proprietário: irregular, anotada e com ritmo de tinta sobre papel, nunca uma sequência perfeitamente uniforme de nós.
- O trilho lateral privilegia slips, carimbos, anotações e respiro de livro-caixa; apenas uma ação decisiva recebe azul-tinta escuro por dobra visual.
- A marca usa o símbolo de bússola-cuidado em tamanho editorial claro, como selo identificável da estação de estudo.
- O percurso usa linha de tinta irregular, marcações de folio e anotação de nó ativo para conectar visualmente o bloco em curso à ficha de estudo.
- Imagens promocionais são substituídas por superfícies de papel, grades clínicas e registros diagramáticos sempre que competirem com a metáfora de caderno.
- CTAs nomeiam o gesto de estudo seguinte, como “Iniciar prova de percurso”, em vez de comandos genéricos de produto.
- Cada dobra preserva uma prioridade editorial dominante; selos, abas e metadados entram como apoio silencioso, nunca como concorrentes da leitura principal.
- O verde-clínico identifica avanço, orientação e domínio; informações neutras retornam ao azul-tinta, marfim e às linhas de caderno.
- O masthead funciona como selo editorial reconhecível: bússola-cuidado e wordmark recebem precedência sobre controles funcionais.
