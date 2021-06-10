import { Component } from '@angular/core';
import { barcaTamanho } from './barcaTamanho';
import { sushiPecas } from './pecasSushi';

@Component({
  selector: 'app-selecoes',
  templateUrl: './selecoes.component.html',
  styleUrls: ['./selecoes.component.sass']
})
export class SelecoesComponent {

  tamanhoBarca: barcaTamanho[] = [
    {selecionado: false, pecas: 20},
    {selecionado: false, pecas: 40},
    {selecionado: false, pecas: 80},
    {selecionado: true, pecas: 160},
  ]

  pecasSushi: sushiPecas[] = [
    {qtd: 0, tipo: 'Temaki com Cream Cheese'},
    {qtd: 0, tipo: 'Temaki com Salmão'},
    {qtd: 0, tipo: 'Temaki de Atum'},
    {qtd: 0, tipo: 'Temaki Califórnia'},
    {qtd: 0, tipo: 'Shimeji'},
    {qtd: 0, tipo: 'Sunomono'},
    {qtd: 0, tipo: 'Guioza'},
    {qtd: 0, tipo: 'Sashimi Salmão'},
    {qtd: 0, tipo: 'Sashimi Atum'},
    {qtd: 0, tipo: 'Sashimi Robalo'},
    {qtd: 0, tipo: 'Uramaki de Salmão com Cream Cheese'},
    {qtd: 0, tipo: 'Hot Roll'},
    {qtd: 0, tipo: 'Joy'},
  ]

}
