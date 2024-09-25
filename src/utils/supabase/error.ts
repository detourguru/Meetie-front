type SupabaseError = {
  statusText: string;
  status: number;
};

export function isSupabaseError(error: unknown): error is SupabaseError {
  return typeof error === "object" && error !== null && "statusText" in error && "status" in error;
}
