export type TItem = 'display' | 'operators' | 'digits' | 'equals';
export type TConstructorItem = {
  type: TItem;
  canMove: boolean;
  currentSource: 'sidebar' | 'canvas';
};
