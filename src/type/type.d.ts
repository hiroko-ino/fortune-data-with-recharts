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

type lineSettingsType = {
  key: string,
  isDisplay: boolean
}[]

type LineDataType = {
  [line: string]: {
    jpName: string,
    color: string
  }
}

type dataType = {
  date: string,
  content: string,
  item: string,
  total: number,
  love: number,
  job: number,
  money: number,
}[]
