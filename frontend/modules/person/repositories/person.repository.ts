import { api } from '@/shared/services/api';
import { Person } from '@/modules/person/types/person';

export const PersonRepository = {
  getAll(): Promise<Person[]> {
    return api<Person[]>('/person');
  },

  getById(id: string): Promise<Person> {
    return api<Person>(`/person/${id}`);
  },

  create(data: Partial<Person>) {
    return api('/person', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  update(id: string, data: Partial<Person>) {
    return api(`/person/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete(id: string[]) {
    return api(`/person/${id}`, {
      method: 'DELETE',
    });
  },
};
