document.addEventListener('DOMContentLoaded', () => {
  const maxBtn = document.getElementById('maxBtn');
  console.log("maxBtn", maxBtn);
  if (maxBtn) {
    maxBtn.addEventListener('click', () => {
      console.log("CLICK en botón MAX");
      window.context?.closeApp?.(); // solo si ya fue expuesto desde preload
    });
  } else {
    console.warn("Botón #maxBtn no encontrado");
  }
});