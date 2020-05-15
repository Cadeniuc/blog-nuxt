<template>
  <el-menu :style="{height: '100%'}" :default-active="$route.path" router>
    <el-menu-item index="/admin">
      <i class="el-icon-s-marketing"></i>
      <span>Analytics</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-circle-plus"></i>
      <span>Add post</span>
    </el-menu-item>
    <el-menu-item index="/admin/posts">
      <i class="el-icon-s-opportunity"></i>
      <span>Posts</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user"></i>
      <span>Users</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-remove"></i>
      <span>Logout</span>
    </el-menu-item>
  </el-menu>
</template>
