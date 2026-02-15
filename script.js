// --- PUNTO 8: Retraso con Async/Await ---
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function ejecutarRetraso() {
    const contenedor = document.getElementById('resultado-retraso');
    
    // Feedback visual con spinner
    contenedor.innerHTML = `
        <div class="text-center">
            <div class="spinner-border spinner-border-sm text-primary mb-2"></div>
            <div class="small">Procesando...</div>
        </div>`;
    
    await esperar(2000); 
    
    // Resultado con animación
    contenedor.innerHTML = `
        <div class="fade-in text-success fw-bold">
             ¡Hola! Mensaje completado tras la espera.
        </div>`;
}

// --- PUNTO 9: Consulta a la API con impresión en HTML ---
async function consultarAPI() {
    const contenedorIdx = document.getElementById('idx');
    
    contenedorIdx.innerHTML = `
        <div class="text-center">
            <div class="spinner-border spinner-border-sm text-success mb-2"></div>
            <div class="small">Conectando...</div>
        </div>`;

    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!respuesta.ok) throw new Error("No se pudo conectar");

        const datos = await respuesta.json();
        const usuario = datos[0]; // Tomamos el primer usuario

        // Renderizado estético del dato
        contenedorIdx.innerHTML = `
            <div class="alert alert-info py-2 m-0 fade-in w-100">
                <p class="mb-1 small"><strong>👤 Nombre:</strong> ${usuario.name}</p>
                <p class="mb-0 small text-truncate"><strong>📧 Email:</strong> ${usuario.email}</p>
            </div>
        `;
    } catch (error) {
        contenedorIdx.innerHTML = `
            <div class="text-danger small fade-in">
                ❌ Error al conectar con la API.
            </div>`;
    }
}