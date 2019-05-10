<template>
  <li>
    <span @click="toggle">
      <!-- <i v-if="hasChild" class="icon" v-bind:class="[open ? 'folder-open': 'folder' ]"></i>
      <i v-if="!hasChild" class="icon file-text"></i> -->
      {{model.menuName}}
    </span>
    <ul v-show="open" class="kk" v-if="hasChild">
      <tree-menu v-for="(item,index) in model.children"  v-bind:model="item" v-bind:key="index"></tree-menu>
    </ul>

  </li>
</template>

<script>
  export default {
    name: "treeMenu",
    props: ['model'],
    data(){
      return {
        open:false
      }
    },
    computed:{
      hasChild(){
        return this.model.children && this.model.children.length
      }
    },
    methods:{
      toggle(){
        if(this.hasChild){
          this.open = !this.open
        }
      }
    }
  }
</script>
