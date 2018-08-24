
export const alpha = {
  multiple: false,
  validate: (key: number) => {
    return key >=65 && key <=90
  }
}

export const allNum = (key: number) => {
  const range = [48, 57]
  const rangeNumpad = [96, 105]
  return key >= 48 && key <=57 && key >=96 && key <=105
}

export const num = (key: number) => {
  return key >= 48 && key <=57
}

export const numpad = (key: number) => {
  return key >=96 && key <=105
}
