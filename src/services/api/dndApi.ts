const baseUrl = "https://www.dnd5eapi.co/api/";

export const fetchSpells = async () => {
  const response = await fetch(`${baseUrl}spells`);
  if (!response.ok) {
    throw Error("fetch spells error");
  }
  return response.json();
};

export const fetchSpellByIndex = async (index: string | undefined) => {
  const response = await fetch(`${baseUrl}spells/${index}/`);
  if (!response.ok) {
    throw Error("fetch spell error");
  }
  return response.json();
};

export const fetchClasses = async () => {
  const response = await fetch(`${baseUrl}classes`);
  if (!response.ok) {
    throw Error("fetch classes error");
  }
  return response.json();
};

export const fetchClassByIndex = async (index: string | undefined) => {
  const response = await fetch(`${baseUrl}classes/${index}/`);
  if (!response.ok) {
    throw Error("fetch class error");
  }
  return response.json();
}
