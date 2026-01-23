import PersonProfile from "../components/PersonProfile";
import AppBreadcrumbs from "@/shared/components/AppBreadcrumbs";
import { PersonProps } from "./types";
import { Show } from "./actions";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function PersonDetail({ params }: PageProps) {
  
  const { id } = await params;
  const person: PersonProps = await Show(id);
  
  return (
     <>
      <AppBreadcrumbs
        items={[
          { label: "Pessoas", href: "/person" },
          { label: person.name, href: `/person/${person.id}` },
        ]}
      />

      <PersonProfile person={person} />
    </>
  );
}
