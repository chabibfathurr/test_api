import { Body, Controller, Logger, Post} from '@nestjs/common';
import { SekolahService } from './sekolah.service';
import { OKException } from 'src/utilities/ok.exception';
import { AddSekolahDTO, UpdatedSekolahDTO } from './sekolah.dto';

@Controller('sekolah')
export class SekolahController {
  constructor(private sekolahService: SekolahService) {}
  private readonly logger = new Logger(SekolahController.name, {
    timestamp: true,
  });
  @Post('list')
  async loggedIn() {
    const signin = await this.sekolahService.list();
    throw new OKException(signin, 'Success');
  }
  @Post('add')
  async add(@Body() body: AddSekolahDTO) {
    const signin = await this.sekolahService.add(body);
    throw new OKException(signin, 'Success');
  }
  @Post('update')
  async update(@Body() body: UpdatedSekolahDTO) {
    const signin = await this.sekolahService.update(body);
    throw new OKException(signin, 'Success');
  }
}
