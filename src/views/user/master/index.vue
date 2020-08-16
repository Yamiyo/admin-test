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
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="等級" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.level }}</span>
        </template>
      </el-table-column>
      <el-table-column label="備註" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.remark }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="狀態" width="100" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.status === 0">
            <el-tag :type="scope.row.status | statusFilter">待命中</el-tag>
          </div>
          <div v-if="scope.row.status === 1">
            <el-tag :type="scope.row.status | statusFilter">工作中</el-tag>
          </div>
          <div v-if="scope.row.status === -99">
            <el-tag :type="scope.row.status | statusFilter">已離職</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="到職日期" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="結束時間" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.resign_time }}</span>
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
import { getMasterList } from '@/api/master'

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
      getMasterList().then(response => {
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
