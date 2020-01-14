declare namespace SSReactLibs {
  interface ComponentProps<T> {
    className?: string;
    style?: React.CSSProperties;
  }
  class Component<P, S> extends React.Component<P, S> {
  }

  class PureComponent<P, S> extends React.PureComponent<P, S> {
  }

  class FunctionComponent<P> extends React.FunctionComponent<P> {

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
    onClick?(e: React.SyntheticEvent<HTMLButtonElement>): void;
    color?: string;
    bgColor?: string;
    title?: string;
  }
  export class SButton extends SSReactLibs.Component<SButtonProps, {}> {
  }

  // SIcon
  interface SIconProps extends SSReactLibs.FunctionComponent<{}> {
    icon: string;
    color?: string;
    fontSize?: string;
  }
  export class SIcon extends SSReactLibs.FunctionComponent<SIconProps, {}> {
  }
}

declare module "ss_react_ts_ui" {
  export import SButton = SSReactUI.SButton
  export import SInput = SSReactUI.SInput
  export import SIcon = SSReactUI.SIcon
}