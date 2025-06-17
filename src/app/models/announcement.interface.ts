import { Service } from './service.interface';
import { Image } from './image.interface';
import { Equipment } from './equipement.interface';
import { Owner } from './owner.interface';

export interface Announcement {
  id: number;
  title: string;
  description: string;
  fullAddress: string;
  address: string;
  city: string;
  zipcode: string;
  lattitude: string;
  longitude: string;
  maxClient: number;
  dailyPrice: number;
  imageCover: string;
  owner: Owner;
  images: Image[];
  services: Service[];
  equipment: Equipment[];
}
