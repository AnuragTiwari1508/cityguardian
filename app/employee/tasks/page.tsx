import { redirect } from 'next/navigation'

export default function EmployeeTasksPage() {
  redirect('/employee/dashboard')
}

export const metadata = {
  title: 'Field Agent Tasks - Mission Operations',
  description: 'Manage field assignments and track mission completion.'
}