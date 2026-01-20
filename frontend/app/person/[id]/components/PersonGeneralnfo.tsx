import { PersonProps } from "../../types";
import { Grid, Typography } from "@mui/material";

export function PersonGeneralInfo({ person }: { person: PersonProps }) {
  return (
    <>
      <Typography variant="subtitle1" fontWeight={600}>
        Dados Gerais
      </Typography>

      <Grid container spacing={2}>
        
          <Typography variant="body2" color="text.secondary">
            Nome
          </Typography>
          <Typography>{person.name}</Typography>
        

        
          <Typography variant="body2" color="text.secondary">
            Sobrenome
          </Typography>
          <Typography>{person.lastname}</Typography>
        
      </Grid>
    </>
  );
}
