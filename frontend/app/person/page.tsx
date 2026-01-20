import Table from "./components/Table";
import { IconButton } from "@mui/material";
import { CirclePlus } from "lucide-react";
import { FindAll } from "./actions";
import AppBreadcrumbs from "@/shared/components/AppBreadcrumbs";
import { PersonProps } from "./types";


export default async function PersonPage() {
  const rows: PersonProps[] = await FindAll();

  return (
    <div>
      <AppBreadcrumbs items={[{ label: "Pessoas", href: "/person" }]} />
      <div className="mb-2">
        <IconButton aria-label="plus" href="/person/new">
          <CirclePlus size={30} />
        </IconButton>
      </div>

      <Table rows={rows} />
    </div>
  );
}
