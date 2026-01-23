import Table from "./components/PersonTable";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { FindAll } from "./actions";
import AppBreadcrumbs from "@/shared/components/AppBreadcrumbs";
import { PersonProps } from "./types";

export default async function PersonPage() {

  const person: PersonProps[] = await FindAll();

  return (
    <div>
      <AppBreadcrumbs items={[{ label: "Pessoas", href: "/person" }]} />
      
      <div className="mb-2 text-end">

        <Fab size="small" color="info" aria-label="add" href="/person/new">
          <AddIcon />
        </Fab>
      </div>

      <Table rows={person}/>

    </div>
  );
}
