/**
 * Direção de conteúdo: Caderno de Plantão — curadoria pública por bloco, com IDs
 * estáveis para player nocookie e URL de origem como rota alternativa de acesso.
 */

export type VideoLesson = {
  teacher: string;
  source: string;
  videoId: string;
  videoTitle: string;
  duration: string;
  sourceUrl: string;
};

export const videoLessons: Record<string, VideoLesson> = {
  "portugues-leitura": { teacher: "Prof. Álvaro Ferreira", source: "YouTube", videoId: "22iA3PPjr7c", videoTitle: "INTERPRETAÇÃO de TEXTOS para CONCURSO - Nunca mais erre!", duration: "45 min 33 s", sourceUrl: "https://www.youtube.com/watch?v=22iA3PPjr7c" },
  "portugues-norma": { teacher: "Focus Concursos", source: "YouTube", videoId: "MF5FQw7pZY0", videoTitle: "CNU | Pontuação #concurso #concursopublico", duration: "13 min", sourceUrl: "https://www.youtube.com/watch?v=MF5FQw7pZY0" },
  "portugues-sintaxe": { teacher: "Profª Giancarla Bombonato", source: "AlfaCon", videoId: "fA_EMi0riM4", videoTitle: "Português para Concursos | Sintaxe, Regência, Crase e Pontuação", duration: "1 h 14 min", sourceUrl: "https://www.youtube.com/watch?v=fA_EMi0riM4" },
  "portugues-reescrita": { teacher: "Estratégia Concursos", source: "YouTube", videoId: "YSbI-u4qwBc", videoTitle: "Redação Oficial 2026: Resumo Completo do Manual da Presidência", duration: "3 h 9 min", sourceUrl: "https://www.youtube.com/watch?v=YSbI-u4qwBc" },
  "logica-proporcoes": { teacher: "Prof. Gis", source: "YouTube", videoId: "Kf_YzZ0CnIs", videoTitle: "RAZÃO E PROPORÇÃO — Prof. Gis", duration: "18 min 26 s", sourceUrl: "https://www.youtube.com/watch?v=Kf_YzZ0CnIs" },
  "logica-algebra": { teacher: "YouTube", source: "YouTube", videoId: "cuVWEQydJso", videoTitle: "MATEMÁTICA SEE MG 2025 - ÁLGEBRA E FUNÇÕES", duration: "25 min 14 s", sourceUrl: "https://www.youtube.com/watch?v=cuVWEQydJso" },
  "logica-probabilidade": { teacher: "YouTube", source: "YouTube", videoId: "6IxBMhpOm20", videoTitle: "Aprenda Probabilidade para Concursos Públicos - Aula 1", duration: "11 min 53 s", sourceUrl: "https://www.youtube.com/watch?v=6IxBMhpOm20" },
  "logica-proposicoes": { teacher: "YouTube", source: "YouTube", videoId: "7a9ve2MEOWc", videoTitle: "Raciocínio lógico para concursos - parte 1", duration: "1 h 41 min", sourceUrl: "https://www.youtube.com/watch?v=7a9ve2MEOWc" },
  "tocantins-formacao": { teacher: "Prof. Wesley Guerra", source: "Cursos do Portal", videoId: "i6Mku_jr5Dg", videoTitle: "CONCURSO SES/TO: HISTÓRIA DO TOCANTINS", duration: "1 h 21 min", sourceUrl: "https://www.youtube.com/watch?v=i6Mku_jr5Dg" },
  "tocantins-povos": { teacher: "Escola do Legislativo do Tocantins", source: "YouTube", videoId: "Dk_Iw53iD-g", videoTitle: "Geografia e História do Tocantins, Aula 01", duration: "2 h 16 min", sourceUrl: "https://www.youtube.com/watch?v=Dk_Iw53iD-g" },
  "tocantins-meio": { teacher: "Fabiana Firmino", source: "YouTube", videoId: "n92AB8B2H4s", videoTitle: "Geografia Física de Araguaína/TO — Resumo para Concurso", duration: "30 min 44 s", sourceUrl: "https://www.youtube.com/watch?v=n92AB8B2H4s" },
  "tocantins-desenvolvimento": { teacher: "YouTube", source: "YouTube", videoId: "ir3Bdc11ITE", videoTitle: "História e Geografia do Tocantins para Concurso (RESUMO COMPLETO)", duration: "6 min 21 s", sourceUrl: "https://www.youtube.com/watch?v=ir3Bdc11ITE" },
  "legislacao-sus": { teacher: "YouTube", source: "YouTube", videoId: "Aaz_EFvCF3k", videoTitle: "Lei 8080/90 sem mistérios: Princípios e Diretrizes do SUS", duration: "1 h 8 min", sourceUrl: "https://www.youtube.com/watch?v=Aaz_EFvCF3k" },
  "legislacao-controle": { teacher: "YouTube", source: "YouTube", videoId: "khGCdIwGDw0", videoTitle: "Controle Social no SUS: como funciona e o que despenca em provas", duration: "23 min 29 s", sourceUrl: "https://www.youtube.com/watch?v=khGCdIwGDw0" },
  "legislacao-politicas": { teacher: "Profª Bruna Siqueira", source: "YouTube", videoId: "Y9sjDH7RWzs", videoTitle: "POLÍTICA NACIONAL DE HUMANIZAÇÃO PARA CONCURSOS", duration: "2 h 16 min", sourceUrl: "https://www.youtube.com/watch?v=Y9sjDH7RWzs" },
  "enfermagem-sus": { teacher: "Natale Souza", source: "YouTube", videoId: "-bvBwrzUuRQ", videoTitle: "SUS e sua gestão: Como é a organização?", duration: "44 min 40 s", sourceUrl: "https://www.youtube.com/watch?v=-bvBwrzUuRQ" },
  "enfermagem-vigilancia": { teacher: "YouTube", source: "YouTube", videoId: "zszLy8ckb0E", videoTitle: "Aula 21 - Vigilância em Saúde (Parte 1)", duration: "37 min 20 s", sourceUrl: "https://www.youtube.com/watch?v=zszLy8ckb0E" },
  "enfermagem-comunidade": { teacher: "YouTube", source: "YouTube", videoId: "MX6fpMtMWyA", videoTitle: "Atenção Básica e ESF › Atenção Domiciliar — SAD/Melhor em Casa", duration: "17 min 38 s", sourceUrl: "https://www.youtube.com/watch?v=MX6fpMtMWyA" },
  "enfermagem-mental": { teacher: "YouTube", source: "YouTube", videoId: "Fm2cIY5Yytg", videoTitle: "Saúde Mental em Questões | Acertou, passou!", duration: "53 min 40 s", sourceUrl: "https://www.youtube.com/watch?v=Fm2cIY5Yytg" },
  "enfermagem-adulto": { teacher: "YouTube", source: "YouTube", videoId: "RFjShp50Ogg", videoTitle: "Residência SES DF Enfermagem: Saúde do Adulto/Idoso", duration: "58 min 30 s", sourceUrl: "https://www.youtube.com/watch?v=RFjShp50Ogg" },
  "enfermagem-materno": { teacher: "Enfermagem Esquematizada", source: "YouTube", videoId: "R5uLg--o56U", videoTitle: "Pré natal e puerpério Aula 1 Enfermagem e Saúde Pública para concursos", duration: "26 min 16 s", sourceUrl: "https://www.youtube.com/watch?v=R5uLg--o56U" },
  "enfermagem-emergencia": { teacher: "Elton Chaves", source: "YouTube", videoId: "Rt4JK8BFrEY", videoTitle: "Urgência e Emergência para concursos", duration: "1 h 13 min", sourceUrl: "https://www.youtube.com/watch?v=Rt4JK8BFrEY" },
  "enfermagem-gerenciamento": { teacher: "YouTube", source: "YouTube", videoId: "R_TPgRIsD9Q", videoTitle: "Concurso EBSERH FGV 2025 | Gerenciamento em enfermagem", duration: "52 min 10 s", sourceUrl: "https://www.youtube.com/watch?v=R_TPgRIsD9Q" },
  "enfermagem-seguranca": { teacher: "Prof. Andreia Labrêa", source: "YouTube", videoId: "8MEg0HCVX6I", videoTitle: "Biossegurança - Enfermagem para Concursos", duration: "1 h 20 min", sourceUrl: "https://www.youtube.com/watch?v=8MEg0HCVX6I" },
};
