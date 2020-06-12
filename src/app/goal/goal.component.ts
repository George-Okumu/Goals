import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,7,1)),
    new Goal(2, 'Buy cookies', 'I have to buy cookies for the parrot',new Date(2020,6,3)),
    new Goal(3, 'Get new phone case', 'Diana has a birthday coming up soon',new Date(2020,6,7)),
    new Goal(4, 'Get Dog food', 'Pupper likes expensive snacks',new Date(2020,5,9)),
    new Goal(5, 'Solve math homework', 'Damn maths',new Date(2020,5,20)),
    new Goal(6, 'Plot my world domination', 'Cause i am an evil over lord',new Date(2020,7,31))
  ];
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isCompleted, index){
    if(isCompleted) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

      if(toDelete){
        this.goals.splice(index,1)
      }
    }

  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id= goalLength+1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
