/**
 * 常量 - 位置
 */
export const enum Position {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
  Center = 'center'
}

/**
 * 常量 - 按钮类型
 */
export const enum ButtonType {
  Text = 0,
  Normal = 1,
  Ok = 2,
  Cancel = 3
}

/**
 * 别名
 */
export type NumberOrString = number | string
export type NoneFunc = () => void