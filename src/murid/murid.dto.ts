import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddmuridDTO {
  @IsNotEmpty()
  id_sekolah: number;

  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  alamat: string;

  @IsNotEmpty()
  no_telp: string;

  @IsNotEmpty()
  status: number;
}

export class UpdatemuridDTO {
  @IsNotEmpty()
  id_sekolah: number;

  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  email: string;

  @IsOptional()
  alamat: string;

  @IsOptional()
  no_telp: string;
}
