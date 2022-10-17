# 前端开发规范

## Vue 规范

- :hand: **尽量不要使用 watch 监听，如果是必须情况，也不要监听整个对象**

::: danger BAD

```js
watch: {
  allData: {
    handler() {
      ...
    },
    deep: true,
  },
}
```

:::

::: tip GOOD

```js
watch: {
  'allData.xx': function () {
    ...
  },
},
```

:::

- :no_entry: **不要使用单个单词作为组件名，因为这可能和未来的 HTML 标签发生冲突；自定义组件请用大驼峰形式命名，区别于 UI 库**

::: danger BAD

```html
<!-- 自定义组件 -->
<item />
<!-- 自定义组件 -->
<list-item />
```

:::

::: tip GOOD

```html
<!-- 大驼峰形式 -->
<ListItem />
<!-- 大驼峰形式 -->
<TodoItem />

<!-- 区别于element -->
<el-form></el-form>
```

:::

- :point_right: **在组件接收的属性中，属性定义应该尽可能详细，至少指定类型**

::: danger BAD

```js
props: ["status"];
```

:::

::: tip GOOD

```js
props: {
  status: {
    type: String;
  }
}
```

:::
::: tip EVEN BETTER :100:

```js
props: {
  status: {
    type: String,
    required: true,

    validator: value => {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].includes(value)
    }
  }
}
```

:::

- :hand: **[永远不要使用`v-if`和`v-for`在同一标签上](https://cn.vuejs.org/guide/essentials/list.html#v-for-with-a-range)**

::: danger BAD

```js
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

```

:::

::: tip GOOD

```js
<ul>
  <template v-for="user in users" :key="user.id">
    <li v-if="user.isActive">
      {{ user.name }}
    </li>
  </template>
</ul>
```

:::

## JS 规范

- :point_right: **使用 `async await` 语法糖进行异步转同步任务，减少代码量**

::: danger BAD

```js
intData() {
  getDetail({
    dictCode: 'FIRE_PLUG_STATUS ',
  }).then(res => {
    const data = res.data;
  })
}
```

:::

::: tip GOOD

```js
async intData() {
  const { data } = await getDetail({
    dictCode: 'FIRE_PLUG_STATUS ',
  })
}
```

:::

- :point_right: **合理使用 JS 数组 API**

::: danger BAD

```js
data.map((item) => {
  if (item.id) {
    ...
  } else {
    ...
  }
  return item;
});
```

:::

::: tip GOOD

```js
data.forEach((item) => {
  if (item.id) {
    ...
  } else {
    ...
  }
});
```

:::

- :point_right: **能使用 ES6 语法的地方，尽量使用 ES6 语法**

::: danger BAD

```js
arr.forEach((item) => {
  if (item.id) {
    this.form.name = item.name;
    this.form.age = item.age;
    this.form.address = item.address;
  }
});
```

:::

::: tip GOOD

```js
arr.forEach((item) => {
  const { id, name, age, address } = item;
  if (id) Object.assign(this.form, { name, age, address });
});
```

:::
