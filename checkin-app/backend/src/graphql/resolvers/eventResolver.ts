
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const eventResolver = {
  Query: {
    events: () => prisma.event.findMany({ include: { attendees: true } }),
  },
  Mutation: {
    joinEvent: async (_: any, { eventId }: { eventId: string }, ctx: any) => {
      if (!ctx.user) throw new Error("Not authenticated");

      await prisma.event.update({
        where: { id: eventId },
        data: {
          attendees: {
            connect: { id: ctx.user.id },
          },
        },
      });

      const updatedEvent = await prisma.event.findUnique({
        where: { id: eventId },
        include: { attendees: true },
      });

      ctx.io.to(eventId).emit("newAttendee", updatedEvent?.attendees);
      return updatedEvent;
    },
  },
};
