import React from "react";
import { Box, Grid, Divider } from "@material-ui/core";
import useStyles from "./styles";
import { isMobile } from "utils";

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={isMobile() ? "mobile-footer" : ""} display="flex">
      {isMobile() && (
        <Box className="background-mobile">
          <Box className="pt15">
            {/* <Accordian id="resources" title="Mais Recursos" isResources /> */}
          </Box>
        </Box>
      )}
      {!isMobile() && <Divider />}
      <Box className={isMobile() ? "footerMb" : "footer"}>
        <Grid container xs={12}>
          <Grid item xs={8}>
            MetLife Planos Odontológicos Ltda registrada no CRO/SP nº 6191 e na
            ANS sob nº 40648-1 - Resp. Tec. Luis Danilo Bronzatto Maurici CRO/SP
            40364. CNPJ: 03.273.825/0001-78 | Rua Florida,1595 5º Andar-
            Brooklin Novo, São Paulo-SP
          </Grid>
          <Box className={isMobile() ? classes.image1Mob : classes.image1}>
            <Grid item xs={2} sm={6}>
              {/* <img alt="brand" src={Stamp1} /> */}
            </Grid>
          </Box>
          <Box className={isMobile() ? classes.image2Mob : classes.image2}>
            <Grid item xs={2} sm={6}>
              {/* <img alt="brand" src={Stamp2} /> */}
            </Grid>
          </Box>
        </Grid>
      </Box>
      {!isMobile() && <Divider />}
    </Box>
  );
};

export default Footer;
