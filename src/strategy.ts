interface FlyBehavior {
  fly(): string;
}

class FlyWithWings implements FlyBehavior {
  fly(): string {
    return "I'm flying!!";
  }
}

class FlyNoWay implements  FlyBehavior {
  fly(): string {
    return "I can't fly";
  }
}

export class FlyRocketPowered implements FlyBehavior {
  fly(): string {
    return "I'm flying with a rocket!";
  }
}

interface QuackBehavior {
  quack(): string;
}

class Quack implements QuackBehavior {
  quack(): string {
    return "Quack";
  }
}

class MuteQuack implements  QuackBehavior {
  quack(): string {
    return "<< Silence >>";
  }
}

class Squeak implements QuackBehavior {
  quack(): string {
    return "Squeak";
  }
}

export abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;
  constructor() {}

  abstract display(): string;

  performFly(): string {
    return this.flyBehavior.fly();
  }

  performQuack(): string {
    return this.quackBehavior.quack();
  }

  swim(): string {
    return "All ducks float, even decoys!";
  }
  
  setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }
  
  setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }
}

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display(): string {
    return "I'm a real Mallard duck";
  }
}

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }
  
  display(): string {
    return "I'm a model duck";
  }
}
