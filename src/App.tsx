import { FormEvent, useEffect, useMemo, useState } from 'react'
import { WarpFieldBackground } from './components/WarpFieldBackground/WarpFieldBackground'
import { semanticHint, vocabularyWords, type VocabularyWord as Word } from './data/vocabulary'

type View = 'home' | 'practice' | 'vocabulary'
type PracticeMode = 'meaning' | 'usage' | 'dictation'
type UsageQuestion = { stem: string; choices: string[]; answer: string; explanation: string; example: string; hint: string }
const words: Word[] = vocabularyWords
const levels = ['A2', 'B1', 'B2', 'C1'] as const
type Level = typeof levels[number]

const dailySentence = 'Small steps every day lead to big changes.'
const usageQuestions: UsageQuestion[] = [
  { stem: 'Experts recommend ___ regularly.', choices: ['exercise', 'to exercise', 'exercising', 'exercised'], answer: 'exercising', explanation: 'recommend + V-ing: khi một động từ đi ngay sau “recommend”, dùng dạng -ing. Cũng có cấu trúc khác như “recommend that + clause”.', example: 'Experts recommend exercising regularly.', hint: 'Sau “recommend”, nếu đi thẳng vào một hành động, hãy nghĩ đến dạng -ing.' },
  { stem: 'She is interested ___ learning English.', choices: ['at', 'in', 'on', 'for'], answer: 'in', explanation: 'interested in + noun / V-ing: dùng “in” để nói quan tâm hoặc thích một việc/chủ đề.', example: 'She is interested in learning English.', hint: 'Cụm này dùng cùng giới từ trong “take an interest in”.' },
  { stem: 'This exercise is similar ___ the test.', choices: ['with', 'at', 'to', 'for'], answer: 'to', explanation: 'similar to + noun/pronoun: dùng “to” khi nói một thứ giống hoặc tương tự thứ khác.', example: 'This exercise is similar to the test.', hint: 'Cụm so sánh cố định là “similar to”.' },
  { stem: 'They decided ___ the problem together.', choices: ['solve', 'solving', 'to solve', 'solved'], answer: 'to solve', explanation: 'decide + to V: dùng “to + động từ nguyên mẫu” khi nói quyết định làm việc gì.', example: 'They decided to solve the problem together.', hint: 'Sau “decide”, hành động được quyết định thường đi với “to + V”.' },
  { stem: 'You should pay attention ___ the verb tense.', choices: ['to', 'at', 'with', 'for'], answer: 'to', explanation: 'pay attention to + noun / V-ing: “to” ở đây là giới từ, nên nếu sau nó là động từ thì dùng V-ing.', example: 'Pay attention to the verb tense.', hint: 'Đây là cụm cố định “pay attention to”.' },
  { stem: 'I avoid ___ my phone before bed.', choices: ['use', 'to use', 'using', 'used'], answer: 'using', explanation: 'avoid + V-ing: khi sau “avoid” là một hành động, dùng động từ dạng -ing.', example: 'I avoid using my phone before bed.', hint: '“Avoid” nói về việc tránh làm một hành động, nên hành động đó ở dạng -ing.' },
]

function speak(text: string) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const message = new SpeechSynthesisUtterance(text)
  message.lang = 'en-US'
  message.rate = 0.82
  message.pitch = 1
  window.speechSynthesis.speak(message)
}

function randomWord(except?: string, pool = words) {
  const candidates = pool.filter((word) => word.english !== except)
  return candidates[Math.floor(Math.random() * candidates.length)]
}

function normaliseVietnamese(value: string) {
  return value.toLowerCase().trim().replace(/[.,;!?]/g, '').replace(/\s+/g, ' ')
}

function matchesVietnamese(answer: string, meaning: string) {
  const entered = normaliseVietnamese(answer)
  return meaning.split('/').map(normaliseVietnamese).some((option) => entered === option)
}

