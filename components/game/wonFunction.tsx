const wonFunction = (data: any) => {
  const id_1 = data.find((e: any) => e.id == 1)?.symbol;
  const id_2 = data.find((e: any) => e.id == 2)?.symbol;
  const id_3 = data.find((e: any) => e.id == 3)?.symbol;
  const id_4 = data.find((e: any) => e.id == 4)?.symbol;
  const id_5 = data.find((e: any) => e.id == 5)?.symbol;
  const id_6 = data.find((e: any) => e.id == 6)?.symbol;
  const id_7 = data.find((e: any) => e.id == 7)?.symbol;
  const id_8 = data.find((e: any) => e.id == 8)?.symbol;
  const id_9 = data.find((e: any) => e.id == 9)?.symbol;
  if (data) {
    // X
    if (id_1 == "X" && id_2 == "X" && id_3 == "X") return "X";
    else if (id_4 == "X" && id_5 == "X" && id_6 == "X") return "X";
    else if (id_7 == "X" && id_8 == "X" && id_9 == "X") return "X";
    else if (id_1 == "X" && id_4 == "X" && id_7 == "X") return "X";
    else if (id_2 == "X" && id_5 == "X" && id_8 == "X") return "X";
    else if (id_3 == "X" && id_6 == "X" && id_9 == "X") return "X";
    else if (id_1 == "X" && id_5 == "X" && id_9 == "X") return "X";
    else if (id_3 == "X" && id_5 == "X" && id_7 == "X") return "X";
    // O
    if (id_1 == "O" && id_2 == "O" && id_3 == "O") return "O";
    else if (id_4 == "O" && id_5 == "O" && id_6 == "O") return "O";
    else if (id_7 == "O" && id_8 == "O" && id_9 == "O") return "O";
    else if (id_1 == "O" && id_4 == "O" && id_7 == "O") return "O";
    else if (id_2 == "O" && id_5 == "O" && id_8 == "O") return "O";
    else if (id_3 == "O" && id_6 == "O" && id_9 == "O") return "O";
    else if (id_1 == "O" && id_5 == "O" && id_9 == "O") return "O";
    else if (id_3 == "O" && id_5 == "O" && id_7 == "O") return "O";
  }
};
export default wonFunction;
