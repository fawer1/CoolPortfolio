import type { ReactNode } from "react";

export default function GridFrame({ children }: { children: ReactNode }) {
    // Acts as a logical wrapper; App's <main> defines the grid.
    return <>{children}</>;
}
