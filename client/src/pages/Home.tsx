/**
 * Direção visual: Caderno de Plantão — uma estação editorial de estudo com margem de índice,
 * página de aprendizado e trilho de evidências. Interações priorizam a próxima ação útil.
 */
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileQuestion,
  Flag,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  ListChecks,
  Play,
  RotateCcw,
  ShieldCheck,
  TimerReset,
  Trophy,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AnswerMap, questions, subjects, totalTopics } from "@/data/learning-data";
import { studyGuides } from "@/data/study-guides";

const STORAGE_KEY = "trilha-enfermeiro:progress:v2";
const HERO_IMAGE = "/manus-storage/trilha-enfermeiro-hero_463c8870.jpg";
const PATH_IMAGE = "/manus-storage/trilha-enfermeiro-percurso_43fef21f.jpg";
const SIM_IMAGE = "/manus-storage/trilha-enfermeiro-simulado_f4b28381.jpg";
const LOGO_IMAGE = "/manus-storage/trilha-enfermeiro-logo_5a8da8e1.png";

type Screen = "study" | "sim" | "result";
type ThematicResult = { score: number; correct: number; answered: number; completedAt: string };
type ThematicResultMap = Record<string, ThematicResult>;

const THEMATIC_RESULTS_KEY = "trilha-enfermeiro:thematic-results:v1";

function readStoredProgress() {
  if (typeof window === "undefined") return { completedTopicIds: [], answers: {} as AnswerMap };
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return { completedTopicIds: [], answers: {} as AnswerMap };
    const parsed = JSON.parse(stored) as { completedTopicIds?: string[]; answers?: AnswerMap };
    return {
      completedTopicIds: Array.isArray(parsed.completedTopicIds) ? parsed.completedTopicIds : [],
      answers: parsed.answers ?? {},
    };
  } catch {
    return { completedTopicIds: [], answers: {} as AnswerMap };
  }
}

