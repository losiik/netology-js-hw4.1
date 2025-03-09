import Staff from './Staff';

class StormStaff extends Staff {
  constructor() {
    super();
    this.name = 'Посох бури';
    this.attack = 10;
    this.range = 3;
  }
}

export default StormStaff;