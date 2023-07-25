const saveStoreBtn = document.getElementById('save-store-btn');
const deleteStoreBtn = document.getElementById('delete-store-btn');
const storeForm = document.getElementById('store-form');
const addTaskBtn = document.getElementById('add-task-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');

let previousStoreData = null; // Variable para almacenar datos previos de la tienda

addTaskBtn.addEventListener('click', () => {
  modal.style.display = 'block';

  // Mostrar datos previos si existen
  if (previousStoreData) {
    document.getElementById('store-name').value = previousStoreData.name;
    document.getElementById('store-commercial-name').value = previousStoreData.commercialName;
    document.getElementById('store-description').value = previousStoreData.description;
    document.getElementById('store-location').value = previousStoreData.location;
    document.getElementById('store-bank').value = previousStoreData.bank;
    document.getElementById('store-bank-details').value = previousStoreData.bankDetails;
  }
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

saveStoreBtn.addEventListener('click', () => {
  const storeName = document.getElementById('store-name').value;
  const storeCommercialName = document.getElementById('store-commercial-name').value;
  const storeDescription = document.getElementById('store-description').value;
  const storeLocation = document.getElementById('store-location').value;
  const storeBankDetails = document.getElementById('store-bank-details').value;
  const storeBank = document.getElementById('store-bank').value;

  if (storeName && storeCommercialName && storeDescription && storeLocation && storeBankDetails && storeBank) {
    const storeData = {
      name: storeName,
      commercialName: storeCommercialName,
      description: storeDescription,
      location: storeLocation,
      bank: storeBank,
      bankDetails: storeBankDetails
    };

     // Almacena los datos en la variable de datos previos
     previousStoreData = storeData;

     // Mostrar los datos de la tienda en el contenedor "store-info"
    const storeInfoContainer = document.getElementById('store-info');
    storeInfoContainer.innerHTML = `
      <div><h2>Datos de la Tienda:</h2></div>
      <div><p><strong>Nombre:</strong> ${storeData.name}</p></div>
      <div><p><strong>Nombre Comercial:</strong> ${storeData.commercialName}</p></div>
      <div><p><strong>Descripción:</strong> ${storeData.description}</p></div>
      <div><p><strong>Ubicación:</strong> ${storeData.location}</p></div>
      <div><p><strong>Datos Bancarios:</strong> ${storeData.bank}</p></div>
      <div><p><strong>Datos Bancarios:</strong> ${storeData.bankDetails}</p></div>
    `;

    // Limpia el formulario después de guardar los datos
    storeForm.reset();
  }
  modal.style.display = 'none';
});

deleteStoreBtn.addEventListener('click', () => {
    // Limpiar los datos de la tienda de la pantalla
    const storeInfoContainer = document.getElementById('store-info');
    storeInfoContainer.innerHTML = '';
});
