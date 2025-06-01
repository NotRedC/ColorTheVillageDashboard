import { Task } from './task.model';
import { EventVolunteer } from './volunteer.model';

export interface Event {
  id: number;
  title: string;
  content: string;
  startDate: String;
  endDate: String;
  confirmedVolunteers?: EventVolunteer[];
  cover: HTMLInputElement | string; // Can be a file input element or a base64 string
  accommodation?: boolean;
  food?: boolean;
  accommodationWithTent?: boolean;
  tasks?: Task[];
  prerequisites?: string[];
  isArchived?: boolean;
}
