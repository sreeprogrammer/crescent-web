import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mca")({
  component: () => <Outlet />,
});