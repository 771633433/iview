<template>
	<div class="page">
		<Table :columns="historyColumns" :data="historyData"></Table>
		<Page :total="dataCount" :page-size="pageSize" show-total @on-change="change">
		</Page>	
	</div>
</template>


<script>
	 let testData = {
        "histories": [
            {
                "username": "Joe",
                "shenpistatus": "resolve",
                "shenpicomments": "resolve",
                "time": "2017-07-24 18:11"
            },
            {
                "username": "Adams",
                "shenpistatus": "resolve",
                "shenpicomments": "resolve",
                "time": "2017-07-24 18:11"
            },
            {
                "username": "Gabe",
                "shenpistatus": "resolve",
                "shenpicomments": "resolve",
                "time": "2017-07-24 10:04"
            },
            {
                "username": "Bill",
                "shenpistatus": "reject",
                "shenpicomments": "inability",
                "time": "2017-07-24 10:03"
            },
            {
                "username": "Simon",
                "shenpistatus": "reject",
                "shenpicomments": " inability ",
                "time": "2017-07-24 10:02"
            },
            {
                "username": "Young",
                "shenpistatus": "resolve",
                "shenpicomments": "pendding",
                "time": "2017-07-24 10:02"
            },
            {
                "username": "Leo",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-24 10:01"
            },
            {
                "username": "Jane",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-24 09:56"
            },
            {
                "username": "Smith",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "Caseo",
                "shenpistatus": "reject",
                "shenpicomments": " inability",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "King",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "Clinclz",
                "shenpistatus": "reject",
                "shenpicomments": "inability",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "Sniper",
                "shenpistatus": "reject",
                "shenpicomments": "inability",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "Mick",
                "shenpistatus": "reject",
                "shenpicomments": "inability",
                "time": "2017-07-21 14:21"
            },
            {
                "username": "Fisher",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-21 14:21"
            },
            {
                "username": "Paul",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-21 14:20"
            },
            {
                "username": "Allen",
                "shenpistatus": "reject",
                "shenpicomments": " reject",
                "time": "2017-07-21 14:20"
            },
            {
                "username": "Pierce",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-21 14:14"
            },
            {
                "username": "Parker",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-21 14:13"
            },
            {
                "username": "Kardashian",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-21 14:11"
            },
            {
                "username": "Thompson",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-21 14:10"
            },
            {
                "username": "West",
                "shenpistatus": "reject",
                "shenpicomments": "inability",
                "time": "2017-07-20 18:09"
            },
            {
                "username": "Howard",
                "shenpistatus": "reject",
                "shenpicomments": "inability",
                "time": "2017-07-20 18:08"
            },
            {
                "username": "Jordan",
                "shenpistatus": "reject",
                "shenpicomments": "inability",
                "time": "2017-07-20 18:08"
            },
            {
                "username": "Deng",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-20 18:07"
            },
            {
                "username": "Nick",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-20 18:05"
            },
            {
                "username": "Curry",
                "shenpistatus": "reject",
                "shenpicomments": "inability",
                "time": "2017-07-20 15:50"
            },
            {
                "username": "Leonard",
                "shenpistatus": "resolve",
                "shenpicomments": "inability",
                "time": "2017-07-20 15:20"
            },
            {
                "username": "Duncan",
                "shenpistatus": "reject",
                "shenpicomments": "pendding",
                "time": "2017-07-19 18:27"
            }
        ]
    }
    export default {
        data () {
            return {
                ajaxHistoryData:[],
                // 初始化信息总条数
                dataCount:0,
                // 每页显示多少条
                pageSize:10,
                historyColumns: [
                    {
                        title: 'name',
                        key: 'username'
                    },
                    {
                        title: 'result',
                        key: 'shenpistatus'
                    },
                    {
                        title: 'comments',
                        key: 'shenpicomments'
                    },
                    {
                        title: 'time',
                        key: 'time'
                    }

                ],
                historyData: []
            }
        },
        methods:{
            // 获取历史记录信息
            handleListApproveHistory(){
                
                // 保存取到的所有数据
                this.ajaxHistoryData = testData.histories
                this.dataCount = testData.histories.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if(testData.histories.length < this.pageSize){
                    this.historyData = this.ajaxHistoryData;
                }else{
                    this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                }
                    
               
            },
            change(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
            }
        },
        created(){
             this.handleListApproveHistory();
        }
    }
</script>

<style scoped>

</style>

