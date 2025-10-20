import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddmuridDTO, UpdatemuridDTO } from './murid.dto';

@Injectable()
export class MuridService {
  private readonly logger = new Logger(MuridService.name);

  constructor(private prisma: PrismaService) {}

  async list(Body: any) {
    const muridlist = await this.prisma.murid.findMany({});

    return muridlist;
  }

  async add(body: AddmuridDTO) {
    const muridlist = await this.prisma.murid.create({
      data: {
        id_sekolah: body.id_sekolah,
        nama: body.nama,
        email: body.email,
        alamat: body.alamat,
        no_telp: body.no_telp,
        status: body.status
      },
    });

    return muridlist;
  }

  async update(body: UpdatemuridDTO) {
    const muridlist = await this.prisma.murid.update({
      where: {
        id: body.id,
      },
      data: {
        id_sekolah: body.id_sekolah,
        nama: body.nama,
        email: body.email,
        alamat: body.alamat,
        no_telp: body.no_telp,
      },
    });

    return muridlist;
  }
}