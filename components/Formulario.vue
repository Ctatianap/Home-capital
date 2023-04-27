<template>
  <div class="flex flex-col bg-gray-100 border rounded-md shadow-md p-6">
    <h2 class="text-lg mb-6 font-bold text-primary">Información del cliente</h2>
    <form @submit.prevent="saveCustomer" class="flex flex-col">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="customer.name" />

      <label for="address">Dirección:</label>
      <input type="text" id="address" v-model="customer.address" />

      <label for="phone">Teléfono:</label>
      <input type="text" id="phone" v-model="customer.phone" />

      <button type="submit">Guardar información del cliente</button>
    </form>
    <div class="w-full border-2 border-cyan-800 rounded-md p-4">
      <el-form
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        ref="ruleForm"
      >
        <el-form-item label="firstName" prop="firstName">
          <el-input v-model="ruleForm.firstName" placeholder="Nombre" />
        </el-form-item>
        <el-form-item label="lastName" prop="lastName">
          <el-input v-model="ruleForm.lastName" placeholder="Apellido" />
        </el-form-item>
        <el-form-item label="address" prop="address">
          <el-input v-model="ruleForm.address" placeholder="Dirección" />
        </el-form-item>
        <el-form-item label="phone" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="Teléfono" />
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm">Limpiar</el-button>
          <el-button @click="submitForm" type="primary">Guardar</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Form, Input, ElButton } from "element-ui";
export default {
  components: { Form, Input, ElButton },
  data() {
    return {
      customer: {
        name: '',
        address: '',
        phone: '',
      },
      ruleForm: {
        firstName: "",
        lastName: "",
        address: "",
        phone: 0,
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "Porfavor ingresa tu nombre",
            trigger: "blur",
          },
          {
            min: 1,
            message:"La longitud debe ser mayor que 1 y no debe contener espacios",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Please input Last name",
            trigger: "blur",
          },
          {
            min: 1,
            message:"La longitud debe ser mayor que 1 y no debe contener espacios",
            trigger: "blur",
          },
        ],
        address: [
          { required: true, message: "Please input Address", trigger: "blur" },
          {
            min: 1,
            message:"La longitud debe ser mayor que 1 y no debe contener espacios",
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "Por favor ingresa un número de telefono", trigger: "blur" },
          {
            type: number,
            message:"La longitud debe ser mayor que 1 y no debe contener espacios",
            trigger: "blur",
          },
        ],

      },
    };
  },
  created() {
    const savedCustomer = localStorage.getItem('customer');
    if (savedCustomer) {
      this.customer = JSON.parse(savedCustomer);
    }
  },
  watch: {
    customer: {
      handler() {
        localStorage.setItem('customer', JSON.stringify(this.customer));
      },
      deep: true,
    },
  },
  methods: {
    saveCustomer() {
      console.log('Información del cliente guardada:', this.customer);
    },
  },
};
</script>
