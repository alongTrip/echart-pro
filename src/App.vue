<template>
  <a-locale-provider :locale="locale">
      <div id="app">
        <router-view/>
      </div>
  </a-locale-provider>
</template>

<script>
import enquireScreen from './utils/device'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import ALocaleProvider from 'ant-design-vue/es/locale-provider'

export default {
  name: 'App',
  components: {
     ALocaleProvider,
  },
  created () {
    let _this = this
    enquireScreen(isMobile => {
      _this.$store.commit('setting/setDevice', isMobile)
    })
  },
  data() {
    return {
      locale: zhCN,
    }
  }
}
</script>

<style lang="less">
  :global{
    //拖拽控件全局样式
    .dragable-ghost{
      border: 1px dashed #aaaaaa;
      opacity: 0.65;
    }
    .dragable-chose{
      border: 1px dashed #aaaaaa;
      opacity: 0.65;
    }
    .dragable-drag{
      border: 1px dashed #aaaaaa;
      opacity: 0.65;
    }
    //页面切换动画
    .page-toggle-enter-active{
      transition: all 0.2s ease-in 0.25s;
    }
    .page-toggle-leave-active{
      transition: all 0.2s ease-out 0s;
    }
    .page-toggle-enter, .page-toggle-leave-to{
      opacity: 0;
      padding: 0px;
    }
  }
  h4{
    font-size:16px;
    font-weight:600;
  }
  .ant-card-body{
    padding: 42px 24px 8px;
    zoom:1;   
  }
  .title{
    font-weight:600 !important;
  }
  td,th{
    text-align:center !important;
  }
  .ant-table-thead > tr > th, .ant-table-tbody > tr > td {
    padding: 16px 16px;
  }
  .ant-table-pagination.ant-pagination {
    margin: 31px 0;
    display: flex;
    justify-content: center;
    float:none;
 }
 .table-icon{
   color:rgba(65, 167, 73, 0.65)
 }
</style>
