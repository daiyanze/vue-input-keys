
export const alpha: Function = (key: number) => {
  return key >=65 && key <=90
}

export const num: Function = (key: number) => {
  const range = [48, 57]
  const rangeNumpad = [96, 105]
  return (key >= 48 && key <=57) || (key >=96 && key <=105)
}

export const ctlrs: Function = (key: number) => {
  return key == 8 || key == 9 || key == 13 || key == 46
}

export const arrows: Function = (key: number) => {
  return key == 37 || key == 38 || key == 39 || key == 40
}

export const symbols: Function = (key: number) => {
  return key >= 186 && key <= 226
}
