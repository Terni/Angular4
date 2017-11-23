/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare module "assets/*.json" {
    const value: any;
    export default value;
}