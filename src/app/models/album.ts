import { AlbumRating } from "./album-rating";

export interface Album {
  id: string;
  name: string;
  artist: string;
  releaseYear: number;
  releaseMonth: number;
  releaseDay?: number;
  genres: string[];
  rating?: AlbumRating;
  hidden?: boolean;
}