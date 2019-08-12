import Mock from 'mockjs'

const foodList=[
    {
        "img":require("../imgs/1.jpg"),
        "txt":"田师傅红烧肉",
        "pic":20,
        "id":0
    },
    {
        "img":require("../imgs/2.jpg"),
        "txt":"庆丰包子铺",
        "pic":9.8,
        "id":1
    },
    {
        "img":require("../imgs/1.jpg"),
        "txt":"四有青年米粉店",
        "pic":16,
        "id":2
    },
    {
        "img":require("../imgs/2.jpg"),
        "txt":"护国寺小吃",
        "pic":23,
        "id":3
    },
    {
        "img":require("../imgs/1.jpg"),
        "txt":"旺仔小馒头",
        "pic":10,
        "id":4
    },
    {
        "img":require("../imgs/2.jpg"),
        "txt":"草莓奶昔",
        "pic":20,
        "id":5
    }
]

Mock.mock("/api/getList",({body})=>{
    const {page}=JSON.parse(body)
    if(page<3){

        return foodList
    }

    return []
})