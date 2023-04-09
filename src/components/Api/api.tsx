const getDataCard = async (text: string) => {
  try {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${text}`);
    const dataCard = await resp.json();
    return dataCard;
  } catch {
    return null;
  }
};

export default getDataCard;
