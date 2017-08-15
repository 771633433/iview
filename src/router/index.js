import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 下面是引入vue组件
import Grid from '@/components/Grid'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Radio from '@/components/Radio'
import Switch from '@/components/Switch'
import Table from '@/components/Table'
import Select from '@/components/Select'
import Slider from '@/components/Slider'
import DatePicker from '@/components/DatePicker'
import TimePicker from '@/components/TimePicker'
import Cascader from '@/components/Cascader'
import Rate from '@/components/Rate'
import Form from '@/components/Form'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Collapse from '@/components/Collapse'
import Timeline from '@/components/Timeline'
import Tooltip from '@/components/Tooltip'
import Carousel from '@/components/Carousel'
import Tree from '@/components/Tree'
import Tab from '@/components/Tab'
import Dropdown from '@/components/Dropdown'

Vue.use(iView)
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/Grid',
      component: Grid
    },
     {
      path: '/Grid',
      component: Grid
    },
    {
      path: '/Layout',
      component: Layout
    },
    {
      path: '/Button',
      component: Button
    },
    {
      path: '/Icon',
      component: Icon
    },
    {
      path: '/Radio',
      component: Radio
    },
    {
      path: '/Switch',
      component: Switch
    },
    {
      path: '/Table',
      component: Table
    },
    {
      path: '/Select',
      component: Select
    },
    {
      path: '/Slider',
      component: Slider
    },
    {
      path: '/DatePicker',
      component: DatePicker
    },
    {
      path: '/TimePicker',
      component: TimePicker
    },
    {
      path: '/Cascader',
      component: Cascader
    },
    {
      path: '/Rate',
      component: Rate
    },
    {
      path: '/Form',
      component: Form
    },
    {
      path: '/Card',
      component: Card
    },
    {
      path: '/Badge',
      component: Badge
    },
    {
      path: '/Collapse',
      component: Collapse
    },
    {
      path: '/Timeline',
      component: Timeline
    },
    {
      path: '/Tooltip',
      component: Tooltip
    },
    {
      path: '/Carousel',
      component: Carousel
    },
    {
      path: '/Tree',
      component: Tree
    },
    {
      path: '/Tab',
      component: Tab
    },
    {
      path: '/Dropdown',
      component: Dropdown
    }
  ]
})
