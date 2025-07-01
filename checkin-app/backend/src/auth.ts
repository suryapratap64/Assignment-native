
export function authMiddleware(req: any) {
  const token = req.headers.authorization || "";
  if (token === "test-token") {
    return { id: "user1", name: "John Doe", email: "john@example.com" };
  }
  return null;
}
