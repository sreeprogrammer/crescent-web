import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { CourseSection } from "@/data/courseInfo";

export type { CourseSection } from "@/data/courseInfo";

export function CourseInfoLink({
  courseSlug,
  section,
  children,
  className,
}: {
  courseSlug: string;
  section: CourseSection;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to="/course-info/$courseSlug/$section"
      params={{ courseSlug, section }}
      className={className}
    >
      {children}
    </Link>
  );
}
