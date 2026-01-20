// app/person/[id]/page.tsx
import { PersonProps } from "../../types";
import PersonHeader from "./PersonHeader";
import ContactList from "./ContactList";
import RelativeList from "./RelativeList";
import { Card, CardContent, Stack, Divider } from "@mui/material";
import { PersonGeneralInfo } from "./PersonGeneralnfo";


interface Props {
  person: PersonProps;
}

export default async function PersonProfile({ person }: Props) {
  
  return (
    <div className="">
      <Card elevation={3}>
        <CardContent>
          <Stack spacing={3}>
            <PersonHeader person={person} />

            <Divider />

            <PersonGeneralInfo person={person} />

            <Divider />

            <ContactList contacts={person.contacts} />

            <Divider />

            <RelativeList person={person} relatives={person.relatives} />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
