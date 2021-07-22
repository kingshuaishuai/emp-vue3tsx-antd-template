export default interface RootStateTypes {
  count: number
}

export interface AllStateTypes extends RootStateTypes {
  permission?: any
}
