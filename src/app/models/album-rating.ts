import { Album } from "./album";
import { User } from "./user";

export interface AlbumRating {
  albumId: string;
  userId: string;
  // album: Album;
  // user: User;
  rating: number;
}