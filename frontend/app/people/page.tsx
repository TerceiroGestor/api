'use client';

import { useEffect, useState } from 'react';
import { PeopleRepository } from '@/repositories/people.repository';
import { Person } from '@/types/person';

export default function PeopleClient() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    PeopleRepository.getAll().then(setPeople);
  }, []);

  return (
    <ul>
      {people.map(p => (
        <li key={p.id}>Nome: {p.name} - Sobrenome: {p.lastname}</li>
      ))}
    </ul>
  );
}
