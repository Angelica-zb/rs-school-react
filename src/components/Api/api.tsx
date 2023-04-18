const getDataCard = async (text: string) => {
  try {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?name=${text}`);
    const dataCard = await resp.json();
    if (!resp.ok) {
      return null;
    }

    return dataCard.results;
  } catch {
    return null;
  }
};

const getCard = async (id: number) => {
  try {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const dataCard = await resp.json();
    return dataCard;
  } catch {
    return null;
  }
};

export { getDataCard, getCard };
