<template>
  <div class="PessoaRow">
    <p>
      {{ name }}
    </p>

    <div @click.stop="$emit('remove')" class="botaozinho-remover">🤬</div>
  </div>
</template>

<script>
export default {
  name: "PessoaRow",
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style scoped>
.PessoaRow {
  background-color: #66666630;
  padding: 2px;
  margin: 2px;
  border-radius: 5px;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.PessoaRow p {
  margin-left: 10px;
  margin-top: 15px;
}

.PessoaRow:hover {
  background-color: #66666660;
  cursor: pointer;
  user-select: none;
}

.botaozinho-remover {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 10px;
}

.botaozinho-remover:hover {
  background-color: red;
}
</style>