export default function App() {
  const [view, setView] = useState<View>('home')
  const [level, setLevel] = useState<Level>('A2')
  const [practiceWord, setPracticeWord] = useState<Word>(() => randomWord(undefined, words.filter((word) => word.level === 'A2')))
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('meaning')
  const [direction, setDirection] = useState<'vi-en' | 'en-vi'>('vi-en')
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle')
  const [attemptRecorded, setAttemptRecorded] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [streak, setStreak] = useState(0)
  const [correct, setCorrect] = useState(() => Number(localStorage.getItem('lingua-correct') ?? 0))
  const [attempts, setAttempts] = useState(() => Number(localStorage.getItem('lingua-attempts') ?? 0))
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Word>(() => words.find((word) => word.level === 'A2') ?? words[0])
  const [flipped, setFlipped] = useState(false)
  const [voiceStatus, setVoiceStatus] = useState('Nhấn micro, sau đó đọc câu thật rõ ràng.')
  const [usageIndex, setUsageIndex] = useState(0)
  const [usageFeedback, setUsageFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle')
  const [usageAttemptRecorded, setUsageAttemptRecorded] = useState(false)
  const [showUsageAnswer, setShowUsageAnswer] = useState(false)

  useEffect(() => localStorage.setItem('lingua-correct', String(correct)), [correct])
  useEffect(() => localStorage.setItem('lingua-attempts', String(attempts)), [attempts])

  const accuracy = attempts ? Math.round((correct / attempts) * 100) : 0
  const levelWords = useMemo(() => words.filter((word) => word.level === level), [level])
  const filteredWords = useMemo(() => levelWords.filter((word) => (
    `${word.english} ${word.vietnamese} ${word.collocation}`.toLowerCase().includes(search.toLowerCase().trim())
  )), [levelWords, search])
  const groupedWords = useMemo(() => {
    const groups = new Map<string, Word[]>()
    for (const word of filteredWords) {
      const group = groups.get(word.section) ?? []
      group.push(word)
      groups.set(word.section, group)
    }
    return [...groups.entries()]
  }, [filteredWords])

  function chooseLevel(nextLevel: Level) {
    const nextWords = words.filter((word) => word.level === nextLevel)
    if (!nextWords.length) return
    setLevel(nextLevel)
    setSearch('')
    setPracticeWord(randomWord(undefined, nextWords))
    setSelected(nextWords[0])
    setFlipped(false)
    setPracticeMode('meaning')
    setAnswer('')
    setFeedback('idle')
    setAttemptRecorded(false)
    setShowAnswer(false)
    setShowHint(false)
    setUsageFeedback('idle')
    setUsageAttemptRecorded(false)
    setShowUsageAnswer(false)
  }

  function choosePracticeMode(nextMode: PracticeMode) {
    setPracticeMode(nextMode)
    setAnswer('')
    setFeedback('idle')
    setAttemptRecorded(false)
    setShowAnswer(false)
    setUsageFeedback('idle')
    setUsageAttemptRecorded(false)
    setShowUsageAnswer(false)
    setShowHint(false)
  }

  function nextQuestion() {
    setPracticeWord((current) => randomWord(current.english, levelWords))
    setAnswer('')
    setFeedback('idle')
    setAttemptRecorded(false)
    setShowAnswer(false)
    setShowHint(false)
  }

  function selectUsage(choice: string) {
    if (usageFeedback === 'correct') return
    const isCorrect = choice === usageQuestions[usageIndex].answer
    setUsageFeedback(isCorrect ? 'correct' : 'wrong')
    if (isCorrect) setShowUsageAnswer(true)
    if (!usageAttemptRecorded) {
      setAttempts((value) => value + 1)
      setUsageAttemptRecorded(true)
      if (isCorrect) {
        setCorrect((value) => value + 1)
        setStreak((value) => value + 1)
      } else setStreak(0)
    }
    if (isCorrect) {
      speak(usageQuestions[usageIndex].example)
    }
  }

  function revealAnswer() {
    if (feedback === 'correct') return
    setFeedback('wrong')
    setShowAnswer(true)
    if (!attemptRecorded) {
      setAttempts((value) => value + 1)
      setAttemptRecorded(true)
      setStreak(0)
    }
  }

  function revealUsageAnswer() {
    if (usageFeedback === 'correct') return
    setUsageFeedback('wrong')
    setShowUsageAnswer(true)
    if (!usageAttemptRecorded) {
      setAttempts((value) => value + 1)
      setUsageAttemptRecorded(true)
      setStreak(0)
    }
  }

  function nextUsageQuestion() {
    setUsageIndex((value) => (value + 1) % usageQuestions.length)
    setUsageFeedback('idle')
    setUsageAttemptRecorded(false)
    setShowUsageAnswer(false)
  }

  function checkAnswer(event: FormEvent) {
    event.preventDefault()
    if (feedback === 'correct' || !answer.trim()) return
    const isCorrect = practiceMode === 'dictation' || direction === 'vi-en'
      ? answer.trim().toLowerCase() === practiceWord.english.toLowerCase()
      : matchesVietnamese(answer, practiceWord.vietnamese)
    setFeedback(isCorrect ? 'correct' : 'wrong')
    setShowAnswer(isCorrect)
    if (!attemptRecorded) {
      setAttempts((value) => value + 1)
      setAttemptRecorded(true)
      if (isCorrect) {
        setCorrect((value) => value + 1)
        setStreak((value) => value + 1)
      } else setStreak(0)
    }
    if (isCorrect) {
      speak(practiceWord.example)
    }
  }

  const promptText = direction === 'vi-en' ? practiceWord.vietnamese : practiceWord.english
  const answerLabel = direction === 'vi-en' ? 'Từ tiếng Anh là gì?' : 'Nghĩa tiếng Việt là gì?'
  const answerPlaceholder = direction === 'vi-en' ? 'Type in English…' : 'Gõ nghĩa tiếng Việt…'
  const usageQuestion = usageQuestions[usageIndex]

  function startVoicePractice() {
    type RecognitionResultEvent = Event & { results: { [index: number]: { [index: number]: { transcript: string } } } }
    type RecognitionConstructor = new () => { lang: string; interimResults: boolean; maxAlternatives: number; start: () => void; onresult: ((event: RecognitionResultEvent) => void) | null; onerror: (() => void) | null }
    const SpeechRecognition = (window as typeof window & { SpeechRecognition?: RecognitionConstructor; webkitSpeechRecognition?: RecognitionConstructor }).SpeechRecognition
      ?? (window as typeof window & { webkitSpeechRecognition?: RecognitionConstructor }).webkitSpeechRecognition
    if (!SpeechRecognition) {
      setVoiceStatus('Trình duyệt này chưa hỗ trợ nhận diện giọng nói. Bạn vẫn có thể nghe và đọc theo.')
      return
    }
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    setVoiceStatus('Đang nghe… hãy đọc câu tiếng Anh.')
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim()
      const normalised = transcript.toLowerCase().replace(/[.,!?]/g, '')
      const target = dailySentence.toLowerCase().replace(/[.,!?]/g, '')
      setVoiceStatus(normalised === target ? `Tuyệt vời! Bạn đọc: “${transcript}”` : `Máy nghe: “${transcript}”. Hãy thử đọc chậm và rõ hơn.`)
    }
    recognition.onerror = () => setVoiceStatus('Không nghe được giọng nói. Hãy kiểm tra quyền micro và thử lại.')
    recognition.start()
  }

  return (
    <main className="app-shell">
      <WarpFieldBackground className="site-warp" variant="letters" speed={3.5} streakOpacity={0.18} tileOpacity={0.45} hue={155} brightness={0.6} />
      <header className="topbar">
        <button className="brand" onClick={() => setView('home')} aria-label="Về trang chủ Lingua Flow">
          <span className="brand-mark">L</span><span>lingua<span className="brand-light">flow</span></span>
        </button>
        <nav aria-label="Điều hướng chính">
          <button className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>Tổng quan</button>
          <button className={view === 'practice' ? 'active' : ''} onClick={() => setView('practice')}>Luyện tập</button>
          <button className={view === 'vocabulary' ? 'active' : ''} onClick={() => setView('vocabulary')}>Từ vựng</button>
        </nav>
        <div className="profile"><span className="streak-mini">⚡ {streak} ngày</span><span className="avatar">NL</span></div>
      </header>

      {view === 'home' && <section className="home-view">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">HÔM NAY · 15 PHÚT</p>
            <h1>Học một ít.<br /><em>Tiến thật xa.</em></h1>
            <p className="hero-description">Lộ trình nhỏ, phản hồi tức thì và âm thanh chuẩn để tiếng Anh trở thành phản xạ tự nhiên của bạn.</p>
            <div className="hero-actions"><button className="button button-primary" onClick={() => setView('practice')}>Bắt đầu học <span>→</span></button><button className="button button-quiet" onClick={() => speak(dailySentence)}>◉ Nghe mẫu</button></div>
          </div>
          <div className="hero-panel"><p>Chuỗi học tập</p><strong>{streak || 1}</strong><span>ngày liên tiếp</span><div className="week"><i className="done">M</i><i className="done">T</i><i className="done">W</i><i>T</i><i>F</i><i>S</i><i>S</i></div></div>
        </section>

        <section className="content-grid">
          <div className="section-heading"><div><p className="eyebrow dark">LỘ TRÌNH CỦA BẠN</p><h2>Tiếp tục đúng nhịp</h2></div><button className="text-button" onClick={() => setView('practice')}>Xem tất cả →</button></div>
          <article className="lesson-card featured"><div className="lesson-icon coral">{level}</div><div className="lesson-main"><span>TRÌNH ĐỘ {level} · TỪ VỰNG</span><h3>{level === 'A2' ? 'Daily verbs in context' : `Build your ${level} vocabulary`}</h3><p>Hiểu, nghe và dùng từ theo đúng trình độ hiện tại.</p><div className="progress"><b style={{ width: '64%' }} /></div><small>{levelWords.length} từ/cụm trong bậc {level}</small></div><button className="play-circle" onClick={() => setView('practice')} aria-label="Mở bài học">→</button></article>
          <div className="lesson-row">
            <article className="compact-card"><div className="lesson-icon lilac">♬</div><div><span>NGHE & NHẮC LẠI</span><h3>Everyday rhythm</h3><p>5 phút · 8 câu</p></div><button onClick={() => speak(dailySentence)} aria-label="Nghe bài mẫu">▶</button></article>
            <article className="compact-card"><div className="lesson-icon mint">✦</div><div><span>ÔN TẬP THÔNG MINH</span><h3>Words to revisit</h3><p>{words.length} từ trong kho</p></div><button onClick={() => setView('vocabulary')} aria-label="Mở từ vựng">→</button></article>
          </div>
        </section>

        <aside className="daily-card"><div className="daily-number">01</div><div><p className="eyebrow dark">CÂU HÔM NAY</p><h2>“{dailySentence}”</h2><p>Nhấn nghe, đọc theo và để trình duyệt ghi nhận giọng của bạn.</p><div className="daily-actions"><button className="button button-dark" onClick={() => speak(dailySentence)}>🔊 Nghe phát âm</button><button className="button button-outline" onClick={startVoicePractice}>◉ Luyện nói</button></div><small className="voice-status">{voiceStatus}</small></div></aside>

        <section className="level-panel"><div><p className="eyebrow dark">CHỌN BẬC TIẾNG ANH</p><h2>Học đúng mức của bạn</h2></div><div className="level-switch">{levels.map((item) => <button key={item} className={level === item ? 'active' : ''} onClick={() => chooseLevel(item)}><b>{item}</b><span>{words.filter((word) => word.level === item).length} từ</span></button>)}</div></section>
        <section className="stats-strip"><div><strong>{correct}</strong><span>Từ trả lời đúng</span></div><div><strong>{accuracy}%</strong><span>Độ chính xác</span></div><div><strong>{levelWords.length}</strong><span>Từ bậc {level}</span></div></section>
      </section>}

      {view === 'practice' && <section className="practice-view">
        <div className="page-title"><p className="eyebrow dark">LUYỆN PHẢN XẠ · {level}</p><h1>Gõ, nghe, rồi nhớ.</h1><p>Đảo chiều bài tập bất cứ lúc nào. Gợi ý là tình huống gần nghĩa, không chứa đáp án.</p></div>
        <div className="level-switch practice-level-switch">{levels.map((item) => <button key={item} className={level === item ? 'active' : ''} onClick={() => chooseLevel(item)}><b>{item}</b><span>{words.filter((word) => word.level === item).length} từ</span></button>)}</div>
        <div className="practice-mode-switch" aria-label="Chọn dạng bài tập"><button className={practiceMode === 'meaning' ? 'active' : ''} onClick={() => choosePracticeMode('meaning')}>01 · Nghĩa từ</button><button className={practiceMode === 'usage' ? 'active' : ''} onClick={() => choosePracticeMode('usage')}>02 · Cấu trúc</button><button className={practiceMode === 'dictation' ? 'active' : ''} onClick={() => choosePracticeMode('dictation')}>03 · Nghe & gõ</button></div>
        <div className="practice-layout">
          {practiceMode === 'meaning' && <article className="question-card">
            <div className="question-top"><span>THẺ TỪ VỰNG</span><span className="score-pill">⚡ Chuỗi {streak}</span></div>
            <div className="direction-toggle" aria-label="Chọn chiều luyện tập"><button className={direction === 'vi-en' ? 'selected' : ''} onClick={() => { setDirection('vi-en'); setAnswer(''); setFeedback('idle'); setAttemptRecorded(false); setShowAnswer(false); setShowHint(false) }}>Việt → Anh</button><button className={direction === 'en-vi' ? 'selected' : ''} onClick={() => { setDirection('en-vi'); setAnswer(''); setFeedback('idle'); setAttemptRecorded(false); setShowAnswer(false); setShowHint(false) }}>Anh → Việt</button></div>
            <div className="meaning">{promptText}</div>
            <div className="assist-actions"><button className="hint-button" type="button" onClick={() => setShowHint((value) => !value)}>{showHint ? 'Ẩn gợi ý' : '💡 Mở gợi ý'}</button><button className="hint-button reveal" type="button" onClick={revealAnswer}>Không biết / Hiện đáp án</button></div>
            {showHint && <p className="semantic-hint"><b>Gợi ý tình huống:</b> {semanticHint(practiceWord)}</p>}
            <form onSubmit={checkAnswer}><label htmlFor="answer">{answerLabel}</label><div className="answer-line"><input id="answer" disabled={feedback === 'correct'} value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder={answerPlaceholder} autoFocus /><button type="button" onClick={() => speak(practiceWord.english)} aria-label="Nghe phát âm tiếng Anh">🔊</button></div><button className="button button-primary full" type="submit" disabled={feedback === 'correct'}>{feedback === 'wrong' ? 'Kiểm tra lại' : 'Kiểm tra câu trả lời'}</button></form>
            {feedback !== 'idle' && <div className={`feedback ${feedback}`}><span>{feedback === 'correct' ? 'Chính xác! Câu ví dụ đang được phát âm.' : showAnswer ? 'Đáp án đã mở. Bạn vẫn có thể sửa và kiểm tra lại để nhớ kỹ hơn.' : 'Chưa đúng. Bạn có thể sửa đáp án và kiểm tra lại, hoặc bấm “Không biết / Hiện đáp án”.'}</span>{showAnswer && <p className="answer-context"><b>Đáp án:</b> {practiceWord.english} · {practiceWord.vietnamese}<br /><b>{practiceWord.collocation || 'Ví dụ'}:</b> {practiceWord.example}</p>}<button onClick={nextQuestion}>Từ tiếp theo →</button></div>}
          </article>}
          {practiceMode === 'usage' && <article className="question-card usage-card">
            <div className="question-top"><span>CẤU TRÚC & COLLOCATION</span><span className="score-pill">⚡ Chuỗi {streak}</span></div>
            <p className="usage-label">Chọn dạng từ hoặc giới từ đúng</p>
            <div className="usage-stem">{usageQuestion.stem}</div>
            <div className="assist-actions"><button className="hint-button" type="button" onClick={() => setShowHint((value) => !value)}>{showHint ? 'Ẩn gợi ý' : '💡 Mở gợi ý'}</button><button className="hint-button reveal" type="button" onClick={revealUsageAnswer}>Không biết / Hiện đáp án</button></div>
            {showHint && <p className="semantic-hint"><b>Gợi ý:</b> {usageQuestion.hint}</p>}
            <div className="choice-grid">{usageQuestion.choices.map((choice) => <button key={choice} disabled={usageFeedback === 'correct'} className={showUsageAnswer ? (choice === usageQuestion.answer ? 'correct' : 'wrong-choice') : ''} onClick={() => selectUsage(choice)}>{choice}</button>)}</div>
            {usageFeedback !== 'idle' && <div className={`feedback ${usageFeedback}`}><span>{usageFeedback === 'correct' ? 'Chính xác — câu ví dụ đang được phát âm.' : showUsageAnswer ? 'Đáp án đúng đã được tô xanh; bạn có thể chọn lại để ghi nhớ.' : 'Chưa đúng. Bạn có thể chọn lại, hoặc bấm “Không biết / Hiện đáp án”.'}</span>{showUsageAnswer && <p className="answer-context"><b>Đáp án:</b> {usageQuestion.answer}<br /><b>Quy tắc:</b> {usageQuestion.explanation}<br /><b>Ví dụ:</b> {usageQuestion.example}</p>}<button onClick={nextUsageQuestion}>Câu tiếp theo →</button></div>}
          </article>}
          {practiceMode === 'dictation' && <article className="question-card dictation-card">
            <div className="question-top"><span>NGHE & GÕ TỪ</span><span className="score-pill">⚡ Chuỗi {streak}</span></div>
            <p className="usage-label">Nhấn nghe, sau đó gõ lại từ tiếng Anh bạn nghe được.</p>
            <button className="listen-orb" onClick={() => speak(practiceWord.english)} aria-label="Nghe từ cần gõ">🔊<span>Nghe từ</span></button>
            <div className="assist-actions"><button className="hint-button" type="button" onClick={() => setShowHint((value) => !value)}>{showHint ? 'Ẩn gợi ý' : '💡 Mở gợi ý'}</button><button className="hint-button reveal" type="button" onClick={revealAnswer}>Không biết / Hiện đáp án</button></div>
            {showHint && <p className="semantic-hint"><b>Gợi ý tình huống:</b> {semanticHint(practiceWord)}</p>}
            <form onSubmit={checkAnswer}><label htmlFor="dictation-answer">Bạn nghe được từ gì?</label><div className="answer-line"><input id="dictation-answer" disabled={feedback === 'correct'} value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder="Gõ từ tiếng Anh…" autoFocus /><button type="button" onClick={() => speak(practiceWord.english)} aria-label="Nghe lại từ">↻</button></div><button className="button button-primary full" type="submit" disabled={feedback === 'correct'}>{feedback === 'wrong' ? 'Kiểm tra lại' : 'Kiểm tra từ đã gõ'}</button></form>
            {showAnswer && <div className="meaning-reveal"><span>{feedback === 'correct' ? 'NGHĨA TIẾNG VIỆT · ĐÃ MỞ KHÓA' : 'ĐÁP ÁN ĐÚNG'}</span><strong>{practiceWord.english}</strong><p>{practiceWord.vietnamese} · {practiceWord.collocation || 'Xem ví dụ ở phần đáp án.'}</p></div>}
            {feedback !== 'idle' && <div className={`feedback ${feedback}`}><span>{feedback === 'correct' ? 'Chính xác! Câu ví dụ đang được phát âm.' : showAnswer ? 'Đáp án đúng đã hiện; bạn có thể nghe lại, sửa và kiểm tra lại.' : 'Chưa đúng. Bạn có thể nghe lại và sửa, hoặc bấm “Không biết / Hiện đáp án”.'}</span>{showAnswer && <p className="answer-context"><b>Ví dụ:</b> {practiceWord.example}</p>}<button onClick={nextQuestion}>Từ tiếp theo →</button></div>}
          </article>}
          <aside className="practice-aside"><p className="eyebrow dark">TIẾN ĐỘ PHIÊN NÀY</p><div className="accuracy-ring" style={{ background: `conic-gradient(#78c6ad ${accuracy * 3.6}deg, #315e5d 0deg)` }}><strong>{accuracy}%</strong><span>chính xác</span></div><div className="quick-stat"><span>Đã làm</span><b>{attempts} câu</b></div><div className="quick-stat"><span>Đúng</span><b>{correct} câu</b></div><button className="text-button left" onClick={practiceMode === 'usage' ? nextUsageQuestion : nextQuestion}>{practiceMode === 'usage' ? 'Bỏ qua câu này →' : 'Bỏ qua từ này →'}</button></aside>
        </div>
      </section>}

      {view === 'vocabulary' && <section className="vocab-view">
        <div className="page-title"><p className="eyebrow dark">KHO TỪ VỰNG · {level}</p><h1>Từ vựng theo bậc.</h1><p>Mỗi bậc là một kho riêng: chọn A2, B1, B2 hoặc C1 để học đúng danh sách của bậc đó.</p></div>
        <div className="level-switch vocab-level-switch">{levels.map((item) => <button key={item} className={level === item ? 'active' : ''} onClick={() => chooseLevel(item)}><b>{item}</b><span>{words.filter((word) => word.level === item).length} từ</span></button>)}</div>
        <div className="vocab-toolbar"><label><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Tìm từ hoặc nghĩa tiếng Việt" /></label><span>{filteredWords.length} kết quả {level}</span></div>
        <div className="vocab-layout">
          <section className="word-browser" aria-label={`Danh sách từ vựng bậc ${level}`}>
            {groupedWords.length ? groupedWords.map(([section, sectionWords]) => <section className="word-group" key={section}>
              <header><p>{section}</p><span>{sectionWords.length} từ</span></header>
              <div className="word-grid">{sectionWords.map((word) => <button key={`${word.section}-${word.english}-${word.vietnamese}`} className={selected.english === word.english && selected.vietnamese === word.vietnamese ? 'word-item selected' : 'word-item'} onClick={() => { setSelected(word); setFlipped(false) }}><span>{word.english}<small>{word.vietnamese}</small></span><b>→</b></button>)}</div>
            </section>) : <p className="empty-words">Không có từ nào khớp với tìm kiếm này trong bậc {level}.</p>}
          </section>
          <section className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped((value) => !value)} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && setFlipped((value) => !value)}><div className="flashcard-inner"><div className="flashcard-front"><p>TỪ VỰNG · {selected.level}</p><h2>{selected.english}</h2><button type="button" onClick={(event) => { event.stopPropagation(); speak(selected.english) }}>🔊 Nghe phát âm</button><span>Chạm để lật thẻ</span></div><div className="flashcard-back"><p>NGHĨA & NGỮ CẢNH</p><h2>{selected.vietnamese}</h2><div><b>{selected.collocation}</b><q>{selected.example}</q></div><span>Chạm để xem từ tiếng Anh</span></div></div></section>
        </div>
      </section>}
    </main>
  )
}
