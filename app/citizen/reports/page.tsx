import { redirect } from 'next/navigation'

export default function CitizenReportsPage() {
  redirect('/citizen/dashboard')
}

export const metadata = {
  title: 'Citizen Reports - Environmental Issues',
  description: 'Report environmental issues and track their resolution status.'
}