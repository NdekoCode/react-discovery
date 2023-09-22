export const scaleName: { c: string; f: string } = {
  c: "Celcius",
  f: "Fahrenheit",
};

export const tempConverter = (temp: number, scale: string) => {
  // Convert celcius to fahrenheit
  if (scale === "f") {
    return (temp * 9) / 5 + 32;
  }
  //   Convertir farhenheit en Celcius
  return ((temp - 32) * 5) / 9;
};
