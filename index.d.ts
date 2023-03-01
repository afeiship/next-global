interface Options {
  key?: string;
  globalKey?: string;
}

interface NxStatic {
  global: (inInitialData: any, inOptions: Options) => void;
}
