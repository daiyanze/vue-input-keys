
export const alpha = (key: number) => {
  return key >=65 && key <=90
}

export const num = (key: number) => {
  const range = [48, 57]
  const rangeNumpad = [96, 105]
  return (key >= 48 && key <=57) || (key >=96 && key <=105)
}

export const ctlrs = (key: number) => {
  return key == 8 || key == 9 || key == 13 || key == 46
}

export const arrows = (key: number) => {
  return key == 37 || key == 38 || key == 39 || key == 40
}
