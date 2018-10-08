<template>
  <div>
    <a-row style="margin: 0 -12px">

    <!-- 结构一 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总收入(年)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="94" :scale="0" />
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总收入(年)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="94" :scale="0" />
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总收入(年)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="94" :scale="0" />
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总收入(年)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="94" :scale="0" />
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>

    <!-- 结构二左边 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding:12px 0;">
        <chart-card title="总收入(年)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="94" :scale="0" />
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding:12px 0;">
        <chart-card  title="运营活动效果" total="73%">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-bar />
          </div>
          <div slot="footer">年同比<span>30%</span></div>
        </chart-card>
      </a-col>

      <!-- 结构二右 -->
      <a-col :sm="24" :md="12" :xl="6" style="padding:12px 0 0 12px;">
        <chart-card title="总收入(年)" total="126,560">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="排名" :percent="22" :is-increase="true" :scale="0" />
            <trend term="涨跌" :target="100" :value="94" :scale="0" />
          </div>
          <div slot="footer">年同比<span> ￥12,423</span></div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding:12px 0;">
        <chart-card title="总销售额" total="￥ 189,345">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-area />
          </div>
          <div slot="footer">日访问量<span> 123,4</span></div>
        </chart-card>
      </a-col>
    </a-row>

    <!-- 结构三 -->
    <a-card :bordered="false" :body-style="{padding: '24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" tab="总收入" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="门店销售排行榜" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="净利润" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="门店销售排行榜" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
           <a-tab-pane tab="总资产" key="3">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="门店销售排行榜" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
           <a-tab-pane tab="净资本" key="4">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化"/>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="门店销售排行榜" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
  <!-- 结构四 -->
  <a-card :bordered="false" :body-style="{padding: '24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" tab="总收入" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar title="总收入变化" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list title="门店销售排行榜" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
  </div>
</template>

<script>
import ACol from 'ant-design-vue/es/grid/Col'
import ARow from 'ant-design-vue/es/grid/Row'
import ACard from 'ant-design-vue/es/card/Card'
import ChartCard from './ChartCard'
import ATooltip from 'ant-design-vue/es/tooltip/Tooltip'
import AIcon from 'ant-design-vue/es/icon/icon'
import MiniArea from '../chart/MiniArea'
import MiniBar from '../chart/MiniBar'
import MiniProgress from '../chart/MiniProgress'
import ATabs from 'ant-design-vue/es/tabs'
import ADatePicker from 'ant-design-vue/es/date-picker'
import Bar from '../chart/Bar'
import RankingList from '../chart/RankingList'
import HotSearch from '../analysis/HotSearch'
import SalesData from '../analysis/SalesData'
import Trend from '../chart/Trend'

const rankList = []

for (let i = 0; i < 8; i++) {
  rankList.push({
    name: '桃源村' + i + '号店',
    total: 1234.56 - i * 100
  })
}

const ATabPane = ATabs.TabPane
const ARangePicker = ADatePicker.RangePicker
export default {
  name: 'dashboard',
  data () {
    return {
      rankList
    }
  },
  components: {
    Trend,
    SalesData,
    HotSearch,
    RankingList,
    Bar,
    ARangePicker,
    ATabPane,
    ATabs,
    MiniProgress,
    MiniBar,
    MiniArea,
    AIcon,
    ATooltip,
    ChartCard,
    ACard,
    ARow,
    ACol}
}
</script>
<style lang="less" scoped>
  .extra-wrap{

  }
  .extra-item{
    display: inline-block;
    margin-right: 24px;
    a{
      margin-left: 24px;
    }
  }
  .footer{
    margin-top:20px;
  }
</style>
