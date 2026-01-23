import PersonProfile from "@/app/person/components/PersonProfile";
import AppBreadcrumbs from "@/shared/components/AppBreadcrumbs";
import { Show } from "./actions";

interface PageProps {
  params: {
    id: string;
    relativeId: string;
  };
  searchParams: {
    relationship: string;
  };
}

export default async function RelativeDetail({ 
  params, searchParams 
}: PageProps) {

  const { id, relativeId } = await params;
  const {relationship} = await searchParams;

  const person = await Show(id);
  const relative = await Show(relativeId);

  return (
    <>
       <AppBreadcrumbs
        items={[
          { label: "Pessoa", href: "/person" },
          { label: person.name, href: `/person/${id}` },
          { label: relationship },
          { label: relative.name },
        ]}
      />

      <PersonProfile person={relative} />
    </>
  );
}
