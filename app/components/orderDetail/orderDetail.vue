<template>
	<div class="orderDetail">
        <div class="orderDetailBody">
           <ul>
	             <li class="ui_flex">
	               <div class="liMod">
	                  <p>$detail.productname $!detail.description</p>
	                  <P>$detail.productename</P>
	               </div>
						<div class="liMod">X$detail.discountnum</div>
					
					#if($discount.type eq 'ONEBUYONE' && $detail.discountnum > 0)
					<div class="liMod">￥$VmUtils.getAmount($detail.paidfee)</div>
					#else
						#if($detail.productid eq 1031)
	              		<div class="liMod o-red">赠送</div>
						#else
						<div class="liMod">￥$VmUtils.getAmount($detail.totalfee)</div>
						#end
					#end
	             </li>
				<!-- #if($discount.type eq 'ONEBUYONE' && $detail.discountnum > 0)
				<li class="ui_flex">
	               <div class="liMod">
	                  <p>$detail.productname $!detail.description</p>
	                  <P>$detail.productename</P>
	               </div>
					<div class="liMod">X$detail.discountnum</div>
	             	<div class="liMod o-red">赠送</div>
	             </li>
				#end -->
           </ul>
			<!-- #if($orderVo.discount gt 0 && $discount.type ne 'ONEBUYONE')
           <div class="discount clear">
				<div class="left">$!orderVo.disreason</div>
				<div class="right" style="font-size:1rem; ">-￥$VmUtils.getAmount($orderVo.discount)</div>
			</div>
			#end -->
			<div style="border:none;" class="discount clear">
				<div class="right" style="font-size:1.14rem;">实付￥$VmUtils.getAmount($orderVo.payfee)</div>
			</div>
        </div>
		<div class="otherDetail">
			<h2>其他信息</h2>
			<ul>
				<li><span>取杯口令：</span><span>"$!orderVo.takekey"</span></li>
				#if($orderVo.remark)<li><span>备注：</span><span>$!orderVo.remark</span></li>#end
				#if($!orderVo.category eq 'TAKE')
				<li><span>配送方式：</span><span>当日自取</span></li>
				<li><span>店铺地址：</span><span>$orderVo.shop.shopaddress</span></li>
				#elseif($!orderVo.category eq 'RESERVED')
				<li><span>配送方式：</span><span>预约自取</span></li>
				<li><span>取杯时间：</span><span>$DateUtil.formatTimestamp($!orderVo.taketime)</span></li>
				<li><span>店铺地址：</span><span>$orderVo.shop.shopaddress</span></li>
				#elseif($!orderVo.category eq 'TAKEAWAY')
				<li><span>配送方式：</span><span>配送上门</span></li>
				<li><span>收货地址：</span><span>$memberAddress.address &nbsp; $memberAddress.detailaddress</span></li>
				<li><span>配送员电话：</span><a class="tel" href="tel:${shopProfile.mobile}" style="color:#e61111">${shopProfile.mobile}(点击可拨打)</a></li>
				#end
				<li><span>订单编号：</span><span>$orderVo.tradeno</span></li>
				#if($orderVo.getRefundStatus())
				<li><span>退款信息：</span><span>$orderVo.getRefundStatus()</span></li>
				#end
			</ul>
		</div>
		<div class="clear" style="padding:30px 0;">
			#if($!orderVo.shopid eq 59)
			<a class="close" style="background:#e61111 url(${picPath}wps/activity2017/valentine/flower.png) 15px 8px no-repeat; background-size:auto 50%; text-indent:20px;float:left; margin-left:20px;" href="${basePath}valentine/order.xhtml?tradeno=$orderVo.tradeno&isedit=Y">"分享传情"</a>
			#end
			<a class="close" href="${basePath}shop/shopDetail.xhtml?shopid=$orderVo.shopid">再来一单</a>
		</div>
   </div>
</template>
<script>
import Vue from 'vue'
export default {
	name:'orderDetail',
    data () {
        return {
            orderDetail:[],
            map:[],
            isNull:false,
            picPath:global.picPath
        }
    },
    mounted(){
        var _that = this
        Vue.http.get(global.basePath+"ajax/shop/queryList.xhtml").then(
            function (res) {
                // 处理成功的结果
                _that.shopList = res.body.data.shopList;
                _that.map = res.body.data.citymap
                if(_that.shopList.length == 0){
                	_that.isNull=true
                }
            },function (res) {
            // 处理失败的结果
            }
        )
    }
}
</script>