export interface Album {
  id: string;
  name: string;
  artist: string;
  releaseYear: number;
  releaseMonth: number;
  releaseDay: number;
  genres: string[];
  rating?: number;
  hidden?: boolean;
}