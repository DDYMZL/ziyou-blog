**问题：** Component emitted event "update:visible" but it is neither declared in the emits option nor as an "onUpdate:visible" prop.
**代码：**

```js
// 父组件
<DialogUpdate
  v-if="dialogUpdate"
  :visible.sync="dialogUpdate"
  :row-data="rowData"
  @refresh="handleGetData"
/>
// 子组件
const $_visible = computed({
  get() {
    return props.visible;
  },
  set(val) {
    emits('update:visible', val);
  },
});
```

**修复：** [参考](https://www.jb51.net/article/223761.htm) 搜索关键字：vue3 sync

```js
// 父组件
<DialogUpdate
  v-if="dialogUpdate"
  v-model:visible="dialogUpdate"
  :row-data="rowData"
  @refresh="handleGetData"
/>
```

**问题：** Component emitted event "refresh" but it is neither declared in the emits option nor as an "onRefresh" prop.
**代码：**

```js
const emits = defineEmits("refresh");
```

**修复：**

```js
const emits = defineEmits(['refresh']);
/>
```

**问题：** 命名问题重叠问题。
**代码：**

```js
const { total } = await postDataTypePage;
total.value = total;
```

**修复：**

```js
const { total:totalCount } = await postDataTypePage
total.value = totalCount
/>
```

**问题：** 由 setup 语法糖导致组件私有属性无法访问
**代码：**

```vue
<script setup>
const str = ref('123')
const handleDel = () => { ... }
</script>
```

**修复：**

```vue
<script setup>
const str = ref('123')
const handleDel = () => { ... }
defineExpose({(str, handleDel)})
</script>
```

**问题：** vuedraggable.js Cannot read properties of undefined (reading 'header')

**修复：**

```js
// 升级最新版
npm install -S vuedraggable@next
```

[vuedraggable 写法需要升级](https://github.com/SortableJS/vue.draggable.next#:~:text=Migrate%20from%20vue%202%20version)

**问题：** [@vue/compiler-sfc] ::v-deep usage as a combinator has been deprecated. Use :deep(<inner-selector>) instead.
**代码：**

```js
<style scoped lang="scss">
  .preview-item ::v-deep .el-form-item{}
</style>
```

**修复：**

```js
<style scoped lang="scss">
  .preview-item :deep(.el-form-item){}
</style>
```
