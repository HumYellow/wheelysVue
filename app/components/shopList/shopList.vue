<template>
	<div id="storeBox">
		<ul v-if="!isNull" id="storeList" class="storeList" data-address="$!useraddress">
            <li v-for="storeList in shopList">
                <router-link :to="'/shopList/'+storeList.shopid">
                    <div class="storeLogo ui_media">
                        <span class="ui_pic">
                            <img width="100%" height="auto" :src="picPath+storeList.shopimg" />
                        </span>
                        <div class="ui_text">
                            <h3>{{storeList.name}}</h3>
                            <p class="distance">$!VmUtils.getDistance($!shop.distance)<i>km</i></p>
                            <div class="storeAge mt5">
                                <!-- <h4>Rating</h4> -->
                                <p class="markAge clear"><span class="ageNum left">店址 : {{storeList.address}}</span></p>
                            </div>
                        </div>
                    </div>
                    <span class="cityTag">{{storeList.citycode}}</span>
                </router-link>
            </li>
		</ul>
        <div class="close" v-if="isNull">
            <div class="c-img"><img :src="picPath+'wps/dummystatus/storeClose.png'"></div>
            <p class="k-p">我们已经打烊啦，明天见咯^-^</p>
        </div> 
	</div>
</template>
<script>
import Vue from 'vue'
export default {
	name:'storeBox',
    data () {
        return {
            shopList:[],
            map:[],
            isNull:false,
            picPath:global.picPath
        }
    },
    mounted(){
        var _that = this
        Vue.http.get(global.basePath+"queryList.html").then(
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
<style lang="sass">
.k-p{text-align:center;}
</style>