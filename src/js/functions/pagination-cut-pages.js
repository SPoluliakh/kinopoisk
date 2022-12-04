export function cutPagesForPagination(dataArray, itemsPerPage = 20) {
  const dataLength = dataArray.length;
  const countPages = dataLength / itemsPerPage;
  let newDataArray = [];

  for (let index = 0; index < countPages; index += 1) {
    newDataArray.push(
      dataArray.slice([index * itemsPerPage], [(index + 1) * itemsPerPage])
    );
  }

  const paginationDataArray = [];

  newDataArray.map((element, index) => {
    let newObject = {};
    newObject.page = index + 1;
    newObject.results = element;
    paginationDataArray.push(newObject);
  });

  return paginationDataArray;
}
