<template>
    <div :style="{ background: `url(${bg})`, backgroundSize: `1500px`, backgroundRepeat: 'no-repeat' }" class="box">
        <div class="boxleft">
            <bingVue class="bing"></bingVue>
        </div>
        <div class="boxcentet">
            <div class="map"></div>
        </div>
        <div class="boxright">
            <div class="box"></div>
            <tableVue class="table"></tableVue>
            <div>Ahhhhhh</div>
        </div>
    </div>
</template>

<script setup lang="ts">

import bg from './assets/1.jpg'
import { useCounterStore } from './stores/counter'
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import tableVue from "./table/table.vue";
import bingVue from "./table/bing.vue"
const stor = useCounterStore()

onMounted(async () => {
    await stor.getList()
    initchart()
    
})

const initchart = () => {
    const myChart = echarts.init(document.querySelector('.map') as HTMLElement)
    myChart.setOption({
        title: {
            text: '物流临保概况',
            subtext: '2017/05',
            left: 'leafDepth'

        },
        tooltip: {
            formatter: '{b}:<br />营业收入： {c}万元'
        },
        color: ['rgb(100,200,300)'],
        series: [{
            name: '销售收入',
            type: 'treemap',
            visibleMin: 100,
            data: [ // 注意，最外层是一个数组，而非从某个根节点开始。
                {
                    value: 2000,
                    children: [
                        stor.list,
                         {
                        value: 300,
                        id: 'someid-2',
                        name: '湖北大区',
                        children: [
                            {
                                value: 150,
                                id: 'someid-31',
                                name: '武汉',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '咸宁',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '鄂州',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '荆州',
                            }, {
                                value: 20,
                                id: 'someid-31',
                                name: '宜昌',
                            },

                            // ...
                        ],

                    }, {
                        value: 200,
                        id: 'someid-3',
                        name: '四川大区',
                        children: [
                            {
                                value: 150,
                                id: 'someid-31',
                                name: '成都',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '德阳',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '广安',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '达州',
                            }, {
                                value: 20,
                                id: 'someid-31',
                                name: '绵阳',
                            },
                            // ...
                        ],

                    }, {
                        value: 100,
                        id: 'someid-4',
                        name: '云南大区',
                        children: [
                            {
                                value: 150,
                                id: 'someid-31',
                                name: '昆明',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '曲靖',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '玉溪',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '大理',
                            }, {
                                value: 20,
                                id: 'someid-31',
                                name: '腾冲',
                            },
                            // ...
                        ],

                    }, {
                        value: 300,
                        id: 'someid-2',
                        name: '广东大区',
                        children: [
                            {
                                value: 150,
                                id: 'someid-31',
                                name: '广州',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '深圳',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '珠海',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '东莞',
                            }, {
                                value: 20,
                                id: 'someid-31',
                                name: '惠州',
                            },

                            // ...
                        ],

                    }, {
                        value: 200,
                        id: 'someid-2',
                        name: '广西大区',
                        children: [
                            {
                                value: 150,
                                id: 'someid-31',
                                name: '武汉',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '咸宁',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '鄂州',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '荆州',
                            }, {
                                value: 20,
                                id: 'someid-31',
                                name: '宜昌',
                            },

                            // ...
                        ],

                    }, {
                        value: 200,
                        id: 'someid-2',
                        name: '江西大区',
                        children: [
                            {
                                value: 150,
                                id: 'someid-31',
                                name: '南昌',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '九江',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '抚州',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '上饶',
                            }, {
                                value: 20,
                                id: 'someid-31',
                                name: '宜春',
                            },

                            // ...
                        ],

                    }, {
                        value: 300,
                        id: 'someid-2',
                        name: '福建大区',
                        children: [
                            {
                                value: 150,
                                id: 'someid-31',
                                name: '福州',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '泉州',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '厦门',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '漳州',
                            }, {
                                value: 20,
                                id: 'someid-31',
                                name: '莆田',
                            },

                            // ...
                        ],

                    }, {
                        value: 300,
                        id: 'someid-2',
                        name: '河南大区',
                        children: [
                            {
                                value: 150,
                                id: 'someid-31',
                                name: '郑州',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '开封',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '洛阳',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '平顶山',
                            }, {
                                value: 20,
                                id: 'someid-31',
                                name: '安阳',
                            },

                            // ...
                        ],

                    }, {
                        value: 150,
                        id: 'someid-2',
                        name: '河北大区',
                        children: [
                            {
                                value: 150,
                                id: 'someid-31',
                                name: '石家庄',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '张家口',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '唐山',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '秦皇岛',
                            }, {
                                value: 20,
                                id: 'someid-31',
                                name: '邯郸',
                            },

                            // ...
                        ],

                    }, {
                        value: 50,
                        id: 'someid-2',
                        name: '贵州大区',
                        children: [
                            {
                                value: 150,
                                id: 'someid-31',
                                name: '贵阳',
                            }, {
                                value: 200,
                                id: 'someid-32',
                                name: '兴义',
                            }, {
                                value: 90,
                                id: 'someid-33',
                                name: '六盘水',
                            }, {
                                value: 30,
                                id: 'someid-34',
                                name: '遵义',
                            }, {
                                value: 20,
                                id: 'someid-31',
                                name: '安顺',
                            },

                            // ...
                        ],

                    }
                    ]
                },
                // {
                //     value: [23, 59, 12]
                //     // 如果没有children，可以不写
                // },
                // ...
            ],
            leafDepth: 2,
            levels: [{
                itemStyle: {

                }
            }, {
                colorSaturation: [0.3, 0.6],
                itemStyle: {

                }
            }, {
                colorSaturation: [0.3, 0.5],
                itemStyle: {

                }
            }, {
                colorSaturation: [0.3, 0.5]
            }]
        }]
    })
    myChart.on('click', (e: any) => {
        stor.itemli = []
        stor.isOpen = false
        stor.onOpen = false
        if (e.data.children && e.data.name) {
            stor.item = e.data
        } else {
            stor.itemli.push(e.data)
        }

        if (e.data.children) {
            stor.isOpen = true
        } else {
            stor.onOpen = true
            stor.isOpen = false
        }

    })
}

</script>

<style  lang="less">
* {
    padding: 0;
    margin: 0;
   
}

html,
body,
#app {
    height: 100%;
    overflow: hidden;
}

.box {
    height: 100%;
    display: flex;


    .boxleft {
        width: 400px;
       .bing{
        margin-top: 100px;
       }
    }

    .boxcentet {
        flex: 1;

        .map {
            height: 100%;
        }

        .bing {
            height: 400px;
            width: 400px;
        }
    }

    .boxright {
        width: 400px;
      .box{
        width: 100%;
        height: 75px;
      }
    }
}
</style>
