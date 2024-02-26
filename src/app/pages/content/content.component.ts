import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFake, dataFake } from '../../data/data-fake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = "";
  @Input() contentTitle: string = "";
  @Input() contentDescription: string = "";

  private id: string = "0";

  constructor (private route: ActivatedRoute) {
  
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      const id = value.get("Id");
      this.id = (id !== null) ? id : "0";
    });
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent (id: string) {
    const result: DataFake = dataFake.filter( article => article.id === id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }
}
