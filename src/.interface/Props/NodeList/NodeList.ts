export type NodeListData = {
  userName: string;
  cpu: number;
  ram: number;
  vga: number;
  status: string;
};
export interface Node {
  NodeListData: Array<NodeListData>|undefined;
}