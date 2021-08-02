export function PaginationTool(data, currentPage, pageSize) {
  const dataLength = data.length;
  const numberOfPages = Math.ceil(dataLength / pageSize); // Sayfa sayısı belirlendi

  const pagination = () => {
    const lastValueIndex = pageSize * currentPage;
    const firstValueIndex = lastValueIndex - pageSize;

    const paginatedData = data.splice(firstValueIndex, pageSize);

    return paginatedData;
  }; // Geçerli Sayfanın data ları düzenlendi

  const paginatedData = pagination();

  return {
    numberOfPages,
    paginatedData,
  };
}
