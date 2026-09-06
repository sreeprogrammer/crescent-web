import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mba")({
  component: () => <Outlet />,
});