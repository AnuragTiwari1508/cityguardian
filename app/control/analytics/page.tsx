import { redirect } from 'next/navigation'

export default function ControlAnalyticsPage() {
  redirect('/control/dashboard')
}

export const metadata = {
  title: 'Command Analytics - Zone Management',
  description: 'Strategic analytics and zone management for environmental operations.'
}