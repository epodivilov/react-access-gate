import { Button } from "../../shared/ui/button";

export function NotFitButton() {
  return (
    <Button onClick={() => alert("AAAAA")} title="Do something">
      Button not support disabled prop
    </Button>
  );
}
