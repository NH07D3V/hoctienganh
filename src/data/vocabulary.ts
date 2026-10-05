import source from './vocabulary.md?raw'

export type VocabularyWord = {
  english: string
  vietnamese: string
  collocation: string
  example: string
  level: string
  section: string
}

function parseVocabulary(markdown: string): VocabularyWord[] {
  let level = 'Tổng hợp'
  let section = 'Từ vựng'
  const seen = new Set<string>()
  const result: VocabularyWord[] = []

  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (line.startsWith('# ')) {
      level = line.slice(2).trim()
      // The first table of a level often comes directly after its `# A2` heading.
      // Resetting the section here keeps those rows out of the previous level's group.
      section = `${level}. Từ vựng cốt lõi`
      continue
    }
    if (line.startsWith('## ')) {
      section = line.slice(3).trim()
      continue
    }
    if (!line.startsWith('|') || /^\|[-|\s]+\|$/.test(line)) continue

    const cells = line.split('|').slice(1, -1).map((cell) => cell.trim())
    if (cells.length < 3 || /^(Từ\/cụm|Cụm)$/i.test(cells[0])) continue

    const [english, vietnamese, third, fourth] = cells
    const collocation = fourth ? third : ''
    const example = fourth ?? third
    if (!english || !vietnamese || !example) continue

    const key = `${english.toLowerCase()}|${vietnamese.toLowerCase()}`
    if (seen.has(key)) continue
    seen.add(key)
    result.push({ english, vietnamese, collocation, example, level, section })
  }

  return result
}

// The supplied list starts at A2. Keep it intact: each level is shown as its
// own library in the UI instead of inventing or mixing in a separate A1 set.
export const vocabularyWords = parseVocabulary(source)

const tailoredHints: Record<string, string> = {
  agree: 'Hai người cùng có chung quan điểm sau khi trao đổi.',
  answer: 'Một người đặt câu hỏi và đang chờ phản hồi.',
  arrive: 'Bạn vừa đến nơi đã hẹn sau một chuyến đi.',
  believe: 'Bạn cho rằng một điều là đúng, dù không thể nhìn thấy ngay.',
  borrow: 'Bạn tạm dùng đồ của người khác và sẽ trả lại sau.',
  bring: 'Bạn mang một vật từ chỗ này đến cho ai đó.',
  build: 'Bạn tạo nên một thứ từng bước, như ngôi nhà hoặc thói quen.',
  carry: 'Bạn đang cầm hoặc mang một vật theo bên mình.',
  choose: 'Có nhiều lựa chọn và bạn quyết định lấy một.',
  compare: 'Bạn đặt hai thứ cạnh nhau để thấy điểm giống và khác.',
  decide: 'Sau khi cân nhắc, bạn đưa ra lựa chọn cuối cùng.',
  discover: 'Bạn tìm thấy điều mới trước đây chưa biết.',
  discuss: 'Nhiều người cùng nói về một vấn đề để hiểu rõ hơn.',
  explain: 'Bạn làm cho một ý tưởng trở nên dễ hiểu với người khác.',
  forget: 'Một thông tin từng biết nhưng hiện tại không nhớ ra.',
  improve: 'Một kỹ năng hoặc tình trạng trở nên tốt hơn theo thời gian.',
  invite: 'Bạn muốn ai đó đến một nơi hoặc tham gia một hoạt động.',
  join: 'Bạn trở thành một phần của nhóm hoặc hoạt động đang diễn ra.',
  lend: 'Bạn đưa đồ của mình cho người khác dùng tạm.',
  manage: 'Tình huống khó nhưng bạn vẫn xoay xở để hoàn thành.',
  offer: 'Bạn chủ động đề nghị giúp đỡ hoặc đưa thứ gì đó cho ai đó.',
  prepare: 'Bạn làm sẵn những việc cần thiết trước một sự kiện.',
  protect: 'Bạn giữ một người hoặc vật khỏi nguy hiểm hay tổn hại.',
  realize: 'Bạn chợt hiểu một điều trước đó chưa nhận ra.',
  receive: 'Một thứ được gửi hoặc trao đến cho bạn.',
  recommend: 'Bạn nói rằng một lựa chọn là đáng thử hoặc phù hợp.',
  refuse: 'Bạn nói không với một lời đề nghị hoặc yêu cầu.',
  remember: 'Bạn có thể gọi lại một thông tin trong đầu.',
  repeat: 'Bạn làm hoặc nói lại điều vừa xảy ra.',
  replace: 'Một thứ mới được dùng thay cho thứ cũ.',
  require: 'Một việc cần có điều gì đó thì mới thực hiện được.',
  return: 'Bạn đưa lại thứ đã mượn hoặc đi trở về nơi cũ.',
  share: 'Bạn cho người khác cùng biết, dùng hoặc có một phần.',
  suggest: 'Bạn đưa ra một ý tưởng để người khác cân nhắc.',
  avoid: 'Bạn chủ động không làm hoặc không đi vào tình huống nào đó.',
  waste: 'Thời gian hoặc tiền bị dùng mà không đem lại ích lợi.',
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function semanticHint(word: VocabularyWord) {
  const matchingHint = tailoredHints[word.english.toLowerCase()]
  if (matchingHint) return matchingHint
  const blankedExample = word.example.replace(new RegExp(escapeRegExp(word.english), 'gi'), '_____')
  if (blankedExample !== word.example) return `Tình huống: ${blankedExample}`
  return `Hãy nghĩ về ngữ cảnh ${word.section.toLowerCase()} và diễn đạt đúng ý này.`
}
