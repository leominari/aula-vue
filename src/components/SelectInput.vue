<template>
	<div class="teste">
		<label>{{ label }}</label>
		<br />
		<v-select
			filled
			outlined
			class="select"
			:items="['Masculino', 'Feminino']"
			v-model="teste"
		></v-select>
	</div>
</template>

<script>
	export default {
		name: "SelectInput",
		props: {
			label: String,
		},
		data() {
			return {
				teste: "",
			};
		},
		watch: {
			teste() {
				this.$emit("evento", this.teste);
			},
		},
	};
</script>

<style scoped>
	.select {
		width: 290px;
		height: 20px;
		border-radius: 6px;
		border-color: rgb(221, 208, 208);
	}

	.teste {
		display: flex;
		padding: 13px 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>