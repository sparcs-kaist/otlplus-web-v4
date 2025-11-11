import type { Professor } from "@/common/schemas/professor";

export default function formatProfessorName(professors: Professor[]): string {
  return professors.map((professor) => professor.name).join(", ");
}