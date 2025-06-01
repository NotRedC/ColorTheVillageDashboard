import { Task } from './task.model';
import { EventVolunteer } from './volunteer.model';

export interface Event {
  id: number;
  name: string;
  location: string;
  startDate: Date;
  endDate: Date;
  confirmedVolunteers?: EventVolunteer[];
  coverPhoto?: HTMLInputElement | string; // Can be a file input element or a base64 string
  accommodation?: boolean;
  food?: boolean;
  accommodationWithTent?: boolean;
  tasks?: Task[];
  prequisites?: string[];
  isArchived?: boolean;
}
