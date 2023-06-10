<template>
    <div>
    <el-table :data="stor.item.children" style="width: 80%" v-show="stor.isOpen">
        <el-table-column prop="id" label="ID" width="120px" />
        <el-table-column prop="name" label="区域" width="120px" />
        <el-table-column prop="value" label="营销收入(万元)" />
    </el-table>
   </div>
   <el-table :data="stor.itemli" style="width: 80%" v-show="stor.onOpen">
        <el-table-column prop="id" label="ID" width="120px" />
        <el-table-column prop="name" label="区域" width="120px" />
        <el-table-column prop="value" label="营销收入(万元)" />
    </el-table>
</template>
  
<script lang="ts" setup>
import { useCounterStore } from "../stores/counter"
const stor = useCounterStore()
</script>
  