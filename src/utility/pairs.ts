export type Pair = readonly [unknown, unknown];
export type Pairs = readonly Pair[];
export type Flip<T> = T extends readonly [infer Left, infer Right] ? readonly [Right, Left] : never;

export type DomainElement<T extends Pairs> = T[number][0];
export type ImageElement<T extends Pairs> = T[number][1];
