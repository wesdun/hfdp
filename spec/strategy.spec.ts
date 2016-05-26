import {MallardDuck, Duck, ModelDuck, FlyRocketPowered} from "../src/strategy";

describe('strategy pattern', () => {
  it('mallard should be created with quack and fly behaviors', () => {
    let mallard: Duck = new MallardDuck();
    expect(mallard.performQuack()).toEqual("Quack");
    expect(mallard.performFly()).toEqual("I'm flying!!");
  });

  it('modelDuck should be able to change behaviors dynamically', () => {
    let model: Duck = new ModelDuck();
    expect(model.performFly()).toEqual("I can't fly");
    model.setFlyBehavior(new FlyRocketPowered());
    expect(model.performFly()).toEqual("I'm flying with a rocket!");
  });
});