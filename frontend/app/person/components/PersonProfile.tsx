import { Card, CardContent, Stack, Divider } from "@mui/material";

import { PersonProps } from "../[id]/types";

import PersonHeader from "../[id]/components/PersonHeader";
import { PersonGeneralInfo } from "../[id]/components/PersonGeneralnfo";

import ContactSection from "../[id]/components/contacts/ContactSection";
import RelativeList from "../[id]/components/RelativeList";


interface Props {
  person: PersonProps;
}

export default function PersonProfile({ person }: Props) {
  
  return (
    <div className="">
      <Card elevation={3}>
        <CardContent>
          <Stack spacing={3}>
            
            <PersonHeader person={person} />
            <Divider />

            <PersonGeneralInfo person={person} />
            <Divider />

            <ContactSection personId={person.id} contacts={person.contacts} />
            <Divider />

            <RelativeList person={person} relatives={person.relatives} />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
