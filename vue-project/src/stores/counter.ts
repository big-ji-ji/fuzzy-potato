import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAList } from '../sever/index'
import type { AxiosAdapter } from 'axios';

export interface Children {
  value: number;
  id: string;
  name: string;
}

export interface RootObject {
  value: number;
  id: string;
  name: string;
  children: Children[];
}

type itemli ={
  value: number;
  id: string;
  name: string;
}[]

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => {
    return {
      list: <RootObject>{},
      item: <RootObject>{},
      itemli:<itemli>[],
      isOpen: false,
      onOpen:false
    }
  },

  actions: {
    async getList() {
      const res = await getAList()
      this.list = res
    },

    text() {

    }

  }
})