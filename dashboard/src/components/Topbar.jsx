import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Topbar({ onToggleTheme }){
  const { t, i18n } = useTranslation()
  const setLang = (lng) => i18n.changeLanguage(lng)

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div className="bg-white/5 rounded-lg px-3 py-2 flex items-center gap-3 w-full">
          <svg width="16" height="16" viewBox="0 0 24 24" className="text-slate-300"><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <input placeholder={t('search')} className="bg-transparent outline-none w-full" />
        </div>
        <div className="text-sm text-slate-300 hidden sm:block">{t('welcome')}</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-md">
          <button onClick={()=>setLang('ar')} aria-pressed={i18n.language==='ar'} className="px-2 py-1 rounded">العربية</button>
          <button onClick={()=>setLang('en')} aria-pressed={i18n.language==='en'} className="px-2 py-1 rounded">EN</button>
        </div>
        <button onClick={onToggleTheme} className="px-3 py-2 border rounded-md bg-white/5">☀️/🌙</button>
        <button className="px-4 py-2 rounded-md bg-gradient-to-r from-primary1 to-primary2 text-white font-semibold"> {t('cta')} </button>
      </div>
    </div>
  )
}
