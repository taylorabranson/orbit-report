import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  satelliteTypes = [
    'Total',
    'Space Debris',
    'Communication', 
    'Probe',
    'Positioning',
    'Space Station',
    'Telescope'];

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countType(satellites: Satellite[], type: string) {
    let count: number = 0;

    if (type === 'Total') {
      return satellites.length;
    }

    for (let i = 0; i < satellites.length; i++) {
      if (satellites[i].type === type) {
        count += 1;
      }
    }
    return count;
  }

}
