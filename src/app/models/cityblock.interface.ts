import { Announcement } from './announcement.interface';

export interface CityBlock {
  name: string;
  image: string;
  slogan: string;
  announcementId: number;
  announcement?: Announcement;
}
