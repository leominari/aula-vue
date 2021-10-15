<template>
  <div class="pessoas">
    <div class="menu-pessoa">
      <h1>PESSOAS</h1>
      <v-btn @click="$router.push({ name: 'CadastroPessoa' })" color="pink" fab
        ><h1>+</h1></v-btn
      >
    </div>
    <div>
      <PessoaRow
        v-for="(pessoa, index) in pessoas"
        :key="pessoa + index"
        :name="pessoa"
        @click.native="editarPessoa(pessoa)"
        @remove="removerPessoa(pessoa)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PessoaRow from "../../components/row/PessoaRow.vue";

export default {
  name: "Pessoas",
  components: {
    PessoaRow,
  },
  data() {
    return {};
  },
  async mounted() {
    await this.action_getPessoas();
  },
  methods: {
    ...mapActions(["action_getPessoas", "action_selectPessoa"]),
    editarPessoa(pessoa) {
      this.action_selectPessoa(pessoa);
      this.$router.push({ name: "CadastroPessoa" });
      console.log("editar", pessoa);
    },
    removerPessoa(pessoa) {
      console.log(pessoa);
    },
  },
  computed: {
    ...mapState({
      pessoas: (state) => state.pessoa.pessoas,
    }),
  },
};
</script>


<style scoped>
.pessoas {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu-pessoa {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  margin: 2vh 0 2vh 0;
}
</style>