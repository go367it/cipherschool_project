import React, { useState, useContext } from "react";
import {
  Paper,
  Container,
  TextField,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import NoteContext from "../Context/NoteContext";

const CreateNote = () => {
  const { updateNoteData } = useContext(NoteContext);

  const [hidden, setHidden] = useState(true);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  // when cancel button is clicked
  const handleCancel = () => {
    setTitle("");
    setNote("");
    setHidden(true);
  };

  // when create button is clicked
  const handleCreate = () => {
    updateNoteData(new Date().getTime().toString(), title, note);
    setTitle("");
    setNote("");
    setHidden(true);
  };

  return (
      <Container maxWidth="sm" sx={{marginBottom:'2rem'}}>
        <Paper
          variant="outlined"
          sx={{ borderRadius: "10px", padding: "1rem" }}
        >
          <Grid container spacing={1}>
            <Grid hidden={hidden} item xs={12}>
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                label="Title"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onClick={() => setHidden(false)}
                fullWidth
                label="Note"
                variant="standard"
              />
            </Grid>
            <Grid hidden={hidden} item xs={12} mt={2}>
              <Stack direction="row" spacing={2}>
                <Button onClick={() => handleCancel()}>Cancel</Button>
                <Button
                  onClick={() => handleCreate()}
                  variant="contained"
                  disableElevation
                >
                  Create
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
  );
};

export default CreateNote;
