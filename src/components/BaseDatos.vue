<template>
    <div>
        <form @submit.prevent="submitUsuario">
            <input v-model="nuevoNombre" placeholder="Ingresa tu nombre" />
            <input v-model="nuevoEmail" placeholder="Ingresa tu email" />
            <input v-model="nuevoTelefono" placeholder="Ingresa tu teléfono" />
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            nuevoNombre: '',
            nuevoEmail: '',
            nuevoTelefono: ''
        };
    },
    methods: {
        ...mapActions(['addUsuario']),
        async submitUsuario() {  // Renombra este método para evitar la recursión
            if (this.nuevoNombre.trim() !== '' && this.nuevoEmail.trim() !== '' && this.nuevoTelefono.trim() !== '') {
                const nuevoUsuario = {
                    nombre: this.nuevoNombre,
                    email: this.nuevoEmail,
                    telefono: this.nuevoTelefono,
                }
                await this.addUsuario(nuevoUsuario);  // Llama a la acción de Vuex
                    this.nuevoNombre = '';  
                    this.nuevoEmail = '';
                    this.nuevoTelefono = '';
                }
            }
        }
    };
</script>