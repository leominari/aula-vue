export const pessoaStore = {
    state: () => ({
        pessoa: null,
        pessoas: [],
    }),
    mutations: {
        ADD_PESSOA(state, payload) {
            state.pessoas.push(payload);
        },
        SET_PESSOAS(state, payload) {
            state.pessoas = payload;
        },
        SET_PESSOA(state, payload) {
            state.pessoas = payload;
        },
    },
    actions: {
        action_addPessoa(context, payload) {
            context.commit('ADD_PESSOA', payload);
        }
    }
}

export default pessoaStore;