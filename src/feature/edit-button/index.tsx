import { Button } from "../../shared/ui/button";

type EditButtonProps = { disabled?: boolean };
export function EditButton({ disabled }: EditButtonProps) {
  return (
    <Button disabled={disabled} onClick={() => alert("Edit")} title="Edit something">
      Edit
    </Button>
  );
}
