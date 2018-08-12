import { Component, OnInit } from '@angular/core';
import { Cub } from './cub.model';
import { CubService } from './cub.service';

@Component({
  selector: 'app-estimativa',
  templateUrl: './estimativa.component.html'
})
export class EstimativaComponent implements OnInit {

  cubs: Cub[];
  constructor(private cubsService: CubService) { }

  ngOnInit() {
    this.cubsService.cubs()
      .subscribe(cubs => this.cubs = cubs);
  }

}
