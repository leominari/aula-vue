<template>
	<div class="inputs">
		<label>{{ label }}</label>
		<input
			class="campo"
			:type="type"
			:name="input"
			:id="input"
			:placeholder="placeholder"
			v-model="fudeu"
		/>
	</div>
</template>
<!-- No watch fudeu() ele vai ficar "observando" o input fudeu-->
<script>
	export default {
		name: "TextInput",
		props: {
			label: String,
			placeholder: String,
			type: String,
			input: String,
		},
		data() {
			return {
				fudeu: "",
			};
		},
		watch: {
			fudeu() {
				this.$emit("evento", this.fudeu);
			},
		},
	};
</script>


<style scoped>
	.inputs {
		display: flex;
		padding: 13px 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.campo {
		width: 280px;
		height: 25px;
		border-radius: 6px;
		background-color: rgb(241, 237, 237);
		border-color: rgb(221, 208, 208);
	}
</style>