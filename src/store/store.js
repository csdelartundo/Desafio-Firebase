import { createStore } from "vuex";
import {
    collection,
    getFirestore,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import firebaseApp from "../firebaseconfig";

const store = createStore({
    state: {
        usuarios: [],
    },
    mutations: {
        setUsuarios(state, usuarios) {
            state.usuarios = usuarios.filter(
                (usuario, index, self) =>
                    index === self.findIndex((u) => u.id === usuario.id)
            );
        },
        addUsuario(state, usuario) {
            state.usuarios.push(usuario);
        },
        deleteUsuario(state, usuarioId) {
            state.usuarios = state.usuarios.filter(
                (usuario) => usuario.id !== usuarioId
            );
        },
    },
    actions: {
        fetchUsuarios({ commit }) {
            const db = getFirestore(firebaseApp);
            const usuariosRef = collection(db, "usuarios");
            onSnapshot(usuariosRef, (snapshot) => {
                const usuarios = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                commit("setUsuarios", usuarios);
            });
        },
        async addUsuario({ commit }, nombre) {
            const db = getFirestore(firebaseApp);
            const usuariosRef = collection(db, "usuarios");
            await addDoc(usuariosRef, { nombre });
            // No hagas el commit aquí, deja que Firestore maneje la actualización
        },
        async deleteUsuario({ commit }, usuarioId) {
            const db = getFirestore(firebaseApp);
            const usuarioRef = doc(db, "usuarios", usuarioId);
            await deleteDoc(usuarioRef);
            commit("deleteUsuario", usuarioId);
        },
    },
    getters: {
        usuarios: (state) => state.usuarios,
    },
});

export default store;
