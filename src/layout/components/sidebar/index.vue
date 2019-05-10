<template>
    <div>
        <ul>
            <my-tree v-for="(menuItem,index) in theModel" :key="index" :model="menuItem"></my-tree>
        </ul>
        <div class="box">
            <div v-for="(item,index) in arr" :key="index" @click="toggle">
                <p v-show="isShow">{{item}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import MyTree from "./sidebarItem.vue";
export default {
    name: "layout",
    components: { MyTree },
    data() {
        return {
            isShow:true,
            arr: [1, 2, 3, 4],
            theModel: [
                {
                    id: "1",
                    menuName: "基础管理",
                    menuCode: "10",
                    children: [
                        {
                            menuName: "用户管理",
                            menuCode: "11"
                        },
                        {
                            menuName: "角色管理",
                            menuCode: "12",
                            children: [
                                {
                                    menuName: "管理员",
                                    menuCode: "121"
                                },
                                {
                                    menuName: "CEO",
                                    menuCode: "122"
                                },
                                {
                                    menuName: "CFO",
                                    menuCode: "123"
                                },
                                {
                                    menuName: "COO",
                                    menuCode: "124"
                                },
                                {
                                    menuName: "普通人",
                                    menuCode: "124"
                                }
                            ]
                        },
                        {
                            menuName: "权限管理",
                            menuCode: "13"
                        }
                    ]
                },
                {
                    id: "2",
                    menuName: "商品管理",
                    menuCode: ""
                },
                {
                    id: "3",
                    menuName: "订单管理",
                    menuCode: "30",
                    children: [
                        {
                            menuName: "订单列表",
                            menuCode: "31"
                        },
                        {
                            menuName: "退货列表",
                            menuCode: "32",
                            children: []
                        }
                    ]
                },
                {
                    id: "4",
                    menuName: "商家管理",
                    menuCode: "",
                    children: []
                }
            ]
        };
    },
    methods:{
        toggle(){
            this.isShow = !this.isShow;
        }
    }
};
</script>
<style lang="scss" scoped>
.box {
    background: red;
}
</style>

