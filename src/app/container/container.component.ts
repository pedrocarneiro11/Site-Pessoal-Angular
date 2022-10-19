import { Component, Input } from '@angular/core';
import { cardGithub } from './cardGithub/cardGithub.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css', './container.responsive.component.css'],
})

export class container {
  @Input() name: string;

  cardText1: string = "Olá, meu nome é Pedro Carneiro, nasci em Recife no ano de 1998, sou  desenvolvedor Front End, com noções de Back End. Gosto muito de sair, de  jogar videogame, de ir para a academia, de programação, e estou sempre em busca de novos desafios, tentando sempre me aprimorar pessoalmente e profissionalmente.";

  cardText2: string = "Iniciei a minha trajetória profissional na área de engenharia civil, e cheguei a estagiar em obras de construção e reforma, porém, acabei me identificando mais com a programação e com a área de tecnologia, então decidi me tornar programador, buscando sempre me atualizar e aprender o máximo possível sobre esta brilhante área!";

  cardText3: string = "Sou um rapaz dedicado, resiliente, gosto de trabalhar em equipe, gosto de conhecer pessoas novas, culturas novas, e estou sempre à procura de novos desafios!";

}
