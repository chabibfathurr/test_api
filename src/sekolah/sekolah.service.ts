import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddSekolahDTO, UpdatedSekolahDTO } from './sekolah.dto';

@Injectable()
export class SekolahService {
  constructor(private prisma: PrismaService) {}
  private readonly logger = new Logger(SekolahService.name);
  async list() {
    const sekolahList = await this.prisma.sekolah.findMany({});

    return sekolahList;
  }
  async add(body: AddSekolahDTO) {
    const sekolahCreate = await this.prisma.sekolah.create({
      data: {
        nama: body.nama,
        email: body.email,
        no_telp: body.no_telp,
        alamat: body.alamat,
      },
    });
    return sekolahCreate;
  }
  async update(body: UpdatedSekolahDTO) {
    const sekolahCreate = await this.prisma.sekolah.update({
      where: {
        id: body.id,
      },
      data: {
        nama: body.nama,
        email: body.email,
        no_telp: body.no_telp,
        alamat: body.alamat,
      },
    });
    return sekolahCreate;
  }
}
