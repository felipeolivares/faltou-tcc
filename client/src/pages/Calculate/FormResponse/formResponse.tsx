import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import { isMobile } from "utils";
import { Box, Divider } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Modal } from "components";

const FormResponse: React.FC = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal
        open={openModal}
        title="Você tem certeza que deseja excluir a matéria Português?"
        buttonLabel="Sim"
        buttonLabel2="Não"
        onClickButton={() => setOpenModal(false)}
        onClickButton2={() => setOpenModal(false)}
        onClose={() => setOpenModal(false)}
      />
      <Paper
        elevation={3}
        className={isMobile() ? classes.paperCalcMob : classes.paperCalc}
      >
        <Typography variant="h5" fontWeight="bold">
          Matérias:
        </Typography>
        {/* Colocar essa validação quando ter resposta do back */}
        {/* <Typography variant="body1" className="pt24">
        Ainda não há materias calculadas!
      </Typography> */}
        <Box className={classes.box}>
          <Box className={classes.boxSpace}>
            <Typography variant="body1" fontWeight="bold" color="#E7B10A">
              Português
            </Typography>
            <Box className={classes.boxRow}>
              <EditIcon color="info" className={classes.icon} />
              <DeleteForeverIcon
                color="error"
                className={classes.icon}
                onClick={() => setOpenModal(true)}
              />
            </Box>
          </Box>
          <Divider />
          <Box className={classes.boxSpace} paddingTop="16px">
            <Typography variant="body1" fontWeight="bold">
              Posso faltar?
            </Typography>
            <Box className={classes.boxRow}>
              <SentimentSatisfiedAltIcon color="success" />
              <Typography variant="body1" color="#2E7D32" paddingLeft="4px">
                Sim, você pode faltar mais 3 vezes!
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.boxSpace} paddingTop="16px">
            <Typography variant="body1" fontWeight="bold">
              Posso faltar?
            </Typography>
            <Box className={classes.boxRow}>
              <SentimentNeutralIcon color="warning" />
              <Typography variant="body1" color="#ED6C02" paddingLeft="4px">
                Cuidado, você não pode mais faltar nenhuma vez!
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.boxSpace} paddingTop="16px">
            <Typography variant="body1" fontWeight="bold">
              Posso faltar?
            </Typography>
            <Box className={classes.boxRow}>
              <SentimentVeryDissatisfiedIcon color="error" />
              <Typography variant="body1" color="#d32f2f" paddingLeft="4px">
                Você passou do limite de faltas!
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.boxSpace} paddingTop="16px">
            <Typography variant="body1" fontWeight="bold">
              Quantidade de aulas
            </Typography>
            <Typography variant="body1">50</Typography>
          </Box>
          <Divider />
          <Box className={classes.boxSpace} paddingTop="16px">
            <Typography variant="body1" fontWeight="bold">
              Quantidade de faltas possíveis da matéria
            </Typography>
            <Typography variant="body1">50</Typography>
          </Box>
          <Divider />
          <Box className={classes.boxSpace} paddingTop="16px">
            <Typography variant="body1" fontWeight="bold">
              Quantidade de faltas
            </Typography>
            <Typography variant="body1">2</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default FormResponse;
