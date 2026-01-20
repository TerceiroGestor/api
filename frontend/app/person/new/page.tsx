import { Create } from "../actions";

export default function NewPersonPage() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-4">Cadatro de Pessoa</h1>

      <form action={Create} className="space-y-4">
        <input
          name="name"
          placeholder="Nome"
          required
          className="w-full p-2 border rounded"
        />

        <input
          name="lastname"
          placeholder="Sobrenome"
          required
          className="w-full p-2 border rounded"
        />

        <select
          name="active"
          defaultValue="1"
          className="w-full p-2 border rounded"
        >
          <option value="1">Ativo</option>
          <option value="0">Inativo</option>
        </select>

        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Criar
          </button>
        </div>
      </form>
    </div>
  );
}
