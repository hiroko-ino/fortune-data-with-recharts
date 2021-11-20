interface nowType {
  year: number,
  month: number,
}

type signDataType = {
  [key: string]: {
    index: number,
    jpName: string,
  }
}

type LineDataType = {
  [line: string]: {
    jpName: string,
    color: string
  }
}
