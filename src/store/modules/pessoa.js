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
            if (state.pessoas.length === 0)
                state.pessoas = payload;
        },
        SET_PESSOA(state, payload) {
            state.pessoa = payload;
        },
    },
    actions: {
        action_addPessoa(context, payload) {
            context.commit('ADD_PESSOA', payload.nome);
            return {
                success: true,
            }
        },
        action_selectPessoa(context, payload) {
            context.commit('SET_PESSOA', payload);
        },
        action_getPessoas(context) {
            context.commit('SET_PESSOAS', [
                'Minari',
                'Pelé',
                'Eric Bala',
                'Vegano',
                'Jesuan'
            ]);
        }
    },
}

export default pessoaStore;