import { GraduationCap } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CoursesFab() {
  return (
    <Link
      to="/programmes"
      aria-label="Courses"
      className="fixed left-0 top-[44%] z-[9999] flex -translate-y-1/2 items-center justify-center rounded-r-2xl bg-red-700 px-2.5 py-4 text-white shadow-lg transition-all duration-300 hover:bg-red-800"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <GraduationCap className="size-5" />

        <span
          className="
            [writing-mode:vertical-rl]
            rotate-180
            text-sm
            font-semibold
            tracking-[0.08em]
          "
        >
          Courses
        </span>
      </div>
    </Link>
  );
}

export default CoursesFab;