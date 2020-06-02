## normal flow

- inline-level-box
  - 参与 IFC 水平方向一个接着一个布局
- block-level-box
  - 参与 BFC，垂直方向一个接着一个布局，规定了元素纵向排列的规则，是一个隔离容器
- relative-position

## BFC 特点

- margin 折叠 margin：留白，认为只要留白够了
- BFC 里面每个元素的左边，紧紧贴着**包含块**的左边
- 盒子可能会缩小，因为有了 float(不占据位置)，除非这个盒子新建了一个 BFC清除浮动，假设不清除浮动，浮动不占据normal flow，必然会对外面的元素有影响
  ```html
  main 新的BFC，它和其它区域互不影响 float区域和bfc 不会发生重叠
  <div class="main">
    <div>
      main main
    </div>
  </div>
  ```

## BFC 的建立
1. float 的值不为 none
2. overflow 的值不为 visible
3. display 的值为 inline-block、table-cell、table-caption
4. position 的值为 absolute 或 fixed
