const EazyLevel = (data: any) => {
  const id_1 = data.find((e: any) => e.id == 1)?.symbol;
  const id_2 = data.find((e: any) => e.id == 2)?.symbol;
  const id_3 = data.find((e: any) => e.id == 3)?.symbol;
  const id_4 = data.find((e: any) => e.id == 4)?.symbol;
  const id_5 = data.find((e: any) => e.id == 5)?.symbol;
  const id_6 = data.find((e: any) => e.id == 6)?.symbol;
  const id_7 = data.find((e: any) => e.id == 7)?.symbol;
  const id_8 = data.find((e: any) => e.id == 8)?.symbol;
  const id_9 = data.find((e: any) => e.id == 9)?.symbol;
  // Empty
  if (id_1 === undefined && id_2 === undefined && id_3 === undefined) return 2;
  else if (id_1 === undefined && id_2 === undefined) return 1;
  else if (id_2 === undefined && id_3 === undefined) return 2;
  else if (id_1 === undefined && id_3 === undefined) return 3;

  if (id_4 === undefined && id_5 === undefined && id_6 === undefined) return 5;
  else if (id_4 === undefined && id_5 === undefined) return 4;
  else if (id_5 === undefined && id_6 === undefined) return 5;
  else if (id_4 === undefined && id_6 === undefined) return 6;

  if (id_7 === undefined && id_8 === undefined && id_9 === undefined) return 8;
  else if (id_7 === undefined && id_8 === undefined) return 7;
  else if (id_8 === undefined && id_9 === undefined) return 8;
  else if (id_7 === undefined && id_9 === undefined) return 9;

  if (id_1 === undefined && id_5 === undefined && id_9 === undefined) return 5;
  else if (id_1 === undefined && id_5 === undefined) return 1;
  else if (id_5 === undefined && id_9 === undefined) return 5;
  else if (id_1 === undefined && id_9 === undefined) return 9;

  if (id_3 === undefined && id_5 === undefined && id_7 === undefined) return 5;
  else if (id_3 === undefined && id_5 === undefined) return 1;
  else if (id_5 === undefined && id_7 === undefined) return 5;
  else if (id_3 === undefined && id_7 === undefined) return 7;
};
export default EazyLevel;
