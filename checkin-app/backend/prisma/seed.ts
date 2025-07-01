
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.event.createMany({
    data: [
      { name: "Tech Meetup", location: "Hall A", startTime: new Date() },
      { name: "Open Mic Night", location: "Cafe X", startTime: new Date() },
    ],
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
