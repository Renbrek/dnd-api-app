export interface Class {
  index: string;
  name: string;
  url: string;
  hitDie: number;
  classLevels: string;
  multiClassing: {
    prerequisites:
      {
        abilityScore: {
          index: string;
          name: string;
          url: string;
        };
        minimumScore: number;
      }[];
    prerequisiteOptions:
      {
        choose: number;
        type: string;
        from: [
          {
            index: string;
            name: string;
            url: string;
          }
        ];
      }[];
    proficiencies:
      {
        index: string;
        name: string;
        url: string;
      }[];
    proficiencyChoices:
      {
        choose: number;
        type: string;
        from: [
          {
            index: string;
            name: string;
            url: string;
          }
        ];
      }[];
  };
  spellcasting: {
    level: number;
    info:
      {
        name: string;
        desc: string[];
      }[];
    spellcastingAbility: {
      index: string;
      name: string;
      url: string;
    };
  };
  spells: string;
  startingEquipment:
    {
      quantity: number;
      equipment: {
        index: string;
        name: string;
        url: string;
      };
    }[];
  startingEquipmentOptions:
    {
      choose: number;
      type: string;
      from: [
          | {
          quantity: number;
          equipment: {
            index: string;
            name: string;
            url: string;
          };
        }
          | {
          choose: number;
          type: string;
          from: {
            equipmentCategory: {
              index: string;
              name: string;
              url: string;
            };
          };
        }
      ];
    }[];
  proficiencyChoices:
    {
      choose: number;
      type: string;
      from: [
        {
          index: string;
          name: string;
          url: string;
        }
      ];
    }[];
  proficiencies:
    {
      index: string;
      name: string;
      url: string;
    }[];
  savingThrows:
    {
      index: string;
      name: string;
      url: string;
    }[];
  subclasses:
    {
      index: string;
      name: string;
      url: string;
    }[];
}
