window.onload = function (){
	window.VM = {
		api:{},
		data:{
			shoplist:[
				{
					title:'馆藏精品',
					shopDetail:[
						{
							number:19999,
							imgurl:'',
							name:'[陆金禧]',
							describe:'中束口曜变',
							size:'8.8✖️5.6'
						},
						{
							number:19999,
							imgurl:'',
							name:'[陆金禧]',
							describe:'中束口曜变',
							size:'8.8✖️5.6'
						},
						{
							number:19999,
							imgurl:'',
							name:'[陆金禧]',
							describe:'中束口曜变',
							size:'8.8✖️5.6'
						},{
							number:19999,
							imgurl:'',
							name:'[陆金禧]',
							describe:'中束口曜变',
							size:'8.8✖️5.6'
						},
						{
							number:19999,
							imgurl:'',
							name:'[陆金禧]',
							describe:'中束口曜变',
							size:'8.8✖️5.6'
						},
						{
							number:19999,
							imgurl:'',
							name:'[陆金禧]',
							describe:'中束口曜变',
							size:'8.8✖️5.6'
						},
						{
							number:19999,
							imgurl:'',
							name:'[陆金禧]',
							describe:'中束口曜变',
							size:'8.8✖️5.6'
						},
						{
							number:19999,
							imgurl:'',
							name:'[陆金禧]',
							describe:'中束口曜变',
							size:'8.8✖️5.6'
						},{
							number:19999,
							imgurl:'',
							name:'[陆金禧]',
							describe:'中束口曜变',
							size:'8.8✖️5.6'
						}
					]
				}
			],
			tabindex:0
		},
		init:function (){
			this.events.htmlView(this) ;
		},
		events:{
			htmlView:function (_self){
				var h = '';
				$.each(_self.data.shoplist,function (index,item){
					h += '<div class="'+(index%2!=0?'bgc_cc':'bgc_ff')+'">'
					h += '<div class="planbody-shop">'+
			'				<div class="shop-title">'+
			'					<span class="'+(index%2!=0?'bgc_cc':'bgc_ff')+'">'+item.title+'</span>'+
			'				</div>';
					h += 	'<div class="shop-describe flex_around">';
					$.each(item.shopDetail,function (i,v){
						// console.log(v)
						h += '<div class="show-view shop-view-state-b">'+
			'						<p>'+v.number+'</p>'+
			'						<p><img src='+""+v.imgurl+""+'></p>'+
			'						<p>'+v.name+'</p>'+
			'						<p>'+v.describe+'</p>'+
			'						<p>尺寸：'+v.size+'</p>'+
			'						<p>'+
			'							<span></span>'+
			'							<button class="shop-query">立即询价</button>'+
			'						</p>'+
			'					</div>';
					})
					h +='</div>';
					h += '<div class="shop-controll">'+
			'					<button class="load-surplus">再显示3款新品<i class="iconfont icon-xiala1"></i></button>'+
			'				</div>';
					h += '</div>';
					h += '</div>';

				});
				$('#planbody-shop-box').html(h) ;
				$('.load-surplus').click(function (){
					// console.log($(this).parent().parent().children().eq(1))
					$(this).parent().parent().children().eq(1).height('auto') ;
					$(this).html('查看更多产品') ;
				})
			}
		}
	}
	VM.init();
}
