export enum StratagemType {
  OFFENSIVE = "Offensive",
  DEFENSIVE = "Defensive",
  SUPPORT = "Support",
  MISSION = "Mission",
}

export enum CodeDirection {
  UP = "U",
  DOWN = "D",
  LEFT = "L",
  RIGHT = "R",
}

export interface Stratagem {
  id: string;
  name: string;
  type: StratagemType;
  code: CodeDirection[];
  imageUrl: string;
}
