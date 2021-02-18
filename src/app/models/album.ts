export interface Album {
  id: string;
  title: string;
  artist: string;
  releaseYear: number;
  releaseMonth: number;
  releaseDay: number;
  genres: string[];
  rating?: number;
  hidden?: boolean;
}