import { createContext, useState } from "react";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [noteData, setNoteData] = useState([]);

  const updateNoteData = (id, title, note) => {
    setNoteData([...noteData, { id: id, title: title, note: note }]);
  };

  return (
    <NoteContext.Provider value={{noteData, updateNoteData}}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
