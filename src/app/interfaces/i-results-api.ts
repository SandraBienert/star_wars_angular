import { IStarships } from './i-starships';

export interface IResultsApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: IStarships[];
}
