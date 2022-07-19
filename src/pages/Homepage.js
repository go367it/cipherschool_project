import React, { useContext } from "react";
import { Box, Container } from "@mui/material";
import NoteContext from "../Context/NoteContext";
import CreateNote from "../components/CreateNote";

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
          {noteData.length > 0
            ? noteData.map((j) => {
                return <div>{j.title}</div>;
              })
            : ""}
        </Container>
      </Box>
    </div>
  );
};

export default Homeage;
