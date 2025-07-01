
export function setupSocket(io: any) {
  io.on("connection", (socket: any) => {
    console.log("Client connected");

    socket.on("joinRoom", (eventId: string) => {
      socket.join(eventId);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
}
