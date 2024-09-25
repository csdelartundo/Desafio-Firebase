<template>
    <div class="usuarios-container">
        <ul class="usuarios-list">
            <li v-for="usuario in usuarios" :key="usuario.id" class="usuario-item">
                <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
                <p><strong>Email:</strong> {{ usuario.email }}</p>
                <p><strong>Teléfono:</strong> {{ usuario.telefono }}</p>
                <button @click="deleteUsuario(usuario.id)" class="btn-delete">Eliminar</button>
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

<style scoped>
.usuarios-container {
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
}

.usuarios-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    gap: 20px;
}

.usuario-item {
    background-color: #f1f1f1;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 200px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.usuario-item p {
    margin: 5px 0;
}

.btn-delete {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
}

.btn-delete:hover {
    background-color: #c82333;
}
</style>