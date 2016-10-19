
function pagingHelper(options) {
  var options = options || {};
  var total = options.total || this.page.total || 1;
  var current = options.current || this.page.current || 0;
  var base = options.base || this.page.base || '';
  var format = options.format || this.config.pagination_dir + '/%d/';
  var self = this;

  function link(i) {
    return self.url_for(i === 1 ? base : base + format.replace('%d', i));
  }

  if(current < total)
    return '<a href="' + link(current + 1) + '"><i class="iconfont icon-next"></i></a></div>';
}

hexo.extend.helper.register('paging', pagingHelper);
