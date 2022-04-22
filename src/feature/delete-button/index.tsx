import { Button } from "../../shared/ui/button";

type DeleteButtonProps = { disabled?: boolean };
export function DeleteButton({ disabled }: DeleteButtonProps) {
  return (
    <Button disabled={disabled} onClick={() => alert("Delete")} title="Delete something">
      Delete
    </Button>
  );
}
