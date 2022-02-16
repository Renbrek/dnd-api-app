const baseUrl = 'https://www.dnd5eapi.co/api/';

export const getSpells = async () => {
  return await fetch(`${baseUrl}spells`).then(response => response.json());
};
