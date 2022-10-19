import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Jogo } from './entities/jogo.entity';

@Controller('jogos')
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  @Post()
  create(@Body() createJogoDto: CreateJogoDto) {
    return this.jogosService.create(createJogoDto);
  }

  @Get('')
  findAll() {
    return this.jogosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const jogoId = this.jogosService.findOne(id);
    if (!jogoId){
      throw new NotFoundException("Erro, identificador não encotnrado.");
    }
    return jogoId;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateJogoDto: UpdateJogoDto) {
    return this.jogosService.update(id, updateJogoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.jogosService.remove(id);
  }
}
