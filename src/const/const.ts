import { TConstructorItem } from '../types/types';

export const operators = ['/', 'x', '-', '+'];
export const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ','];

export const ItemType = {
  SIDEBAR: 'sidebar',
  CANVAS: 'canvas',
};

export const initialItemsSidebar: TConstructorItem[] = [
  {
    type: 'display',
    canMove: true,
    currentSource: 'sidebar',
  },
  {
    type: 'operators',
    canMove: true,
    currentSource: 'sidebar',
  },
  {
    type: 'digits',
    canMove: true,
    currentSource: 'sidebar',
  },
  {
    type: 'equals',
    canMove: true,
    currentSource: 'sidebar',
  },
];
