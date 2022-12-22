
export enum ENotify{
  success = "success",
  error = "error",
  warning = "warning",
  info = "info"
}

export enum EColor{
  green = "#00cec9",
  error = "#d63031",
  info = "#74b9ff",
  warning = "#f1c40f"
}
export interface Notify {
  type: string,
  title: string,
  message: string
  delay?:number
}
