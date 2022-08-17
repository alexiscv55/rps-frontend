import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../types/link.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  links!: Link[];

  constructor() { }

  ngOnInit(): void {
  }

}
