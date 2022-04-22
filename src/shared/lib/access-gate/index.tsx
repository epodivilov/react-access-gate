import { createContext, ReactNode, useContext, useMemo } from "react";

type AccessContextState = {
  checkPermissions: (permissions: string[]) => boolean;
};
const AccessContext = createContext<AccessContextState>({
  checkPermissions: () => false,
});

type AccessProviderProps = { children: ReactNode; userPermissions: string[] };
export function AccessProvider({ children, userPermissions }: AccessProviderProps) {
  const value = useMemo(() => {
    return {
      checkPermissions: (permissions: string[]) => permissions.every((perm) => userPermissions.includes(perm)),
    };
  }, [userPermissions]);

  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>;
}

type AccessGateProps = {
  children: ReactNode;
  requiredPermissions: string[];
  fallback?: (props: AccessGateProps) => JSX.Element | null;
};
export function AccessGate(props: AccessGateProps) {
  const { children, requiredPermissions, fallback = () => null } = props;
  const { checkPermissions } = useContext(AccessContext);

  if (checkPermissions(requiredPermissions)) {
    return <>{children}</>;
  }

  return fallback(props);
}
