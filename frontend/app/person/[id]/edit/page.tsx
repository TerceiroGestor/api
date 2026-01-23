import { Update } from "../actions";
import { Show } from "../actions";

export default async function EditPersonPage({
  params,
}: {
  params: { id: string };
}) {

  const { id } = await params; 
  const person = await Show(id);
  
  if (!person) {
    return <p>Pessoa não encontrada</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-4">Editar Pessoa</h1>

      <form
        action={Update.bind(null, person.id)}
        className="space-y-4"
      >
        <input
          name="name"
          defaultValue={person.name}
          className="w-full p-2 border rounded"
        />

        <input
          name="lastname"
          defaultValue={person.lastname}
          className="w-full p-2 border rounded"
        />

        <select
          name="active"
          defaultValue={String(person.active)}
          className="w-full p-2 border rounded"
        >
          <option value="1">Ativo</option>
          <option value="0">Inativo</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
