declare namespace SSReactLibs {
  interface ComponentProps<T> {
    className?: string;
    style?: React.CSSProperties;
  }
  class Component<P, S> extends React.Component<P, S> {
  }

  class PureComponent<P, S> extends React.PureComponent<P, S> {
  }
}

declare namespace SSReactUI {
  // SInput
  interface SInputProps extends SSReactLibs.ComponentProps<{}> {
    placeholder?: string;
    default?: string;
    autofocus?: boolean;
    width?: string;
    height?: string;
    padding?: string;
    fontSize?: number;
  }
  export class SInput extends SSReactLibs.PureComponent<SInputProps, {}> {

  }

  // SButton
  interface SButtonProps extends SSReactLibs.ComponentProps<{}> {
    onClick?(e: React.SyntheticEvent<HTMLDivElement>): void;
    color?: string;
    bgColor?: string;
    title?: string;
    fontSize?: string;
    icon?: string;
  }
  export class SButton extends SSReactLibs.Component<SButtonProps, {}> {
  }

  // SIcon
  interface SIconProps extends SSReactLibs.ComponentProps<{}> {
    icon: string;
    color?: string;
    fontSize?: string;
  }
  export class SIcon extends SSReactLibs.PureComponent<SIconProps, {}> {
  }

  // SMessageBox
  interface MsgBoxOptions {
    message?: string;
  }
  export const SMessageBox: {
    alert(title: string, props?: MsgBoxOptions): Promise<void>;
  };
}

declare module "ss_react_ts_ui" {
  export import SButton = SSReactUI.SButton
  export import SInput = SSReactUI.SInput
  export import SIcon = SSReactUI.SIcon
  export import SMessageBox = SSReactUI.SMessageBox
}