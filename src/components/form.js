import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Form({ title, setTitle, handleAddQuestion }) {
  return (
    <>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleAddQuestion}>Add Question</Button>
    </>
  );
}
