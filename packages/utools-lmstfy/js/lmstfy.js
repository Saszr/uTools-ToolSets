const lmstfy = (params) => {
  const { url, searchValue } = params;

  const targetValue = encodeURIComponent(searchValue);
  const targetUrl = url + targetValue;

  window.utools.copyText(targetUrl);
  window.utools.showNotification('生成链接已复制到剪贴板');
};

module.exports = {
  lmstfy,
};
