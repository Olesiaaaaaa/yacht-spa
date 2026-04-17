import { useState } from 'react'

export default function TranslatorWidget() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [lang, setLang] = useState('en')
  const [loading, setLoading] = useState(false)

  const languages = [
    { code: 'en', name: ' English' },
    { code: 'es', name: ' Español' },
    { code: 'fi', name: ' Suomi' },
    { code: 'pt', name: ' Português' },
    { code: 'zh', name: ' 中文' },
    { code: 'ru', name: ' Русский' } 
  ]

  const handleTranslate = async () => {
    if (!text.trim()) return
    setLoading(true)
    setResult('')
    try {
      //  Изменили на Autodetect: определяет исходный язык автоматически
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=Autodetect|${lang}`
      )
      const data = await response.json()
      if (data.responseData?.translatedText) {
        setResult(data.responseData.translatedText)
      } else {
        setResult(' Translation unavailable')
      }
    } catch (err) {
      setResult(' Connection error')
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setText('')
    setResult('')
    setLoading(false)
  }

  return (
    <div className="card border-0" style={{
      width: '100%',
      border: '2px solid #4facfe',
      borderRadius: '14px',
      background: 'linear-gradient(180deg, #ffffff 0%, #e8f4fd 100%)',
      boxShadow: '0 4px 12px rgba(13,110,253,0.1)'
    }}>
      <div className="card-header py-2 px-3 d-flex justify-content-between align-items-center" style={{
        background: 'linear-gradient(90deg, #0d6efd, #4facfe)',
        color: '#fff',
        borderRadius: '12px 12px 0 0',
        fontSize: '0.85rem',
        fontWeight: '600'
      }}>
        <span> Universal Translator</span>
        <button 
          onClick={handleClear}
          className="btn btn-sm btn-light text-primary py-0 px-2"
          title="Сбросить"
          style={{ fontSize: '0.8rem', lineHeight: '1' }}
        >
           Сброс
        </button>
      </div>
      <div className="card-body p-3">
        {/* Поле ввода */}
        <textarea
          className="form-control form-control-sm mb-2"
          rows="2"
          placeholder="Пишите на любом языке (Auto-detect)..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ fontSize: '0.8rem', resize: 'none' }}
        />
        
        {/* Язык + кнопка перевода */}
        <div className="d-flex gap-2 align-items-center mb-2">
          <div className="flex-grow-1" style={{ fontSize: '0.75rem', color: '#6c757d' }}>
            Перевод на:
            <select
              className="form-select form-select-sm mt-1"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={{ fontSize: '0.8rem' }}
            >
              {languages.map(l => (
                <option key={l.code} value={l.code}>{l.name}</option>
              ))}
            </select>
          </div>
          <button
            className="btn btn-sm btn-primary px-3"
            onClick={handleTranslate}
            disabled={!text.trim() || loading}
            style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', marginTop: '1.1rem' }}
          >
            {loading ? '' : ''}
          </button>
        </div>
        
        {/* Результат */}
        {result && (
          <div className="mt-2 p-2 rounded" style={{
            background: 'rgba(13,110,253,0.08)',
            borderLeft: '3px solid #0d6efd',
            fontSize: '0.85rem'
          }}>
            {result}
          </div>
        )}
      </div>
    </div>
  )
}