function readThematicResults(): ThematicResultMap {
  if (typeof window === "undefined") return {};
  try {
    const stored = window.localStorage.getItem(THEMATIC_RESULTS_KEY);
    return stored ? (JSON.parse(stored) as ThematicResultMap) : {};
  } catch {
    return {};
  }
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function initials(title: string) {
  return title
    .split(" ")
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

function pickBalancedQuestions(subjectId: string) {
  const pool = questions.filter((question) => question.subjectId === subjectId);
  if (pool.length <= 4) return pool;
  const last = pool.length - 1;
  const indexes = [0, Math.round(last / 3), Math.round((last * 2) / 3), last];
  return indexes.filter((value, index, values) => values.indexOf(value) === index).map((index) => pool[index]);
}

export default function Home() {
  const initialProgress = readStoredProgress();
  const [screen, setScreen] = useState<Screen>("study");
  const [activeSubjectId, setActiveSubjectId] = useState("enfermagem");
  const [activeTopicId, setActiveTopicId] = useState("enfermagem-processo");
  const [selectedQuestionId, setSelectedQuestionId] = useState("q-enf-1");
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>(initialProgress.completedTopicIds);
  const [answers, setAnswers] = useState<AnswerMap>(initialProgress.answers);
  const [simAnswers, setSimAnswers] = useState<AnswerMap>({});
  const [simIndex, setSimIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(50 * 60);
  const [simWarning, setSimWarning] = useState(false);
  const [simTopicId, setSimTopicId] = useState<string | null>(null);
  const [thematicResults, setThematicResults] = useState<ThematicResultMap>(() => readThematicResults());

  const activeSubject = useMemo(
    () => subjects.find((subject) => subject.id === activeSubjectId) ?? subjects[0],
    [activeSubjectId],
  );
  const activeTopic = useMemo(
    () => activeSubject.topics.find((topic) => topic.id === activeTopicId) ?? activeSubject.topics[0],
    [activeSubject, activeTopicId],
  );
  const activeGuide = studyGuides.find((guide) => guide.topicId === activeTopic.id);
  const topicQuestions = useMemo(
    () => questions.filter((question) => question.topicId === activeTopic.id),
    [activeTopic.id],
  );
  const activeQuestion =
    topicQuestions.find((question) => question.id === selectedQuestionId) ?? topicQuestions[0];
  const nursingSubject = subjects.find((subject) => subject.id === "enfermagem") ?? subjects[0];
  const thematicTopics = nursingSubject.topics;
  const activeSimTopic = thematicTopics.find((topic) => topic.id === simTopicId);
  const simQuestions = useMemo(
    () => activeSimTopic
      ? questions.filter((question) => question.topicId === activeSimTopic.id).slice(0, 20)
      : subjects.flatMap((subject) => pickBalancedQuestions(subject.id)),
    [activeSimTopic],
  );
  const currentSimQuestion = simQuestions[simIndex];
  const completedCount = completedTopicIds.length;
  const globalProgress = Math.round((completedCount / totalTopics) * 100);
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(([id, response]) => {
    const question = questions.find((item) => item.id === id);
    return question?.correctIndex === response;
  }).length;
  const accuracy = answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0;
  const simAnsweredCount = Object.keys(simAnswers).length;
  const simUnanswered = simQuestions.length - simAnsweredCount;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ completedTopicIds, answers }));
  }, [answers, completedTopicIds]);

  useEffect(() => {
    window.localStorage.setItem(THEMATIC_RESULTS_KEY, JSON.stringify(thematicResults));
  }, [thematicResults]);

  useEffect(() => {
    if (screen !== "sim" || secondsLeft === 0) return;
    const timer = window.setInterval(() => setSecondsLeft((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [screen, secondsLeft]);

  useEffect(() => {
    if (secondsLeft === 0 && screen === "sim") {
      const hits = simQuestions.filter((question) => simAnswers[question.id] === question.correctIndex).length;
      if (activeSimTopic) {
        setThematicResults((current) => ({
          ...current,
          [activeSimTopic.id]: { score: Math.round((hits / simQuestions.length) * 100), correct: hits, answered: Object.keys(simAnswers).length, completedAt: new Date().toISOString() },
        }));
      }
      setScreen("result");
    }
  }, [activeSimTopic, screen, secondsLeft, simAnswers, simQuestions]);

  const selectSubject = (subjectId: string) => {
    const subject = subjects.find((item) => item.id === subjectId) ?? subjects[0];
    const topic = subject.topics[0];
    const topicQuestion = questions.find((question) => question.topicId === topic.id);
    setActiveSubjectId(subject.id);
    setActiveTopicId(topic.id);
    if (topicQuestion) setSelectedQuestionId(topicQuestion.id);
  };

  const selectTopic = (topicId: string) => {
    const topicQuestion = questions.find((question) => question.topicId === topicId);
    setActiveTopicId(topicId);
    if (topicQuestion) setSelectedQuestionId(topicQuestion.id);
  };

  const toggleTopic = () => {
    setCompletedTopicIds((current) =>
      current.includes(activeTopic.id)
        ? current.filter((id) => id !== activeTopic.id)
        : [...current, activeTopic.id],
    );
  };

  const answerQuestion = (questionId: string, index: number) => {
    setAnswers((current) => ({ ...current, [questionId]: index }));
  };

  const startSim = (topicId?: string) => {
    setSimAnswers({});
    setSimIndex(0);
    setSimTopicId(topicId ?? null);
    setSecondsLeft(topicId ? 45 * 60 : 50 * 60);
    setSimWarning(false);
    setScreen("sim");
  };

  const submitSim = () => {
    if (simUnanswered > 0 && !simWarning) {
      setSimWarning(true);
      return;
    }
    const hits = simQuestions.filter((question) => simAnswers[question.id] === question.correctIndex).length;
    if (activeSimTopic) {
      setThematicResults((current) => ({
        ...current,
        [activeSimTopic.id]: { score: Math.round((hits / simQuestions.length) * 100), correct: hits, answered: simAnsweredCount, completedAt: new Date().toISOString() },
      }));
    }
    setScreen("result");
  };

  const renderStudy = () => {
    const currentAnswer = activeQuestion ? answers[activeQuestion.id] : undefined;
    const topicDone = completedTopicIds.includes(activeTopic.id);
    const subjectProgress = Math.round(
      (activeSubject.topics.filter((topic) => completedTopicIds.includes(topic.id)).length /
        activeSubject.topics.length) *
        100,
    );

    return (
      <>
        <header className="topbar">
          <a className="brand" href="#inicio" aria-label="Trilha Enfermeiro, início">
            <img src={LOGO_IMAGE} alt="Símbolo Trilha Enfermeiro" />
            <span className="brand-word"><b>Trilha</b><em>Enfermeiro</em><small>caderno de prova</small></span>
          </a>
          <div className="topbar-actions">
            <span className="sync-state"><span /> Progresso neste dispositivo</span>
            <Button className="nav-sim-button" onClick={() => startSim()}>
              <TimerReset size={15} /> Abrir simulado
            </Button>
          </div>
        </header>

        <main id="inicio" className="station-layout">
          <aside className="subject-rail" aria-label="Índice de disciplinas">
            <div className="rail-kicker">Índice do edital</div>
            <div className="rail-title">Seu caderno de prova</div>
            <nav className="subject-list">
              {subjects.map((subject) => {
                const done = subject.topics.filter((topic) => completedTopicIds.includes(topic.id)).length;
                const isActive = subject.id === activeSubject.id;
                return (
                  <button
                    className={`subject-item ${isActive ? "is-active" : ""}`}
                    key={subject.id}
                    onClick={() => selectSubject(subject.id)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className={`subject-mark mark-${subject.color}`}>{initials(subject.shortTitle)}</span>
                    <span className="subject-copy">
                      <b>{subject.shortTitle}</b>
                      <small>{done}/{subject.topics.length} blocos</small>
                    </span>
                    <ChevronRight size={16} />
                  </button>
                );
              })}
            </nav>
            <div className="rail-footer" style={{ backgroundImage: `linear-gradient(180deg, rgba(16,42,58,.12), rgba(16,42,58,.88)), url(${PATH_IMAGE})` }}>
              <span>Prática constante</span>
              <strong>{completedCount} de {totalTopics} blocos registrados</strong>
              <div className="rail-progress"><i style={{ width: `${globalProgress}%` }} /></div>
            </div>
          </aside>

          <section className="study-paper" aria-label="Área de estudo">
            <div className="paper-heading">
              <div>
                <p className="eyebrow">{activeSubject.module}</p>
                <h1>{activeSubject.title}</h1>
                <p className="subject-summary">{activeSubject.summary}</p>
              </div>
              <div className="subject-meter" aria-label={`${subjectProgress}% concluído nesta disciplina`}>
                <span>{subjectProgress}%</span>
                <small>na disciplina</small>
              </div>
            </div>

            <div className="topic-path" aria-label="Trilha de tópicos">
              {activeSubject.topics.map((topic, index) => {
                const isCurrent = topic.id === activeTopic.id;
                const isDone = completedTopicIds.includes(topic.id);
                return (
                  <button
                    key={topic.id}
                    className={`path-node ${isCurrent ? "is-current" : ""} ${isDone ? "is-done" : ""}`}
                    onClick={() => selectTopic(topic.id)}
                    data-annotation={isCurrent ? `ficha ${topic.order}` : isDone ? "revisado" : "percurso"}
                  >
                    <span>{isDone ? <Check size={13} /> : topic.order}</span>
                    <b>{topic.shortTitle}</b>
                    {index < activeSubject.topics.length - 1 && <i aria-hidden="true" />}
                  </button>
                );
              })}
            </div>

            <article className="lesson-sheet">
              <div className="lesson-index">{activeTopic.order}</div>
              <div className="lesson-intro">
                <p className="eyebrow accent-text">Bloco de estudo</p>
                <h2>{activeTopic.title}</h2>
                <p>{activeTopic.description}</p>
              </div>
              <div className="focus-note">
                <Lightbulb size={18} />
                <div><small>Foco de leitura</small><p>{activeTopic.focus}</p></div>
              </div>
            </article>

            {activeGuide && (
              <section className="study-guide-card" aria-label={`Guia de estudo: ${activeTopic.title}`}>
                <div className="guide-heading">
                  <div>
                    <p className="eyebrow accent-text">Roteiro autoral de estudo</p>
                    <h3>{activeGuide.headline}</h3>
                    <p>{activeGuide.objective}</p>
                  </div>
                  <span className="guide-time"><Clock3 size={15} /> {activeGuide.estimatedTime}</span>
                </div>
                <div className="guide-essentials">
                  {activeGuide.essentials.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
                </div>
                <div className="guide-application">
                  <div className="guide-sequence"><small>Sequência de resolução</small><p>{activeGuide.sequence}</p></div>
                  <div className="guide-trap"><small>Armadilha recorrente</small><p>{activeGuide.commonTrap}</p></div>
                </div>
                <div className="guide-review">
                  <div><span>Checklist de saída</span>{activeGuide.checkpoints.map((item) => <p key={item}><Check size={14} /> {item}</p>)}</div>
                  <aside><Lightbulb size={17} /><small>Recuperação ativa</small><b>{activeGuide.recallPrompt}</b></aside>
                </div>
              </section>
            )}

            <section className="learning-grid">
              <article className="video-card">
                <div className="section-caption"><Play size={15} /> Aula de apoio</div>
                {activeTopic.videoId ? (
                  <>
                    <div className="video-frame">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${activeTopic.videoId}`}
                        title={activeTopic.videoTitle}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="video-meta">
                      <div><b>{activeTopic.videoTitle}</b><span>{activeTopic.teacher} · {activeTopic.duration}</span></div>
                      <a href={activeTopic.sourceUrl} target="_blank" rel="noreferrer">Fonte <ArrowUpRight size={14} /></a>
                    </div>
                  </>
                ) : (
                  <div className="reading-fallback">
                    <BookOpen size={30} />
                    <div><b>Leitura guiada disponível</b><p>O roteiro ao lado organiza a revisão deste bloco. Complete a ficha, resolva a prática e consulte a fonte indicada quando quiser aprofundar.</p>{activeGuide?.referenceUrl && <a href={activeGuide.referenceUrl} target="_blank" rel="noreferrer">{activeGuide.referenceLabel ?? "Abrir referência"} <ArrowUpRight size={14} /></a>}</div>
                  </div>
                )}
              </article>

              <article className="practice-card">
                <div className="section-caption"><FileQuestion size={15} /> Ficha de questão <span>raciocínio clínico</span></div>
                {activeQuestion ? (
                  <>
                    {topicQuestions.length > 1 && (
                      <div className="question-tabs" aria-label="Alternar questão do tópico">
                        {topicQuestions.map((question, index) => (
                          <button key={question.id} onClick={() => setSelectedQuestionId(question.id)} className={question.id === activeQuestion.id ? "is-active" : ""}>Item {index + 1}</button>
                        ))}
                      </div>
                    )}
                    <p className="question-statement">{activeQuestion.statement}</p>
                    <div className="question-provenance"><span>leitura de evidência</span><p>Localize o contexto, reconheça o foco do cuidado e justifique mentalmente a conduta antes de marcar.</p></div>
                    <div className="answer-list" role="radiogroup" aria-label="Alternativas da questão">
                      {activeQuestion.alternatives.map((alternative, index) => {
                        const chosen = currentAnswer === index;
                        const isCorrect = activeQuestion.correctIndex === index;
                        const showResult = currentAnswer !== undefined;
                        return (
                          <button
                            key={alternative}
                            onClick={() => answerQuestion(activeQuestion.id, index)}
                            className={`answer-option ${chosen ? "is-chosen" : ""} ${showResult && isCorrect ? "is-correct" : ""} ${showResult && chosen && !isCorrect ? "is-wrong" : ""}`}
                            role="radio"
                            aria-checked={chosen}
                          >
                            <span>{String.fromCharCode(65 + index)}</span>{alternative}
                          </button>
                        );
                      })}
                    </div>
                    {currentAnswer !== undefined && (
                      <div className={`explanation ${currentAnswer === activeQuestion.correctIndex ? "is-success" : ""}`}>
                        <CheckCircle2 size={18} /><p><b>{currentAnswer === activeQuestion.correctIndex ? "Boa leitura do item." : "Revise a relação central."}</b> {activeQuestion.explanation}</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="reading-fallback compact"><ClipboardCheck size={28} /><p>Este bloco está coberto na trilha e receberá novos itens de prática em uma próxima versão do banco.</p></div>
                )}
              </article>
            </section>
          </section>

          <aside className="evidence-rail daily-register" aria-label="Monitor de desempenho">
            <div className="evidence-label"><span>Registro de hoje</span><i>caderno clínico</i></div>
            <section className="evidence-hero" style={{ backgroundImage: `linear-gradient(110deg, rgba(16,42,58,.94), rgba(16,42,58,.57)), url(${HERO_IMAGE})` }}>
              <HeartPulse size={25} />
              <p>Uma trilha bem mantida faz o conteúdo aparecer na hora certa.</p>
              <span>{globalProgress}% do edital percorrido</span>
            </section>
            <section className="next-action">
              <div className="section-caption"><Flag size={15} /> Próxima ação</div>
              <b>{topicDone ? "Prática concluída? Siga para o próximo bloco." : "Registre o bloco depois da leitura."}</b>
              <p>{topicDone ? "Mantenha a sequência e preserve o contexto da disciplina." : "O registro alimenta o monitor de avanço e a sua revisão."}</p>
              <Button variant="outline" className={`complete-button ${topicDone ? "is-done" : ""}`} onClick={toggleTopic}>
                {topicDone ? <><Check size={16} /> Concluído</> : <><ClipboardCheck size={16} /> Marcar como concluído</>}
              </Button>
            </section>
            <section className="metric-card daily-metrics">
              <div><span>Avanço</span><b>{globalProgress}%</b><small>{completedCount} blocos</small></div>
              <div><span>Acerto</span><b>{accuracy}%</b><small>{answeredCount} itens</small></div>
              <div><span>Revisar</span><b>{Math.max(answeredCount - correctCount, 0)}</b><small>itens</small></div>
            </section>
            <section className="exam-card">
              <div className="section-caption"><TimerReset size={15} /> Simulado equilibrado</div>
              <p>20 itens · 4 por disciplina · 50 minutos</p>
              <Button onClick={() => startSim()}><GraduationCap size={16} /> Começar agora</Button>
            </section>
            <section className="thematic-bank" aria-label="Simulados temáticos por bloco específico">
              <div className="section-caption"><ListChecks size={15} /> Simulados temáticos</div>
              <p>Dez provas de 20 itens, uma para cada bloco específico.</p>
              <div className="thematic-topic-list">
                {thematicTopics.map((topic) => {
                  const result = thematicResults[topic.id];
                  return (
                    <button key={topic.id} className="thematic-topic-button" onClick={() => startSim(topic.id)}>
                      <span>{topic.order}</span>
                      <div><b>{topic.shortTitle}</b><small>{result ? `Último resultado: ${result.score}%` : "20 itens · 45 min"}</small></div>
                      <ChevronRight size={15} />
                    </button>
                  );
                })}
              </div>
            </section>
          </aside>
        </main>
      </>
    );
  };

  const renderSim = () => {
    const isThematic = Boolean(activeSimTopic);
    return (
      <main className="exam-shell">
        <header className="exam-header">
          <button onClick={() => setScreen("study")}><ArrowLeft size={17} /> Voltar ao caderno</button>
          <a className="brand compact-brand" href="#inicio"><img src={LOGO_IMAGE} alt="" /><span className="brand-word"><b>Trilha</b><em>Enfermeiro</em><small>caderno de prova</small></span></a>
          <div className="timer"><Clock3 size={17} /> {formatTime(secondsLeft)}</div>
        </header>
        <section className="exam-intro" style={{ backgroundImage: `linear-gradient(95deg, rgba(16,42,58,.96), rgba(16,42,58,.69)), url(${SIM_IMAGE})` }}>
          <div>
            <p className="eyebrow light">{isThematic ? `Simulado temático · ${activeSimTopic?.order}` : "Modo prova · distribuição equilibrada"}</p>
            <h1>{isThematic ? activeSimTopic?.title : "Simulado de percurso"}</h1>
            <p>{isThematic ? `Você terá 45 minutos para responder 20 itens autorais sobre ${activeSimTopic?.shortTitle}. Use a folha de respostas para navegar sem perder o foco.` : "Você terá 50 minutos para responder 20 itens originais, com quatro questões por disciplina. Use a folha de respostas para navegar sem perder o foco."}</p>
          </div>
          <div className="exam-rules"><ShieldCheck size={23} /><span>Respostas ficam neste dispositivo. A entrega só ocorre quando você confirmar.</span></div>
        </section>
        <section className="exam-workspace">
          <aside className="answer-sheet">
            <div className="section-caption"><ListChecks size={15} /> {isThematic ? "Folha do tema" : "Folha de respostas"}</div>
            <div className="answer-grid">
              {simQuestions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => setSimIndex(index)}
                  className={`${simIndex === index ? "is-current" : ""} ${simAnswers[question.id] !== undefined ? "is-answered" : ""}`}
                  aria-label={`Ir para questão ${index + 1}`}
                >{index + 1}</button>
              ))}
            </div>
            <p><i className="legend-dot answered" /> respondida <i className="legend-dot current" /> atual</p>
            <Button className="submit-button" onClick={submitSim}><Trophy size={16} /> Entregar simulado</Button>
            {simWarning && <div className="blank-warning"><b>Há {simUnanswered} item(ns) em branco.</b><span>Confira a folha ou clique novamente para entregar assim mesmo.</span></div>}
          </aside>
          <article className="exam-question">
            <div className="exam-question-top"><span>Questão {simIndex + 1} de {simQuestions.length}</span><span>{isThematic ? activeSimTopic?.shortTitle : subjects.find((subject) => subject.id === currentSimQuestion.subjectId)?.shortTitle}</span></div>
            <p>{currentSimQuestion.statement}</p>
            <div className="exam-options" role="radiogroup" aria-label="Alternativas da questão do simulado">
              {currentSimQuestion.alternatives.map((alternative, index) => (
                <button
                  key={alternative}
                  role="radio"
                  aria-checked={simAnswers[currentSimQuestion.id] === index}
                  className={simAnswers[currentSimQuestion.id] === index ? "is-selected" : ""}
                  onClick={() => { setSimAnswers((current) => ({ ...current, [currentSimQuestion.id]: index })); setSimWarning(false); }}
                ><span>{String.fromCharCode(65 + index)}</span>{alternative}</button>
              ))}
            </div>
            <div className="exam-navigation">
              <Button variant="outline" disabled={simIndex === 0} onClick={() => setSimIndex((index) => index - 1)}>Anterior</Button>
              <Button variant="outline" disabled={simIndex === simQuestions.length - 1} onClick={() => setSimIndex((index) => index + 1)}>Próxima <ChevronRight size={16} /></Button>
            </div>
          </article>
        </section>
      </main>
    );
  };

  const renderResult = () => {
    const simCorrect = simQuestions.filter((question) => simAnswers[question.id] === question.correctIndex).length;
    const score = Math.round((simCorrect / simQuestions.length) * 100);
    const isThematic = Boolean(activeSimTopic);
    return (
      <main className="result-shell">
        <header className="exam-header result-header">
          <a className="brand compact-brand" href="#inicio"><img src={LOGO_IMAGE} alt="" /><span className="brand-word"><b>Trilha</b><em>Enfermeiro</em><small>caderno de prova</small></span></a>
          <Button variant="outline" onClick={() => setScreen("study")}><BookOpen size={16} /> Voltar ao estudo</Button>
        </header>
        <section className="result-hero">
          <div className="result-seal"><Trophy size={31} /></div>
          <p className="eyebrow accent-text">Resultado registrado</p>
          <h1>{isThematic ? `Você encerrou ${activeSimTopic?.shortTitle}.` : "Você encerrou o simulado."}</h1>
          <p>{simAnsweredCount} de {simQuestions.length} itens respondidos · {simCorrect} acertos</p>
          <strong>{score}%</strong>
        </section>
        <section className="result-body">
          <div className="result-note"><Lightbulb size={21} /><p>{isThematic ? `Use este resultado para retomar o bloco “${activeSimTopic?.shortTitle}” e revisar os itens que exigiram mais atenção.` : "O resultado abaixo é uma leitura por disciplina. Use os pontos de menor acerto para escolher a próxima revisão na trilha."}</p></div>
          {isThematic ? (
            <div className="thematic-result-card">
              <span className="subject-mark mark-teal">{activeSimTopic?.order}</span>
              <div><p>Desempenho no tema</p><b>{activeSimTopic?.title}</b><small>{simCorrect} acertos · {simAnsweredCount}/{simQuestions.length} respostas registradas</small></div>
              <div className="result-bar"><i style={{ width: `${score}%` }} /></div>
              <strong>{score}%</strong>
            </div>
          ) : (
            <div className="result-table">
              {subjects.map((subject) => {
                const subjectQuestions = simQuestions.filter((question) => question.subjectId === subject.id);
                const hits = subjectQuestions.filter((question) => simAnswers[question.id] === question.correctIndex).length;
                const responses = subjectQuestions.filter((question) => simAnswers[question.id] !== undefined).length;
                const rate = Math.round((hits / subjectQuestions.length) * 100);
                return <div key={subject.id} className="result-row"><span className={`subject-mark mark-${subject.color}`}>{initials(subject.shortTitle)}</span><b>{subject.shortTitle}</b><span>{hits}/{subjectQuestions.length} acertos</span><div className="result-bar"><i style={{ width: `${rate}%` }} /></div><strong>{rate}%</strong><small>{responses === subjectQuestions.length ? "completa" : "incompleta"}</small></div>;
              })}
            </div>
          )}
          <div className="result-actions"><Button onClick={() => setScreen("study")}><BookOpen size={16} /> Escolher revisão</Button><Button variant="outline" onClick={() => startSim(activeSimTopic?.id)}><RotateCcw size={16} /> Refazer simulado</Button></div>
        </section>
      </main>
    );
  };

  if (screen === "sim") return renderSim();
  if (screen === "result") return renderResult();
  return renderStudy();
}
