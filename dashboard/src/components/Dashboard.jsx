import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Dashboard(){
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-wrap">
        <div className="card flex-1 min-w-[180px] bg-white/3">
          <h3 className="text-sm text-slate-400">{t('totalUsers')}</h3>
          <p className="text-2xl font-bold">12,430</p>
        </div>
        <div className="card flex-1 min-w-[180px] bg-white/3">
          <h3 className="text-sm text-slate-400">{t('revenue')}</h3>
          <p className="text-2xl font-bold">42,300</p>
        </div>
        <div className="card flex-1 min-w-[180px] bg-white/3">
          <h3 className="text-sm text-slate-400">{t('activeToday')}</h3>
          <p className="text-2xl font-bold">1,204</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-4">
        <div className="panel bg-white/4 rounded-xl p-4">
          <h3 className="font-semibold mb-3">{t('recentOrders')}</h3>
          <table className="w-full">
            <thead>
              <tr className="text-sm text-slate-400">
                <th className="py-2">{t('customer')}</th>
                <th className="py-2">{t('service')}</th>
                <th className="py-2">{t('status')}</th>
                <th className="py-2">{t('date')}</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-white/5"><td className="py-2">سارة</td><td>خطة برو</td><td>مكتمل</td><td>2026-10-15</td></tr>
              <tr className="border-t border-white/5"><td className="py-2">أحمد</td><td>تصميم واجهة</td><td>قيد المعالجة</td><td>2026-10-14</td></tr>
              <tr className="border-t border-white/5"><td className="py-2">مريم</td><td>استشارة</td><td>ملغى</td><td>2026-10-12</td></tr>
            </tbody>
          </table>
        </div>

        <div className="panel bg-white/4 rounded-xl p-4">
          <h3 className="font-semibold">{t('summary')}</h3>
          <p className="text-sm text-slate-400">{t('summaryDesc')}</p>
          <div className="mt-4 h-40 rounded-lg" style={{background:'linear-gradient(90deg,#06B6D4,#7C3AED)'}}></div>
        </div>
      </div>
    </div>
  )
}
