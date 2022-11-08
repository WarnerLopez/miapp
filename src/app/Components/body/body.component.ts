import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  mostrar = true
    frase:any ={
        mensaje: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt dolor hic '+
        'facere libero, sequi blanditiis accusantium veritatis optio laborum voluptatum quo quas aliquid'+
        ' dolore inventore dolorum, eaque corrupti perferendis.Lorem, ipsum dolor sit amet consectetur adipisicing '+
        'elit. Officiis deserunt dolor hic facere libero, sequi blanditiis accusantium veritatis optio laborum voluptatum '+
        'quo quas aliquid dolore inventore dolorum, eaque corrupti perferendisLorem, ipsum dolor sit amet consectetur adipisicing elit.'+
        ' Officiis deserunt dolor hic facere libero, sequi blanditiis accusantium veritatis optio laborum voluptatum quo quas aliquid '+
        'dolore inventore dolorum, eaque corrupti perferendisLorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt'+
        ' dolor hic facere libero, sequi blanditiis accusantium veritatis optio laborum voluptatum quo quas aliquid dolore inventore dolorum,'+
        ' eaque corrupti perferendisLorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt dolor hic facere libero,'+
        ' sequi blanditiis accusantium veritatis optio laborum voluptatum quo quas aliquid dolore inventore dolorum, eaque corrupti perferendis eaque corrupti perferendis',
        autor: 'loren'
    }

    amigos: string[] = ['Luisk', 'yeison' ,'emilio' ,'alex' ,'Jose', 'Luisk', 'yeison' ,'emilio' ,'alex' ,'Jose','Luisk', 'yeison' ,'emilio' ,'alex' ,'Jose'] 



}
