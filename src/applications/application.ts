export enum Placement {
  header = "header",
  sider = "sider",
  fullpage = "fullpage",
  content = "content",
  offlayout = "offlayout",
  footer = "footer",
}

export type Application = {
  id: string | number;
  name: string;
  url: string;
  remoteEntry: {
    url: string;
    scope: string;
    module: string;
    type?: "webpack" | "module";
  };
  route: string;
  loadRemoteStyle?: boolean;
  activeWhen: string;
  placement?: Placement;
};
