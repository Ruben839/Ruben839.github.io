document.addEventListener('DOMContentLoaded', function() {
    // El código para manejar el modal va aquí
    const contactButton = document.getElementById('contactButton');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    
    contactButton.addEventListener('click', (event) => {
      event.preventDefault(); 
      contactModal.style.display = 'flex';
    });
  
    closeModal.addEventListener('click', () => {
      contactModal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === contactModal) {
        contactModal.style.display = 'none';
      }
    });
  });
  
  
  // Abre el modal especificado por ID
  function openModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = "flex";
    }
    
    // Cierra el modal especificado por ID
    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = "none";
    }
    
    // Cierra el modal al hacer clic fuera del contenido
    window.onclick = function (event) {
      const modals = document.querySelectorAll(".modal");
      modals.forEach((modal) => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    };
    
    function changePDF(pdfSrc, modalId) {
      const pdfEmbed = document.querySelector(`#${modalId} embed`);
      if (pdfEmbed) {
        pdfEmbed.src = pdfSrc;
      } else {
        console.error(`Elemento <embed> no encontrado en el modal "${modalId}".`);
      }
    }
    
    