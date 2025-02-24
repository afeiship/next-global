interface Options {
  key?: string;
  globalKey?: string;
  context?: any;
}

interface NxStatic {
  global: (data?: any, options?: Options) => void;
  $global: any;
}
