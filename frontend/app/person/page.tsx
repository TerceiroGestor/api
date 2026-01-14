import { DashboardLayout } from '@/shared/layout/DashboardLayout'
import { PersonPage } from '@/modules/person/PersonPage'


export default function Page() {
  return (
    <DashboardLayout>
      <PersonPage/>
    </DashboardLayout>
  )
}
