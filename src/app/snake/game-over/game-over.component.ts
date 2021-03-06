import { HttpClient } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Component, OnInit } from '@angular/core';
import { Score } from '@app/model';
import { environment } from '@env/environment';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  public player: string;
  public score: number;

  constructor(public gameOverModalRef: BsModalRef, private http: HttpClient) { }

  ngOnInit() {
  }

  submit() {
    const url = `${environment.api}/scores`;
    const score = new Score();
    score.name = this.player;
    score.score = this.score;
    this.http.post(url, score)
      .subscribe(() => this.gameOverModalRef.hide(), err => console.log(err));
  }

}
