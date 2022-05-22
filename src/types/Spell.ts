export interface Spell {
  index: string;
  name: string;
  url: string;
  desc: [string];
  higherLevel: [string];
  range: string;
  components: [];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  castingTime: string;
  level: number;
  attackType: string;
  damage: {
    damageAtSlotLevel: {
      anyKey: any;
    };
    damageType: {
      index: string;
      name: string;
      url: string;
    };
  };
  school: {
    index: string;
    name: string;
    url: string;
  };
  classes: [
    {
      index: string;
      name: string;
      url: string;
    }
  ];
  subclasses: [
    {
      index: string;
      name: string;
      url: string;
    }
  ];
}

export default Spell;
