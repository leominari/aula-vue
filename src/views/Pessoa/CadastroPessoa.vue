<template>
  <div class="pessoas">
    <div class="menu-pessoa">
      <h1>{{ isCadastro ? "CADASTRO DE PESSOA" : "EDIÇÃO PESSOA" }}</h1>
    </div>
    <div>
      <VTextField label="Nome" v-model="nome" placeholder="Nome" solo />
      <v-btn v-if="isCadastro" @click="cadastrarPessoa" color="cyan"
        >CADASTRAR</v-btn
      >
      <v-btn v-else @click="salvarPessoa" color="cyan">SALVAR</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Pessoas",
  components: {},
  data() {
    return {
      nome: "",
    };
  },
  mounted() {
    if (!this.isCadastro) {
      this.nome = this.pessoa;
    }
  },
  methods: {
    ...mapActions(["action_addPessoa"]),
    cadastrarPessoa() {
      let obj = {
        nome: this.nome,
      };

      this.action_addPessoa(obj).then((res) => {
        if (res.success) {
          this.$router.push({ name: "Pessoas" });
        }
      });
    },
    salvarPessoa() {
      console.log("salva");
    },
  },
  computed: {
    ...mapState({
      pessoa: (state) => state.pessoa.pessoa,
    }),
    isCadastro() {
      return this.pessoa === null;
    },
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
  align-items: center;
  margin: 2vh 0 2vh 0;
}
</style>