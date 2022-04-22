import { ReactEventHandler, useCallback } from "react";

const PERMISSIONS_LIST = [
  [],
  ["read"],
  ["read", "create"],
  ["read", "create", "update"],
  ["read", "create", "update", "delete"],
];

type PermissionSelectorProps = {
  onChange: (permissions: string[]) => void;
};
export function PermissionSelector({ onChange }: PermissionSelectorProps) {
  const handleChange = useCallback<ReactEventHandler<HTMLSelectElement>>(
    (e) => {
      onChange(PERMISSIONS_LIST[Number(e.currentTarget.value)]);
    },
    [onChange]
  );

  return (
    <select onChange={handleChange}>
      <option value={0}>[]</option>
      <option value={1}>[READ]</option>
      <option value={2}>[READ,CREATE]</option>
      <option value={3}>[READ,CREATE,UPDATE]</option>
      <option value={4}>[READ,CREATE,UPDATE,DELETE]</option>
    </select>
  );
}
