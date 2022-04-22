import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { CreateButton } from "../feature/create-button";
import { DeleteButton } from "../feature/delete-button";
import { EditButton } from "../feature/edit-button";
import { NotFitButton } from "../feature/not-fit-button";
import { PermissionSelector } from "../feature/permission-selector";
import { AccessGate, AccessProvider } from "../shared/lib/access-gate";
import { AccessFallback } from "../shared/ui/access-fallback";
import { Flex } from "../shared/ui/flex";
import "./index.css";

export function Application() {
  const [permissions, setPermissions] = useState<string[]>([]);

  return (
    <React.StrictMode>
      <AccessProvider userPermissions={permissions}>
        <Flex flexDirection="column" justifyContent="center" gap={40} width="100vw" height="100vh">
          <Flex justifyContent="center" alignItems="center">
            <label>
              Select permissions: <PermissionSelector onChange={setPermissions} />
            </label>
          </Flex>
          <AccessGate requiredPermissions={["read"]}>
            <Flex justifyContent="center" alignItems="center" gap={20}>
              <AccessGate requiredPermissions={["create"]} fallback={AccessFallback}>
                <CreateButton />
              </AccessGate>
              <AccessGate requiredPermissions={["update"]} fallback={AccessFallback}>
                <EditButton />
              </AccessGate>
              <AccessGate requiredPermissions={["delete"]} fallback={AccessFallback}>
                <DeleteButton />
              </AccessGate>
              <AccessGate requiredPermissions={["create", "update", "delete"]} fallback={AccessFallback}>
                <NotFitButton />
              </AccessGate>
            </Flex>
          </AccessGate>
        </Flex>
      </AccessProvider>
    </React.StrictMode>
  );
}
