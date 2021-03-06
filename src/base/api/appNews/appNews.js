export const formModel = [
	{
		prop:'state',
		label:'发布状态',
		elemType:'select',
		col:'label',
		colVal:'value',
		defaultValue:0,
		options:[
			{
				label:'全部',
				value:0
			},{
				label:'已发布',
				value:1
			},{
				label:'未发布',
				value:2
			}
		]
	},
	{
		prop:'pulishDate',
		label:'发布日期',
		width:290,
		elemType:'datetimerange'
	},{
		prop:'newsType',
		label:'公告分类',
		elemType:'select',
		col:'label',
		colVal:'value',
		defaultValue:0,
		options:[
			{
				label:'平台咨询',
				value:0
			},{
				label:'系统通知',
				value:1
			}
		]
	}
]


export const tableModel = [
	{
		type:'selection',
		width:50
	},{
		type:'index',
		width:50
	},{
		prop:'title',
		label:'标题内容'
	},{
		prop:'type',
		label:'分类',
		width:100
	},{
		prop:'state',
		label:'状态',
		width:100
	},{
		prop:'updateTime',
		label:'操作时间',
		width:180
	}
	
]

export const tableData = [
	{
		id:'appNews1',
		title:'广仁考场近期维修，暂不提供预约，预计2017-12-20号恢复',
		type:'考场公告',
		state:'已发布',
		updateTime:'2017-12-11   10:05:22'
	}
]
