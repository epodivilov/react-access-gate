import { Button } from "../../shared/ui/button";

type CreateButtonProps = { disabled?: boolean };
export function CreateButton({ disabled }: CreateButtonProps) {
  return (
    <Button disabled={disabled} onClick={() => alert("Create")} title="Create something">
      Create
    </Button>
  );
}
