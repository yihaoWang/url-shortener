import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UrlShortenerModule {
  async create(data: Prisma.urlshortenerCreateInput) {
    return prisma.urlshortener.create({
      data,
    });
  }

  async getByHash(hash: string) {
    return prisma.urlshortener.findUnique({
      where: { hash },
    });
  }
}

const urlShortenerModule = new UrlShortenerModule();

export default urlShortenerModule;
