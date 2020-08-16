<template>
  <div class="app-container">
    <el-row type="flex" class="row-bg" justify="end">
      <el-button type="primary" justify="end" @click="handleAddPerformance">新增訂單</el-button>
    </el-row>

    <el-divider>
    </el-divider>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      :gutter="10"
    >
      <el-table-column label="按摩師傅" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.master }}</span>
        </template>
      </el-table-column>
      <el-table-column label="客人" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.member }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品項目" width="550" align="center">
        <template slot-scope="scope">
          <ul v-for="item in scope.row.items" :key="item">
            【{{ item.item }}】: {{ item.num }} 單
          </ul>
        </template>
      </el-table-column>
      <el-table-column label="金額" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.amount }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="狀態" width="100" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status === 0 ? '進行中':'已完成' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="開始時間" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.start_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="結束時間" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.end_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作">
        <div style="text-align:center;">
          <el-button type="danger" @click="dialogVisible=false">調整</el-button>
          <el-button type="primary" @click="confirmRole">完成</el-button>
        </div>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'修改訂單':'新增訂單'">
      <el-form :model="performance" label-width="80px" label-position="left">
        <el-form-item label="master">
          <el-input v-model="performance.master" placeholder="按摩師傅" />
        </el-form-item>
        <el-form-item label="member">
          <el-input v-model="performance.member" placeholder="客戶名稱" />
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">Cancel</el-button>
        <el-button type="primary" @click="confirmRole">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getPerformanceData } from '@/api/performance'

const defaultPerformance = {
  master: '',
  member: '',
  items: {},
  amount: 0
}

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'danger',
        1: 'success'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      performance: Object.assign({}, defaultPerformance),
      list: null,
      listLoading: true,
      dialogVisible: false,
      dialogType: 'new'
    }
  },
  statusMap(status) {
    const statusMap = {
      0: '進行中',
      1: '已結帳'
    }
    return statusMap[status]
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getPerformanceData().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },

    handleAddPerformance() {
      this.performance = Object.assign({}, defaultPerformance)
      this.dialogType = 'new'
      this.dialogVisible = true
    }
  }
}
</script>
