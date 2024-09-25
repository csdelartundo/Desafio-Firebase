<template>
    <div>
        <ul>
            <li v-for="usuario in usuarios" :key="usuario.id">
                <p>Nombre: {{ usuario.nombre }}</p>
                <p>Email: {{ usuario.email }}</p>
                <p>Teléfono: {{ usuario.telefono }}</p>
                <button @click="deleteUsuario(usuario.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['usuarios'])
    },
    methods: {
        ...mapActions(['deleteUsuario'])
    },
    mounted() {
        this.$store.dispatch('fetchUsuarios');
    }
};
</script>