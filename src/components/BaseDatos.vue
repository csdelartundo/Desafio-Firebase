<template>
    <div>
        <form @submit.prevent="submitUsuario">
            <input v-model="nuevoUsuario" placeholder="Ingresa tu nombre" />
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            nuevoUsuario: ''
        };
    },
    methods: {
        ...mapActions(['addUsuario']),
        async submitUsuario() {  // Renombra este método para evitar la recursión
            if (this.nuevoUsuario.trim() !== '') {
                await this.addUsuario(this.nuevoUsuario);  // Llama a la acción de Vuex
                this.nuevoUsuario = '';  // Limpiar el input después de agregar el usuario
            }
        }
    }
};
</script>