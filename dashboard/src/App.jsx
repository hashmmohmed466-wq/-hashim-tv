import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'

export default function App(){
  const { i18n } = useTranslation()
  const [themeLight, setThemeLight] = useState(false)

  useEffect(()=>{
    document.documentElement.lang = i18n.language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  },[i18n.language])

  useEffect(()=>{
    document.body.classList.toggle('light', themeLight)
  },[themeLight])

  return (
    <div className="min-h-screen p-5 flex gap-5">
      <Sidebar />
      <main className="flex-1 flex flex-col gap-5">
        <Topbar onToggleTheme={()=>setThemeLight(v=>!v)} />
        <Dashboard />
      </main>
    </div>
  )
}
