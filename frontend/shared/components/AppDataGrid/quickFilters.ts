import { GetApplyQuickFilterFn } from '@mui/x-data-grid'

export const quickFilterSameYear: GetApplyQuickFilterFn<
  any,
  unknown
> = (value) => {
  if (!value || value.length !== 4 || !/\d{4}/.test(value)) {
    return null
  }

  return (cellValue) => {
    if (!(cellValue instanceof Date)) return false
    return cellValue.getFullYear() === Number(value)
  }
}
