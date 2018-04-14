<template>
  <div id="Goods">
      <el-row>
          <el-col :span="7" class="order-col">
              <h4>订单栏</h4> 
              <el-table :data="tableData">
                  <el-table-column prop="goodsName" label="名称">

                  </el-table-column>

                  <el-table-column prop="count" label="数量">

                  </el-table-column>

                  <el-table-column prop="price" label="价格">

                  </el-table-column>

                  <el-table-column label="操作" fixd="right">
                      <template  slot-scope="scope">
                          <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                          <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                      </template>
                  </el-table-column>
            </el-table>
            <el-row :gutter="20" class="total-row">
				<el-col :span="10">总数量：{{totalCount}}</el-col>
				<el-col :span="10">总金额：{{totalMoney}} 元</el-col>
			</el-row>
            <el-row class="btnFUN">
              <el-button type="warning" >挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </el-row>

          </el-col>
          <el-col :span="17" class="product-col">
              <h4>产品栏</h4>
              <div class="offen-goods">
				  <div class="offen-goods-list">
					  <ul>
						  <li v-for="(goods,index) in oftenGoods" :key="index" @click="addOrderList(goods)">
							  <span>{{goods.goodsName}}</span>
							  <span>￥{{goods.price}}元</span>
						  </li>
					  </ul>
				  </div>
			  </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Goods",
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      totalMoney: 0,
      totalCount: 0
    };
  },
  created() {
    axios.get("http://jspang.com/DemoApi/oftenGoods.php").then(response => {
      //   console.log(response.data);
      this.oftenGoods = response.data;
    });
  },
  methods: {
    addOrderList(goods) {
      // console.log(goods);
      this.totalMoney = 0; //汇总数清零
      this.totalCount = 0;
      let isHave = false;

      //   判断商品是否存在列表中
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true;
        }
      }
      //根据isHave判断订单中是否存在，存在count++，不存在push

      if (isHave) {
        //存在进行count++  filter,检测仅能存在一个相同id
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
        // console.log(arr);
      } else {
        //不存在就push进数组
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }

      this.dealTotal(goods);
    },
    delSingleGoods(goods) {
      //删除单品
      this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId);
      this.dealTotal(goods);
    },

    //进行数量和价格的汇总计算
    dealTotal(goods) {
      this.totalMoney = 0; //汇总数清零
      this.totalCount = 0;

      if (this.tableData) {
        this.tableData.forEach(element => {
          this.totalCount += element.count;
          this.totalMoney += element.price * element.count;
        });
      }
    },
    checkout(msg) {
      //结账
      if (this.totalCount !== 0) {
        this.totalCount = 0;
        this.totalMoney = 0;
        this.tableData = [];

        //tital
        this.$message({
          message: "结账成功！"
        });
      } else {
        this.$message.error("当前账单为空！");
      }
    }
  }
};
</script>

<style>
h4 {
  border-bottom: 1px solid #cccccc;
  margin-right: 10px;
}

h4:first-child {
  margin-bottom: 0;
}

.btnFUN {
  display: flex;
  justify-content: space-around;
  /* position: fixed;
  bottom:0; */
  width: 100%;
  margin-top: 10px;
}
ul > li {
  list-style: none;
}
.offen-goods-list {
  width: 100%;
}

.offen-goods-list > ul li {
  border-radius: 10px;
  border: 1px solid #aabbcc;
  margin: 10px;
  padding: 10px;
  display: inline-flex;
}
.offen-goods-list > ul li span:last-child {
  color: red;
}
.total-row {
  text-align: center;
  padding: 40px;
}
</style>
