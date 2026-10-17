import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Sidebar(){
  const { t } = useTranslation()
  const items = [
    {key:'home', icon:'🏠'}, {key:'products', icon:'📦'}, {key:'reports', icon:'📊'},
    {key:'users', icon:'👥'}, {key:'settings', icon:'⚙️'}
  ]
  return (
    <aside className="w-64 bg-white/5 rounded-xl p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="logo">M</div>
        <div className="font-bold">{t('brand')}</div>
      </div>
      <nav className="flex flex-col gap-2">
        {items.map(it=>(
          <a key={it.key} href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5">
            <div className="flex items-center gap-3">
              <span>{it.icon}</span>
              <span className="font-semibold">{t(it.key)}</span>
            </div>
          </a>
        ))}
      </nav>
      <div className="mt-auto text-sm text-slate-400">v1.0</div>
    </aside>
  )
}
