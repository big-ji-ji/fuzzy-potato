<template>
    <div>
        <div class="bing" v-show="stor.isOpen"></div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, watch } from 'vue'
import { useCounterStore } from '../stores/counter'
const stor = useCounterStore()
onMounted(() => {
    watch(() => stor.item.children, () => {
        bing()
    })

})

const bing = () => {
    const myChart = echarts.init(document.querySelector(".bing") as HTMLElement)
        let num = stor.item.children.reduce((pre, cur) => {
            return pre + cur.value
        }, 0)
    myChart.setOption({
        series: [
            {
                "name": "运行状态",
                "type": "pie",
                "startAngle": 90,
                "radius": [
                    "58%",
                    "73%"
                ],
                "center": [
                    "50%",
                    "50%"
                ],
                "label": {
                    "padding": [
                        0,
                        0,
                        0,
                        0
                    ],
                    "color": "#4E5969",
                    "fontSize": 14,
                    "formatter": "{b|{b}} {d|{c}%}\n",
                    "rich": {
                        "b": {
                            "fontSize": 14,
                            "color": "#f9f9f9"
                        },
                        "d": {
                            "fontSize": 16,
                            "fontWeight": 400,
                            "fontFamily": "DINAlternate-Bold, DINAlternate",
                            "color": "#f9f9f9"
                        }
                    }
                },
                "labelLine": {
                    "length2": 4
                },
                "data": stor.item.children.map(v => {
                    return {
                        name: v.name,
                        value: (v.value /num).toFixed(2) ,
                    }
                })
            }
        ]
    })
}


</script>

<style>

.bing {
    height: 300px;
    width: 430px;
}
</style>