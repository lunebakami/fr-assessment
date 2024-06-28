import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Choices({
  firstChoice,
  setFirstChoice,
  firstChoiceType,
  setFirstChoiceType,
  secondChoice,
  setSecondChoice,
  secondChoiceType,
  setSecondChoiceType,
}) {
  return (
    <>
      <div>
        <Input
          value={firstChoice}
          onChange={(e) => setFirstChoice(e.target.value)}
          type="text"
          placeholder="First Choice"
        />
        <Select
          value={firstChoiceType}
          onValueChange={(value) => setFirstChoiceType(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dollar">Dollar</SelectItem>
            <SelectItem value="number">Number</SelectItem>
            <SelectItem value="string">String</SelectItem>
            <SelectItem value="boolean">Boolean</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Input
          value={secondChoice}
          onChange={(e) => setSecondChoice(e.target.value)}
          type="text"
          placeholder="Second Choice"
        />
        <Select
          value={secondChoiceType}
          onValueChange={(value) => setSecondChoiceType(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dollar">Dollar</SelectItem>
            <SelectItem value="number">Number</SelectItem>
            <SelectItem value="string">String</SelectItem>
            <SelectItem value="boolean">Boolean</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
