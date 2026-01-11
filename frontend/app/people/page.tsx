import { DashboardLayout } from '@/shared/layout/DashboardLayout'
import { PeopleTable } from '@/modules/people/components/PeopleTable'

export default function PeoplePage() {
  return (
    <DashboardLayout>
      <PeopleTable />
    </DashboardLayout>
  )
}
