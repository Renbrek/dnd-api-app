const baseUrl = 'https://www.dnd5eapi.co/api/';

export const getSpells = async () => {
  return await fetch(`${baseUrl}spells`).then(response => response.json());
};

export const getSpell = async (index: string | undefined) => {
  return await fetch(`https://www.dnd5eapi.co/api/spells/${index}/`).then(response => response.json());
};