import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/course-info/$courseSlug")({
  component: () => <Outlet />,
});
