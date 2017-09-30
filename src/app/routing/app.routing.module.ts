import { SnakeComponent } from './../snake/snake.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderBoardComponent } from '../leader-board/leader-board.component';

const routes: Routes = [
    { path: '', component: SnakeComponent},
    { path: 'leaderBoard', component: LeaderBoardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }