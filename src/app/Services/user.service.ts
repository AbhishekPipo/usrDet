import { EventEmitter } from "@angular/core"

export class UserService{
    users=[
  {
    name: 'John',
    job: 'Designer',
    country: 'United States',
    age: 35,
    avatar: 'https://source.unsplash.com/random/1',
    gender: 'Male'
  },
  {
    name: 'Teacher',
    job: 'Designer',
    country: 'Germany',
    age: 35,
    avatar: 'https://source.unsplash.com/random/2',
    gender: 'Female'
  },
  {
    name: 'Ireland',
    job: 'Designer',
    country: 'Ireland',
    age: 35,
    avatar: 'https://source.unsplash.com/random/3',
    gender: 'Unknown'
  },
  {
    name: '7006',
    job: 'Unknown',
    country: 'Unknown',
    age: 35,
    avatar: 'https://source.unsplash.com/random/4',
    gender: 'Unknown'
  },
  {
    name: 'Steve',
    job: 'Designer',
    country: 'United States',
    age: 35,
    avatar: 'https://source.unsplash.com/random/5',
    gender: 'Unknown'
  }
]


OnShowDetClicked=new EventEmitter<{
    name: string,
    job: string,
    country: string,
    age: number,
    avatar: string,
    gender: string
  }>();
  showUserDet(user: {
    name: string,
    job: string,
    country: string,
    age: number,
    avatar: string,
    gender: string
  }){
    
  this.OnShowDetClicked.emit(user)
  }

}