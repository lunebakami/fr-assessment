"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Choices from "@/components/choices";
import Form from "@/components/form";
import ShowData from "@/components/showData";

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(true); // Modal starts open
  const [title, setTitle] = useState("");

  const [firstChoice, setFirstChoice] = useState("");
  const [firstChoiceType, setFirstChoiceType] = useState("");
  const [secondChoice, setSecondChoice] = useState("");
  const [secondChoiceType, setSecondChoiceType] = useState("");

  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [savedData, setSavedData] = useState(null);

  const handleAddQuestion = () => {
    setShowChoices(true);
  };

  const handleSave = () => {
    const data = {
      title,
      choices: {
        first: { text: firstChoice, type: firstChoiceType },
        second: {
          text: secondChoice,
          type: secondChoiceType,
        },
      },
    };

    setSavedData(data);
    setDialogOpen(false);
  };

  useEffect(() => {
    if (
      firstChoice &&
      secondChoice &&
      title &&
      firstChoiceType &&
      secondChoiceType
    ) {
      setShowSaveButton(true);
    }
  }, [firstChoice, secondChoice, title, firstChoiceType, secondChoiceType]);

  return (
    <div className="container">
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>
          <Button onClick={() => setDialogOpen(true)}>Add a Question</Button>
        </DialogTitle>
        <DialogContent>
          <Form {...{ title, setTitle, handleAddQuestion }} />

          {showChoices && (
            <Choices
              {...{
                firstChoice,
                setFirstChoice,
                firstChoiceType,
                setFirstChoiceType,
                secondChoice,
                setSecondChoice,
                secondChoiceType,
                setSecondChoiceType,
              }}
            />
          )}

          {showSaveButton && <Button onClick={handleSave}>Save</Button>}
        </DialogContent>
      </Dialog>

      <ShowData savedData={savedData} />
    </div>
  );
}
