function guardar(){
  db.collection("usuario")
    .add({
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
    })
    .then((docRef) => {
      alert("Registro Exitoso")
    })
    .catch((error) => {
      alert("Error en el registro")
    });
}
