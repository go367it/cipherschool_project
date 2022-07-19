import React, { useContext } from "react";
import { Box, Container, Grid } from "@mui/material";
import NoteContext from "../Context/NoteContext";
import CreateNote from "../components/CreateNote";
import NoteCard from "../components/NoteCard";

const Homeage = () => {
  const { noteData } = useContext(NoteContext);

  return (
    <div>
      <Box
        sx={{
          padding: "1rem",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <CreateNote />

        <Container maxWidth="lg">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {noteData.length > 0
              ? noteData.map((j) => {
                  return (
                    <Grid xs={12} sm={6} md={6} lg={4}>
                      <NoteCard key={j.id} title={j.title} note={j.note} />
                    </Grid>
                  );
                })
              : ""}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Homeage;
