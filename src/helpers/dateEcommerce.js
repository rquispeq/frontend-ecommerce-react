export const parseDate = (date) => {
  const dateObject = new Date(date)
  const day = String(dateObject.getDate()).padStart(2, "0")
  const month = String(dateObject.getMonth() + 1).padStart(2, "0") // Los meses en JavaScript son de 0 a 11
  const year = dateObject.getFullYear()
  const formattedDate = `${day}/${month}/${year}`
  return formattedDate
}
