import { api } from '@/services/api';
import { Person } from '@/types/person';

export const PeopleRepository = {
  getAll(): Promise<Person[]> {
    return api<Person[]>('/people');
  },

  getById(id: number): Promise<Person> {
    return api<Person>(`/people/${id}`);
  },

  create(data: Partial<Person>) {
    return api('/people', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  update(id: number, data: Partial<Person>) {
    return api(`/people/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete(id: number) {
    return api(`/people/${id}`, {
      method: 'DELETE',
    });
  },
};
