import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() photCover: string = "";
  @Input() cardTitle: string = "";
  @Input() Id: string = "0";

}