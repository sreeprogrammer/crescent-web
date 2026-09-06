import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ba-islamic-studies")({
  component: BAIslamicStudiesLayout,
});

function BAIslamicStudiesLayout() {
  return <Outlet />;
}