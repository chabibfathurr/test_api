import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddSekolahDTO {
  @IsNotEmpty()
  nama: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  alamat: string;
  @IsNotEmpty()
  no_telp: string;
}

export class UpdatedSekolahDTO {
  @IsNotEmpty()
  id: any;
  @IsNotEmpty()
  nama: string;
  @IsOptional()
  email: string;
  @IsOptional()
  alamat: string;
  @IsOptional()
  no_telp: string;
}
