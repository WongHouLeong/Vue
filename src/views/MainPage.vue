<template>
    <el-button type="primary" @click="HttpGet">HttpGet</el-button>
    <el-button type="primary" @click="HttpPost">HttpPost</el-button>
</template>

<script>
import { HttpGetDemo } from '@/api.js';
import { HttpPostDemo } from '@/api.js';
export default {
    methods: {
        async HttpGet() {
            try {
                const response = await HttpGetDemo('11');
                if (response.data.code === 0) {
                    this.$notify({ title: 'Notification', message: response.data.message, type: 'success' })
                } else {
                    this.$message.error(response.data.message);
                }
            } catch (error) {
                console.error(error);
                if (error.response && error.response.status !== 401) {
                    this.$message.error('请求失败，请稍后重试');
                }
            }
        },
        async HttpPost() {
            try {
                const response = await HttpPostDemo();
                if (response.data.code === 0) {
                    this.$notify({ title: 'Notification', message: response.data.message, type: 'success' })
                } else {
                    this.$message.error(response.data.message);
                }
            } catch (error) {
                console.error(error);
                if (error.response && error.response.status !== 401) {
                    this.$message.error('请求失败，请稍后重试');
                }
            }
        }
    }
};
</script>