import axios from 'axios'

const sever= axios.create({
    baseURL:" http://localhost:5172/"
})

export const getAList=()=> sever.get('/action/list').then(res=>res.data.data)