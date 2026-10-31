
// Obtener todos los botones de categorias
const botones = document.querySelectorAll(".btn-categoria");

// Obtener todos los productos
const productos = document.querySelectorAll(".producto");


// Recorrer los botones
botones.forEach(function(boton) {

    // Detectar cuando el cliente presiona un boton
    boton.addEventListener("click", function() {

        // Obtener la categoria seleccionada
        const categoriaSeleccionada = boton.dataset.categoria;


        // Recorrer todos los productos
        productos.forEach(function(producto) {

            // Obtener la categoria del producto
            const categoriaProducto = producto.dataset.categoria;


            // Comprobar si debemos mostrar el producto
            if (
                categoriaSeleccionada === "todos" ||
                categoriaSeleccionada === categoriaProducto
            ) {

                producto.style.display = "block";

            } else {

                producto.style.display = "none";

            }

        });


        // Actualizar el boton seleccionado
        botones.forEach(function(b) {
            b.classList.remove("activo");
        });

        boton.classList.add("activo");

    });

});
