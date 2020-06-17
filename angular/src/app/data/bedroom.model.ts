import { Amenity } from './amenity.model';
import { Image } from './image.model';

/**
 * Represents the _Bedroom_ model
 *
 * ```yaml
 * id: string;
 * bedCount: number;
 * bedType: string;
 * images: Image[];
 * amenities: Amenity[];
 * ```
 */
export interface Bedroom {
  id: string;
  bedCount: number;
  bedType: string;
  images: Image[];
  amenities: Amenity[];
}
