"use client";

import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { Expand, SquarePen, Trash } from "lucide-react";
import { ptBR } from "@mui/x-data-grid/locales";
import { Delete } from "../actions";


const columns: GridColDef[] = [
  { field: "name", headerName: "Nome", flex: 1, minWidth: 150 },
  { field: "lastname", headerName: "Sobrenome", flex: 1, minWidth: 150 },
  {
    field: "active",
    headerName: "Ativo",
    flex: 1,
    minWidth: 150,
    type: "boolean",
  },
  {
    field: "created",
    headerName: "Criado",
    flex: 1,
    minWidth: 150,
    type: "date",
    valueFormatter: (value) => {
      if (!value) return "";
      return new Date(value).toLocaleDateString("pt-BR");
    },
  },
  {
    field: "updated",
    headerName: "Atualizado",
    flex: 1,
    minWidth: 150,
    type: "date",
    hideable: false,
    valueFormatter: (value) => {
      if (!value) return "";
      return new Date(value).toLocaleDateString("pt-BR");
    },
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Ações",
    width: 100,
    getActions: (params) => [
      <GridActionsCellItem
        key="detail"
        icon={<Expand size={18} />}
        label="Detalhes"
        onClick={() => {
          window.location.href = `/person/${params.id}`;
        }}
      />,
      <GridActionsCellItem
        key="edit"
        icon={<SquarePen size={18} />}
        label="Editar"
        onClick={() => {
          window.location.href = `/person/${params.id}/edit`;
        }}
      />,
      <GridActionsCellItem
        key="delete"
        icon={<Trash size={18} />}
        label="Deletar"
        onClick={() => {
          Delete(String(params.id));
        }}
      />,
    ],
  },
];

type TableProps = {
  rows: GridRowsProp;
};

export default function Table({ rows }: TableProps) {
  return (
    <div
      style={{
        height: 500,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DataGrid
        rows={rows}
        editMode="row"
        showToolbar
        columns={columns}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        sx={{
          flex: 1,
        }}
        initialState={{
          sorting: {
            sortModel: [{ field: "name", sort: "asc" }],
          },
          filter: {
            filterModel: {
              items: [
                {
                  field: "active",
                  operator: "is",
                  value: "true",
                },
              ],
            },
          },
        }}
      />
    </div>
  );
}
